import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bus, MapPin, Users, CheckCircle, ArrowRight, Star, Phone } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import { conversionCopy, bruxellesHyperlocal } from '@/data/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Location autocar Bruxelles | Bus avec chauffeur pour groupes',
  description:
    "Besoin d'un autocar à Bruxelles ? Location avec chauffeur professionnel depuis 2007. Minibus, bus et autocars pour groupes. Demandez un devis gratuit sous 24h.",
  keywords:
    'location autocar Bruxelles, location bus Bruxelles, autocar avec chauffeur Bruxelles, bus groupe Bruxelles, transport groupe Bruxelles',
  alternates: { canonical: 'https://www.locationautocar.be/location-autocar-bruxelles' },
  openGraph: {
    title: 'Location autocar Bruxelles | Bus avec chauffeur pour groupes',
    description:
      "Besoin d'un autocar à Bruxelles ? Location avec chauffeur professionnel depuis 2007. Minibus, bus et autocars pour groupes. Demandez un devis gratuit sous 24h.",
    url: 'https://www.locationautocar.be/location-autocar-bruxelles',
    images: [
      'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Location Autocar Bruxelles',
  url: 'https://www.locationautocar.be',
  telephone: '+3225800325',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bd Industriel 9',
    addressLocality: 'Bruxelles',
    postalCode: '1070',
    addressCountry: 'BE',
  },
  openingHours: ['Mo-Fr 08:00-22:00', 'Sa-Su 10:00-22:00'],
  priceRange: '€€',
  description:
    "Location d'autocar avec chauffeur à Bruxelles depuis 2007. Minibus, bus et autocars pour groupes de 8 à 55 personnes.",
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quel est le prix d'une location d'autocar à Bruxelles ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le tarif dépend du type de véhicule, du nombre de passagers et de la durée du trajet. Nos prix débutent à partir de 150€ pour un transfert local en minibus.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps à l\'avance faut-il réserver ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Nous recommandons de réserver au minimum 48h à l'avance. Pour les événements importants, plusieurs semaines à l'avance sont conseillées.",
      },
    },
    {
      '@type': 'Question',
      name: 'Vos autocars sont-ils autorisés en zone LEZ Bruxelles ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, tous nos véhicules sont conformes aux normes Euro 6 et sont autorisés à circuler dans la zone de basses émissions (LEZ) de Bruxelles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels types de groupes transportez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous transportons des entreprises, associations, écoles, groupes touristiques et privés. Nos véhicules accueillent de 8 à 55 passagers.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.locationautocar.be' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Location autocar Bruxelles',
      item: 'https://www.locationautocar.be/location-autocar-bruxelles',
    },
  ],
};

export default function LocationAutocarBruxellesPage() {
  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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

          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Besoin d&apos;un autocar pour votre groupe ?</h2>
            <p className="text-gray-600 mb-6">Réponse sous 24h · Devis gratuit · Sans engagement</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contactez-nous"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Demander un Devis
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+3225800325"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                +32 2 580 03 25
              </a>
            </div>
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

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Questions fréquentes sur la location d&apos;autocar à Bruxelles
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quel est le prix d&apos;une location d&apos;autocar à Bruxelles ?
                </h3>
                <p className="text-gray-700">
                  Le tarif dépend du type de véhicule, du nombre de passagers et de la durée du trajet. Nos prix débutent
                  à partir de 150€ pour un transfert local en minibus. Demandez un devis gratuit pour obtenir une offre
                  personnalisée.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Combien de temps à l&apos;avance faut-il réserver ?
                </h3>
                <p className="text-gray-700">
                  Nous recommandons de réserver au minimum 48h à l&apos;avance. Pour les événements importants (mariages,
                  séminaires), nous conseillons de réserver plusieurs semaines à l&apos;avance pour garantir la
                  disponibilité.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vos autocars sont-ils autorisés en zone LEZ Bruxelles ?
                </h3>
                <p className="text-gray-700">
                  Oui, tous nos véhicules sont conformes aux normes Euro 6 et sont autorisés à circuler dans la zone de
                  basses émissions (LEZ) de Bruxelles.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quels types de groupes transportez-vous ?
                </h3>
                <p className="text-gray-700">
                  Nous transportons des entreprises, associations, écoles, groupes touristiques et privés. Nos véhicules
                  accueillent de 8 à 55 passagers selon le modèle choisi.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comment réserver votre autocar à Bruxelles ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Demandez un devis</h3>
                <p className="text-gray-700">
                  Remplissez notre formulaire en ligne ou appelez-nous. Réponse garantie sous 24h.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirmez votre réservation</h3>
                <p className="text-gray-700">
                  Validez l&apos;offre et recevez votre confirmation avec tous les détails du trajet.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Montez à bord</h3>
                <p className="text-gray-700">
                  Votre chauffeur professionnel vous accueille à l&apos;heure et au lieu convenus.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ils nous font confiance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-3" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Service impeccable pour notre séminaire d&apos;entreprise. Chauffeur ponctuel, autocar
                  confortable. Je recommande vivement.&quot;
                </p>
                <p className="font-semibold text-gray-900">Marie L.</p>
                <p className="text-sm text-gray-600">Événementiel Bruxelles</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-3" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Nous faisons appel à Location Autocar Bruxelles pour toutes nos sorties scolaires. Fiables,
                  professionnels et toujours à l&apos;heure.&quot;
                </p>
                <p className="font-semibold text-gray-900">Thomas D.</p>
                <p className="text-sm text-gray-600">École Européenne</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-3" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;Autocar de mariage parfait ! L&apos;équipe a été très réactive et le chauffeur adorable.
                  Merci !&quot;
                </p>
                <p className="font-semibold text-gray-900">Sophie M.</p>
                <p className="text-sm text-gray-600">Particulier</p>
              </div>
            </div>
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
