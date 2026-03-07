import React from 'react';
import Link from 'next/link';
import { Users, Shield, Wifi, Coffee, CheckCircle, ArrowRight, Phone, Mail, Star, Clock } from 'lucide-react';
import BreadcrumbNext from '@/components/SEO/BreadcrumbNext';
import { pageMeta, semanticKeywords } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageMeta.fleetBus.title,
  description: pageMeta.fleetBus.description,
  keywords: semanticKeywords.fleetBus.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/notre-flotte/bus' },
  openGraph: {
    title: pageMeta.fleetBus.metaTitle,
    description: pageMeta.fleetBus.description,
    url: 'https://www.locationautocar.be/notre-flotte/bus',
  },
};

const busModels = [
  {
    id: 1,
    name: 'Bus Tourisme Confort 35 places',
    capacity: 35,
    year: 2023,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Bus touristique 35 places confortable pour excursions en Europe',
    features: ['Sièges ergonomiques inclinables', 'Climatisation automatique', 'Système audio/vidéo HD', 'WiFi gratuit'],
    description: "Parfait équilibre entre confort et capacité pour vos excursions touristiques et voyages d'affaires.",
    priceRange: '€€',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Bus Urbain Écologique 25 places',
    capacity: 25,
    year: 2023,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Bus écologique 25 places pour transport urbain',
    features: ['Moteur Euro 6', 'Plancher bas accessible PMR', 'Climatisation écologique', 'Éclairage LED'],
    description: 'Solution écologique pour vos déplacements urbains avec impact environnemental réduit.',
    priceRange: '€',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Bus Premium 30 places',
    capacity: 30,
    year: 2022,
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Bus premium 30 places avec équipements haut de gamme',
    features: ['Sièges cuir premium', 'Tables individuelles', 'Réfrigérateur à bord', 'Système multimédia avancé'],
    description: "Confort premium pour vos voyages d'affaires et événements spéciaux.",
    priceRange: '€€€',
    rating: 4.9,
  },
];

const advantages = [
  { icon: Users, title: 'Capacité Optimale', description: 'De 20 à 35 passagers selon vos besoins' },
  { icon: Shield, title: 'Sécurité Maximale', description: 'Équipements de sécurité dernière génération' },
  { icon: Wifi, title: 'Connectivité', description: 'WiFi gratuit et prises électriques' },
  { icon: Coffee, title: 'Confort Premium', description: 'Sièges ergonomiques et climatisation' },
];

export default function BusPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <BreadcrumbNext items={[{ name: 'Notre Flotte', href: '/notre-flotte' }, { name: 'Bus' }]} />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Location Bus avec Chauffeur à Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nos <strong>bus 20-35 places</strong> offrent le meilleur compromis capacité/confort pour groupes scolaires,
            associations et entreprises. Excursions Bruges-Gand, Paris, Amsterdam. Consultez notre{' '}
            <Link href="/nos-services/location-bus-groupe" className="text-blue-600 hover:text-blue-700 font-semibold">
              location bus groupe
            </Link>, nos{' '}
            <Link href="/destinations/europe" className="text-blue-600 hover:text-blue-700 font-semibold">
              circuits Europe
            </Link>{' '}
            et{' '}
            <Link href="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">
              formules excursion
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {busModels.map((bus) => (
            <div key={bus.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img src={bus.image} alt={bus.imageAlt} className="w-full h-48 object-cover" loading="lazy" width={600} height={400} />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {bus.capacity} places
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{bus.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{bus.description}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pourquoi Choisir Nos Bus ?</h2>
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
          <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Bus (20-35 places)</h3>
            <p className="text-blue-700 mb-4">Vous êtes ici - Parfait équilibre capacité/confort</p>
          </div>
          <Link href="/notre-flotte/autocars" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Autocars (40-55 places)</h3>
            <p className="text-gray-600 mb-4">Grands groupes et voyages longue distance</p>
            <span className="text-blue-600 font-semibold">Voir les autocars →</span>
          </Link>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Réservez Votre Bus Dès Maintenant</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Service professionnel depuis 2007. Devis gratuit sous 24h.
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
