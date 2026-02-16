/**
 * Canonical URLs for sitemap. Must match SEOHead canonical on each page.
 * Only list URLs that are the canonical version – avoids conflicting signals.
 * @see https://www.locationautocar.be
 */
export const CANONICAL_BASE = 'https://www.locationautocar.be';

/** Canonical paths only – no trailing slash except root. Matches ROUTES in canonicalRoutes.ts */
export const CANONICAL_PATHS = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/nos-services', priority: '0.9', changefreq: 'weekly' },
  { path: '/nos-services/transferts-aeroports', priority: '0.8', changefreq: 'monthly' },
  { path: '/nos-services/excursions-tourisme', priority: '0.8', changefreq: 'monthly' },
  { path: '/nos-services/voyages-affaires', priority: '0.8', changefreq: 'monthly' },
  { path: '/nos-services/mise-a-disposition', priority: '0.8', changefreq: 'monthly' },
  { path: '/notre-flotte', priority: '0.9', changefreq: 'monthly' },
  { path: '/notre-flotte/minibus', priority: '0.7', changefreq: 'monthly' },
  { path: '/notre-flotte/bus', priority: '0.7', changefreq: 'monthly' },
  { path: '/notre-flotte/autocars', priority: '0.7', changefreq: 'monthly' },
  { path: '/destinations', priority: '0.9', changefreq: 'weekly' },
  { path: '/destinations/bruxelles', priority: '0.7', changefreq: 'weekly' },
  { path: '/destinations/belgique', priority: '0.7', changefreq: 'weekly' },
  { path: '/destinations/europe', priority: '0.7', changefreq: 'weekly' },
  { path: '/lez-bruxelles', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.6', changefreq: 'weekly' },
  { path: '/contactez-nous', priority: '0.8', changefreq: 'monthly' },
  { path: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
  { path: '/politique-confidentialite', priority: '0.3', changefreq: 'yearly' },
];
