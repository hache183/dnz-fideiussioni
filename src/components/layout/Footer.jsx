import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-blue-200 mb-4">{COMPANY_INFO.fullName}</p>
            <p className="text-blue-200 text-sm italic">"{COMPANY_INFO.motto}"</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <div className="space-y-2 text-blue-200">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-xs">{COMPANY_INFO.pec}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informazioni</h4>
            <div className="space-y-2 text-blue-200 text-sm">
              <p>P. IVA: {COMPANY_INFO.piva}</p>
              <p>Iscrizione IVASS E RUI: {COMPANY_INFO.rui}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2025 {COMPANY_INFO.name} {COMPANY_INFO.fullName}. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;