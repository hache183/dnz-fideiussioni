import React, { useState, memo } from 'react';
import { Send } from 'lucide-react';
import { submitContactForm } from '../../utils/formHandler';
import { trackFormSubmit } from '../../utils/useAnalytics';
import { SERVIZI_FORM } from '../../utils/constants';

const ContactForm = memo(({ className = '' }) => {
  const [formData, setFormData] = useState({ name: '', email: '', service:'', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }

    if (!formData.service || formData.service === 'Seleziona un servizio') {
      newErrors.service = 'Seleziona un servizio';
     }

    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Il messaggio deve contenere almeno 10 caratteri';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('sending');
    setErrors({});
    
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      trackFormSubmit('contact_form');
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setFormStatus(''), 5000);
    } else {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className={`bg-gray-50 p-8 rounded-xl shadow-lg ${className}`}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label 
              htmlFor="contact-name" 
              className="block text-gray-700 font-semibold mb-2"
            >
              Nome *
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Il tuo nome"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              disabled={formStatus === 'sending'}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          
          {/* Email Field */}
          <div>
            <label 
              htmlFor="contact-email" 
              className="block text-gray-700 font-semibold mb-2"
            >
              Email *
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="tua@email.it"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={formStatus === 'sending'}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          
                    {/* Service Field - NUOVO */}
          <div>
            <label 
              htmlFor="contact-service" 
              className="block text-gray-700 font-semibold mb-2"
            >
              Servizio di Interesse *
            </label>
            <select
              id="contact-service"
              required
              value={formData.service}
              onChange={(e) => handleChange('service', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              aria-invalid={errors.service ? 'true' : 'false'}
              aria-describedby={errors.service ? 'service-error' : undefined}
              disabled={formStatus === 'sending'}
            >
              {SERVIZI_FORM.map((servizio, idx) => (
                <option key={idx} value={servizio} disabled={idx === 0}>
                  {servizio}
                </option>
              ))}
            </select>
            {errors.service && (
              <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.service}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label 
              htmlFor="contact-message" 
              className="block text-gray-700 font-semibold mb-2"
            >
              Messaggio *
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Scrivi il tuo messaggio..."
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              disabled={formStatus === 'sending'}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-busy={formStatus === 'sending'}
          >
            <Send size={20} aria-hidden="true" />
            <span>{formStatus === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}</span>
          </button>

          {/* Success Message */}
          {formStatus === 'success' && (
            <div 
              className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
              role="alert"
              aria-live="polite"
            >
              ✓ Messaggio inviato con successo! Ti ricontatteremo al più presto.
            </div>
          )}
          
          {/* Error Message */}
          {formStatus === 'error' && (
            <div 
              className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
              role="alert"
              aria-live="assertive"
            >
              ⚠ Si è verificato un errore. Riprova più tardi o contattaci via email.
            </div>
          )}
        </div>
      </form>
    </div>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;