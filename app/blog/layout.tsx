import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Location Autocar Bruxelles',
  description: 'Découvrez nos guides de voyage, conseils pratiques et actualités sur le transport en autocar. Destinations, itinéraires et astuces pour vos voyages de groupe.',
  keywords: 'blog voyage autocar, guides destinations, conseils transport groupe, excursions europe, circuits belgique',
  alternates: { canonical: 'https://www.locationautocar.be/blog' },
  openGraph: {
    title: 'Blog Voyage Autocar | Guides Destinations | Conseils Transport Groupe',
    description: 'Guides de voyage, conseils pratiques et actualités sur le transport en autocar à Bruxelles.',
    url: 'https://www.locationautocar.be/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
