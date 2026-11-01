import type { Metadata } from 'next';

export const BASE = 'https://www.locationautocar.be';
export const OG_IMAGE =
  'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85';

/**
 * Equivalent pages across languages. Single source for hreflang (page metadata + sitemap):
 * every page in a group declares the same `languages`, which keeps them reciprocal.
 */
export const LANG_GROUPS: { fr: string; es?: string; nl?: string }[] = [
  { fr: '/', es: '/es', nl: '/nl' },
  { fr: '/location-autocar-bruxelles', es: '/es/alquiler-autocar-bruselas', nl: '/nl/autocar-huren-brussel' },
  { fr: '/destinations/bruges', es: '/es/excursiones-desde-bruselas', nl: '/nl/uitstappen-vanuit-brussel' },
  { fr: '/nos-services/transferts-aeroports', es: '/es/transfer-aeropuerto-bruselas', nl: '/nl/luchthavenvervoer-brussel' },
  { fr: '/notre-flotte/minibus', nl: '/nl/minibus-huren-brussel' },
  { fr: '/nos-services/location-bus-groupe', nl: '/nl/bus-met-chauffeur' },
  { fr: '/destinations/gand', nl: '/nl/uitstap-gent-antwerpen' },
  { fr: '/contactez-nous', nl: '/nl/contact' },
];

const url = (path: string) => `${BASE}${path}`;

export function languagesFor(path: string): Record<string, string> | undefined {
  const g = LANG_GROUPS.find((x) => x.fr === path || x.es === path || x.nl === path);
  if (!g) return undefined;
  return {
    fr: url(g.fr),
    ...(g.es && { es: url(g.es) }),
    ...(g.nl && { 'nl-BE': url(g.nl) }),
    'x-default': url(g.fr),
  };
}

export interface Locale {
  lang: string;
  ogLocale: string;
  siteName: string;
  ogAlt: string;
  home: string;
  homeLabel: string;
  navAria: string;
  breadcrumbAria: string;
  skipLink: string;
  nav: { href: string; label: string }[];
  contact: { phone: string; phoneHref: string; email: string; address: string; hours: string; city: string };
  areaServed: string[];
  footerTitle: string;
  footerText: string;
  frLink: string;
  faqTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaForm?: { href: string; label: string };
}

export function localeMetadata(
  locale: Locale,
  opts: { path: string; title: string; description: string }
): Metadata {
  const canonical = url(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical, languages: languagesFor(opts.path) },
    openGraph: {
      type: 'website',
      locale: locale.ogLocale,
      siteName: locale.siteName,
      title: opts.title,
      description: opts.description,
      url: canonical,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: locale.ogAlt }],
    },
  };
}
