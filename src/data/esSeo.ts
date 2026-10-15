import type { Metadata } from 'next';

export const BASE = 'https://www.locationautocar.be';
export const OG_IMAGE =
  'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85';

export const ES_CONTACT = {
  phone: '+32 2 580 03 25',
  phoneHref: 'tel:+3225800325',
  email: 'info@locationautocar.be',
  address: 'Priemstraat 43 bus, 1000 Bruselas, Bélgica',
  hours: 'Lunes a viernes: 9:30–18:30',
};

/** Spanish ↔ French hreflang pairs. The French page must declare the same `languages` for reciprocity. */
export const hreflang = (esPath: string, frPath: string) => ({
  es: `${BASE}${esPath}`,
  fr: `${BASE}${frPath}`,
  'x-default': `${BASE}${frPath}`,
});

export function esMetadata(opts: { path: string; frPath: string; title: string; description: string }): Metadata {
  const url = `${BASE}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url, languages: hreflang(opts.path, opts.frPath) },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: 'Alquiler de Autocar en Bruselas',
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Alquiler de autocar con conductor en Bruselas' }],
    },
  };
}
