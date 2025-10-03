import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone } from 'lucide-react';
import SEO from '../components/common/SEO';
import { COMPANY_INFO } from '../utils/constants';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Informativa sulla privacy e trattamento dei dati personali di DNZ Fideiussioni."
      />

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Shield className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-200">Informativa sulla privacy e protezione dei dati</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Introduzione */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduzione</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La presente Privacy Policy descrive le modalità di gestione del sito web{' '}
                <strong>dnzfideiussioni.eu</strong> in riferimento al trattamento dei dati personali 
                degli utenti che lo consultano, in conformità al Regolamento UE 2016/679 (GDPR).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Questa informativa è resa ai sensi dell'art. 13 del GDPR a coloro che interagiscono 
                con i servizi web di <strong>{COMPANY_INFO.fullName}</strong>, accessibili per via 
                telematica a partire dall'indirizzo: <strong>https://dnzfideiussioni.eu</strong>
              </p>
            </div>

            {/* Titolare del Trattamento */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Titolare del Trattamento</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Ragione Sociale:</strong> {COMPANY_INFO.fullName}</p>
                <p><strong>Sede Legale:</strong> {COMPANY_INFO.sede}</p>
                <p><strong>P. IVA:</strong> {COMPANY_INFO.piva}</p>
                <p><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:underline">{COMPANY_INFO.email}</a></p>
                <p><strong>PEC:</strong> <a href={`mailto:${COMPANY_INFO.pec}`} className="text-blue-600 hover:underline">{COMPANY_INFO.pec}</a></p>
              </div>
            </div>

            {/* Tipologie di Dati */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Tipologie di Dati Raccolti</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1 Dati di Navigazione</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I sistemi informatici acquisiscono alcuni dati personali la cui trasmissione è implicita 
                nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, tipo di browser, 
                sistema operativo).
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2 Dati Forniti Volontariamente</h3>
              <p className="text-gray-700 leading-relaxed">
                La compilazione dei moduli di contatto comporta l'acquisizione di nome, email e 
                numero di telefono necessari a rispondere alla richiesta.
              </p>
            </div>

            {/* Finalità */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalità del Trattamento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I dati personali raccolti sono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fornire informazioni e servizi richiesti</li>
                <li>Rispondere a richieste di contatto e preventivi</li>
                <li>Gestire la relazione commerciale</li>
                <li>Adempiere agli obblighi di legge</li>
                <li>Migliorare i servizi offerti</li>
              </ul>
            </div>

            {/* Base Giuridica */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Base Giuridica del Trattamento</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Consenso dell'interessato</strong> (art. 6, par. 1, lett. a GDPR)</li>
                <li><strong>Esecuzione di un contratto</strong> (art. 6, par. 1, lett. b GDPR)</li>
                <li><strong>Obbligo di legge</strong> (art. 6, par. 1, lett. c GDPR)</li>
                <li><strong>Interesse legittimo</strong> (art. 6, par. 1, lett. f GDPR)</li>
              </ul>
            </div>

            {/* Conservazione */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Conservazione dei Dati</h2>
              <p className="text-gray-700 leading-relaxed">
                I dati personali saranno conservati per il periodo necessario all'espletamento delle 
                finalità per cui sono stati raccolti (generalmente 10 anni per finalità fiscali).
              </p>
            </div>

            {/* Cookie */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookie e Tecnologie di Tracciamento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Il sito utilizza:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Cookie tecnici:</strong> necessari per il funzionamento del sito</li>
                <li><strong>Cookie analitici:</strong> Google Analytics per statistiche aggregate</li>
              </ul>
            </div>

            {/* Diritti */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Diritti dell'Interessato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ai sensi degli artt. 15-22 del GDPR, l'interessato ha diritto di:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Accedere ai propri dati personali</li>
                <li>Chiedere la rettifica o cancellazione</li>
                <li>Ottenere la limitazione del trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso</li>
                <li>Proporre reclamo all'Autorità Garante</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">
                Per esercitare i propri diritti: <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:underline font-semibold">{COMPANY_INFO.email}</a>
              </p>
            </div>

            {/* Contatti */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contatti</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Per informazioni sul trattamento dei dati personali:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
              <p>Ultimo aggiornamento: Ottobre 2025</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;