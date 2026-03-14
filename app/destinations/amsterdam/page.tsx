import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { conversionCopy } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voyage en Autocar vers Amsterdam depuis Bruxelles | Location Autocar',
  description:
    "Organisez votre voyage en autocar de Bruxelles à Amsterdam avec chauffeur professionnel. Groupes de 8 à 55 personnes. Devis gratuit sous 24h.",
  alternates: { canonical: 'https://www.locationautocar.be/destinations/amsterdam' },
  openGraph: {
    title: 'Voyage en Autocar vers Amsterdam depuis Bruxelles | Location Autocar',
    description:
      "Organisez votre voyage en autocar de Bruxelles à Amsterdam avec chauffeur professionnel. Groupes de 8 à 55 personnes. Devis gratuit sous 24h.",
    url: 'https://www.locationautocar.be/destinations/amsterdam',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-shot-bicycles-leaned-again-fence-bridge-river.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

export default function AmsterdamPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-8 text-sm" aria-label="Fil d'Ariane">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/destinations" className="hover:text-blue-600">
                Destinations
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">Amsterdam</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
          <div className="lg:w-1/2">
            <Image
              src="https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-shot-bicycles-leaned-again-fence-bridge-river.jpg?tr=w-800,h-533,c-maintain_ratio,f-webp,q-85"
              alt="Voyage en autocar de Bruxelles à Amsterdam - Canaux"
              className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              width={800}
              height={533}
              loading="eager"
              priority
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Voyage en Autocar de Bruxelles à Amsterdam avec Chauffeur
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Organisez votre voyage en autocar de Bruxelles à Amsterdam avec Location Autocar Bruxelles. À environ 200
              km et 2h30 de trajet, Amsterdam est une destination prisée pour les groupes. Nous proposons des circuits
              vers la Venise du Nord : canaux historiques, Rijksmuseum, musée Van Gogh, quartier Jordaan… Nos autocars
              grand tourisme accueillent de 8 à 55 passagers et disposent de climatisation, toilettes et WiFi. Chauffeur
              professionnel, flexibilité des horaires et devis gratuit sous 24h.
            </p>
            <Link
              href="/contactez-nous"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              {conversionCopy.cta.principal}
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
