/**
 * Données centralisées pour les schémas JSON-LD (FAQ homepage, services).
 */

export const HOMEPAGE_FAQ = [
  {
    question: "Quel est le prix d'une location d'autocar à Bruxelles ?",
    reponse:
      "Nos tarifs varient selon le type de véhicule, la durée et la destination. Contactez-nous pour un devis gratuit et personnalisé. Minibus 8-16 places, bus 20-35 places, autocars 40-55 places.",
  },
  {
    question: 'Vos autocars sont-ils conformes à la LEZ de Bruxelles ?',
    reponse:
      "Oui, toute notre flotte est 100% conforme aux normes Euro 6 ou supérieures. Vous pouvez circuler librement dans la Zone de Basses Émissions de Bruxelles sans risque d'amende (350€).",
  },
  {
    question: "Depuis combien de temps êtes-vous actifs ?",
    reponse:
      "Location Autocar Bruxelles est actif depuis 2007, avec plus de 15 ans d'expérience dans le transport de groupes en Belgique et en Europe.",
  },
  {
    question: 'Dans quelles communes de Bruxelles intervenez-vous ?',
    reponse:
      "Nous couvrons les 19 communes de la Région de Bruxelles-Capitale : Grand-Place, Schuman, Atomium, Ixelles, Schaerbeek, Anderlecht et toutes les autres communes bruxelloises.",
  },
  {
    question: 'Proposez-vous des transferts vers l\'aéroport de Zaventem ?',
    reponse:
      "Oui, nous assurons des navettes et transferts vers Brussels Airport (Zaventem) et l'aéroport de Charleroi pour les groupes et entreprises, disponibles 24h/7j.",
  },
  {
    question: 'Comment obtenir un devis rapidement ?',
    reponse:
      "Appelez-nous au +32 2 580 03 25 (Lun-Ven 9h30-18h30, Sam 13h30-18h30 — urgences 7j/7) ou remplissez notre formulaire en ligne. Nous répondons rapidement avec un devis gratuit et sans engagement.",
  },
];

export const SERVICES_SCHEMA_DATA = [
  {
    nom: 'Transferts Aéroports Bruxelles',
    description:
      'Navettes et transferts en autocar entre Bruxelles et les aéroports. Groupes et entreprises, 24h/7j.',
    url: 'https://www.locationautocar.be/nos-services/transferts-aeroports',
    serviceType: 'Transport aéroport',
  },
  {
    nom: 'Autocar Mariage Bruxelles',
    description:
      "Location d'autocar pour mariages à Bruxelles. Transport des invités avec chauffeur élégant et ponctuel.",
    url: 'https://www.locationautocar.be/nos-services/autocar-mariage',
    serviceType: 'Transport mariage',
  },
  {
    nom: 'Location Bus Groupe Bruxelles',
    description:
      'Location de bus pour groupes à Bruxelles. Minibus 8-16 places, bus 20-35 places, autocars 40-55 places.',
    url: 'https://www.locationautocar.be/nos-services/location-bus-groupe',
    serviceType: 'Transport groupe',
  },
  {
    nom: 'Navette Entreprise Bruxelles',
    description:
      "Navettes d'entreprise à Bruxelles. Séminaires, conférences, événements, transferts inter-sites.",
    url: 'https://www.locationautocar.be/nos-services/navette-entreprise',
    serviceType: 'Transport entreprise',
  },
  {
    nom: 'Excursions Touristiques depuis Bruxelles',
    description:
      "Circuits touristiques en autocar depuis Bruxelles vers Paris, Amsterdam, la Belgique et l'Europe.",
    url: 'https://www.locationautocar.be/nos-services/excursions-tourisme',
    serviceType: 'Excursion touristique',
  },
  {
    nom: 'Voyages d\'Affaires Bruxelles',
    description:
      "Transport d'affaires en autocar à Bruxelles. Corporate, délégations, conférences avec chauffeur professionnel.",
    url: 'https://www.locationautocar.be/nos-services/voyages-affaires',
    serviceType: 'Transport affaires',
  },
];
