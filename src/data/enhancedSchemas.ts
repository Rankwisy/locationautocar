// Enhanced structured data schemas for better SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Location Autocar Bruxelles",
  "alternateName": ["Location Autocar", "Autocar Bruxelles"],
  "url": "https://www.locationautocar.be",
  "logo": "https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png",
  "description": "Location d'autocar avec chauffeur à Bruxelles depuis 2007. Services de transferts, excursions, voyages d'affaires en Europe.",
  "foundingDate": "2007",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bd Industriel 9",
    "addressLocality": "Bruxelles",
    "postalCode": "1070",
    "addressCountry": "BE",
    "addressRegion": "Brussels-Capital Region"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+32 2 580 03 25",
      "contactType": "customer service",
      "availableLanguage": ["French", "Dutch", "English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "22:00"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "+32 2 580 03 25",
      "contactType": "emergency",
      "availableLanguage": ["French", "Dutch", "English"],
      "hoursAvailable": "24/7"
    }
  ],
  "email": "info@locationautocar.be",
  "telephone": "+32 2 580 03 25",
  "faxNumber": "+32 2 580 03 26",
  "vatID": "BE0123456789",
  "taxID": "BE0123456789",
  "duns": "123456789",
  "legalName": "Location Autocar Bruxelles SPRL",
  "slogan": "Votre partenaire transport depuis 2007",
  "keywords": "location autocar, bus chauffeur, minibus bruxelles, transport groupe, excursions europe",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "50.8503",
      "longitude": "4.3517"
    },
    "geoRadius": "1000000"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Brussels",
      "sameAs": "https://en.wikipedia.org/wiki/Brussels"
    },
    {
      "@type": "Country", 
      "name": "Belgium",
      "sameAs": "https://en.wikipedia.org/wiki/Belgium"
    },
    {
      "@type": "Place",
      "name": "Europe",
      "sameAs": "https://en.wikipedia.org/wiki/Europe"
    }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Fédération Belge des Entreprises de Transport",
    "url": "https://www.febetra.be"
  },
  "award": [
    "Certification Qualité Transport 2023",
    "Prix Excellence Service Client 2022"
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "15"
  },
  "yearlyRevenue": {
    "@type": "MonetaryAmount",
    "currency": "EUR",
    "value": "2500000"
  },
  "sameAs": [
    "https://www.facebook.com/locationautocar",
    "https://www.instagram.com/locationautocar",
    "https://www.linkedin.com/company/location-autocar-bruxelles"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Location Autocar Bruxelles",
  "url": "https://www.locationautocar.be",
  "logo": "https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png",
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
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "50.8503",
      "longitude": "4.3517"
    },
    "geoRadius": "1000000"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.8503",
    "longitude": "4.3517"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Brussels"
    },
    {
      "@type": "Country",
      "name": "Belgium"
    },
    {
      "@type": "Place",
      "name": "Europe"
    }
  ],
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
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transferts Aéroports",
          "description": "Service de transfert professionnel vers tous les aéroports"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Excursions Touristiques",
          "description": "Circuits organisés avec guide francophone en Belgique et Europe"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Voyages d'Affaires",
          "description": "Transport de groupes pour séminaires et événements d'entreprise"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
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
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jean Martin"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Excellent service pour nos excursions. Véhicules confortables et chauffeurs expérimentés."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sophie Laurent"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Partenaire de confiance pour nos transferts aéroport. Service 24/7 très apprécié."
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Location Autocar Bruxelles",
  "alternateName": "Location Autocar",
  "url": "https://www.locationautocar.be",
  "description": "Site officiel de Location Autocar Bruxelles - Services de transport en autocar avec chauffeur depuis 2007",
  "inLanguage": "fr-BE",
  "isAccessibleForFree": true,
  "publisher": {
    "@type": "Organization",
    "name": "Location Autocar Bruxelles"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.locationautocar.be/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const serviceSchemas = {
  transferts: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service de Transfert Aéroport avec Chauffeur",
    "description": "Service professionnel de transfert entre aéroports, gares et destinations avec chauffeur expérimenté",
    "provider": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles"
    },
    "serviceType": "Airport Transfer Service",
    "areaServed": ["Brussels", "Belgium", "Europe"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.locationautocar.be/nos-services",
      "servicePhone": "+32 2 580 03 25",
      "serviceSmsNumber": "+32 2 580 03 25"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "150",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "80",
        "maxPrice": "300",
        "priceCurrency": "EUR"
      }
    }
  },
  excursions: {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Excursions Touristiques en Autocar",
    "description": "Circuits organisés avec guide francophone en Belgique et Europe",
    "provider": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles"
    },
    "touristType": ["Cultural Tourism", "City Break", "Heritage Tourism"],
    "itinerary": [
      {
        "@type": "Place",
        "name": "Bruxelles",
        "sameAs": "https://en.wikipedia.org/wiki/Brussels"
      },
      {
        "@type": "Place", 
        "name": "Paris",
        "sameAs": "https://en.wikipedia.org/wiki/Paris"
      },
      {
        "@type": "Place",
        "name": "Amsterdam", 
        "sameAs": "https://en.wikipedia.org/wiki/Amsterdam"
      }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "250",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "120",
        "maxPrice": "500",
        "priceCurrency": "EUR"
      }
    }
  }
};

