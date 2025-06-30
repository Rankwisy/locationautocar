// Netlify Form Submission Handler
export interface FormSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  passengers: string;
  destination: string;
  message: string;
}

export class NetlifyFormHandler {
  private static readonly FORM_NAME = 'contact';
  private static readonly SUBMISSION_ENDPOINT = '/';

  /**
   * Validates form data before submission
   */
  private static validateFormData(formData: ContactFormData): string[] {
    const errors: string[] = [];

    if (!formData.name.trim()) {
      errors.push('Le nom est obligatoire');
    }

    if (!formData.email.trim()) {
      errors.push('L\'email est obligatoire');
    } else if (!this.isValidEmail(formData.email)) {
      errors.push('L\'adresse email n\'est pas valide');
    }

    if (!formData.service) {
      errors.push('Le type de service est obligatoire');
    }

    return errors;
  }

  /**
   * Validates email format
   */
  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Prepares form data for Netlify submission
   */
  private static prepareFormData(formData: ContactFormData): FormData {
    const netlifyFormData = new FormData();
    
    // CRITICAL: Add form name for Netlify detection
    netlifyFormData.append('form-name', this.FORM_NAME);
    
    // Add all form fields
    Object.entries(formData).forEach(([key, value]) => {
      netlifyFormData.append(key, value);
    });

    return netlifyFormData;
  }

  /**
   * Submits form to Netlify
   */
  public static async submitForm(formData: ContactFormData): Promise<FormSubmissionResult> {
    try {
      // Validate form data
      const validationErrors = this.validateFormData(formData);
      if (validationErrors.length > 0) {
        return {
          success: false,
          message: 'Erreurs de validation',
          error: validationErrors.join(', ')
        };
      }

      // Prepare form data
      const netlifyFormData = this.prepareFormData(formData);

      console.log('Submitting form to Netlify:', {
        formName: this.FORM_NAME,
        endpoint: this.SUBMISSION_ENDPOINT,
        fields: Object.keys(formData)
      });

      // Submit to Netlify
      const response = await fetch(this.SUBMISSION_ENDPOINT, {
        method: 'POST',
        body: netlifyFormData,
        headers: {
          // Don't set Content-Type - let browser set it for FormData
        }
      });

      console.log('Netlify response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Formulaire envoyé avec succès'
        };
      } else {
        // Get response text for debugging
        const responseText = await response.text();
        console.error('Netlify form submission failed:', {
          status: response.status,
          statusText: response.statusText,
          body: responseText
        });

        return {
          success: false,
          message: 'Erreur lors de l\'envoi du formulaire',
          error: this.getErrorMessage(response.status, responseText)
        };
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      return {
        success: false,
        message: 'Erreur de connexion',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }

  /**
   * Gets user-friendly error message based on response
   */
  private static getErrorMessage(status: number, responseText: string): string {
    switch (status) {
      case 404:
        return 'Formulaire non trouvé. Veuillez contacter le support.';
      case 400:
        return 'Données du formulaire invalides. Vérifiez vos informations.';
      case 429:
        return 'Trop de tentatives. Veuillez réessayer dans quelques minutes.';
      case 500:
      case 502:
      case 503:
        return 'Erreur serveur temporaire. Veuillez réessayer.';
      default:
        return `Erreur ${status}: ${responseText || 'Erreur inconnue'}`;
    }
  }

  /**
   * Checks if Netlify forms are properly configured
   */
  public static async checkFormConfiguration(): Promise<{
    isConfigured: boolean;
    issues: string[];
    recommendations: string[];
  }> {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check if static form exists in HTML
    const staticForm = document.querySelector(`form[name="${this.FORM_NAME}"]`);
    if (!staticForm) {
      issues.push('Formulaire statique manquant dans le HTML');
      recommendations.push('Ajouter un formulaire statique caché avec name="contact"');
    }

    // Check for required attributes
    if (staticForm) {
      const hasNetlifyAttr = staticForm.hasAttribute('netlify') || staticForm.hasAttribute('data-netlify');
      if (!hasNetlifyAttr) {
        issues.push('Attribut netlify manquant sur le formulaire statique');
        recommendations.push('Ajouter data-netlify="true" au formulaire statique');
      }

      const hasHoneypot = staticForm.hasAttribute('netlify-honeypot');
      if (!hasHoneypot) {
        issues.push('Protection anti-spam manquante');
        recommendations.push('Ajouter netlify-honeypot="bot-field" au formulaire');
      }
    }

    return {
      isConfigured: issues.length === 0,
      issues,
      recommendations
    };
  }
}

// Export for use in components
export default NetlifyFormHandler;