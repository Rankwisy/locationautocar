import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/siteConfig';

interface SEOHeadProps {
  title?: string;
  metaTitle?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: string;
  schema?: any;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  metaTitle,
  description,
  canonical,
  noindex = false,
  ogImage,
  ogType = 'website',
  schema,
  publishedTime,
  modifiedTime
}) => {
  const pageTitle = metaTitle || title || siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageCanonical = canonical || window.location.href;
  const pageImage = ogImage || `${siteConfig.url}/images/og-default.jpg`;

  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.business.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}${siteConfig.logo}`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "customer service",
      "email": siteConfig.contact.email
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.business.location.street,
      "addressLocality": siteConfig.business.location.city,
      "postalCode": siteConfig.business.location.postalCode,
      "addressCountry": siteConfig.business.location.country
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageCanonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={siteConfig.business.name} />
      <meta property="og:locale" content="fr_BE" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Favicon */}
      <link rel="icon" href={siteConfig.favicon} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Language */}
      <html lang="fr" />
    </Helmet>
  );
};

export default SEOHead;