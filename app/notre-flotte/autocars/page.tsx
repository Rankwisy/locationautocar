import React from 'react';
import Link from 'next/link';
import { Users, Shield, Wifi, Coffee, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import BreadcrumbNext from '@/components/SEO/BreadcrumbNext';
import { pageMeta, semanticKeywords } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageMeta.fleetAutocar.title,
  description: pageMeta.fleetAutocar.description,
  keywords: semanticKeywords.fleetAutocar.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/notre-flotte/autocars' },
  openGraph: {
    title: pageMeta.fleetAutocar.metaTitle,
    description: pageMeta.fleetAutocar.description,
    url: 'https://www.locationautocar.be/notre-flotte/autocars',
  },
};

const autocarModels = [
  {
    id: 1,
    name: 'Autocar Grand Tourisme Premium 55 places',
    capacity: 55,
    year: 2023,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Autocar grand tourisme 55 places premium pour voyages longue distance',
    features: ['Sièges inclinables cuir premium', 'Toilettes à bord', 'Kitchenette', 'WiFi haut débit'],
    description: 'Le summum du confort pour vos voyages longue distance en Europe.',
    priceRange: '€€€',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Autocar Tourisme Confort 49 places',
    capacity: 49,
    year: 2022,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Autocar 49 places confortable',
    features: ['Sièges inclinables ergonomiques', 'Climatisation', 'Réfrigérateur', 'Système multimédia'],
    description: 'Véhicule polyvalent pour tous vos voyages de groupe avec excellent rapport qualité-prix.',
    priceRange: '€€',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Autocar Luxe VIP 45 places',
    capacity: 45,
    year: 2023,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Autocar VIP 45 places de luxe',
    features: ['Sièges business class cuir', 'Tables individuelles', 'Bar à bord', 'Écrans 4K'],
    description: "Service VIP exclusif pour vos voyages d'affaires et événements de prestige.",
    priceRange: '€€€€',
    rating: 5.0,
  },
];

const advantages = [
  { icon: Users, title: 'Grande Capacité', description: '40 à 55 passagers pour grands groupes' },
  { icon: Shield, title: 'Sécurité Renforcée', description: 'Équipements de sécurité dernière génération' },
  { icon: Wifi, title: 'Connectivité Premium', description: 'WiFi satellite et écrans individuels' },
  { icon: Coffee, title: 'Services à Bord', description: 'Toilettes, kitchenette et bar' },
];

export default function AutocarsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <BreadcrumbNext items={[{ name: 'Notre Flotte', href: '/notre-flotte' }, { name: 'Autocars' }]} />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Location Autocar Grand Tourisme à Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nos <strong>autocars 40-55 places</strong> sont équipés toilettes, kitchenette, WiFi et sièges inclinables pour
            Paris, Amsterdam, Prague, Allemagne. Consultez nos{' '}
            <Link href="/destinations/europe" className="text-blue-600 hover:text-blue-700 font-semibold">
              circuits Europe
            </Link>{' '}
            et notre{' '}
            <Link href="/nos-services" className="text-blue-600 hover:text-blue-700 font-semibold">
              catalogue voyages
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {autocarModels.map((ac) => (
            <div key={ac.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img src={ac.image} alt={ac.imageAlt} className="w-full h-48 object-cover" loading="lazy" width={600} height={400} />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {ac.capacity} places
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{ac.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{ac.description}</p>
                <Link
                  href="/contactez-nous"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold text-center block"
                >
                  Demander un Devis
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pourquoi Choisir Nos Autocars ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <adv.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{adv.title}</h3>
                <p className="text-gray-600 text-sm">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/notre-flotte/minibus" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Minibus (8-16 places)</h3>
            <p className="text-gray-600 mb-4">Idéal pour petits groupes et transferts VIP</p>
            <span className="text-blue-600 font-semibold">Voir les minibus →</span>
          </Link>
          <Link href="/notre-flotte/bus" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Bus (20-35 places)</h3>
            <p className="text-gray-600 mb-4">Parfait équilibre capacité et confort</p>
            <span className="text-blue-600 font-semibold">Voir les bus →</span>
          </Link>
          <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Autocars (40-55 places)</h3>
            <p className="text-blue-700 mb-4">Vous êtes ici - Grands groupes longue distance</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Réservez Votre Autocar Grand Tourisme</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Expertise depuis 2007 dans les voyages longue distance. Autocars modernes, chauffeurs expérimentés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactez-nous"
              className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              Demander un Devis Gratuit
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
