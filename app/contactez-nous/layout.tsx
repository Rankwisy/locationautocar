import type { Metadata } from 'next';
import { Suspense } from 'react';
import { semanticKeywords } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Contactez Nous - Location Autocar Bruxelles',
  description: 'Contactez Location Autocar Bruxelles pour vos besoins de transport en autocar avec chauffeur. Devis gratuit, service 24/7. Bd Industriel 9, 1070 Anderlecht (Bruxelles).',
  keywords: semanticKeywords.contact.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/contactez-nous' },
  openGraph: {
    title: 'Contact Location Autocar Bruxelles | Devis Gratuit | Service 24/7',
    description: 'Contactez-nous pour un devis gratuit. Service 24/7, Bd Industriel 9, 1070 Bruxelles.',
    url: 'https://www.locationautocar.be/contactez-nous',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="py-12 container mx-auto px-4 text-center">Chargement...</div>}>{children}</Suspense>;
}
