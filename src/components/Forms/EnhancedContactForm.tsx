import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { EncodingAwareFormHandler, EncodingUtils } from '../../utils/encodingUtils';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  passengers: string;
  destination: string;
  message: string;
}

interface ContactFormProps {
  onSubmissionSuccess?: () => void;
  onSubmissionError?: (error: string) => void;
}

const EnhancedContactForm: React.FC<ContactFormProps> = ({ 
  onSubmissionSuccess, 
  onSubmissionError 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    passengers: '',
    destination: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    error?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Normalize the input value to handle encoding properly
    const normalizedValue = EncodingUtils.normalizeText(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: normalizedValue
    }));
    
    // Clear previous submission result when user starts typing
    if (submissionResult) {
      setSubmissionResult(null);
    }
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return 'Le nom est obligatoire.';
    }
    
    if (!formData.email.trim()) {
      return 'L\'email est obligatoire.';
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Veuillez entrer une adresse email valide.';
    }
    
    if (!formData.service) {
      return 'Veuillez sélectionner un service.';
    }

    // Validate encoding of text fields
    const textFields = ['name', 'destination', 'message'];
    for (const field of textFields) {
      const value = formData[field as keyof ContactFormData];
      if (value && !EncodingUtils.isValidUTF8(value)) {
        return `Le champ "${field}" contient des caractères non valides. Veuillez vérifier votre saisie.`;
      }
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmissionResult({
        success: false,
        message: validationError,
        error: 'Validation failed'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Submitting form with encoding-aware handler...');
      
      // Prepare form data with proper encoding
      const submissionData = {
        "form-name": "contact",
        ...formData
      };

      // Use the encoding-aware form handler
      const response = await EncodingAwareFormHandler.submitForm(submissionData);

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        setSubmissionResult({
          success: true,
          message: 'Formulaire envoyé avec succès ! Nous vous contacterons bientôt.'
        });
        
        // Reset form on success
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
        
        onSubmissionSuccess?.();
      } else {
        const responseText = await response.text();
        console.error('Form submission failed:', {
          status: response.status,
          statusText: response.statusText,
          body: responseText
        });

        let errorMessage = 'Une erreur est survenue lors de l\'envoi du formulaire.';
        
        if (response.status === 404) {
          errorMessage = 'Formulaire non trouvé. Veuillez contacter le support.';
        } else if (response.status === 400) {
          errorMessage = 'Données du formulaire invalides. Vérifiez vos informations.';
        } else if (response.status >= 500) {
          errorMessage = 'Erreur serveur temporaire. Veuillez réessayer dans quelques minutes.';
        }

        setSubmissionResult({
          success: false,
          message: errorMessage,
          error: `Erreur ${response.status}: ${responseText || 'Erreur inconnue'}`
        });
        
        onSubmissionError?.(errorMessage);
      }
    } catch (error) {
      console.error('Network error:', error);
      
      const errorMessage = 'Problème de connexion réseau. Vérifiez votre connexion internet et réessayez.';
      setSubmissionResult({
        success: false,
        message: errorMessage,
        error: error instanceof Error ? error.message : 'Erreur réseau inconnue'
      });
      
      onSubmissionError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Demande de Devis Gratuit
      </h2>

      {/* Submission Result */}
      {submissionResult && (
        <div className={`mb-6 p-4 rounded-lg border ${
          submissionResult.success 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-start gap-3">
            {submissionResult.success ? (
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
            )}
            <div>
              <p className={`font-medium ${
                submissionResult.success ? 'text-green-800' : 'text-red-800'
              }`}>
                {submissionResult.message}
              </p>
              {submissionResult.error && process.env.NODE_ENV === 'development' && (
                <p className="text-red-700 text-sm mt-1">
                  Debug: {submissionResult.error}
                </p>
              )}
              {!submissionResult.success && (
                <div className="mt-3 text-red-700 text-sm">
                  <p className="font-medium">Pour une assistance immédiate :</p>
                  <p className="mt-1">
                    Contactez-nous directement au{' '}
                    <a href="tel:+3225800325" className="font-semibold underline">
                      +32 2 580 03 25
                    </a>
                    {' '}ou par email à{' '}
                    <a href="mailto:info@locationautocar.be" className="font-semibold underline">
                      info@locationautocar.be
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form 
        name="contact" 
        method="POST" 
        acceptCharset="UTF-8"
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit} 
        className="space-y-6"
      >
        {/* Honeypot field - hidden from users */}
        <div style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human: 
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {/* Hidden form name field */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Form fields */}
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
              placeholder="Votre nom complet"
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
              placeholder="votre@email.com"
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
              placeholder="+32 X XX XX XX XX"
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
              placeholder="Ex: 25"
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
            placeholder="Décrivez vos besoins spécifiques, horaires préférés, équipements souhaités..."
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
    </div>
  );
};

export default EnhancedContactForm;