/**
 * Canonical URL paths for the site. Use these for all internal links
 * so navigation and SEO point to a single canonical URL per page.
 */
export const ROUTES = {
  HOME: '/',
  SERVICES: '/nos-services',
  SERVICE_TRANSFERTS: '/nos-services/transferts-aeroports',
  SERVICE_EXCURSIONS: '/nos-services/excursions-tourisme',
  SERVICE_VOYAGES_AFFAIRES: '/nos-services/voyages-affaires',
  SERVICE_MISE_A_DISPOSITION: '/nos-services/mise-a-disposition',
  FLOTTE: '/notre-flotte',
  FLOTTE_BUS: '/notre-flotte/bus',
  FLOTTE_MINIBUS: '/notre-flotte/minibus',
  FLOTTE_AUTOCARS: '/notre-flotte/autocars',
  LEZ: '/lez-bruxelles',
  DESTINATIONS: '/destinations',
  DESTINATION_BRUXELLES: '/destinations/bruxelles',
  DESTINATION_BELGIQUE: '/destinations/belgique',
  DESTINATION_EUROPE: '/destinations/europe',
  BLOG: '/blog',
  CONTACT: '/contactez-nous',
  MENTIONS_LEGALES: '/mentions-legales',
  POLITIQUE_CONFIDENTIALITE: '/politique-confidentialite',
} as const;

/** All main canonical pages (for footer site map / accessibility). */
export const MAIN_CANONICAL_PAGES: { label: string; path: string }[] = [
  { label: 'Accueil', path: ROUTES.HOME },
  { label: 'Nos Services', path: ROUTES.SERVICES },
  { label: 'Notre Flotte', path: ROUTES.FLOTTE },
  { label: 'Destinations', path: ROUTES.DESTINATIONS },
  { label: 'Blog', path: ROUTES.BLOG },
  { label: 'Contact', path: ROUTES.CONTACT },
];
