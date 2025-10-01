import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load delle pagine per code splitting
const Home = lazy(() => import('./pages/Home'));
const ChiSiamo = lazy(() => import('./pages/ChiSiamo'));
const Cauzioni = lazy(() => import('./pages/Cauzioni'));
const RischiTecnologici = lazy(() => import('./pages/RischiTecnologici'));
const Contatti = lazy(() => import('./pages/Contatti'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chi-siamo" element={<ChiSiamo />} />
                <Route path="/servizi/cauzioni" element={<Cauzioni />} />
                <Route path="/servizi/rischi-tecnologici" element={<RischiTecnologici />} />
                <Route path="/contatti" element={<Contatti />} />
                {/* 404 Route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;