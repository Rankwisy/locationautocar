/**
 * JSON-LD schema builders pour Location Autocar Bruxelles.
 * Données métier vérifiées : ne pas modifier les valeurs (contexte Phase 1).
 */

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Location Autocar Bruxelles',
    alternateName: 'Autocar avec Chauffeur Bruxelles depuis 2007',
    url: 'https://www.locationautocar.be/',
    description:
      "Location d'autocar, bus et minibus avec chauffeur à Bruxelles depuis 2007. Flotte LEZ Euro 6+, 8 à 55 places, 19 communes, devis gratuit 24/7.",
    inLanguage: 'fr-BE',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.locationautocar.be/contactez-nous?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Location Autocar Bruxelles',
    alternateName: 'Autocar avec Chauffeur Bruxelles depuis 2007',
    url: 'https://www.locationautocar.be/',
    logo: 'https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png',
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg',
    telephone: '+3225800325',
    email: 'info@locationautocar.be',
    foundingDate: '2007',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Espèces, Carte bancaire, Virement bancaire',
    openingHours: ['Mo-Fr 09:30-18:30', 'Sa 13:30-18:30'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '13:30',
        closes: '18:30',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bd Industriel 9',
      postalCode: '1070',
      addressLocality: 'Bruxelles',
      addressCountry: 'BE',
      addressRegion: 'Région de Bruxelles-Capitale',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8366,
      longitude: 4.3367,
    },
    areaServed: [
      { '@type': 'City', name: 'Bruxelles' },
      { '@type': 'Country', name: 'Belgique' },
      { '@type': 'Continent', name: 'Europe' },
    ],
    hasMap: 'https://maps.google.com/?q=Bd+Industriel+9,+1070+Bruxelles',
    inLanguage: 'fr-BE',
  };
}

export function buildFAQSchema(faqs: { question: string; reponse: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.reponse,
      },
    })),
  };
}

export function buildServiceSchema(
  nom: string,
  description: string,
  url: string,
  serviceType: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: nom,
    description: description,
    url: url,
    serviceType: serviceType,
    inLanguage: 'fr-BE',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Location Autocar Bruxelles',
      url: 'https://www.locationautocar.be/',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bruxelles',
    },
  };
}

export function buildBreadcrumbSchema(items: { nom: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.nom,
      item: item.url,
    })),
  };
}

export function buildHowToSchema(steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Comment réserver un autocar avec chauffeur à Bruxelles',
    description: "Réservez votre autocar en 3 étapes simples. Devis gratuit sous 24h, sans engagement.",
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    totalTime: 'PT24H',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '0', name: 'Devis gratuit' },
  };
}

export function buildPriceSpecificationSchema(minPrice: number, maxPrice: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Location d\'autocar avec chauffeur à Bruxelles',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Location Autocar Bruxelles',
      url: 'https://www.locationautocar.be/',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: minPrice.toString(),
      highPrice: maxPrice.toString(),
      offerCount: '8',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: minPrice.toString(),
        maxPrice: maxPrice.toString(),
        priceCurrency: 'EUR',
        description: 'Selon type de véhicule (minibus, bus, autocar) et durée du trajet',
      },
    },
  };
}

export function buildItemListSchema(items: { name: string; url: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}

export function buildArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  authorName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: params.headline,
    description: params.description,
    image: [params.imageUrl],
    datePublished: params.datePublished,
    dateModified: params.datePublished,
    inLanguage: 'fr-BE',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
    author: {
      '@type': 'Organization',
      name: params.authorName,
      url: 'https://www.locationautocar.be/a-propos',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Location Autocar Bruxelles',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png',
      },
    },
  };
}

export function buildAggregateRatingSchema(ratingValue: number, reviewCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Location Autocar Bruxelles',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Nathalie V.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody:
          "Nous avons fait appel à leur service pour le transport de 45 collaborateurs lors de notre séminaire annuel. Ponctuel, professionnel, rien à redire. On renouvelle l'expérience.",
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'David M.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody:
          "Partenaire régulier pour toutes nos sorties scolaires depuis 3 ans. Les chauffeurs sont toujours à l'heure et très courtois avec les enfants. Je recommande sans hésitation.",
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Isabelle R.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody:
          "Autocar impeccable pour notre mariage. L'équipe a été réactive dès la demande de devis et le chauffeur adorable le jour J. Merci beaucoup !",
      },
    ],
  };
}