export const serviceVehicleSchemas = {
  minibus: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service de Location Minibus avec Chauffeur",
    "description": "Minibus Mercedes 8-16 places avec chauffeur professionnel pour transferts VIP et excursions",
    "serviceType": "Minibus Rental Service",
    "provider": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles",
      "url": "https://www.locationautocar.be"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Brussels"
      },
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "Place",
        "name": "Europe"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "lowPrice": "120",
      "highPrice": "300",
      "offerCount": "1",
      "url": "https://www.locationautocar.be/notre-flotte/minibus"
    }
  },
  bus: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service de Location Bus avec Chauffeur",
    "description": "Bus touristique 20-35 places avec chauffeur professionnel pour excursions et voyages d'affaires",
    "serviceType": "Bus Rental Service",
    "provider": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles",
      "url": "https://www.locationautocar.be"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Brussels"
      },
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "Place",
        "name": "Europe"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "lowPrice": "150",
      "highPrice": "400",
      "offerCount": "1",
      "url": "https://www.locationautocar.be/notre-flotte/bus"
    }
  },
  autocar: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service de Location Autocar Grand Tourisme",
    "description": "Autocar grand tourisme 40-55 places avec chauffeur professionnel pour voyages longue distance",
    "serviceType": "Coach Rental Service",
    "provider": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles",
      "url": "https://www.locationautocar.be"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Brussels"
      },
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "Place",
        "name": "Europe"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "lowPrice": "300",
      "highPrice": "800",
      "offerCount": "1",
      "url": "https://www.locationautocar.be/notre-flotte/autocars"
    }
  }
};

export const destinationSchemas = {
  bruxelles: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Bruxelles - Excursions Guidées",
    "description": "Découvrez Bruxelles, capitale de l'Europe : Grand-Place UNESCO, Atomium, quartier européen avec nos excursions guidées",
    "image": "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bruxelles",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8503",
      "longitude": "4.3517"
    },
    "touristType": ["Cultural Tourism", "City Break", "Educational Tourism", "Heritage Tourism"],
    "availableLanguage": ["fr", "nl", "en", "de"],
    "containsPlace": [
      {
        "@type": "TouristAttraction",
        "name": "Grand-Place de Bruxelles",
        "description": "Place centrale historique classée UNESCO",
        "sameAs": "https://en.wikipedia.org/wiki/Grand_Place"
      },
      {
        "@type": "TouristAttraction",
        "name": "Atomium",
        "description": "Monument emblématique de Bruxelles",
        "sameAs": "https://en.wikipedia.org/wiki/Atomium"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "45",
      "highPrice": "180",
      "priceCurrency": "EUR"
    }
  },
  belgique: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Belgique - Circuits Patrimoniaux",
    "description": "Circuits en Belgique : Bruges UNESCO, Gand médiéval, Anvers diamantaire avec transport en autocar et guide francophone",
    "image": "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BE"
    },
    "touristType": ["Cultural Tourism", "Heritage Tourism", "Educational Tourism"],
    "availableLanguage": ["fr", "nl", "en"],
    "containsPlace": [
      {
        "@type": "City",
        "name": "Bruges",
        "description": "Ville médiévale UNESCO",
        "sameAs": "https://en.wikipedia.org/wiki/Bruges"
      },
      {
        "@type": "City",
        "name": "Gand",
        "description": "Ville universitaire historique",
        "sameAs": "https://en.wikipedia.org/wiki/Ghent"
      },
      {
        "@type": "City",
        "name": "Anvers",
        "description": "Port historique et capitale du diamant",
        "sameAs": "https://en.wikipedia.org/wiki/Antwerp"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "195",
      "highPrice": "420",
      "priceCurrency": "EUR"
    }
  },
  europe: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Europe - Voyages Longue Distance",
    "description": "Voyages en Europe en autocar grand tourisme : Paris, Amsterdam, Prague, Allemagne avec guide francophone et transport confortable",
    "image": "https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg",
    "touristType": ["Cultural Tourism", "City Break", "Heritage Tourism", "Educational Tourism"],
    "availableLanguage": ["fr", "en", "nl", "de"],
    "containsPlace": [
      {
        "@type": "City",
        "name": "Paris",
        "description": "Capitale française, ville lumière",
        "sameAs": "https://en.wikipedia.org/wiki/Paris"
      },
      {
        "@type": "City",
        "name": "Amsterdam",
        "description": "Capitale des Pays-Bas, ville des canaux",
        "sameAs": "https://en.wikipedia.org/wiki/Amsterdam"
      },
      {
        "@type": "City",
        "name": "Prague",
        "description": "Capitale tchèque, ville aux cent clochers",
        "sameAs": "https://en.wikipedia.org/wiki/Prague"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "520",
      "highPrice": "890",
      "priceCurrency": "EUR"
    }
  }
};

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog Location Autocar Bruxelles",
  "description": "Guides de voyage, conseils pratiques et actualités sur le transport en autocar et les destinations européennes",
  "url": "https://www.locationautocar.be/blog",
  "inLanguage": "fr-BE",
  "publisher": {
    "@type": "Organization",
    "name": "Location Autocar Bruxelles",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.locationautocar.be/blog"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Transport en autocar"
    },
    {
      "@type": "Thing", 
      "name": "Tourisme européen"
    },
    {
      "@type": "Thing",
      "name": "Voyages de groupe"
    }
  ]
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact - Location Autocar Bruxelles",
  "description": "Contactez Location Autocar Bruxelles pour vos besoins de transport. Devis gratuit, service 24/7",
  "url": "https://www.locationautocar.be/contactez-nous",
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
    },
    "openingHours": [
      "Mo-Fr 08:00-22:00",
      "Sa-Su 10:00-22:00"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+32 2 580 03 25",
      "contactType": "customer service",
      "availableLanguage": ["French", "Dutch", "English"]
    }
  },
  "potentialAction": {
    "@type": "CommunicateAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.locationautocar.be/contactez-nous",
      "inLanguage": "fr-BE",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  }
};