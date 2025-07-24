# Character Encoding Troubleshooting Guide

## Problem Identification

Based on the screenshots provided, the issue shows:
- French text with accents (é, à, ç) being corrupted
- Special characters becoming garbled symbols
- Text like "Bien à vous" becoming unreadable character sequences

## Root Causes

### 1. Character Set Mismatches
- HTML declares UTF-8 but form processes as ISO-8859-1
- Server default encoding differs from client encoding
- Database charset configuration issues

### 2. Missing Encoding Declarations
- No `accept-charset` attribute on forms
- Missing or incorrect Content-Type headers
- No charset specification in HTTP responses

### 3. Processing Issues
- Form data not properly URL-encoded
- Server-side scripts not handling UTF-8
- Database connections without charset specification

## Step-by-Step Solutions

### Step 1: HTML Form Configuration
```html
<!-- Ensure proper meta tags -->
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!-- Form with proper encoding -->
<form acceptCharset="UTF-8" method="POST">
  <!-- form fields -->
</form>
```

### Step 2: HTTP Headers
```
Content-Type: text/html; charset=UTF-8
Accept-Charset: UTF-8
```

### Step 3: JavaScript Form Handling
```javascript
// Proper URL encoding
const encodeFormData = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

// Normalize Unicode characters
const normalizeText = (text) => {
  return text.normalize('NFC');
};
```

### Step 4: Server Configuration (if applicable)
```php
// PHP example
header('Content-Type: text/html; charset=UTF-8');
mysqli_set_charset($connection, 'utf8mb4');
```

```sql
-- MySQL database
CREATE TABLE contact_forms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  message TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);
```

## Prevention Measures

### 1. Consistent UTF-8 Usage
- Always declare UTF-8 in HTML meta tags
- Set UTF-8 in HTTP headers
- Use UTF-8 for database storage
- Configure server default encoding as UTF-8

### 2. Proper Form Handling
- Use `acceptCharset="UTF-8"` on forms
- URL-encode form data properly
- Validate encoding before processing

### 3. Database Best Practices
- Use `utf8mb4` charset for MySQL
- Set connection charset explicitly
- Use parameterized queries

### 4. Testing Strategy
- Test with various character sets
- Include accented characters in test data
- Test with emojis and special symbols
- Verify data integrity end-to-end

## Testing Recommendations

### Test Cases to Run:

1. **Basic Accented Characters**
   - French: é, è, à, ç, ù, ô
   - German: ä, ö, ü, ß
   - Spanish: ñ, í, ó, ú

2. **Special Characters**
   - Quotes: " " ' '
   - Dashes: – —
   - Symbols: €, £, ¥, ©, ®

3. **Emojis and Unicode**
   - Basic emojis: 😀 🎉 ❤️
   - Complex emojis: 👨‍👩‍👧‍👦

4. **Mixed Content**
   - Combine different character types
   - Long text with various encodings
   - Copy-paste from different sources

### Validation Steps:

1. **Client-Side Validation**
   ```javascript
   const isValidUTF8 = (text) => {
     try {
       return decodeURIComponent(encodeURIComponent(text)) === text;
     } catch (e) {
       return false;
     }
   };
   ```

2. **Server-Side Validation**
   - Check character encoding on receipt
   - Validate against expected charset
   - Log encoding issues for debugging

3. **Database Validation**
   - Verify stored data matches input
   - Check for character corruption
   - Test retrieval and display

## Emergency Fixes

### Quick Fix for Netlify Forms:
1. Ensure `acceptCharset="UTF-8"` on form
2. Add proper Content-Type headers
3. Use URL encoding for form data
4. Test with accented characters

### Debugging Tools:
```javascript
// Debug encoding issues
const debugEncoding = (text) => {
  console.log('Original:', text);
  console.log('Encoded:', encodeURIComponent(text));
  console.log('Length:', text.length);
  console.log('Bytes:', new TextEncoder().encode(text));
};
```

## Implementation Checklist

- [ ] HTML meta charset set to UTF-8
- [ ] Form acceptCharset attribute added
- [ ] HTTP headers specify UTF-8
- [ ] JavaScript properly encodes form data
- [ ] Server configured for UTF-8
- [ ] Database uses UTF-8 charset
- [ ] Testing completed with special characters
- [ ] End-to-end validation working
- [ ] Error handling for encoding issues
- [ ] Documentation updated

## Common Pitfalls to Avoid

1. **Mixed Encodings**: Don't mix UTF-8 with ISO-8859-1
2. **Missing Declarations**: Always declare charset explicitly
3. **Copy-Paste Issues**: Be careful with content from different sources
4. **Database Defaults**: Don't rely on database default charsets
5. **Server Defaults**: Configure server encoding explicitly

This comprehensive approach should resolve the character encoding issues shown in your screenshots.