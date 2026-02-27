'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, Mail, MapPin, Clock, CheckCircle, Home } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import EnhancedContactForm from '@/components/Forms/EnhancedContactForm';
import { ROUTES } from '@/data/canonicalRoutes';
import { semanticKeywords, conversionCopy } from '@/data/seoData';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (searchParams?.get('success') === 'true') {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 10000);
    }
  }, [searchParams]);

  const handleSubmissionSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 10000);
  };

  const handleSubmissionError = (error: string) => {
    console.error('Form submission error:', error);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous à Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {conversionCopy.cta.principal} pour nos services de transport en autocar avec chauffeur.
            Notre équipe est disponible 24/7. Prise en charge dans les 19 communes bruxelloises.
            Consultez notre <InternalLinkNext to={ROUTES.FLOTTE} /> et nos{' '}
            <InternalLinkNext to={ROUTES.DESTINATIONS} anchorVariant={1} />.
          </p>
        </div>

        {showSuccessMessage && (
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">
                    Demande envoyée avec succès !
                  </h3>
                  <p className="text-green-700">
                    Nous vous contacterons dans les plus brefs délais pour établir votre devis personnalisé.
                  </p>
                </div>
              </div>
              <p className="text-sm text-green-700 mb-3">Continuez à explorer :</p>
              <div className="flex flex-wrap gap-3">
                <InternalLinkNext
                  to={ROUTES.HOME}
                  className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors text-sm font-medium"
                >
                  <Home className="w-4 h-4" aria-hidden="true" />
                  Accueil
                </InternalLinkNext>
                <InternalLinkNext
                  to={ROUTES.SERVICES}
                  anchor="Nos services transport autocar"
                  className="inline-flex items-center gap-2 border border-green-700 text-green-800 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
                />
                <InternalLinkNext
                  to={ROUTES.FLOTTE}
                  anchorVariant={1}
                  className="inline-flex items-center gap-2 border border-green-700 text-green-800 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
                />
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Informations de Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+3225800325" className="hover:text-blue-600 transition-colors">
                      +32 2 580 03 25
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Service disponible 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@locationautocar.be" className="hover:text-blue-600 transition-colors">
                      info@locationautocar.be
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Réponse sous 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    Bd Industriel 9<br />
                    1070 Bruxelles<br />
                    Belgique
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Horaires</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi : 08:00 - 22:00<br />
                    Samedi - Dimanche : 10:00 - 22:00
                  </p>
                  <p className="text-sm text-gray-500">Service d&apos;urgence 24/7</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nos Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" aria-hidden="true" />
                  Transferts aéroports et gares
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" aria-hidden="true" />
                  Excursions touristiques
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" aria-hidden="true" />
                  Voyages d&apos;affaires
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" aria-hidden="true" />
                  Mise à disposition
                </li>
              </ul>
            </div>
          </div>

          <div>
            <EnhancedContactForm
              onSubmissionSuccess={handleSubmissionSuccess}
              onSubmissionError={handleSubmissionError}
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre Localisation</h2>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
              <p className="text-gray-600">Bd Industriel 9, 1070 Bruxelles</p>
              <p className="text-sm text-gray-500 mt-2">Carte interactive disponible prochainement</p>
            </div>
          </div>
        </div>
      </div>

      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="service">
          <option value="transfert">Transfert aéroport/gare</option>
          <option value="excursion">Excursion touristique</option>
          <option value="business">Voyage d&apos;affaires</option>
          <option value="disposition">Mise à disposition</option>
        </select>
        <input type="date" name="date" />
        <input type="number" name="passengers" />
        <input type="text" name="destination" />
        <textarea name="message"></textarea>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </div>
  );
}
