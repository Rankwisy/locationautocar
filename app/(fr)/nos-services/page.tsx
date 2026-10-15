import React from 'react';
import Link from 'next/link';
import { MapPin, Users, Calendar, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import { semanticKeywords, conversionCopy, bruxellesHyperlocal } from '@/data/seoData';
import { buildBreadcrumbSchema, buildServiceSchema, buildItemListSchema } from '@/seo/schema';
import { SERVICES_SCHEMA_DATA } from '@/seo/schemaData';
import { servicesFAQ } from '@/data/faqData';
import { toCanonicalUrl } from '@/data/canonicalRoutes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services | Autocariste Bruxelles avec Chauffeur',
  description:
    "Autocariste à Bruxelles : location d'autocar avec chauffeur pour transferts aéroports, excursions, voyages d'affaires et événements. Devis rapide.",
  keywords: semanticKeywords.services.join(', '),
  alternates: { canonical: 'https://www.locationautocar.be/nos-services' },
  openGraph: {
    title: 'Nos Services | Autocariste Bruxelles avec Chauffeur',
    description:
      "Autocariste à Bruxelles : location d'autocar avec chauffeur pour transferts aéroports, excursions, voyages d'affaires et événements. Devis rapide.",
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
    description: 'Service de navette professionnel entre aéroports, gares et votre destination. Suivi des vols en temps réel, chauffeur avec pancarte nominative.',
    idealFor: ['Groupes professionnels', 'Arrivées tardives/tôt matin', 'Équipes commerciales en déplacement'],
    priceFrom: 'À partir de 250€',
  },
  {
    id: 'excursions-tourisme',
    icon: Users,
    title: 'Excursions & Tourisme',
    description: "Découvrez Bruxelles, la Belgique et l'Europe avec nos circuits organisés. Bruges, Gand, Paris, Amsterdam — nous connaissons les meilleures routes.",
    idealFor: ['Associations culturelles', 'Groupes scolaires', 'Tours opérateurs'],
    priceFrom: 'À partir de 500€ / jour',
  },
  {
    id: 'voyages-affaires',
    icon: Calendar,
    title: "Voyages d'Affaires",
    description: 'Transport de groupes pour événements professionnels et séminaires. WiFi à bord, facturation mensuelle, chauffeurs en tenue.',
    idealFor: ['Séminaires corporate', 'Conférences institutionnelles', 'Incentives équipes'],
    priceFrom: 'Sur devis',
  },
  {
    id: 'mise-a-disposition',
    icon: Clock,
    title: 'Mise à Disposition',
    description: "Location d'autocar avec chauffeur selon vos besoins spécifiques. Tarification à l'heure, flexibilité totale sur l'itinéraire.",
    idealFor: ['Mariages et événements', 'Journées d\'entreprise', 'Circuits sur mesure'],
    priceFrom: 'À partir de 80€ / heure',
  },
];

const tripTypes = [
  { title: 'Aller Simple', description: 'Transport direct vers votre destination', icon: '→' },
  { title: 'Aller-Retour', description: 'Service complet avec retour inclus', icon: '⇄' },
  { title: 'Mise à Disposition', description: "Location à l'heure selon vos besoins", icon: '⏰' },
];

export default function NosServicesPage() {
  const servicesSchemas = [
    buildBreadcrumbSchema([
      { nom: 'Accueil', url: toCanonicalUrl('/') },
      { nom: 'Nos services', url: toCanonicalUrl('/nos-services') },
    ]),
    ...SERVICES_SCHEMA_DATA.map((s) =>
      buildServiceSchema(s.nom, s.description, s.url, s.serviceType)
    ),
    buildItemListSchema(
      services.map((s) => ({
        name: s.title,
        url: `https://www.locationautocar.be/nos-services/${s.id}`,
        description: s.description,
      }))
    ),
    servicesFAQ,
  ];

  return (
    <>
      {servicesSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services de Transport à Bruxelles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Depuis 2007, nous proposons des services complets de transport en autocar avec chauffeur
            pour particuliers et entreprises. Prise en charge dans tout Bruxelles (
            {bruxellesHyperlocal.quartiersStrategiques.slice(0, 3).map((q) => q.nom).join(', ')}…).
            Notre <InternalLinkNext to="/notre-flotte" anchor="flotte" /> dessert toutes nos{' '}
            <InternalLinkNext to="/destinations" anchorVariant={1} />.
          </p>
          <p className="text-base text-gray-500">
            Consultez notre <Link href="/nos-services/prix" className="text-blue-600 hover:underline font-medium">guide complet des tarifs</Link> pour une estimation rapide.
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
                <p className="text-lg text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm font-semibold text-blue-700 mb-3">{service.priceFrom}</p>
                <ul className="mb-6 space-y-1">
                  {service.idealFor.map((who) => (
                    <li key={who} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                      Idéal pour : {who}
                    </li>
                  ))}
                </ul>
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

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-6">
            {servicesFAQ.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }) => (
              <div key={faq.name} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
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
    </>
  );
}
