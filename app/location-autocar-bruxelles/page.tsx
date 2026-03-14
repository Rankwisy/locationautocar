import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bus, MapPin, Users, CheckCircle, ArrowRight } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import { conversionCopy, bruxellesHyperlocal } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Location autocar Bruxelles | Bus avec chauffeur pour groupes',
  description:
    "Location d'autocar à Bruxelles avec chauffeur pour entreprises, groupes et excursions. Service professionnel et transport confortable.",
  keywords:
    'location autocar Bruxelles, location bus Bruxelles, autocar avec chauffeur Bruxelles, bus groupe Bruxelles, transport groupe Bruxelles',
  alternates: { canonical: 'https://www.locationautocar.be/location-autocar-bruxelles' },
  openGraph: {
    title: 'Location autocar Bruxelles | Bus avec chauffeur pour groupes',
    description:
      "Location d'autocar à Bruxelles avec chauffeur pour entreprises, groupes et excursions. Service professionnel et transport confortable.",
    url: 'https://www.locationautocar.be/location-autocar-bruxelles',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

export default function LocationAutocarBruxellesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-6" aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">Location autocar Bruxelles</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
          <div className="lg:w-1/2">
            <Image
              src="https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-800,h-533,c-maintain_ratio,f-webp,q-85"
              alt="Location autocar Bruxelles - Bus avec chauffeur pour groupes"
              className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              width={800}
              height={533}
              loading="eager"
              priority
            />
          </div>
          <div className="lg:w-1/2">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Bus className="w-8 h-8 text-blue-600" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Location autocar Bruxelles avec chauffeur
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Location d&apos;autocar et de bus à Bruxelles avec chauffeur professionnel. Depuis 2007, nous assurons le
              transport de groupes pour entreprises, excursions et événements. Service fiable, véhicules confortables et
              tarifs transparents.
            </p>
            <Link
              href="/contactez-nous"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Devis gratuit
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi choisir une location d&apos;autocar à Bruxelles ?
            </h2>
            <p className="text-gray-700 mb-4">
              La <strong>location autocar Bruxelles</strong> avec chauffeur est la solution idéale pour les entreprises,
              associations, écoles et groupes privés qui recherchent un transport fiable et confortable. Situés à
              Anderlecht, nous couvrons toute la région bruxelloise et assurons des trajets vers la Belgique et
              l&apos;Europe.
            </p>
            <p className="text-gray-700 mb-4">
              Nos véhicules sont conformes aux normes Euro 6 et autorisés en zone LEZ Bruxelles. Que ce soit pour des{' '}
              <InternalLinkNext to="/nos-services/transferts-aeroports" anchor="transferts aéroports" />, des{' '}
              <InternalLinkNext to="/nos-services/excursions-tourisme" anchor="excursions touristiques" /> ou des{' '}
              <InternalLinkNext to="/nos-services/navette-entreprise" anchor="navettes entreprise" />, notre flotte de
              minibus, bus et autocars répond à tous les besoins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos services de location bus Bruxelles</h2>
            <p className="text-gray-700 mb-4">
              Notre offre de <strong>location bus Bruxelles</strong> inclut :
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Transferts aéroports</strong> : Zaventem, Charleroi – navettes privées pour groupes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Excursions et circuits</strong> : Bruxelles, Bruges, Gand, Paris, Amsterdam
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Navettes entreprise</strong> : trajets réguliers salariés, séminaires, événements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Voyages d&apos;affaires</strong> : conférences, salons, déplacements corporate
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Événements privés</strong> : mariages, anniversaires, sorties scolaires
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Autocar avec chauffeur Bruxelles : une flotte adaptée
            </h2>
            <p className="text-gray-700 mb-4">
              L&apos;<strong>autocar avec chauffeur Bruxelles</strong> offre un confort optimal pour les groupes de 8 à 55
              personnes. Notre flotte comprend :
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <InternalLinkNext to="/notre-flotte/minibus" anchor="Minibus 8-16 places" /> : idéal pour petits groupes
                  et transferts VIP
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <InternalLinkNext to="/notre-flotte/bus" anchor="Bus 20-35 places" /> : excursions Belgique et Europe
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <InternalLinkNext to="/notre-flotte/autocars" anchor="Autocars 40-55 places" /> : circuits longue
                  distance, climatisation, WiFi
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zone de prise en charge à Bruxelles</h2>
            <p className="text-gray-700 mb-4">
              Nous assurons la prise en charge dans tout Bruxelles et les communes environnantes, notamment :
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {bruxellesHyperlocal.quartiersStrategiques.slice(0, 8).map((q) => (
                <li key={q.nom} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <span>{q.nom}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Prêt à réserver votre autocar à Bruxelles ?</h2>
            <p className="text-blue-100 text-center mb-8 max-w-2xl mx-auto">
              Demandez un devis gratuit et personnalisé. Notre équipe vous répond sous 24 h avec une offre adaptée à
              votre groupe et votre itinéraire.
            </p>
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
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                +32 2 580 03 25
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
