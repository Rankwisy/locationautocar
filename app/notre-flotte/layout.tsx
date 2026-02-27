import type { Metadata } from 'next';
import { pageMeta, semanticKeywords } from '@/data/seoData';

export const metadata: Metadata = {
  title: pageMeta.fleet.title,
  description: pageMeta.fleet.description,
  keywords: semanticKeywords.fleet.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/notre-flotte' },
  openGraph: {
    title: pageMeta.fleet.metaTitle,
    description: pageMeta.fleet.description,
    url: 'https://www.locationautocar.be/notre-flotte',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

export default function FlotteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
