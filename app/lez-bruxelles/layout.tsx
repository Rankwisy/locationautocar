import type { Metadata } from 'next';
import { semanticKeywords } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Zone LEZ Bruxelles - Flotte 100% Conforme Euro 6 | Location Autocar',
  description: 'Tous nos autocars sont conformes aux normes LEZ Bruxelles 2026. Flotte 100% Euro 6 garantissant accès illimité au centre-ville. Pas d\'amende, pas de restriction.',
  keywords: semanticKeywords.lez.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/lez-bruxelles' },
  openGraph: {
    title: 'LEZ Bruxelles 2026 | Flotte Autocar Euro 6 Conforme | Sans Amende',
    description: 'Flotte 100% Euro 6 conforme LEZ Bruxelles. Accès illimité centre-ville.',
    url: 'https://www.locationautocar.be/lez-bruxelles',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

export default function LezLayout({ children }: { children: React.ReactNode }) {
  return children;
}
