import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/39${COMPANY_INFO.phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};

export default WhatsAppButton;
