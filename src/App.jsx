import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Cauzioni from './pages/Cauzioni';
import RischiTecnologici from './pages/RischiTecnologici';
import Contatti from './pages/Contatti';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/servizi/cauzioni" element={<Cauzioni />} />
            <Route path="/servizi/rischi-tecnologici" element={<RischiTecnologici />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
