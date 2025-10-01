import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Award, CheckCircle2 } from 'lucide-react';
import SEO from '../components/common/SEO';

const RischiTecnologici = () => {
  return (
    <>
      <SEO 
        title="Rischi Tecnologici"
        description="Polizze CAR (Contractors All Risk) e Decennale Postuma per la protezione completa dei tuoi progetti edilizi."
      />

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Building2 className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rischi Tecnologici</h1>
            <p className="text-xl text-blue-200">Protezione completa per i tuoi progetti</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg"
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Polizza CAR</h2>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">(Contractors All Risk)</h3>
              <p className="text-gray-700 mb-4">
                La polizza CAR offre una copertura completa per tutti i rischi che possono 
                verificarsi durante la fase di costruzione di un'opera.
              </p>
              <ul className="space-y-2">
                {[
                  'Danni materiali durante la costruzione',
                  'Eventi naturali e calamità',
                  'Furto e vandalismo',
                  'Responsabilità civile verso terzi',
                  'Copertura attrezzature e macchinari'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg"
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Polizza Decennale Postuma</h2>
              <p className="text-gray-700 mb-4">
                Garanzia obbligatoria che copre i danni gravi che possono compromettere 
                la stabilità dell'opera nei 10 anni successivi al completamento.
              </p>
              <ul className="space-y-2">
                {[
                  'Copertura decennale post-costruzione',
                  'Danni strutturali gravi',
                  'Difetti di costruzione',
                  'Conformità normativa D.Lgs. 122/2005',
                  'Protezione dell\'investimento'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-900 text-white p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Proteggi il tuo progetto</h3>
            <p className="text-blue-200 mb-6">
              Richiedi una consulenza gratuita per valutare le migliori soluzioni assicurative
            </p>
            <Link
              to="/contatti"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Contattaci Ora
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RischiTecnologici;