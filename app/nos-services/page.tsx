import React from 'react';
import Link from 'next/link';
import { MapPin, Users, Calendar, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import { semanticKeywords, conversionCopy, bruxellesHyperlocal } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services - Location Autocar Bruxelles',
  description:
    "Services complets de transport en autocar avec chauffeur à Bruxelles : transferts aéroports, excursions touristiques, voyages d'affaires et mise à disposition en Belgique.",
  keywords: semanticKeywords.services.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/nos-services' },
  openGraph: {
    title: 'Nos Services Transport Autocar Bruxelles | Transferts Excursions',
    description:
      "Services complets de transport en autocar avec chauffeur : transferts aéroports, excursions, voyages d'affaires et mise à disposition.",
    url: 'https://www.locationautocar.be/nos-services',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

const services = [
  {
    id: 'transferts-aeroports',
    icon: MapPin,
    title: 'Transferts Aéroports & Gares',
    description: 'Service de navette professionnel entre aéroports, gares et votre destination',
  },
  {
    id: 'excursions-tourisme',
    icon: Users,
    title: 'Excursions & Tourisme',
    description: "Découvrez Bruxelles, la Belgique et l'Europe avec nos circuits organisés",
  },
  {
    id: 'voyages-affaires',
    icon: Calendar,
    title: "Voyages d'Affaires",
    description: 'Transport de groupes pour événements professionnels et séminaires',
  },
  {
    id: 'mise-a-disposition',
    icon: Clock,
    title: 'Mise à Disposition',
    description: "Location d'autocar avec chauffeur selon vos besoins spécifiques",
  },
];

const tripTypes = [
  { title: 'Aller Simple', description: 'Transport direct vers votre destination', icon: '→' },
  { title: 'Aller-Retour', description: 'Service complet avec retour inclus', icon: '⇄' },
  { title: 'Mise à Disposition', description: "Location à l'heure selon vos besoins", icon: '⏰' },
];

export default function NosServicesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services de Transport à Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depuis 2007, nous proposons des services complets de transport en autocar avec chauffeur
            pour particuliers et entreprises. Prise en charge dans tout Bruxelles (
            {bruxellesHyperlocal.quartiersStrategiques.slice(0, 3).map((q) => q.nom).join(', ')}…).
            Notre <InternalLinkNext to="/notre-flotte" anchor="flotte" /> dessert toutes nos{' '}
            <InternalLinkNext to="/destinations" anchorVariant={1} />.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types de Trajets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tripTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <img
                  src={`https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85`}
                  alt={service.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
              <div className="lg:w-1/2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={`/nos-services/${service.id}`}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi Choisir Nos Services ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold mb-2">Pas de Frais Cachés</h3>
              <p className="text-blue-100">Vous ne payez que ce que vous utilisez</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold mb-2">Chauffeurs Expérimentés</h3>
              <p className="text-blue-100">Professionnels qualifiés et courtois</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold mb-2">Service 24/7</h3>
              <p className="text-blue-100">Disponible à tout moment</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold mb-2">Depuis 2007</h3>
              <p className="text-blue-100">Plus de 15 ans d'expérience</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à Réserver Votre Transport ?</h2>
          <p className="text-xl text-gray-600 mb-8">Contactez-nous pour un devis gratuit et personnalisé</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactez-nous"
              className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              {conversionCopy.cta.principal}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:+3225800325"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" aria-hidden="true" />
              +32 2 580 03 25
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
