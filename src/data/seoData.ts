/**
 * Données SEO globales : mots-clés sémantiques, termes NLP, zones hyperlocales Bruxelles,
 * formulations conversion et ancres des liens internes.
 */

import { ROUTES } from './canonicalRoutes';

// ─── Meta uniques par page (éviter duplication) ─────────────────────────────
export const pageMeta: Record<string, { title: string; metaTitle: string; description: string }> = {
  fleet: {
    title: "Notre Flotte - Location Autocar Bruxelles",
    metaTitle: "Flotte Bus Minibus Autocar Bruxelles | Euro 6 LEZ | Choisissez Votre Véhicule",
    description: "Comparez minibus 8-16 places, bus 20-35 et autocars 40-55 places. Tous Euro 6, accès LEZ Bruxelles garanti. Climatisation, WiFi, chauffeur pro. Réservez 24/7.",
  },
  fleetMinibus: {
    title: "Location Minibus Bruxelles | 8-16 Places Mercedes",
    metaTitle: "Minibus Mercedes Chauffeur | Transferts VIP & Excursions Petits Groupes",
    description: "Minibus Mercedes 8-16 places : transferts aéroport Zaventem/Charleroi, excursions Bruxelles, séminaires. Sièges cuir, WiFi, climatisation. Devis rapide.",
  },
  fleetBus: {
    title: "Location Bus Bruxelles | 20-35 Places Tourisme",
    metaTitle: "Bus Touristique 20-35 Places | Excursions Belgique Europe",
    description: "Bus 20-35 places pour excursions Bruges, Gand, Paris, Amsterdam. Équilibre confort/capacité. Climatisation, prises USB. Idéal groupes moyens.",
  },
  fleetAutocar: {
    title: "Location Autocar Grand Tourisme | 40-55 Places",
    metaTitle: "Autocar Grand Tourisme Europe | Paris Amsterdam Prague | Toilettes WiFi",
    description: "Autocars 40-55 places : circuits Europe, Paris, Amsterdam, Prague. Toilettes, kitchenette, WiFi. Confort longue distance depuis Bruxelles.",
  },
  destinations: {
    title: "Destinations Autocar | Bruxelles Belgique Europe",
    metaTitle: "Circuits Autocar Bruxelles | Bruges Paris Amsterdam | Guides Francophones",
    description: "Hub de nos circuits : Bruxelles (Grand-Place, Atomium), Belgique (Bruges, Gand, Anvers), Europe (Paris, Amsterdam, Prague). Comparez les offres.",
  },
  destinationBruxelles: {
    title: "Excursions Bruxelles | Grand-Place Atomium Quartier Européen",
    metaTitle: "Visite Guidée Bruxelles Autocar | Circuits Capitale Europe",
    description: "Circuits Bruxelles : Grand-Place UNESCO, Atomium, quartier européen, Manneken-Pis. Transport et guide inclus. Circuits classique, moderne ou gourmand.",
  },
  destinationBelgique: {
    title: "Circuits Belgique | Bruges Gand Anvers Dinant",
    metaTitle: "Excursions Belgique Autocar | Triangle Flamand Vallée Meuse",
    description: "Bruges UNESCO, Gand médiéval, Anvers diamantaire, Dinant Meuse. Circuits 1-2 jours. Patrimoine, bières trappistes, chocolat.",
  },
  destinationEurope: {
    title: "Voyages Europe | Paris Amsterdam Prague Cologne",
    metaTitle: "Circuits Europe Autocar | Capitales Nord & Centrale",
    description: "Paris, Amsterdam, Prague, Cologne, Luxembourg, Strasbourg. Voyages 2-7 jours. Autocar grand tourisme, hébergements sélectionnés.",
  },
};

// ─── Mots-clés sémantiques par page (moins de chevauchement) ─────────────────
export const semanticKeywords: Record<string, string[]> = {
  home: [
    'location autocar bruxelles',
    'bus chauffeur bruxelles',
    'minibus location belgique',
    'transfert aéroport bruxelles',
    'excursion groupe europe',
    'voyage affaires autocar',
    'navette aéroport zaventem',
    'autocar euro 6 LEZ bruxelles',
    'transport scolaire bruxelles',
    'location bus événement bruxelles',
  ],
  services: [
    'transferts aéroports bruxelles',
    'excursions touristiques belgique',
    'voyages affaires séminaire',
    'mise à disposition autocar',
    'navette aéroport charleroi',
    'circuit guidé bruxelles',
    'transport groupe entreprise',
  ],
  fleet: [
    'flotte autocar bruxelles',
    'choisir véhicule groupe',
    'minibus bus autocar comparatif',
    'véhicules euro 6 bruxelles',
    'réservation flotte 24/7',
  ],
  fleetMinibus: [
    'minibus mercedes bruxelles',
    'transfert vip 8 places',
    'minibus 16 places chauffeur',
    'excursion petits groupes',
    'navette aéroport minibus',
  ],
  fleetBus: [
    'bus 30 places excursion',
    'bus touristique belgique',
    'location bus groupe moyen',
    'excursion bruges bus',
    'bus climatisation wifi',
  ],
  fleetAutocar: [
    'autocar grand tourisme europe',
    'voyage paris autocar',
    'autocar 50 places',
    'circuit longue distance',
    'autocar toilettes wifi',
  ],
  bruxelles: [
    'excursion bruxelles grand-place',
    'visite atomium bruxelles',
    'circuit quartier européen',
    'tour manneken-pis',
    'excursion bruxelles 1 jour',
  ],
  belgique: [
    'circuit bruges gand anvers',
    'excursion bruges 1 jour',
    'triangle flamand autocar',
    'vallée meuse dinant',
    'patrimoine unesco belgique',
  ],
  europe: [
    'voyage paris autocar',
    'circuit amsterdam bruxelles',
    'voyage prague autocar',
    'cologne strasbourg autocar',
    'capitales europe nord',
  ],
  lez: [
    'LEZ bruxelles 2026',
    'zone basse émission bruxelles',
    'autocar euro 6 centre-ville',
    'amende LEZ bruxelles',
    'véhicule conforme zone emission',
  ],
  contact: [
    'devis location autocar',
    'prix autocar bruxelles',
    'réservation bus groupe',
    'contact location autocar bruxelles',
  ],
};

