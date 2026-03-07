/**
 * Static JSON-LD schemas for crawlers (no JS execution required).
 * Mirrors LocalBusiness, TouristTrip, TransportService from enhancedSchemas.ts.
 * Used by scripts/generate-static-jsonld.js
 */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Location Autocar Bruxelles",
  "url": "https://www.locationautocar.be",
  "logo": "https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png",
  "image": [
    "https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg"
  ],
  "description": "Location d'autocar avec chauffeur à Bruxelles depuis 2007. Services de transferts, excursions, voyages d'affaires en Europe.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bd Industriel 9",
    "addressLocality": "Bruxelles",
    "postalCode": "1070",
    "addressCountry": "BE"
  },
  "telephone": "+32 2 580 03 25",
  "email": "info@locationautocar.be",
  "foundingDate": "2007",
  "openingHours": ["Mo-Fr 08:00-22:00", "Sa-Su 10:00-22:00"],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.8503",
    "longitude": "4.3517"
  },
  "areaServed": [
    { "@type": "City", "name": "Brussels" },
    { "@type": "Country", "name": "Belgium" },
    { "@type": "Place", "name": "Europe" }
  ]
};

const touristTripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Excursions Touristiques en Autocar",
  "description": "Circuits organisés avec guide francophone en Belgique et Europe : Bruxelles, Paris, Amsterdam, Bruges, Gand.",
  "url": "https://www.locationautocar.be/nos-services/excursions-tourisme",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Location Autocar Bruxelles",
    "url": "https://www.locationautocar.be"
  },
  "touristType": ["Cultural Tourism", "City Break", "Heritage Tourism"],
  "itinerary": [
    { "@type": "Place", "name": "Bruxelles", "sameAs": "https://en.wikipedia.org/wiki/Brussels" },
    { "@type": "Place", "name": "Paris", "sameAs": "https://en.wikipedia.org/wiki/Paris" },
    { "@type": "Place", "name": "Amsterdam", "sameAs": "https://en.wikipedia.org/wiki/Amsterdam" }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "120",
      "maxPrice": "500",
      "priceCurrency": "EUR"
    }
  }
};

const transportServiceSchema = {
  "@context": "https://schema.org",
  "@type": "TransportService",
  "name": "Location Autocar avec Chauffeur",
  "description": "Service de location d'autocar, bus et minibus avec chauffeur professionnel à Bruxelles. Transferts aéroports, excursions et voyages d'affaires en Belgique et Europe.",
  "url": "https://www.locationautocar.be",
  "transportType": ["Bus", "Coach"],
  "provider": {
    "@type": "LocalBusiness",
    "name": "Location Autocar Bruxelles",
    "url": "https://www.locationautocar.be"
  },
  "areaServed": [
    { "@type": "City", "name": "Brussels" },
    { "@type": "Country", "name": "Belgium" },
    { "@type": "Place", "name": "Europe" }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "80",
    "highPrice": "800",
    "offerCount": "6",
    "url": "https://www.locationautocar.be/nos-services"
  }
};

export { localBusinessSchema, touristTripSchema, transportServiceSchema };
