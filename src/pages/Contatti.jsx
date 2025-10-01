import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, FileText } from 'lucide-react';
import SEO from '../components/common/SEO';
import ContactForm from '../components/common/ContactForm';
import { COMPANY_INFO } from '../utils/constants';

const Contatti = () => {
  return (
    <>
      <SEO 
        title="Contatti"
        description="Contattaci per ricevere una consulenza personalizzata. Email, telefono e form di contatto disponibili."
      />

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contatti</h1>
            <p className="text-xl text-blue-200 italic">"{COMPANY_INFO.motto}"</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informazioni di Contatto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefono</h3>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:underline block">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">PEC</h3>
                    <a href={`mailto:${COMPANY_INFO.pec}`} className="text-blue-600 hover:underline block">
                      {COMPANY_INFO.pec}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dati Aziendali</h3>
                    <p className="text-gray-600">P. IVA: {COMPANY_INFO.piva}</p>
                    <p className="text-gray-600">Iscrizione IVASS E RUI: {COMPANY_INFO.rui}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Orari di Lavoro</h3>
                <p className="text-gray-600">Lunedì - Venerdì: 9:00 - 18:00</p>
                <p className="text-gray-600">Sabato - Domenica: Chiuso</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Invia un Messaggio</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contatti;