// ─── Termes NLP (intentions de recherche, variantes, questions) ─────────────
export const nlpTerms = {
  intentions: {
    informationnelle: [
      'combien coûte',
      'quel prix',
      'tarif location',
      'devis gratuit',
      'prix autocar',
      'coût transfert',
    ],
    transactionnelle: [
      'réserver',
      'louer',
      'commander',
      'réservation',
      'devis',
      'contact',
    ],
    navigationnelle: [
      'location autocar bruxelles',
      'bus chauffeur belgique',
      'transfert aéroport',
    ],
  },
  variations: {
    autocar: ['autocar', 'car', 'bus grand tourisme', 'car coach', 'autocar grand luxe'],
    location: ['location', 'location avec chauffeur', 'mise à disposition', 'chauffage'],
    bruxelles: ['Bruxelles', 'Brussels', 'capitale belgique', 'capitale europe', '1000 Bruxelles'],
    prix: ['prix', 'tarif', 'coût', 'devis', 'combien', 'budget', 'tarification'],
  },
  questions: [
    'Combien coûte un autocar avec chauffeur à Bruxelles ?',
    'Quel est le prix d’un transfert aéroport Bruxelles ?',
    'Location minibus bruxelles prix ?',
    'Devis gratuit autocar bruxelles ?',
    'Autocar LEZ bruxelles tarif ?',
  ],
};

// ─── Zones hyperlocales Bruxelles (communes, quartiers) ─────────────────────
export const bruxellesHyperlocal = {
  communes: [
    { nom: 'Anderlecht', code: '1070', slug: 'anderlecht' },
    { nom: 'Auderghem', code: '1160', slug: 'auderghem' },
    { nom: 'Berchem-Sainte-Agathe', code: '1082', slug: 'berchem-sainte-agathe' },
    { nom: 'Bruxelles-Ville', code: '1000', slug: 'bruxelles-centre' },
    { nom: 'Etterbeek', code: '1040', slug: 'etterbeek' },
    { nom: 'Evere', code: '1140', slug: 'evere' },
    { nom: 'Forest', code: '1190', slug: 'forest' },
    { nom: 'Ganshoren', code: '1083', slug: 'ganshoren' },
    { nom: 'Ixelles', code: '1060', slug: 'ixelles' },
    { nom: 'Jette', code: '1090', slug: 'jette' },
    { nom: 'Koekelberg', code: '1081', slug: 'koekelberg' },
    { nom: 'Molenbeek-Saint-Jean', code: '1080', slug: 'molenbeek' },
    { nom: 'Saint-Gilles', code: '1060', slug: 'saint-gilles' },
    { nom: 'Saint-Josse-ten-Noode', code: '1210', slug: 'saint-josse' },
    { nom: 'Schaerbeek', code: '1030', slug: 'schaerbeek' },
    { nom: 'Uccle', code: '1180', slug: 'uccle' },
    { nom: 'Watermael-Boitsfort', code: '1170', slug: 'watermael-boitsfort' },
    { nom: 'Woluwe-Saint-Lambert', code: '1200', slug: 'woluwe-saint-lambert' },
    { nom: 'Woluwe-Saint-Pierre', code: '1150', slug: 'woluwe-saint-pierre' },
  ],
  quartiersStrategiques: [
    { nom: 'Grand-Place / Centre-ville', zone: '1000 Bruxelles' },
    { nom: 'Quartier Européen', zone: '1040 Etterbeek / 1047 Evere' },
    { nom: 'Atomium / Laeken', zone: '1020 Laeken' },
    { nom: 'Louise / Ixelles', zone: '1050 Ixelles' },
    { nom: 'Bruxelles-Midi', zone: '1060 Saint-Gilles' },
    { nom: 'Schuman', zone: '1040 Etterbeek' },
    { nom: 'Nord / Rogier', zone: '1210 Saint-Josse' },
  ],
  pointsClés: [
    'Aéroport Bruxelles-National Zaventem',
    'Aéroport Charleroi',
    'Gare Bruxelles-Midi',
    'Gare Bruxelles-Nord',
    'Gare Bruxelles-Central',
    'Parc du Cinquantenaire',
    'Grand-Place',
    'Atomium',
  ],
};

