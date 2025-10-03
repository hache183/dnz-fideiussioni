import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XN4BXFV8VW';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Inizializza Google Analytics solo in production
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
};

// Event tracking helper
export const trackEvent = (eventName, eventParams = {}) => {
  if (process.env.NODE_ENV === 'production' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  } else {
    console.log('Analytics Event (dev):', eventName, eventParams);
  }
};

// Specific event trackers
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    form_name: formName,
    timestamp: new Date().toISOString(),
  });
};

export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    page_location: location,
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'Contact',
    event_label: 'Phone Number',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'Contact',
    event_label: 'Email Address',
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: 'WhatsApp Button',
  });
};