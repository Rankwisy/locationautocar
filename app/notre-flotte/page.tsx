'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Filter, Search, ArrowRight, CheckCircle, Phone, Mail, MapPin, Star } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import LEZBadge from '@/components/LEZBadge';
import { pageMeta, semanticKeywords } from '@/data/seoData';
import { ROUTES } from '@/data/canonicalRoutes';

const fleetPathByType: Record<string, string> = {
  Minibus: ROUTES.FLOTTE_MINIBUS,
  Bus: ROUTES.FLOTTE_BUS,
  Autocar: ROUTES.FLOTTE_AUTOCARS,
};

const vehicles = [
  {
    id: 1,
    name: 'Mercedes Sprinter Luxe',
    headingTitle: 'Mercedes Sprinter Luxe avec chauffeur à Bruxelles',
    type: 'Minibus',
    capacity: 16,
    year: 2023,
    euroStandard: 'Euro 6',
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Minibus Mercedes Sprinter luxe 16 places Euro 6 conforme LEZ Bruxelles',
    priceRange: '€€',
    features: ['Climatisation automatique', 'Sièges cuir ergonomiques', 'WiFi gratuit', 'Prises USB'],
    description: 'Idéal pour transferts VIP et excursions de petits groupes.',
    available: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Mercedes Sprinter Standard',
    type: 'Minibus',
    capacity: 12,
    year: 2022,
    euroStandard: 'Euro 6',
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Minibus Mercedes Sprinter 12 places',
    priceRange: '€',
    features: ['Climatisation', 'Sièges confortables', 'Système audio', 'Espace bagages'],
    description: 'Solution économique pour vos déplacements de groupe.',
    available: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Autocar Tourisme Premium',
    type: 'Autocar',
    capacity: 55,
    year: 2023,
    euroStandard: 'Euro 6',
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Autocar grand tourisme 55 places',
    priceRange: '€€€',
    features: ['Sièges inclinables cuir', 'Toilettes à bord', 'Kitchenette', 'WiFi haut débit'],
    description: 'Le summum du confort pour vos voyages longue distance.',
    available: true,
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Bus Tourisme Confort',
    type: 'Bus',
    capacity: 35,
    year: 2022,
    euroStandard: 'Euro 6',
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Bus touristique 35 places',
    priceRange: '€€',
    features: ['Sièges ergonomiques', 'Climatisation', 'Système audio/vidéo', 'Prises électriques'],
    description: "Parfait équilibre entre confort et capacité pour excursions et voyages d'affaires.",
    available: true,
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Autocar Grand Tourisme',
    type: 'Autocar',
    capacity: 49,
    year: 2021,
    euroStandard: 'Euro 6',
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Autocar 49 places',
    priceRange: '€€',
    features: ['Sièges inclinables', 'Climatisation', 'Réfrigérateur', 'Système multimédia'],
    description: 'Véhicule polyvalent pour tous vos voyages.',
    available: true,
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Bus Urbain Écologique',
    type: 'Bus',
    capacity: 25,
    year: 2023,
    euroStandard: 'Euro 6',
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Bus écologique 25 places',
    priceRange: '€',
    features: ['Moteur Euro 6', 'Plancher bas', 'Accès PMR', 'Climatisation éco'],
    description: 'Solution écologique pour vos déplacements urbains.',
    available: true,
    rating: 4.5,
  },
];

export default function NotreFlottePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedCapacity, setSelectedCapacity] = useState('Toutes');
  const vehicleTypes = ['Tous', 'Minibus', 'Bus', 'Autocar'];
  const capacityRanges = ['Toutes', '8-16 places', '17-35 places', '36+ places'];

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'Tous' || vehicle.type === selectedType;
    const matchesCapacity =
      selectedCapacity === 'Toutes' ||
      (selectedCapacity === '8-16 places' && vehicle.capacity <= 16) ||
      (selectedCapacity === '17-35 places' && vehicle.capacity >= 17 && vehicle.capacity <= 35) ||
      (selectedCapacity === '36+ places' && vehicle.capacity >= 36);
    return matchesSearch && matchesType && matchesCapacity;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Flotte d&apos;Autocars et Minibus Disponibles à Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre flotte moderne de véhicules avec chauffeur professionnel. Du{' '}
            <InternalLinkNext to="/notre-flotte/minibus" anchor="minibus luxe Mercedes" /> à l&apos;
            <InternalLinkNext to="/notre-flotte/autocars" anchor="autocar grand tourisme" />, nous
            avons le véhicule parfait pour tous vos <InternalLinkNext to="/nos-services" />.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-gray-900">
              Filtrer par type de véhicule à Bruxelles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Nom ou type de véhicule"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {vehicleTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Capacité</label>
              <select
                value={selectedCapacity}
                onChange={(e) => setSelectedCapacity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {capacityRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? 's' : ''} trouvé
            {filteredVehicles.length > 1 ? 's' : ''}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.type}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold">
                  {vehicle.priceRange}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {vehicle.headingTitle || vehicle.name}
                </h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {vehicle.capacity} places
                  </div>
                </div>
                <div className="mb-4">
                  <LEZBadge standard={vehicle.euroStandard} variant="compact" />
                </div>
                <p className="text-gray-600 mb-4 text-sm">{vehicle.description}</p>
                <div className="flex gap-2">
                  <Link
                    href="/contactez-nous"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold text-center text-sm"
                  >
                    Réserver
                  </Link>
                  <Link
                    href={fleetPathByType[vehicle.type] || ROUTES.FLOTTE}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    Détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link
            href="/notre-flotte/minibus"
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">Minibus (8-16 places)</h3>
            <p className="text-gray-600 mb-4">Idéal pour petits groupes et transferts VIP</p>
            <span className="text-blue-600 font-semibold">Voir les minibus →</span>
          </Link>
          <Link
            href="/notre-flotte/bus"
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">Bus (20-35 places)</h3>
            <p className="text-gray-600 mb-4">Parfait équilibre capacité/confort</p>
            <span className="text-blue-600 font-semibold">Voir les bus →</span>
          </Link>
          <Link
            href="/notre-flotte/autocars"
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">Autocars (40-55 places)</h3>
            <p className="text-gray-600 mb-4">Grands groupes et voyages longue distance</p>
            <span className="text-blue-600 font-semibold">Voir les autocars →</span>
          </Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à Réserver Votre Véhicule à Bruxelles ?
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé. Service professionnel garanti depuis 2007.
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2"
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
