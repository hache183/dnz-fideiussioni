import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import { ALTRE_GARANZIE_LIST } from '../utils/constants';

const AltreGaranzie = () => {
  return (
    <>
      <SEO 
        title="Altre Garanzie"
        description="Polizze RCT/RCO aziendale, incendio e furto, donazioni, successioni, CVT e temporanee casi morte."
      />

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <FileCheck className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Altre Garanzie</h1>
            <p className="text-xl text-blue-200">Soluzioni assicurative complete per ogni esigenza</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Le Nostre Garanzie Assicurative</h2>
            <p className="text-lg text-gray-600 mb-8">
              Offriamo una vasta gamma di polizze assicurative per proteggere la tua azienda, 
              i tuoi beni e i tuoi cari in ogni situazione.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALTRE_GARANZIE_LIST.map((garanzia, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium">{garanzia}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-900 text-white p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Hai bisogno di una consulenza personalizzata?</h3>
            <p className="text-blue-200 mb-6">
              Contattaci per ricevere un preventivo su misura per le tue esigenze
            </p>
            <Link
              to="/contatti"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Richiedi un Preventivo
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AltreGaranzie;