import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Plane, Camera, Building, Clock, ArrowRight, CheckCircle, DollarSign, Bus, Heart } from 'lucide-react';
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
    relatedInternalLink: { to: '/nos-services/navette-entreprise', anchor: 'navette entreprise Bruxelles' },
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
    relatedInternalLink: { to: '/nos-services/autocar-mariage', anchor: 'autocar mariage Bruxelles' },
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
  {
    id: 'prix',
    icon: DollarSign,
    title: 'Location Autocar Bruxelles Prix',
    description:
      "Tarifs et prix de location d'autocar avec chauffeur à Bruxelles. Transferts, excursions, groupes. Devis gratuit sous 24h.",
    features: [
      'Prix transferts aéroport (dès 250€)',
      'Excursions journée (500-750€)',
      'Voyages 2 jours Europe (1200-1800€)',
      'Devis personnalisé gratuit',
      'Pas de frais cachés',
    ],
    image:
      'https://ik.imagekit.io/by733ltn6/locationautocar/autocar-bruxelles-scaled.jpeg?updatedAt=1750900410371&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    seoTitle: 'Location autocar Bruxelles prix : Tarifs & Devis 2026',
    seoDescription:
      'Prix location autocar avec chauffeur à Bruxelles. Tarifs transferts, excursions, groupes. Devis gratuit sous 24h.',
  },
  {
    id: 'location-bus-groupe',
    icon: Bus,
    title: 'Location Bus Bruxelles Groupe',
    description:
      'Location bus et autocar pour groupes à Bruxelles. Scolaires, entreprises, événements. De 8 à 55 places. Minibus, bus, autocars.',
    features: [
      'Groupes scolaires et voyages étudiants',
      'Entreprises et séminaires',
      'Associations et événements',
      'Minibus 8-16 places',
      'Bus 20-35, autocars 40-55 places',
    ],
    image:
      'https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    seoTitle: 'Location Bus Bruxelles Groupe : 20–55 Places',
    seoDescription:
      'Location bus et autocar pour groupes à Bruxelles. Scolaires, entreprises, événements. Minibus à autocars. Devis rapide.',
  },
  {
    id: 'autocar-mariage',
    icon: Heart,
    title: 'Autocar Mariage Bruxelles',
    description:
      'Autocar et bus pour mariage à Bruxelles. Transport invités, cortège nuptial. Chauffeur professionnel, véhicules élégants.',
    features: [
      'Transport des invités (mairie, église, salle)',
      'Cortège nuptial',
      'Minibus pour petits groupes',
      'Bus ou autocar pour grandes listes',
      'Service discret et ponctuel',
    ],
    image:
      'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    seoTitle: 'Autocar Mariage Bruxelles : Transport Invités',
    seoDescription:
      'Autocar et bus pour mariage à Bruxelles. Transport invités, cortège. Chauffeur professionnel. Devis personnalisé.',
  },
  {
    id: 'navette-entreprise',
    icon: Building,
    title: 'Navette Entreprise Bruxelles',
    description:
      'Navette entreprise Bruxelles pour salariés. Trajets réguliers aéroports, gares, sites. Service sur mesure, facturation entreprise.',
    features: [
      'Navettes aéroports (Zaventem, Charleroi)',
      'Trajets gare - siège social',
      'Déplacements multi-sites',
      'Horaires adaptés à vos équipes',
      'Facturation et suivi dédiés',
    ],
    image:
      'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-aeroport-bruxelles-scaled.jpeg?updatedAt=1750900457571&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85',
    seoTitle: 'Navette Entreprise Bruxelles : Transport Salariés',
    seoDescription:
      'Navette entreprise Bruxelles pour salariés. Trajets réguliers, aéroports, sites. Service sur mesure. Devis gratuit.',
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
    return { title: 'Service non trouvé' };
  }
  return {
    title: `${service.seoTitle} | Chauffeur Professionnel Belgique`,
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
            {'relatedInternalLink' in activeService &&
              (activeService as { relatedInternalLink?: { to: string; anchor: string } }).relatedInternalLink && (
                <p className="text-lg text-gray-600 mb-6">
                  Voir aussi :{' '}
                  <InternalLinkNext
                    to={(activeService as { relatedInternalLink: { to: string; anchor: string } }).relatedInternalLink.to}
                    anchor={(activeService as { relatedInternalLink: { to: string; anchor: string } }).relatedInternalLink.anchor}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  />
                  .
                </p>
              )}
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

        {category === 'navette-entreprise' && (
          <div className="mt-20 max-w-4xl mx-auto prose prose-lg prose-blue prose-headings:text-gray-900 prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700">
            <p>
              <InternalLinkNext to="/destinations/bruxelles" anchor="Bruxelles" /> attire chaque jour un grand nombre de professionnels, de visiteurs d&apos;affaires et de touristes. De nombreuses entreprises mettent en place des{' '}
              <InternalLinkNext to="/nos-services/navette-entreprise" anchor="navettes privées" /> pour leurs employés, notamment pour relier :
            </p>
            <ul>
              <li>les bureaux et les parkings</li>
              <li>les hôtels et les <InternalLinkNext to="/nos-services/voyages-affaires" anchor="centres d&apos;affaires" /></li>
              <li>les <InternalLinkNext to="/nos-services/transferts-aeroports" anchor="aéroports" /> et les lieux de travail</li>
              <li>les <InternalLinkNext to="/nos-services/voyages-affaires" anchor="événements" /> et les salons professionnels</li>
            </ul>
            <p>
              Ces services permettent d&apos;optimiser les déplacements, d&apos;améliorer la ponctualité et d&apos;offrir un transport confortable et organisé pour les équipes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Comment réserver une navette privée à Bruxelles ?
            </h2>
            <p>
              Réserver une navette avec Location Autocar Bruxelles est simple :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Indiquer le lieu de départ et la destination</li>
              <li>Préciser le nombre de passagers</li>
              <li>Choisir le type de véhicule</li>
              <li>Confirmer la date et l&apos;horaire du transport</li>
            </ol>
            <p>
              Notre équipe organise ensuite le trajet avec un{' '}
              <InternalLinkNext to="/notre-flotte" anchor="chauffeur professionnel" />, afin d&apos;assurer un transport fiable et ponctuel pour votre entreprise ou votre groupe.{' '}
              <InternalLinkNext to="/contactez-nous" anchor="Obtenez votre devis gratuit" />.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Quelle compagnie choisir pour louer un bus à Bruxelles ?
            </h2>
            <p>
              Pour un transport fiable et confortable, il est important de choisir une entreprise spécialisée dans la{' '}
              <InternalLinkNext to="/nos-services/mise-a-disposition" anchor="location d&apos;autocar avec chauffeur" />. Location Autocar Bruxelles propose :
            </p>
            <ul>
              <li>des <InternalLinkNext to="/notre-flotte/autocars" anchor="autocars modernes" /> et climatisés</li>
              <li>des <InternalLinkNext to="/notre-flotte/minibus" anchor="minibus" /> pour petits groupes</li>
              <li>des <InternalLinkNext to="/notre-flotte/bus" anchor="bus" /> pour événements et entreprises</li>
              <li>des chauffeurs expérimentés</li>
              <li>des solutions de transport personnalisées</li>
            </ul>
            <p>
              Nous accompagnons les entreprises, les organisateurs d&apos;événements et les groupes dans tous leurs déplacements à{' '}
              <InternalLinkNext to="/destinations/bruxelles" anchor="Bruxelles" /> et dans toute la{' '}
              <InternalLinkNext to="/destinations/belgique" anchor="Belgique" />.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Pourquoi choisir Location Autocar Bruxelles ?
            </h2>
            <p>
              Choisir Location Autocar Bruxelles, c&apos;est bénéficier :
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>d&apos;un transport privé confortable</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>d&apos;une organisation professionnelle</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>d&apos;une grande flexibilité des horaires</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>d&apos;une solution idéale pour les groupes et les entreprises</span>
              </li>
            </ul>
            <p>
              Que ce soit pour une navette d&apos;entreprise, un{' '}
              <InternalLinkNext to="/nos-services/voyages-affaires" anchor="événement professionnel" /> ou un{' '}
              <InternalLinkNext to="/nos-services/location-bus-groupe" anchor="transfert de groupe" />, nous mettons à votre disposition des véhicules adaptés et un service de qualité.
            </p>
          </div>
        )}

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
