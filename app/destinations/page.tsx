import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Users, Globe, Camera, CheckCircle, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import { pageMeta, semanticKeywords } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageMeta.destinations.title,
  description: pageMeta.destinations.description,
  keywords: [...(semanticKeywords.bruxelles || []), ...(semanticKeywords.belgique || []), ...(semanticKeywords.europe || [])].slice(0, 8).join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/destinations' },
  openGraph: {
    title: pageMeta.destinations.metaTitle,
    description: pageMeta.destinations.description,
    url: 'https://www.locationautocar.be/destinations',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

const mainDestinations = [
  {
    name: 'Bruxelles',
    subtitle: "Capitale de l'Europe",
    description: "Découvrez le cœur de l'Europe : Grand-Place UNESCO, Atomium, quartier européen et institutions internationales.",
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Grand-Place de Bruxelles patrimoine UNESCO',
    duration: '1-2 jours',
    link: '/destinations/bruxelles',
    category: 'Capitale',
  },
  {
    name: 'Belgique',
    subtitle: 'Trésors du Royaume',
    description: 'Explorez les joyaux belges : Bruges médiévale, Gand universitaire, Anvers diamantaire et vallées wallonnes.',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Bruges canaux médiévaux Venise du Nord',
    duration: '1-3 jours',
    link: '/destinations/belgique',
    category: 'National',
  },
  {
    name: 'Europe',
    subtitle: 'Capitales et Merveilles',
    description: 'Voyagez vers les plus belles capitales européennes : Paris romantique, Amsterdam canaux, Prague magique.',
    image: 'https://ik.imagekit.io/by733ltn6/locationautocar/locationautocar-image-logo-1.jpg?updatedAt=1750900561845&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    imageAlt: 'Tour Eiffel Paris voyages Europe',
    duration: '2-7 jours',
    link: '/destinations/europe',
    category: 'International',
  },
];

export default function DestinationsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Destinations depuis Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Trois niveaux de circuits : <strong>Bruxelles</strong> (Grand-Place, Atomium), <strong>Belgique</strong> (Bruges, Gand, Anvers),{' '}
            <strong>Europe</strong> (Paris, Amsterdam, Prague). Guides francophones, autocar confortable. Comparez les{' '}
            <Link href="/notre-flotte/autocars" className="text-blue-600 hover:text-blue-700 font-semibold">
              véhicules disponibles
            </Link>{' '}
            et nos{' '}
            <Link href="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">
              formules excursion
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainDestinations.map((dest, idx) => (
            <Link
              key={idx}
              href={dest.link}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={dest.image}
                  alt={dest.imageAlt}
                  className="w-full h-64 object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {dest.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {dest.duration}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{dest.name}</h2>
                <p className="text-blue-600 font-semibold mb-3">{dest.subtitle}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{dest.description}</p>
                <span className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-center block">
                  Découvrir {dest.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Services Inclus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Groupes de Toutes Tailles</h3>
              <p className="text-gray-600 text-sm">De 8 à 55 passagers selon vos besoins</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Guides Francophones</h3>
              <p className="text-gray-600 text-sm">Accompagnateurs expérimentés et passionnés</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Camera className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Circuits Personnalisés</h3>
              <p className="text-gray-600 text-sm">Itinéraires adaptés à vos centres d&apos;intérêt</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transport Confortable</h3>
              <p className="text-gray-600 text-sm">Véhicules modernes climatisés avec WiFi</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Découvrir Nos Destinations ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Circuits organisés, guides francophones passionnés, transport confortable. Explorez Bruxelles, la Belgique et l&apos;Europe.
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
