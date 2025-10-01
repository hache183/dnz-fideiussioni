import { COMPANY_INFO } from './constants';

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(COMPANY_INFO.formspreeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    return { success: response.ok };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error };
  }
};

