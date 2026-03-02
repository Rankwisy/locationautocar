import type { Metadata } from 'next';
import './globals.css';
import HeaderNext from '@/components/Layout/HeaderNext';
import FooterNext from '@/components/Layout/FooterNext';
import { organizationSchema, websiteSchema, localBusinessSchema } from '@/data/enhancedSchemas';
export const metadata: Metadata = {
  metadataBase: new URL('https://www.locationautocar.be'),
  title: {
    default: 'Location Autocar Bruxelles avec chauffeur – Comparatif devis gratuit',
    template: '%s',
  },
  description: "Location d'autocar avec chauffeur à Bruxelles depuis 2007. Services de transferts, excursions, voyages d'affaires en Europe. Devis gratuit.",
  keywords: ['location autocar bruxelles', 'bus chauffeur bruxelles', 'transfert aéroport', 'excursion groupe'],
  authors: [{ name: 'Location Autocar Bruxelles' }],
  creator: 'Location Autocar Bruxelles',
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'Location Autocar à Bruxelles',
    images: [
      {
        url: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
        width: 1200,
        height: 630,
        alt: 'Location Autocar Bruxelles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      'geo.region': 'BE-BRU',
      'geo.placename': 'Bruxelles',
      'geo.position': '50.8503;4.3517',
      ICBM: '50.8503, 4.3517',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [organizationSchema, websiteSchema, localBusinessSchema];

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="https://ik.imagekit.io/by733ltn6/locationautocar/favicon%20locationoutocarbe.png"
        />
        <link rel="sitemap" type="application/xml" href="https://www.locationautocar.be/sitemap.xml" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Aller au contenu principal
        </a>
        <HeaderNext />
        <main id="main-content" className="flex-1 min-h-screen" role="main">
          {children}
        </main>
        <FooterNext />
      </body>
    </html>
  );
}
