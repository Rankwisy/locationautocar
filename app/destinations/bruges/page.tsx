import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excursion Bruges depuis Bruxelles en Autocar | Guide Groupes 2026',
  description:
    "Organisez votre excursion à Bruges depuis Bruxelles en autocar avec chauffeur. Guide complet pour groupes : itinéraires, tarifs, infos pratiques. Devis gratuit.",
  alternates: { canonical: 'https://www.locationautocar.be/destinations/bruges' },
  openGraph: {
    title: 'Excursion Bruges depuis Bruxelles en Autocar | Guide Groupes 2026',
    description:
      "Organisez votre excursion à Bruges depuis Bruxelles en autocar avec chauffeur. Guide complet pour groupes : itinéraires, tarifs, infos pratiques.",
    url: 'https://www.locationautocar.be/destinations/bruges',
    images: [
      {
        url: 'https://images.pexels.com/photos/4388163/pexels-photo-4388163.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
        width: 1200,
        height: 630,
        alt: 'Canaux de Bruges vue depuis un pont — excursion autocar depuis Bruxelles',
      },
    ],
  },
};

const touristDestinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Bruges',
  description:
    "Bruges, la Venise du Nord, est une ville médiévale classée au patrimoine mondial de l'UNESCO. À seulement 90 km de Bruxelles, c'est la destination idéale pour une excursion de groupe en autocar.",
  url: 'https://www.locationautocar.be/destinations/bruges',
  touristType: ['Groupes culturels', 'Sorties scolaires', 'Associations', 'Tourisme familial'],
  containsPlace: [
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Beffroi de Bruges', url: 'https://fr.wikipedia.org/wiki/Beffroi_de_Bruges' },
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Grand-Place (Markt)', url: 'https://fr.wikipedia.org/wiki/Grand-Place_de_Bruges' },
    { '@type': 'Museum', name: 'Musée Groeninge', url: 'https://fr.wikipedia.org/wiki/Mus%C3%A9e_Groeninge' },
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Lac d\'Amour (Minnewater)', url: 'https://fr.wikipedia.org/wiki/Minnewater' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien de temps pour aller de Bruxelles à Bruges en autocar ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bruxelles–Bruges représente environ 90 km et 1h à 1h15 de trajet en autocar selon la circulation, en partant depuis Anderlecht ou le centre de Bruxelles.",
      },
    },
    {
      '@type': 'Question',
      name: "Peut-on faire Bruges en une journée depuis Bruxelles ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, absolument. En partant à 8h30 et en rentrant vers 18h, vous avez amplement le temps de visiter le Markt, le Beffroi, les canaux et quelques musées. Nous recommandons une durée minimale de 7h sur place.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le tarif d'une excursion Bruges en autocar depuis Bruxelles ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le prix varie selon le type de véhicule et la taille du groupe. À titre indicatif : minibus 8–16 places dès 400€, bus 20–35 places dès 550€, autocar 40–55 places dès 700€ (aller-retour journée, chauffeur et carburant inclus).",
      },
    },
    {
      '@type': 'Question',
      name: "Y a-t-il un parking pour autocars à Bruges ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, Bruges dispose de plusieurs parkings dédiés aux autocars en dehors du centre historique (zone piétonne). Le principal est le parking Katelijnepoort. Notre chauffeur connaît parfaitement ces zones.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.locationautocar.be' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.locationautocar.be/destinations' },
    { '@type': 'ListItem', position: 3, name: 'Bruges', item: 'https://www.locationautocar.be/destinations/bruges' },
  ],
};

const highlights = [
  { name: 'Markt & Beffroi', desc: 'La Grand-Place de Bruges et sa tour médiévale de 83m, classée UNESCO.' },
  { name: 'Canaux & Minnewater', desc: 'Balade en bateau sur les canaux et le romantique Lac d\'Amour.' },
  { name: 'Musée Groeninge', desc: 'Chef-d\'œuvre des Primitifs flamands, dont l\'Agneau Mystique de Jan Van Eyck.' },
  { name: 'Brasserie Halve Maan', desc: 'La seule brasserie active dans le centre historique de Bruges depuis 1564.' },
  { name: 'Ateliers chocolat', desc: 'Bruges compte plus de 50 chocolatiers artisanaux — incontournable pour les groupes.' },
];

