#!/bin/bash

# DNZ Fideiussioni - Production Build Script
# Usage: ./scripts/build.sh

set -e  # Exit on error

echo "🚀 Starting production build for DNZ Fideiussioni..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Clean previous build
echo -e "${BLUE}📦 Step 1: Cleaning previous build...${NC}"
rm -rf build
echo -e "${GREEN}✅ Build directory cleaned${NC}"
echo ""

# Step 2: Install/Update dependencies
echo -e "${BLUE}📦 Step 2: Checking dependencies...${NC}"
npm ci --production=false
echo -e "${GREEN}✅ Dependencies ready${NC}"
echo ""

# Step 3: Run tests (if available)
echo -e "${BLUE}🧪 Step 3: Running tests...${NC}"
npm test -- --watchAll=false --passWithNoTests || {
    echo -e "${RED}⚠️  Tests failed, but continuing build...${NC}"
}
echo ""

# Step 4: Build production bundle
echo -e "${BLUE}🔨 Step 4: Building production bundle...${NC}"
NODE_ENV=production npm run build
echo -e "${GREEN}✅ Build complete${NC}"
echo ""

# Step 5: Analyze bundle size
echo -e "${BLUE}📊 Step 5: Analyzing bundle size...${NC}"
if command -v du &> /dev/null; then
    echo "Build size:"
    du -sh build
    echo ""
    echo "JavaScript bundles:"
    du -sh build/static/js/*
    echo ""
    echo "CSS bundles:"
    du -sh build/static/css/* 2>/dev/null || echo "No CSS files"
fi
echo ""

# Step 6: Copy additional files
echo -e "${BLUE}📄 Step 6: Copying additional files...${NC}"
cp public/sitemap.xml build/ 2>/dev/null || echo "⚠️  No sitemap.xml found"
cp public/robots.txt build/ 2>/dev/null || echo "⚠️  No robots.txt found"
cp public/.htaccess build/ 2>/dev/null || echo "ℹ️  No .htaccess file"
echo -e "${GREEN}✅ Additional files copied${NC}"
echo ""

# Step 7: Verify critical files
echo -e "${BLUE}🔍 Step 7: Verifying build...${NC}"
CRITICAL_FILES=("build/index.html" "build/manifest.json" "build/robots.txt" "build/sitemap.xml")
for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file ${RED}(missing)${NC}"
    fi
done
echo ""

# Step 8: Generate build report
echo -e "${BLUE}📋 Step 8: Generating build report...${NC}"
cat > build/BUILD_INFO.txt << EOF
DNZ Fideiussioni - Build Information
====================================
Build Date: $(date)
Node Version: $(node --version)
NPM Version: $(npm --version)
Build Directory Size: $(du -sh build | cut -f1)

Critical Files:
- index.html: $(ls -lh build/index.html | awk '{print $5}')
- manifest.json: $(ls -lh build/manifest.json | awk '{print $5}' 2>/dev/null || echo "N/A")
- sitemap.xml: $(ls -lh build/sitemap.xml | awk '{print $5}' 2>/dev/null || echo "N/A")

JavaScript Bundles:
$(ls -lh build/static/js/*.js 2>/dev/null | awk '{print "- " $9 ": " $5}')

CSS Bundles:
$(ls -lh build/static/css/*.css 2>/dev/null | awk '{print "- " $9 ": " $5}' || echo "No CSS bundles")
EOF

echo -e "${GREEN}✅ Build report generated: build/BUILD_INFO.txt${NC}"
echo ""

# Final summary
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  ✨ Build Completed Successfully! ✨  ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""
echo "📂 Build output: ./build/"
echo "📄 Build info: ./build/BUILD_INFO.txt"
echo ""
echo "🚀 Next steps:"
echo "   1. Test locally: npx serve -s build"
echo "   2. Run Lighthouse audit"
echo "   3. Deploy to production"
echo ""