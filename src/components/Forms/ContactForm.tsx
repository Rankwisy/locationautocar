import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import NetlifyFormHandler, { ContactFormData, FormSubmissionResult } from '../../utils/formHandler';

interface ContactFormProps {
  onSubmissionSuccess?: () => void;
  onSubmissionError?: (error: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
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
  const [submissionResult, setSubmissionResult] = useState<FormSubmissionResult | null>(null);
  const [showDebugInfo, setShowDebugInfo] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear previous submission result when user starts typing
    if (submissionResult) {
      setSubmissionResult(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const result = await NetlifyFormHandler.submitForm(formData);
      setSubmissionResult(result);

      if (result.success) {
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
        onSubmissionError?.(result.error || result.message);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
      setSubmissionResult({
        success: false,
        message: 'Erreur lors de l\'envoi',
        error: errorMessage
      });
      onSubmissionError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const checkConfiguration = async () => {
    const config = await NetlifyFormHandler.checkFormConfiguration();
    console.log('Form configuration check:', config);
    setShowDebugInfo(true);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Demande de Devis Gratuit
      </h2>

      {/* Debug Information (Development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <button
            type="button"
            onClick={checkConfiguration}
            className="text-yellow-800 underline text-sm"
          >
            Vérifier la configuration du formulaire
          </button>
          {showDebugInfo && (
            <div className="mt-2 text-xs text-yellow-700">
              Voir la console pour les détails de configuration
            </div>
          )}
        </div>
      )}

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
              {submissionResult.error && (
                <p className="text-red-700 text-sm mt-1">
                  {submissionResult.error}
                </p>
              )}
              {!submissionResult.success && (
                <div className="mt-3 text-red-700 text-sm">
                  <p className="font-medium">Pour une assistance immédiate :</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Vérifiez votre connexion internet</li>
                    <li>Assurez-vous que tous les champs obligatoires sont remplis</li>
                    <li>Réessayez dans quelques minutes</li>
                  </ul>
                  <p className="mt-2">
                    Ou contactez-nous directement au{' '}
                    <a href="tel:+3225800325" className="font-semibold underline">
                      +32 2 580 03 25
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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
    </div>
  );
};

export default ContactForm;