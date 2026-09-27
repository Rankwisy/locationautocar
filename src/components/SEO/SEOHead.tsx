import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  metaTitle?: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
  faqSchema?: object;
  breadcrumbSchema?: object;
  additionalSchemas?: object[];
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  metaTitle,
  description,
  keywords,
  canonical,
  ogImage = "https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85",
  ogType = "website",
  schema,
  faqSchema,
  breadcrumbSchema,
  additionalSchemas = [],
  publishedTime,
  modifiedTime
}) => {
  const finalTitle = metaTitle || title;
  const siteUrl = "https://www.locationautocar.be";
  const fullCanonical = canonical || siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Location Autocar Bruxelles" />
      <meta property="og:locale" content="fr_BE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Location Autocar Bruxelles" />
      <meta name="language" content="fr" />
      <meta name="geo.region" content="BE-BRU" />
      <meta name="geo.placename" content="Bruxelles" />
      <meta name="geo.position" content="50.8503;4.3517" />
      <meta name="ICBM" content="50.8503, 4.3517" />

      {/* Sitemap reference */}
      <link rel="sitemap" type="application/xml" href={`${siteUrl}/sitemap.xml`} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {additionalSchemas.map((additionalSchema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(additionalSchema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;