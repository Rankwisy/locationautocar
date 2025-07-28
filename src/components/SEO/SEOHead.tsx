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
  keywords?: string;
  author?: string;
  faqSchema?: any;
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
  modifiedTime,
  keywords,
  author,
  faqSchema
}) => {
  const pageTitle = metaTitle || title || siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : siteConfig.url);
  const pageImage = ogImage || `${siteConfig.url}/images/og-default.jpg`;

  // Default LocalBusiness schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.business.name,
    "url": siteConfig.url,
    "logo": siteConfig.logo,
    "image": siteConfig.logo,
    "description": siteConfig.description,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "foundingDate": "2007",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.business.location.street,
      "addressLocality": siteConfig.business.location.city,
      "postalCode": siteConfig.business.location.postalCode,
      "addressCountry": siteConfig.business.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8503",
      "longitude": "4.3517"
    },
    "openingHours": [
      "Mo-Fr 08:00-22:00",
      "Sa-Su 10:00-22:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "50.8503",
        "longitude": "4.3517"
      },
      "geoRadius": "1000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Transport",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Location Minibus avec Chauffeur",
            "description": "Service de location de minibus 8-16 places avec chauffeur professionnel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Location Bus avec Chauffeur",
            "description": "Service de location de bus 20-35 places avec chauffeur professionnel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Location Autocar avec Chauffeur",
            "description": "Service de location d'autocar 40-55 places avec chauffeur professionnel"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marie Dubois"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Service impeccable pour notre séminaire d'entreprise. Chauffeur professionnel et ponctuel."
      }
    ]
  };

  const structuredData = schema || defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <link rel="canonical" href={pageCanonical} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={siteConfig.business.name} />
      <meta property="og:locale" content="fr_BE" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageTitle} />
      
      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="BE-BRU" />
      <meta name="geo.placename" content="Bruxelles" />
      <meta name="geo.position" content="50.8503;4.3517" />
      <meta name="ICBM" content="50.8503, 4.3517" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* FAQ Schema if provided */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Favicon and Icons */}
      <link rel="icon" href={siteConfig.favicon} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Language */}
      <html lang="fr" />
      
      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      
    </Helmet>
  );
};

export default SEOHead;