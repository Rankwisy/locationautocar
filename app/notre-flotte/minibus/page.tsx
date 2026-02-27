import React from 'react';
import Link from 'next/link';
import { Users, Shield, Wifi, Award, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import BreadcrumbNext from '@/components/SEO/BreadcrumbNext';
import { pageMeta, semanticKeywords } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageMeta.fleetMinibus.title,
  description: pageMeta.fleetMinibus.description,
  keywords: semanticKeywords.fleetMinibus.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/notre-flotte/minibus' },
  openGraph: {
    title: pageMeta.fleetMinibus.metaTitle,
    description: pageMeta.fleetMinibus.description,
    url: 'https://www.locationautocar.be/notre-flotte/minibus',
  },
};

const minibusModels = [
  {
    id: 1,
    name: 'Mercedes Sprinter Luxe 16 places',
    capacity: 16,
    year: 2023,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Minibus Mercedes Sprinter luxe 16 places avec chauffeur professionnel',
    features: ['Sièges cuir ergonomiques', 'Climatisation bi-zone', 'WiFi gratuit', 'Système audio premium'],
    description: 'Le summum du confort pour vos transferts VIP et excursions de prestige.',
    priceRange: '€€€',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Mercedes Sprinter Standard 12 places',
    capacity: 12,
    year: 2022,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Minibus Mercedes Sprinter 12 places',
    features: ['Sièges confortables', 'Climatisation efficace', 'Système audio Bluetooth', 'Espace bagages'],
    description: 'Solution économique sans compromis sur la qualité et la sécurité.',
    priceRange: '€€',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Ford Transit Premium 14 places',
    capacity: 14,
    year: 2023,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Minibus Ford Transit premium 14 places',
    features: ['Sièges sport ergonomiques', 'Climatisation automatique', 'Écran tactile multimédia', 'GPS'],
    description: 'Technologie moderne et confort optimal pour tous vos déplacements.',
    priceRange: '€€',
    rating: 4.8,
  },
];

const advantages = [
  { icon: Users, title: 'Groupes Intimes', description: '8 à 16 passagers pour une ambiance conviviale' },
  { icon: Shield, title: 'Sécurité Premium', description: 'Véhicules récents avec équipements de sécurité avancés' },
  { icon: Wifi, title: 'Connectivité', description: 'WiFi gratuit et prises de recharge' },
  { icon: Award, title: 'Service VIP', description: 'Chauffeurs expérimentés et service personnalisé' },
];

export default function MinibusPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <BreadcrumbNext items={[{ name: 'Notre Flotte', href: '/notre-flotte' }, { name: 'Minibus' }]} />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Location Minibus avec Chauffeur à Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nos <strong>minibus Mercedes 8-16 places</strong> privilégient confort et discrétion pour transferts aéroport,
            navettes hôtels et sorties VIP. Sièges cuir, WiFi, climatisation bi-zone. Parfaits pour{' '}
            <Link href="/destinations/bruxelles" className="text-blue-600 hover:text-blue-700 font-semibold">
              visites Bruxelles
            </Link>{' '}
            et{' '}
            <Link href="/destinations/belgique" className="text-blue-600 hover:text-blue-700 font-semibold">
              excursions Belgique
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {minibusModels.map((mb) => (
            <div key={mb.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img src={mb.image} alt={mb.imageAlt} className="w-full h-48 object-cover" loading="lazy" width={600} height={400} />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {mb.capacity} places
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{mb.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{mb.description}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pourquoi Choisir Nos Minibus ?</h2>
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
          <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Minibus (8-16 places)</h3>
            <p className="text-blue-700 mb-4">Vous êtes ici - Idéal pour petits groupes VIP</p>
          </div>
          <Link href="/notre-flotte/bus" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Bus (20-35 places)</h3>
            <p className="text-gray-600 mb-4">Parfait équilibre capacité et confort</p>
            <span className="text-blue-600 font-semibold">Voir les bus →</span>
          </Link>
          <Link href="/notre-flotte/autocars" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Autocars (40-55 places)</h3>
            <p className="text-gray-600 mb-4">Grands groupes et voyages longue distance</p>
            <span className="text-blue-600 font-semibold">Voir les autocars →</span>
          </Link>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Réservez Votre Minibus VIP</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Service premium depuis 2007. Chauffeurs expérimentés, véhicules Mercedes récents.
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
