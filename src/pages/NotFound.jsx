import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Pagina Non Trovata - 404"
        description="La pagina che stai cercando non esiste. Torna alla homepage di DNZ Fideiussioni."
      />
      
      <div className="min-h-[70vh] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <Search className="w-24 h-24 text-blue-600 mx-auto mb-4 opacity-50" />
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Pagina Non Trovata
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ops! La pagina che stai cercando non esiste o è stata spostata.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
            >
              <Home size={20} />
              <span>Torna alla Homepage</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all"
            >
              <ArrowLeft size={20} />
              <span>Pagina Precedente</span>
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Link utili:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/chi-siamo" className="text-blue-600 hover:underline">
                Chi Siamo
              </Link>
              <Link to="/servizi/cauzioni" className="text-blue-600 hover:underline">
                Cauzioni
              </Link>
              <Link to="/servizi/rischi-tecnologici" className="text-blue-600 hover:underline">
                Rischi Tecnologici
              </Link>
              <Link to="/contatti" className="text-blue-600 hover:underline">
                Contatti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;