import React, { memo } from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';
import { trackWhatsAppClick } from '../../utils/useAnalytics';

const WhatsAppButton = memo(() => {
  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <a
      href={`https://wa.me/39${COMPANY_INFO.phone}?text=Ciao,%20vorrei%20informazioni%20sui%20vostri%20servizi`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageSquare size={28} aria-hidden="true" />
      <span className="sr-only">Apri chat WhatsApp</span>
    </a>
  );
});

WhatsAppButton.displayName = 'WhatsAppButton';

export default WhatsAppButton;