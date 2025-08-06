import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import EnhancedContactForm from '../components/Forms/EnhancedContactForm';

const ContactPage: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmissionSuccess = () => {
    setShowSuccessMessage(true);
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const handleSubmissionError = (error: string) => {
    console.error('Form submission error:', error);
    // Error handling is done within the ContactForm component
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Location Autocar Bruxelles",
    "description": "Contactez Location Autocar Bruxelles pour vos besoins de transport en autocar avec chauffeur. Devis gratuit 24/7.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles",
      "telephone": "+32 2 580 03 25",
      "email": "info@locationautocar.be",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bd Industriel 9",
        "addressLocality": "Bruxelles",
        "postalCode": "1070",
        "addressCountry": "BE"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.locationautocar.be/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.locationautocar.be/contactez-nous"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Contactez Nous - Location Autocar Bruxelles"
        description="Contactez Location Autocar Bruxelles pour vos besoins de transport en autocar avec chauffeur. Devis gratuit, service 24/7. Bd Industriel 9, 1070 Bruxelles."
        canonical="https://www.locationautocar.be/contactez-nous"
        schema={contactSchema}
        breadcrumbSchema={breadcrumbSchema}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactez Nous
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Demandez votre devis gratuit pour nos services de transport en autocar avec chauffeur. 
              Notre équipe est disponible 24/7 pour répondre à vos besoins.
            </p>
          </div>

          {/* Success Message */}
          {showSuccessMessage && (
            <div className="mb-8 max-w-4xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">
                      Demande envoyée avec succès !
                    </h3>
                    <p className="text-green-700">
                      Nous vous contacterons dans les plus brefs délais pour établir votre devis personnalisé.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informations de Contact
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
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
                    <Mail className="w-6 h-6 text-blue-600" />
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
                    <MapPin className="w-6 h-6 text-blue-600" />
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
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi : 08:00 - 22:00<br />
                      Samedi - Dimanche : 10:00 - 22:00
                    </p>
                    <p className="text-sm text-gray-500">Service d'urgence 24/7</p>
                  </div>
                </div>
              </div>

              {/* Services Summary */}
              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nos Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Transferts aéroports et gares</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Excursions touristiques</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Voyages d'affaires</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Mise à disposition</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <EnhancedContactForm 
                onSubmissionSuccess={handleSubmissionSuccess}
                onSubmissionError={handleSubmissionError}
              />
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Notre Localisation
            </h2>
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Bd Industriel 9, 1070 Bruxelles
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Carte interactive disponible prochainement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static form for Netlify detection - CRITICAL */}
      <form 
        name="contact" 
        netlify 
        netlify-honeypot="bot-field" 
        hidden
        style={{ display: 'none' }}
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="service">
          <option value="transfert">Transfert aéroport/gare</option>
          <option value="excursion">Excursion touristique</option>
          <option value="business">Voyage d'affaires</option>
          <option value="disposition">Mise à disposition</option>
        </select>
        <input type="date" name="date" />
        <input type="number" name="passengers" />
        <input type="text" name="destination" />
        <textarea name="message"></textarea>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </>
  );
};

export default ContactPage;