import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Handshake, Map } from 'lucide-react';
import SEO from '../components/common/SEO';

const ChiSiamo = () => {
  const strengths = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Consulenti di fiducia per aziende e professionisti',
      desc: 'Partner affidabili per il successo del tuo business'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Offriamo soluzioni personalizzate e di alta qualità',
      desc: 'Adottando un approccio consulenziale su misura'
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'Un team specializzato in collaborazione con più di 30 compagnie assicurative',
      desc: 'La nostra rete di partner garantisce le migliori soluzioni'
    }
  ];

  return (
    <>
      <SEO 
        title="Chi Siamo"
        description="Professionisti assicurativi specializzati nella gestione di grandi rischi. Team specializzato in collaborazione con più di 30 compagnie assicurative."
      />

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Chi Siamo
          </motion.h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Professionisti assicurativi specializzati nella gestione di grandi rischi
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con più di 20 anni di presenza sul territorio grazie all'attività familiare precedente, 
                DNZ Fideiussioni si è affermata come punto di riferimento nel settore assicurativo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {strengths.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-4 bg-blue-50 p-6 rounded-lg"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Presenza sul Territorio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Map className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              La Nostra Presenza sul Territorio
            </h2>
            <p className="text-xl text-gray-600">
              Collaboratori, studi di consulenza, segnalatori e sub-agenzie in tutta Italia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-2xl">
                <svg viewBox="0 0 400 500" className="w-full h-auto">
                  <path
                    d="M200,50 L220,80 L240,120 L250,160 L260,200 L270,240 L280,280 L285,320 L280,360 L270,400 L250,440 L220,460 L200,470 L180,460 L150,440 L130,400 L120,360 L115,320 L120,280 L130,240 L140,200 L150,160 L160,120 L180,80 Z"
                    fill="#e0f2fe"
                    stroke="#0284c7"
                    strokeWidth="2"
                  />
                  {[
                    { x: 180, y: 100 },
                    { x: 220, y: 110 },
                    { x: 200, y: 180 },
                    { x: 240, y: 250 },
                    { x: 210, y: 320 },
                    { x: 230, y: 380 }
                  ].map((pos, idx) => (
                    <g key={idx}>
                      <circle cx={pos.x} cy={pos.y} r="8" fill="#0284c7" />
                      <circle cx={pos.x} cy={pos.y} r="15" fill="#0284c7" opacity="0.3" />
                    </g>
                  ))}
                </svg>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              Una rete capillare di professionisti al servizio delle tue esigenze assicurative
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ChiSiamo;

