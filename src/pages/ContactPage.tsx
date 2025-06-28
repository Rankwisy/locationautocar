import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    passengers: '',
    destination: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.service) {
      setError('Veuillez remplir tous les champs obligatoires.');
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Veuillez entrer une adresse email valide.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create form data with proper encoding for Netlify
      const formDataToSubmit = new FormData();
      
      // Add the form name (CRITICAL for Netlify)
      formDataToSubmit.append('form-name', 'contact');
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      console.log('Submitting form data:', Object.fromEntries(formDataToSubmit));

      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSubmit
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          passengers: '',
          destination: '',
          message: ''
        });
        console.log('Form submitted successfully');
      } else {
        // Get more detailed error information
        const responseText = await response.text();
        console.error('Response error:', response.status, responseText);
        
        if (response.status === 404) {
          throw new Error('Formulaire non trouvé. La page doit être redéployée pour activer les formulaires Netlify.');
        } else if (response.status === 400) {
          throw new Error('Données du formulaire invalides. Vérifiez que tous les champs requis sont remplis.');
        } else if (response.status >= 500) {
          throw new Error('Erreur serveur temporaire. Veuillez réessayer dans quelques minutes.');
        } else {
          throw new Error(`Erreur ${response.status}: Le formulaire n'a pas pu être envoyé.`);
        }
      }
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setError('Problème de connexion réseau. Vérifiez votre connexion internet et réessayez.');
      } else {
        setError(error instanceof Error ? error.message : 'Une erreur inattendue est survenue.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
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

  return (
    <>
      <SEOHead
        title="Contactez Nous - Location Autocar Bruxelles"
        description="Contactez Location Autocar Bruxelles pour vos besoins de transport en autocar avec chauffeur. Devis gratuit, service 24/7. Bd Industriel 9, 1070 Bruxelles."
        canonical="https://www.locationautocar.be/contactez-nous"
        schema={contactSchema}
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
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Demande de Devis Gratuit
                </h2>

                {/* Error Display */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">{error}</p>
                    <p className="text-red-600 text-sm mt-2">
                      En cas de problème persistant, contactez-nous directement au{' '}
                      <a href="tel:+3225800325" className="font-semibold underline">
                        +32 2 580 03 25
                      </a>
                    </p>
                  </div>
                )}

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Demande Envoyée !
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Nous vous contacterons dans les plus brefs délais pour établir votre devis personnalisé.
                    </p>
                    <p className="text-sm text-gray-500">
                      Vous recevrez également un email de confirmation à l'adresse indiquée.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Envoyer une nouvelle demande
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* Hidden fields for Netlify - CRITICAL */}
                    <input type="hidden" name="form-name" value="contact" />
                    
                    {/* Honeypot field - CRITICAL for spam protection */}
                    <div style={{ display: 'none' }}>
                      <label>
                        Don't fill this out if you're human: 
                        <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Type de service *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        >
                          <option value="">Sélectionnez un service</option>
                          <option value="transfert">Transfert aéroport/gare</option>
                          <option value="excursion">Excursion touristique</option>
                          <option value="business">Voyage d'affaires</option>
                          <option value="disposition">Mise à disposition</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Date souhaitée
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre de passagers
                        </label>
                        <input
                          type="number"
                          id="passengers"
                          name="passengers"
                          min="1"
                          max="55"
                          value={formData.passengers}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                        Destination ou itinéraire
                      </label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="Ex: Aéroport de Bruxelles, Paris, Amsterdam..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message ou détails supplémentaires
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="Décrivez vos besoins spécifiques..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.service || isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer la Demande
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Champs obligatoires. Nous vous contacterons dans les 24h pour établir votre devis personnalisé.
                      <br />
                      Vos données sont protégées et ne seront jamais partagées avec des tiers.
                    </p>
                  </form>
                )}
              </div>
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
    </>
  );
};

export default ContactPage;