import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords,
  type = 'website',
  image = '/logo512.png'
}) => {
  const location = useLocation();
  const baseUrl = 'https://dnzfideiussioni.eu';
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  const fullTitle = title 
    ? `${title} | DNZ Fideiussioni Francesco De Nuzzo`
    : 'DNZ Fideiussioni Francesco De Nuzzo - Soluzioni Assicurative su Misura';

  const defaultDescription = "Da più di dieci anni, offriamo fideiussioni e coperture assicurative personalizzate per aziende e professionisti in tutta Italia. Partner di oltre 30 compagnie assicurative.";
  
  const seoDescription = description || defaultDescription;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Structured Data JSON-LD per LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "DNZ Fideiussioni",
    "legalName": "DNZ Fideiussioni Francesco De Nuzzo",
    "url": baseUrl,
    "logo": `${baseUrl}/logo512.png`,
    "description": seoDescription,
    "telephone": "+393497950278",
    "email": "cauzioni@francescodenuzzo.it",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT"
    },
    "sameAs": [
      // Aggiungi profili social se disponibili
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Italy"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Assicurativi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fideiussioni e Cauzioni",
            "description": "Fideiussioni per cauzioni provvisorie, definitive, contributi fondi pubblici e rimborso IVA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rischi Tecnologici",
            "description": "Polizze CAR (Contractors All Risk) e Decennale Postuma"
          }
        }
      ]
    }
  };

  // Breadcrumb Schema
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": location.pathname.split('/').filter(Boolean).map((segment, index, arr) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      "item": `${baseUrl}/${arr.slice(0, index + 1).join('/')}`
    }))
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="it" />
      <title>{fullTitle}</title>
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="DNZ Fideiussioni" />
      <meta property="og:locale" content="it_IT" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="DNZ Fideiussioni Francesco De Nuzzo" />
      <meta name="geo.region" content="IT" />
      <meta name="geo.placename" content="Italia" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {breadcrumbList.itemListElement.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbList)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;