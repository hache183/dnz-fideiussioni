import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Mail, Phone, FileText, ExternalLink } from 'lucide-react';
import SEO from '../components/common/SEO';
import { COMPANY_INFO } from '../utils/constants';

const ProceduraReclami = () => {
  return (
    <>
      <SEO 
        title="Procedura Reclami"
        description="Modalità di trasmissione dei reclami secondo il Provvedimento IVASS 46/2016."
      />

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <AlertCircle className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Procedura Reclami</h1>
            <p className="text-xl text-blue-200">Modalità di trasmissione dei reclami e recapiti</p>
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
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                In base alla procedura per la gestione dei reclami di cui al{' '}
                <strong>Provvedimento IVASS 46/2016</strong>, di modifica al Regolamento Isvap 24/2008.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Il contraente, l'assicurato, il beneficiario e il danneggiato hanno la facoltà, 
                ferma restando la possibilità di rivolgersi all'Autorità Giudiziaria, di inoltrare 
                reclamo per iscritto all'intermediario o all'impresa di assicurazione.
              </p>
            </div>

            {/* Contenuti del Reclamo */}
            <div>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-gray-900">I Contenuti del Reclamo</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Il Cliente può presentare il proprio reclamo in forma scritta, indicando, oltre alla 
                descrizione dei fatti, il numero di polizza o di sinistro oggetto dello stesso e ogni 
                riferimento utile (codice fiscale, nome e cognome, recapiti, ecc.) ad individuare il 
                contraente/assicurato e a descriverne le circostanze.
              </p>
            </div>

            {/* Reclamo all'Intermediario */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reclamo all'Intermediario</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Qualora il reclamo sia inoltrato direttamente all'intermediario può essere inviato 
                con le seguenti modalità:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Posta elettronica:</p>
                      <a 
                        href={`mailto:${COMPANY_INFO.email}`} 
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Posta elettronica certificata:</p>
                      <a 
                        href={`mailto:${COMPANY_INFO.pec}`} 
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {COMPANY_INFO.pec}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-gray-700 font-semibold">
                  ⏱️ L'intermediario è tenuto a dare risposta scritta entro{' '}
                  <span className="text-yellow-700 font-bold">45 giorni</span> dalla data di 
                  ricevimento del reclamo.
                </p>
              </div>
            </div>

            {/* Reclamo all'IVASS */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <div className="flex items-start space-x-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Reclamo all'IVASS</h2>
                  <p className="text-sm text-gray-600">Istituto per la Vigilanza sulle Assicurazioni</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Il contraente, l'assicurato, il beneficiario e il danneggiato hanno inoltre la possibilità, 
                qualora non dovesse ritenersi soddisfatto della gestione del reclamo, ovvero dall'esito 
                del reclamo o in caso di assenza di riscontro da parte dell'intermediario o dell'impresa 
                entro il termine di legge (45 giorni dalla data di ricevimento del reclamo da parte 
                dell'intermediario), di rivolgersi all'IVASS.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">IVASS - Servizio Vigilanza Intermediari</p>
                  <p className="text-gray-700">Via del Quirinale n. 21 – 00187 Roma</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700"><strong>Fax:</strong> 06 42133206</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <div>
                      <strong className="text-gray-700">PEC:</strong>{' '}
                      <a 
                        href="mailto:tutela.consumatore@pec.ivass.it" 
                        className="text-blue-600 hover:underline"
                      >
                        tutela.consumatore@pec.ivass.it
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 pt-2">
                    <ExternalLink className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-700">Info:</strong>{' '}
                      <a 
                        href="https://www.ivass.it/consumatori/reclami/index.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        www.ivass.it/consumatori/reclami/index.html
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <p className="text-gray-700 text-sm">
                  <strong>Importante:</strong> Allegare la documentazione relativa al reclamo 
                  trattato dall'intermediario o dall'impresa preponente.
                </p>
              </div>
            </div>

            {/* Note Aggiuntive */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📝 Note Importanti</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Il reclamo deve essere presentato in forma scritta</li>
                <li>Includere tutti i riferimenti utili (numero polizza, dati personali, ecc.)</li>
                <li>Descrivere in modo chiaro e dettagliato i fatti contestati</li>
                <li>Conservare copia della documentazione inviata</li>
                <li>Attendere il termine di 45 giorni prima di rivolgersi all'IVASS</li>
              </ul>
            </div>

            {/* Contatti Rapidi */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📞 Contatti per Reclami</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href={`mailto:${COMPANY_INFO.pec}`} className="text-blue-600 hover:underline">
                    {COMPANY_INFO.pec}
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
              <p>Informazioni aggiornate secondo Provvedimento IVASS 46/2016</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProceduraReclami;