import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { submitContactForm } from '../../utils/formHandler';

const ContactForm = ({ className = '' }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div className={`bg-gray-50 p-8 rounded-xl shadow-lg ${className}`}>
      <div onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nome *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Il tuo nome"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="tua@email.it"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Messaggio *</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Scrivi il tuo messaggio..."
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={formStatus === 'sending'}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>{formStatus === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}</span>
          </button>

          {formStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              ✓ Messaggio inviato con successo! Ti ricontatteremo al più presto.
            </div>
          )}
          
          {formStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              Si è verificato un errore. Riprova più tardi.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
