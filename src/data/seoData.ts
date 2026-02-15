/**
 * Données SEO globales : mots-clés sémantiques, termes NLP, zones hyperlocales Bruxelles,
 * formulations conversion et ancres des liens internes.
 */

import { ROUTES } from './canonicalRoutes';

// ─── Mots-clés sémantiques par page ─────────────────────────────────────────
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
    'location minibus bruxelles',
    'location bus 30 places',
    'autocar grand tourisme',
    'minibus 16 places chauffeur',
    'bus climatisation wifi',
    'autocar euro 6 bruxelles',
  ],
  bruxelles: [
    'excursion bruxelles grand-place',
    'visite guidée atomium',
    'tour bruxelles autocar',
    'circuit bruxelles capitale europe',
    'excursion quartier européen bruxelles',
    'visite guidée bruxelles francophone',
  ],
  belgique: [
    'excursion bruges gand',
    'circuit belgique autocar',
    'voyage scolaire belgique',
    'excursion anvers bruxelles',
  ],
  europe: [
    'voyage paris autocar bruxelles',
    'excursion amsterdam bruxelles',
    'circuit europe autocar',
    'voyage longue distance europe',
  ],
  lez: [
    'LEZ bruxelles autocar',
    'zone basse émission bruxelles',
    'autocar conforme LEZ',
    'euro 6 bruxelles centre',
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
