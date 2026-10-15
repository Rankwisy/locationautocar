import type { Metadata } from 'next';
import { Suspense } from 'react';
import { semanticKeywords } from '@/data/seoData';

export const metadata: Metadata = {
  title: 'Contactez-nous | Devis Gratuit Autocar Bruxelles',
  description:
    "Demandez un devis gratuit pour votre location d'autocar à Bruxelles. Réponse sous 24h. Appelez le +32 2 580 03 25 ou écrivez-nous.",
  keywords: semanticKeywords.contact.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/contactez-nous' },
  openGraph: {
    title: 'Contactez-nous | Devis Gratuit Autocar Bruxelles',
    description:
      "Demandez un devis gratuit pour votre location d'autocar à Bruxelles. Réponse sous 24h. Appelez le +32 2 580 03 25 ou écrivez-nous.",
    url: 'https://www.locationautocar.be/contactez-nous',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="py-12 container mx-auto px-4 text-center">Chargement...</div>}>{children}</Suspense>;
}