export default function BrugesPage() {
  return (
    <div className="py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-4">
        <nav className="mb-8 text-sm" aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/destinations" className="hover:text-blue-600">Destinations</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">Bruges</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>1h15 depuis Bruxelles · 90 km</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Excursion Bruges depuis Bruxelles en Autocar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Bruges, la Venise du Nord, est la destination de groupe idéale au départ de Bruxelles.
            À 90 km seulement, nos autocars avec chauffeur vous y amènent en 1h15 pour une journée
            inoubliable dans l&apos;une des plus belles villes médiévales d&apos;Europe.
          </p>
        </div>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Que voir à Bruges avec votre groupe ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{h.name}</h3>
                <p className="text-gray-600 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinéraire recommandé pour groupes (1 journée)</h2>
          <div className="space-y-4 max-w-2xl">
            {[
              { time: '08:30', step: 'Départ de Bruxelles (point de rendez-vous convenu)' },
              { time: '09:45', step: 'Arrivée à Bruges — parking autocar Katelijnepoort' },
              { time: '10:00', step: 'Visite du Markt, montée au Beffroi (en option)' },
              { time: '12:00', step: 'Déjeuner en groupe dans un restaurant du centre' },
              { time: '13:30', step: 'Balade en bateau sur les canaux (réservation conseillée)' },
              { time: '15:00', step: 'Musée Groeninge ou atelier chocolat' },
              { time: '16:30', step: 'Temps libre, shopping, chocolateries' },
              { time: '17:30', step: 'Retour à l\'autocar et départ vers Bruxelles' },
              { time: '19:00', step: 'Arrivée estimée à Bruxelles' },
            ].map((item) => (
              <div key={item.time} className="flex gap-4 items-start">
                <span className="text-sm font-bold text-blue-600 w-12 flex-shrink-0">{item.time}</span>
                <p className="text-gray-700 text-sm">{item.step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tarifs */}
        <section className="mb-16 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tarifs excursion Bruges depuis Bruxelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { vehicle: 'Minibus', capacity: '8–16 places', price: 'Dès 400€' },
              { vehicle: 'Bus', capacity: '20–35 places', price: 'Dès 550€' },
              { vehicle: 'Autocar', capacity: '40–55 places', price: 'Dès 700€' },
            ].map((v) => (
              <div key={v.vehicle} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-bold text-gray-900 mb-1">{v.vehicle}</p>
                <p className="text-sm text-gray-500 mb-2">{v.capacity}</p>
                <p className="text-blue-600 font-semibold">{v.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">Tarifs indicatifs aller-retour, chauffeur et carburant inclus. Devis personnalisé sur demande.</p>
        </section>

        {/* Infos pratiques */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Infos pratiques pour groupes</h2>
          <ul className="space-y-3 max-w-2xl">
            {[
              'Bruges centre est en grande partie piétonne — notre chauffeur vous dépose au plus proche',
              'Parking autocar principal : Katelijnepoort (hors centre, gratuit pour autocars)',
              'Bateau sur les canaux : prévoir 30–45 min, réservation groupe conseillée',
              'Saison haute (mai–sept) : arriver tôt pour éviter les foules',
              'Bruges n\'est pas en zone LEZ — tous nos véhicules sont autorisés',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
          <div className="space-y-6 max-w-3xl">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Destinations similaires</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/destinations/gand" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Gand</Link>
            <Link href="/destinations/belgique" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Belgique</Link>
            <Link href="/destinations/amsterdam" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Amsterdam</Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Réservez votre excursion à Bruges</h2>
          <p className="text-blue-100 mb-6">
            Devis gratuit sous 24h · <InternalLinkNext to="/notre-flotte" anchor="flotte Euro 6" className="text-blue-300 hover:text-white" /> · Sans engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactez-nous"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:+3225800325"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              +32 2 580 03 25
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
