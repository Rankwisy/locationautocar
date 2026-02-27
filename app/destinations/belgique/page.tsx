import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react';
import { pageMeta, semanticKeywords } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageMeta.destinationBelgique.title,
  description: pageMeta.destinationBelgique.description,
  keywords: semanticKeywords.belgique.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/destinations/belgique' },
  openGraph: {
    title: pageMeta.destinationBelgique.metaTitle,
    description: pageMeta.destinationBelgique.description,
    url: 'https://www.locationautocar.be/destinations/belgique',
  },
};

const destinations = [
  { name: 'Bruges - Venise du Nord', region: 'Flandre Occidentale', distance: '100 km de Bruxelles', duration: '1 jour', highlights: ['Centre historique UNESCO', 'Canaux romantiques', 'Beffroi médiéval'] },
  { name: 'Gand - Joyau Flamand', region: 'Flandre Orientale', distance: '60 km de Bruxelles', duration: '1 jour', highlights: ['Château des Comtes', 'Cathédrale Saint-Bavon', 'Agneau mystique'] },
  { name: 'Anvers - Capitale du Diamant', region: 'Province d\'Anvers', distance: '45 km de Bruxelles', duration: '1 jour', highlights: ['Cathédrale Notre-Dame', 'Maison Rubens', 'Port d\'Anvers'] },
  { name: 'Dinant - Perle de la Meuse', region: 'Province de Namur', distance: '90 km de Bruxelles', duration: '1 jour', highlights: ['Citadelle de Dinant', 'Collégiale Notre-Dame', 'Croisière Meuse'] },
];

const circuits = [
  { name: 'Triangle d\'Or Flamand', duration: '2 jours', destinations: ['Bruges', 'Gand', 'Anvers'], price: 'À partir de 380€' },
  { name: 'Vallée de la Meuse', duration: '1 jour', destinations: ['Dinant', 'Namur', 'Huy'], price: 'À partir de 195€' },
  { name: 'Châteaux et Abbayes', duration: '2 jours', destinations: ['Orval', 'Rochefort', 'Chimay'], price: 'À partir de 420€' },
];

export default function BelgiquePage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/destinations" className="hover:text-blue-600">Destinations</Link></li>
            <li>/</li>
            <li className="text-gray-900">Belgique</li>
          </ol>
        </nav>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Circuits en Belgique au départ de Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bruges canaux, Gand universitaire, Anvers diamantaire, Dinant Meuse. Circuits 1 jour ou Triangle d&apos;Or 2 jours.
            Patrimoine UNESCO, bières trappistes, chocolat. Voyagez avec nos{' '}
            <Link href="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">circuits Belgique</Link>{' '}
            et notre{' '}
            <Link href="/notre-flotte/autocars" className="text-blue-600 hover:text-blue-700 font-semibold">autocar grand tourisme</Link>.
          </p>
        </div>
        <div className="mb-16">
          <img
            src="https://ik.imagekit.io/by733ltn6/locationautocar/locationautocar-image-logo-1.jpg?updatedAt=1750900561845&tr=w-1200,h-600,c-maintain_ratio,f-webp,q-85"
            alt="Location Autocar Bruxelles - Circuits découverte Belgique"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Destinations Incontournables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((d, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{d.name}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  {d.distance}
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {d.duration}
                </div>
                <div className="space-y-1">
                  {d.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Circuits Organisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {circuits.map((c, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{c.name}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {c.duration}
                  <span className="text-blue-600 font-semibold">{c.price}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.destinations.map((dest, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{dest}</span>
                  ))}
                </div>
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
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/destinations/bruxelles" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Bruxelles</h3>
            <p className="text-gray-600 mb-4">Capitale européenne : Grand-Place, Atomium, institutions UE</p>
            <span className="text-blue-600 font-semibold">Découvrir Bruxelles →</span>
          </Link>
          <Link href="/destinations/europe" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Europe</h3>
            <p className="text-gray-600 mb-4">Voyages longue distance : Paris, Amsterdam, Allemagne</p>
            <span className="text-blue-600 font-semibold">Explorer l&apos;Europe →</span>
          </Link>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Explorez la Belgique avec Nous</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Circuits organisés, guides francophones expérimentés. Découvrez les trésors cachés de la Belgique depuis 2007.
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
