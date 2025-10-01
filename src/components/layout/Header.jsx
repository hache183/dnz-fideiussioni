import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const linkClass = scrolled ? 'text-gray-800' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-blue-900 to-blue-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-xl">DNZ</div>
            </div>
            <div className={linkClass}>
              <div className="font-bold text-lg">DNZ Fideiussioni</div>
              <div className="text-xs opacity-90">Francesco De Nuzzo</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium hover:text-blue-500 transition-colors ${linkClass}`}>
              Home
            </Link>
            <Link to="/chi-siamo" className={`font-medium hover:text-blue-500 transition-colors ${linkClass}`}>
              Chi Siamo
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`font-medium hover:text-blue-500 transition-colors flex items-center ${linkClass}`}
              >
                Servizi <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2"
                >
                  <Link to="/servizi/cauzioni" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors">
                    Cauzioni
                  </Link>
                  <Link to="/servizi/rischi-tecnologici" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors">
                    Rischi Tecnologici
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contatti" className={`font-medium hover:text-blue-500 transition-colors ${linkClass}`}>
              Contatti
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${linkClass}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block py-2 text-gray-800 hover:text-blue-600">Home</Link>
            <Link to="/chi-siamo" className="block py-2 text-gray-800 hover:text-blue-600">Chi Siamo</Link>
            <div className="py-2">
              <div className="font-medium text-gray-800 mb-2">Servizi</div>
              <Link to="/servizi/cauzioni" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">Cauzioni</Link>
              <Link to="/servizi/rischi-tecnologici" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">Rischi Tecnologici</Link>
            </div>
            <Link to="/contatti" className="block py-2 text-gray-800 hover:text-blue-600">Contatti</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;