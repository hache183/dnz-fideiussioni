import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo_bianco_icona.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation for dropdown
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTab = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isMenuOpen]);

  const linkClass = scrolled ? 'text-gray-800' : 'text-white';
  
  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-r from-blue-900 to-blue-700'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label="DNZ Fideiussioni - Torna alla homepage"
          >
            <img 
              src={logo} 
              alt="" 
              className="h-12 w-auto"
              aria-hidden="true"
            />
            <div className={linkClass}>
              <div className="font-bold text-lg">DNZ Fideiussioni</div>
              <div className="text-xs opacity-90">Francesco De Nuzzo</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navigazione principale">
            <Link 
              to="/" 
              className={`font-medium hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${linkClass} ${isActive('/') ? 'font-bold' : ''}`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
            <Link 
              to="/chi-siamo" 
              className={`font-medium hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${linkClass} ${isActive('/chi-siamo') ? 'font-bold' : ''}`}
              aria-current={isActive('/chi-siamo') ? 'page' : undefined}
            >
              Chi Siamo
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }
                }}
                className={`font-medium hover:text-blue-500 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${linkClass}`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Menu servizi"
              >
                Servizi <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                  role="menu"
                  aria-label="Sottomenu servizi"
                >
                  <Link 
                    to="/servizi/cauzioni" 
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors focus:outline-none focus:bg-blue-50"
                    role="menuitem"
                  >
                    Cauzioni
                  </Link>
                  <Link 
                    to="/servizi/rischi-tecnologici" 
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition-colors focus:outline-none focus:bg-blue-50"
                    role="menuitem"
                  >
                    Rischi Tecnologici
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/contatti" 
              className={`font-medium hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${linkClass} ${isActive('/contatti') ? 'font-bold' : ''}`}
              aria-current={isActive('/contatti') ? 'page' : undefined}
            >
              Contatti
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2 ${linkClass}`}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t"
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
            <Link 
              to="/chi-siamo" 
              className="block py-2 text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-current={isActive('/chi-siamo') ? 'page' : undefined}
            >
              Chi Siamo
            </Link>
            <div className="py-2">
              <div className="font-medium text-gray-800 mb-2">Servizi</div>
              <Link 
                to="/servizi/cauzioni" 
                className="block py-2 pl-4 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                Cauzioni
              </Link>
              <Link 
                to="/servizi/rischi-tecnologici" 
                className="block py-2 pl-4 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                Rischi Tecnologici
              </Link>
            </div>
            <Link 
              to="/contatti" 
              className="block py-2 text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-current={isActive('/contatti') ? 'page' : undefined}
            >
              Contatti
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;