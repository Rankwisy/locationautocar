import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Plane, Camera, Building, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import { semanticKeywords, conversionCopy } from '@/data/seoData';
import type { Metadata } from 'next';

const SERVICES = [
  {
    id: 'transferts-aeroports',
    icon: Plane,
    title: 'Transferts Aéroports & Gares',
    description: 'Service de navette professionnel entre aéroports, gares et votre destination',
    features: [
      "Aéroport de Bruxelles-National",
      "Aéroport de Charleroi",
      "Gares SNCB",
      "Transferts hôtels",
      "Service 24/7",
    ],
    image:
      'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-aeroport-bruxelles-scaled.jpeg?updatedAt=1750900457571&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    seoTitle: 'Transferts Aéroports Bruxelles',
    seoDescription:
      "Service de navette professionnelle depuis l'aéroport de Bruxelles-National et Charleroi vers toutes destinations en Belgique.",
  },
  {
    id: 'excursions-tourisme',
    icon: Camera,
    title: 'Excursions & Tourisme',
    description: "Découvrez Bruxelles, la Belgique et l'Europe avec nos circuits organisés",
    features: [
      'Visite de Bruxelles',
      'Atomium et Grand-Place',
      'Musées et monuments',
      'Circuits en Belgique',
      'Voyages en Europe',
    ],
    image:
      'https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    seoTitle: 'Excursions Touristiques Bruxelles',
    seoDescription:
      "Circuits touristiques organisés à Bruxelles, en Belgique et en Europe avec autocar et chauffeur professionnel.",
  },
  {
    id: 'voyages-affaires',
    icon: Building,
    title: "Voyages d'Affaires",
    description: 'Transport de groupes pour événements professionnels et séminaires',
    features: [
      "Séminaires d'entreprise",
      'Conférences',
      "Événements corporate",
      'Transferts VIP',
      'Service personnalisé',
    ],
    image:
      'https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    seoTitle: "Voyages d'Affaires Bruxelles",
    seoDescription:
      "Transport en autocar pour séminaires, conférences et événements d'entreprise en Belgique et en Europe.",
  },
  {
    id: 'mise-a-disposition',
    icon: Clock,
    title: 'Mise à Disposition',
    description: "Location d'autocar avec chauffeur selon vos besoins spécifiques",
    features: [
      "Location à l'heure",
      'Trajets personnalisés',
      'Flexibilité maximale',
      'Chauffeur expérimenté',
      'Tarification transparente',
    ],
    image:
      'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    seoTitle: 'Mise à Disposition Autocar Bruxelles',
    seoDescription:
      "Location d'autocar avec chauffeur à l'heure pour vos déplacements personnalisés en Belgique et Europe.",
  },
];

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ category: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const service = SERVICES.find((s) => s.id === category);
  if (!service) {
    return { title: 'Service non trouvé | Location Autocar Bruxelles' };
  }
  return {
    title: `${service.seoTitle} - Location Autocar Bruxelles`,
    description: service.seoDescription,
    keywords: semanticKeywords.services.join(', '),
    alternates: { canonical: `https://www.locationautocar.be/nos-services/${category}` },
    openGraph: {
      title: `${service.seoTitle} | Chauffeur Professionnel Belgique`,
      description: service.seoDescription,
      url: `https://www.locationautocar.be/nos-services/${category}`,
      images: [service.image],
    },
  };
}

export default async function ServicesCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const activeService = SERVICES.find((s) => s.id === category);
  if (!activeService) notFound();

  const relatedServices = SERVICES.filter((s) => s.id !== category);

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
            <li>
              <Link href="/nos-services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">{activeService.title}</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
          <div className="lg:w-1/2">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              loading="eager"
              width={600}
              height={400}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <activeService.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {activeService.seoTitle}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{activeService.description}</p>
            <ul className="space-y-2 mb-6">
              {activeService.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contactez-nous"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              {conversionCopy.cta.secondaire}
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {relatedServices.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Découvrez nos autres services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/nos-services/${service.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                  <div className="p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/contactez-nous"
            className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
          >
            {conversionCopy.cta.principal}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
