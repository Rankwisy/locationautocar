import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, CheckCircle, ArrowRight, Phone, Globe } from 'lucide-react';
import { pageMeta, semanticKeywords } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageMeta.destinationEurope.title,
  description: pageMeta.destinationEurope.description,
  keywords: semanticKeywords.europe.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/destinations/europe' },
  openGraph: {
    title: pageMeta.destinationEurope.metaTitle,
    description: pageMeta.destinationEurope.description,
    url: 'https://www.locationautocar.be/destinations/europe',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

const destinations = [
  { name: 'Paris - Ville Lumière', country: 'France', distance: '320 km - 3h30', duration: '2-3 jours', highlights: ['Tour Eiffel', 'Louvre', 'Champs-Élysées'] },
  { name: 'Amsterdam - Venise du Nord', country: 'Pays-Bas', distance: '200 km - 2h30', duration: '1-2 jours', highlights: ['Canaux', 'Rijksmuseum', 'Van Gogh'] },
  { name: 'Cologne - Métropole Rhénane', country: 'Allemagne', distance: '280 km - 3h', duration: '1-2 jours', highlights: ['Cathédrale gothique', 'Vieille ville', 'Rhin'] },
  { name: 'Luxembourg - Grand-Duché', country: 'Luxembourg', distance: '220 km - 2h30', duration: '1 jour', highlights: ['Vieille ville UNESCO', 'Casemates'] },
  { name: 'Prague - Ville aux Cent Clochers', country: 'République Tchèque', distance: '920 km - 9h', duration: '3-4 jours', highlights: ['Château de Prague', 'Pont Charles'] },
  { name: 'Strasbourg - Capitale Européenne', country: 'France', distance: '450 km - 4h30', duration: '1-2 jours', highlights: ['Cathédrale Notre-Dame', 'Petite France'] },
];

const circuits = [
  { name: 'Capitales du Nord', duration: '4 jours', destinations: ['Paris', 'Amsterdam', 'Bruxelles'], price: 'À partir de 680€' },
  { name: 'Europe Centrale', duration: '6 jours', destinations: ['Prague', 'Vienne', 'Budapest'], price: 'À partir de 890€' },
  { name: 'Vallée du Rhin', duration: '3 jours', destinations: ['Cologne', 'Strasbourg', 'Heidelberg'], price: 'À partir de 520€' },
];

export default function EuropePage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/destinations" className="hover:text-blue-600">Destinations</Link></li>
            <li>/</li>
            <li className="text-gray-900">Europe</li>
          </ol>
        </nav>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Voyages en Europe au départ de Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Paris, Amsterdam, Cologne, Luxembourg, Prague, Strasbourg : voyez nos <strong>circuits 2-7 jours</strong>.
            Autocar toilettes/WiFi, hôtels 3-4*, guides locaux. Consultez nos{' '}
            <Link href="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">voyages Europe</Link>{' '}
            et la{' '}
            <Link href="/notre-flotte/autocars" className="text-blue-600 hover:text-blue-700 font-semibold">flotte longue distance</Link>.
          </p>
        </div>
        <div className="mb-16">
          <img
            src="https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg?tr=w-1200,h-600,c-maintain_ratio,f-webp,q-85"
            alt="Tour Eiffel Paris - Voyages Europe en autocar"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            loading="eager"
          />
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Destinations Européennes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((d, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{d.name}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  {d.distance}
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {d.duration}
                </div>
                <div className="space-y-1 mb-4">
                  {d.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500" aria-hidden="true" />
                      {h}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-blue-600 font-medium">{d.country}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Circuits Européens</h2>
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
          <Link href="/destinations/belgique" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Belgique</h3>
            <p className="text-gray-600 mb-4">Bruges, Gand, Anvers : les trésors de la Belgique</p>
            <span className="text-blue-600 font-semibold">Explorer la Belgique →</span>
          </Link>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Partez à la Découverte de l&apos;Europe</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Circuits organisés, autocars grand tourisme, guides francophones. Explorez l&apos;Europe en toute sérénité.
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
