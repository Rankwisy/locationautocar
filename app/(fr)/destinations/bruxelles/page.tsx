import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, CheckCircle, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import { pageMeta, semanticKeywords, bruxellesHyperlocal } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageMeta.destinationBruxelles.title,
  description: pageMeta.destinationBruxelles.description,
  keywords: semanticKeywords.bruxelles.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/destinations/bruxelles' },
  openGraph: {
    title: pageMeta.destinationBruxelles.metaTitle,
    description: pageMeta.destinationBruxelles.description,
    url: 'https://www.locationautocar.be/destinations/bruxelles',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

const attractions = [
  {
    name: 'Grand-Place de Bruxelles',
    description: 'Patrimoine mondial UNESCO, cœur historique de la capitale',
    duration: '1-2 heures',
    highlights: ['Hôtel de Ville gothique', 'Maisons des corporations', 'Musée de la Ville'],
  },
  {
    name: 'Atomium',
    description: 'Symbole de Bruxelles, structure futuriste de 1958',
    duration: '2-3 heures',
    highlights: ['Vue panoramique', 'Expositions', 'Restaurant panoramique'],
  },
  {
    name: 'Quartier Royal',
    description: 'Palais Royal, Musées Royaux des Beaux-Arts',
    duration: '2-4 heures',
    highlights: ['Palais Royal', 'Musées d\'art', 'Parc de Bruxelles'],
  },
];

const circuits = [
  {
    name: 'Bruxelles Classique',
    duration: '4 heures',
    price: 'À partir de 180€',
    description: 'Grand-Place, Manneken-Pis, Galeries Royales, Cathédrale',
  },
  {
    name: 'Bruxelles Moderne',
    duration: '6 heures',
    price: 'À partir de 250€',
    description: 'Atomium, Quartier européen, Laeken, Parc du Cinquantenaire',
  },
  {
    name: 'Bruxelles Gourmande',
    duration: '5 heures',
    price: 'À partir de 220€',
    description: 'Marchés, chocolatiers, brasseries, dégustation de bières',
  },
];

export default function BruxellesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/destinations" className="hover:text-blue-600">Destinations</Link></li>
            <li>/</li>
            <li className="text-gray-900">Bruxelles</li>
          </ol>
        </nav>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Excursions à Bruxelles</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Circuits à la carte : <strong>Classique</strong> (Grand-Place, Manneken-Pis), <strong>Moderne</strong> (Atomium),{' '}
            <strong>Gourmand</strong> (chocolat, bières). Transport et guide inclus. Réservez nos{' '}
            <InternalLinkNext to="/nos-services/excursions-tourisme" anchor="excursions Bruxelles" /> avec{' '}
            <InternalLinkNext to="/notre-flotte/bus" anchor="bus confortable" />.
          </p>
        </div>
        <div className="mb-16">
          <img
            src="https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-1200,h-600,c-maintain_ratio,f-webp,q-85"
            alt="Grand-Place de Bruxelles avec ses maisons dorées"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Attractions Incontournables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attr, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{attr.name}</h3>
                <p className="text-gray-600 mb-3">{attr.description}</p>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  Durée : {attr.duration}
                </div>
                <div className="space-y-1">
                  {attr.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500" aria-hidden="true" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Circuits à Bruxelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {circuits.map((c, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{c.name}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>{c.duration}</span>
                  <span className="text-blue-600 font-semibold">{c.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{c.description}</p>
                <Link
                  href="/contactez-nous"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold text-center block"
                >
                  Réserver ce Circuit
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16 bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Zones desservies à Bruxelles</h2>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Prise en charge dans toutes les communes bruxelloises : centre-ville, quartier européen, Atomium, 19 communes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {bruxellesHyperlocal.quartiersStrategiques.slice(0, 7).map((zone, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" aria-hidden="true" />
                {zone.nom}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Aéroport Zaventem, Charleroi, Gares Midi, Nord et Central •{' '}
            <InternalLinkNext to="/lez-bruxelles" anchor="Autocar conforme LEZ Bruxelles" className="text-blue-600 hover:text-blue-700" />
          </p>
        </div>
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InternalLinkNext
            to="/destinations/belgique"
            anchor="Excursions Bruges Gand Anvers"
            className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">Belgique</h3>
            <p className="text-gray-600 mb-4">Découvrez les trésors : Bruges, Gand, Anvers</p>
            <span className="text-blue-600 font-semibold">Explorer la Belgique →</span>
          </InternalLinkNext>
          <InternalLinkNext
            to="/destinations/europe"
            anchor="Voyages Paris Amsterdam en autocar"
            className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">Europe</h3>
            <p className="text-gray-600 mb-4">Voyages longue distance : Paris, Amsterdam, Allemagne</p>
            <span className="text-blue-600 font-semibold">Découvrir l&apos;Europe →</span>
          </InternalLinkNext>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Réservez Votre Excursion à Bruxelles</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Guides expérimentés, transport confortable. Découvrez Bruxelles avec les spécialistes depuis 2007.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactez-nous"
              className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              Demander un Devis
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:+3225800325"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Appeler Maintenant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
