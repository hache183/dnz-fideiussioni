import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Building2, ChevronDown, Settings, Handshake, Users, TrendingUp } from 'lucide-react';
import SEO from '../components/common/SEO';
import Hero from '../components/sections/Hero';
import ContactForm from '../components/common/ContactForm';
import { ITER_STEPS, PARTNERS, CLIENT_TYPES } from '../utils/constants';

const Home = () => {
  return (
    <>
      <SEO 
        keywords="fideiussioni, cauzioni, rischi tecnologici, broker assicurativo Italia"
      />

      <Hero
        title="La sicurezza del tuo business in mani esperte"
        subtitle="Specialisti in fideiussioni e rischi tecnologici"
        ctaText="Richiedi un Preventivo"
        ctaLink="/contatti"
      />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">I Nostri Servizi</h2>
            <p className="text-xl text-gray-600">Soluzioni assicurative su misura per ogni esigenza</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cauzioni</h3>
              <p className="text-gray-700 mb-4">
                Fideiussioni per cauzioni provvisorie e definitive, contributi fondi pubblici, 
                rimborso IVA e molto altro.
              </p>
              <Link
                to="/servizi/cauzioni"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Scopri di più <ChevronDown className="ml-2 rotate-[-90deg]" size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rischi Tecnologici</h3>
              <p className="text-gray-700 mb-4">
                Polizze CAR (Contractors All Risk) e Decennale Postuma per la protezione 
                completa dei tuoi progetti.
              </p>
              <Link
                to="/servizi/rischi-tecnologici"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Scopri di più <ChevronDown className="ml-2 rotate-[-90deg]" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Iter Operativo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Settings className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Iter Operativo</h2>
            <p className="text-xl text-gray-600">Il nostro processo efficiente in 5 step</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {ITER_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  {step.num}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">{step.title}</h4>
                <p className="text-sm text-gray-600 text-center">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Handshake className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner Assicurativi</h2>
            <p className="text-xl text-gray-600">Collaboriamo con oltre 30 compagnie assicurative</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {PARTNERS.slice(0, 12).map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <p className="text-sm font-semibold text-gray-700">{partner}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clienti */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">I Nostri Clienti</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {CLIENT_TYPES.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all"
              >
                <h4 className="font-bold text-xl text-blue-600 mb-2">{client.title}</h4>
                <p className="text-gray-600">{client.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Must Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MUST</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl mx-auto">
              Da più di dieci anni, lavoriamo con impegno e integrità per mantenere la fiducia di clienti e partner.
            </p>
            <p className="text-lg text-blue-200 max-w-4xl mx-auto">
              La nostra velocità operativa e la gamma di compagnie assicurative e accordi costituiscono 
              i nostri principali punti di forza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Richiedi un Preventivo</h2>
            <p className="text-xl text-gray-600">Compila il form e ti ricontatteremo al più presto</p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Home;