/**
 * Utility functions for handling character encoding in forms
 */

export class EncodingUtils {
  /**
   * Properly encode form data for submission
   */
  static encodeFormData(data: Record<string, string>): string {
    return Object.keys(data)
      .map(key => {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(data[key]);
        return `${encodedKey}=${encodedValue}`;
      })
      .join("&");
  }

  /**
   * Validate UTF-8 encoding of text
   */
  static isValidUTF8(text: string): boolean {
    try {
      // Try to encode and decode the text
      const encoded = encodeURIComponent(text);
      const decoded = decodeURIComponent(encoded);
      return decoded === text;
    } catch (error) {
      return false;
    }
  }

  /**
   * Clean and normalize text input
   */
  static normalizeText(text: string): string {
    // Normalize Unicode characters
    return text.normalize('NFC');
  }

  /**
   * Convert problematic characters to safe alternatives
   */
  static sanitizeForTransmission(text: string): string {
    // First normalize the text
    let sanitized = this.normalizeText(text);
    
    // Replace problematic characters that might cause encoding issues
    const replacements: Record<string, string> = {
      '\u201C': '"',
      '\u201D': '"',
      '\u2018': "'",
      '\u2019': "'",
      '–': '-',
      '—': '-',
      '…': '...',
    };

    Object.entries(replacements).forEach(([from, to]) => {
      sanitized = sanitized.replace(new RegExp(from, 'g'), to);
    });

    return sanitized;
  }

  /**
   * Debug encoding issues
   */
  static debugEncoding(text: string): void {
    console.log('Original text:', text);
    console.log('Text length:', text.length);
    console.log('Encoded URI:', encodeURIComponent(text));
    console.log('Is valid UTF-8:', this.isValidUTF8(text));
    console.log('Normalized:', this.normalizeText(text));
    
    // Check for problematic characters
    const problematicChars = text.match(/[^\x00-\x7F]/g);
    if (problematicChars) {
      console.log('Non-ASCII characters found:', [...new Set(problematicChars)]);
    }
  }
}

/**
 * Form submission handler with proper encoding
 */
export class EncodingAwareFormHandler {
  static async submitForm(
    formData: Record<string, string>,
    endpoint: string = "/"
  ): Promise<Response> {
    // Normalize all text fields
    const normalizedData = Object.entries(formData).reduce((acc, [key, value]) => {
      acc[key] = typeof value === 'string' 
        ? EncodingUtils.normalizeText(value)
        : value;
      return acc;
    }, {} as Record<string, string>);

    // Debug in development
    if (process.env.NODE_ENV === 'development') {
      Object.entries(normalizedData).forEach(([key, value]) => {
        if (typeof value === 'string' && value.length > 0) {
          console.log(`Debugging field "${key}":`);
          EncodingUtils.debugEncoding(value);
        }
      });
    }

    // Properly encode the form data
    const encodedData = EncodingUtils.encodeFormData(normalizedData);

    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Charset": "UTF-8"
      },
      body: encodedData
    });
  }
}