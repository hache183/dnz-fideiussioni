import React from 'react';
import { Phone, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';
import logo from '../../assets/logo_bianco_icona.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Nome */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="DNZ Fideiussioni Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-xl">{COMPANY_INFO.name}</h3>
                <p className="text-blue-200 text-sm">{COMPANY_INFO.fullName}</p>
              </div>
            </div>
          </div>
          
          {/* Contatti */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <div className="space-y-2 text-blue-200">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-xs">{COMPANY_INFO.pec}</span>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Linkedin size={16} />
                <a 
                  href="https://www.linkedin.com/company/dnz-fideiussioni" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white hover:underline transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Informazioni Aziendali */}
          <div>
            <h4 className="font-semibold mb-4">Informazioni Aziendali</h4>
            <div className="space-y-1 text-blue-200 text-xs">
              <p className="font-medium">{COMPANY_INFO.fullName.toUpperCase()}</p>
              <p>Sede legale: {COMPANY_INFO.sede}</p>
              <p>P. IVA: {COMPANY_INFO.piva}</p>
              <p>C.F.: {COMPANY_INFO.cf}</p>
              <p>Numero REA: {COMPANY_INFO.rea}</p>
              <p>Iscrizione IVASS E RUI: {COMPANY_INFO.rui}</p>
              
              {/* Link IVASS */}
              <div className="mt-4 pt-3 border-t border-blue-700">
                <p className="text-xs mb-2">Intermediario soggetto a controllo IVASS</p>
                <a 
                  href={COMPANY_INFO.ivassLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-blue-200 hover:text-white hover:underline transition-colors text-xs"
                >
                  <span>Verifica iscrizione RUI</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2025 {COMPANY_INFO.name} - {COMPANY_INFO.fullName}. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;