// ─── Formulations conversion (CTA, promesses, garanties) ────────────────────
export const conversionCopy = {
  cta: {
    principal: 'Demander un Devis Gratuit',
    secondaire: 'Obtenir mon Devis',
    urgence: 'Réserver Maintenant',
    contact: 'Contactez-nous pour un Devis',
    decouvrir: 'Découvrir nos Tarifs',
  },
  promesses: [
    'Devis gratuit sous 24h',
    'Pas de frais cachés',
    'Tarification transparente',
    'Vous ne payez que ce que vous utilisez',
    'Support disponible 24/7',
    'Flotte 100% conforme LEZ Bruxelles',
  ],
  objections: [
    'Sans engagement',
    'Annulation gratuite jusqu\'à 48h avant',
    'Chauffeurs professionnels qualifiés',
    'Véhicules Euro 6 - accès centre Bruxelles garanti',
  ],
};

// ─── Ancres des liens internes (url → ancres optimisées) ───────────────────
export const internalLinkAnchors: Record<string, string[]> = {
  [ROUTES.HOME]: [
    'Location Autocar Bruxelles',
    'Accueil Location Autocar',
    'Devis gratuit Bruxelles',
  ],
  [ROUTES.SERVICES]: [
    'Nos services transport autocar',
    'Services location bus Bruxelles',
    'Transferts et excursions',
  ],
  [ROUTES.SERVICE_TRANSFERTS]: [
    'Transferts aéroports Bruxelles',
    'Navette aéroport Zaventem',
    'Transfert aéroport Charleroi',
    'Prix transfert aéroport Bruxelles',
  ],
  [ROUTES.SERVICE_EXCURSIONS]: [
    'Excursions touristiques Bruxelles',
    'Circuits guidés Belgique',
    'Excursions Grand-Place Atomium',
  ],
  [ROUTES.SERVICE_VOYAGES_AFFAIRES]: [
    'Voyages d\'affaires Bruxelles',
    'Transport séminaire entreprise',
    'Autocar événement corporate',
  ],
  [ROUTES.SERVICE_MISE_A_DISPOSITION]: [
    'Mise à disposition autocar Bruxelles',
    'Location autocar à l\'heure',
    'Prix location autocar journée',
  ],
  [ROUTES.FLOTTE]: [
    'Notre flotte autocars',
    'Bus et minibus Bruxelles',
    'Véhicules disponibles et tarifs',
  ],
  [ROUTES.FLOTTE_MINIBUS]: [
    'Location minibus Bruxelles prix',
    'Minibus 8-16 places chauffeur',
    'Prix minibus avec chauffeur',
  ],
  [ROUTES.FLOTTE_BUS]: [
    'Location bus 30 places Bruxelles',
    'Bus groupe excursion',
    'Tarif bus avec chauffeur',
  ],
  [ROUTES.FLOTTE_AUTOCARS]: [
    'Location autocar grand tourisme',
    'Autocar 50 places prix',
    'Tarif autocar Europe',
  ],
  [ROUTES.LEZ]: [
    'Autocar conforme LEZ Bruxelles',
    'Zone basse émission Bruxelles',
    'Euro 6 centre Bruxelles',
  ],
  [ROUTES.DESTINATIONS]: [
    'Destinations depuis Bruxelles',
    'Excursions Belgique Europe',
    'Circuits Bruxelles Paris Amsterdam',
  ],
  [ROUTES.DESTINATION_BRUXELLES]: [
    'Excursions Bruxelles',
    'Visite guidée Grand-Place Atomium',
    'Circuit Bruxelles prix',
  ],
  [ROUTES.DESTINATION_BELGIQUE]: [
    'Excursions Bruges Gand Anvers',
    'Circuits Belgique en autocar',
  ],
  [ROUTES.DESTINATION_EUROPE]: [
    'Voyages Paris Amsterdam en autocar',
    'Circuits Europe depuis Bruxelles',
    'Prix excursion Paris Bruxelles',
  ],
  [ROUTES.CONTACT]: [
    'Devis gratuit location autocar',
    'Contact et tarifs',
    'Obtenir un devis personnalisé',
    'Demander un devis',
  ],
  [ROUTES.BLOG]: [
    'Blog location autocar',
    'Conseils prix et réservation',
  ],
};

/** Retourne une ancre aléatoire pour une URL (évite sur-optimisation) */
export function getInternalLinkAnchor(path: string, variant = 0): string {
  const anchors = internalLinkAnchors[path];
  if (!anchors || anchors.length === 0) return 'En savoir plus';
  return anchors[variant % anchors.length];
}
