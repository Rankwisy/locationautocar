import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excursion Gand depuis Bruxelles en Autocar | Guide Groupes 2026',
  description:
    "Organisez votre excursion à Gand depuis Bruxelles en autocar avec chauffeur. Cité médiévale, Gravensteen, Van Eyck. Guide complet groupes. Devis gratuit.",
  alternates: { canonical: 'https://www.locationautocar.be/destinations/gand' },
  openGraph: {
    title: 'Excursion Gand depuis Bruxelles en Autocar | Guide Groupes 2026',
    description:
      "Organisez votre excursion à Gand depuis Bruxelles en autocar avec chauffeur. Cité médiévale, Gravensteen, Van Eyck. Guide complet groupes.",
    url: 'https://www.locationautocar.be/destinations/gand',
    images: [
      {
        url: 'https://images.pexels.com/photos/4388163/pexels-photo-4388163.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
        width: 1200,
        height: 630,
        alt: 'Vue sur les Graslei et Korenlei de Gand — excursion autocar depuis Bruxelles',
      },
    ],
  },
};

const touristDestinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Gand',
  description:
    "Gand est l'une des plus belles villes médiévales de Belgique. À 55 km de Bruxelles, c'est une destination idéale pour une excursion de groupe en autocar — moins connue que Bruges mais tout aussi remarquable.",
  url: 'https://www.locationautocar.be/destinations/gand',
  touristType: ['Groupes culturels', 'Étudiants', 'Associations', 'Voyages d\'entreprise'],
  containsPlace: [
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Gravensteen (Château des Comtes)', url: 'https://fr.wikipedia.org/wiki/Gravensteen' },
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Graslei et Korenlei', url: 'https://fr.wikipedia.org/wiki/Graslei' },
    { '@type': 'Museum', name: 'Musée des Beaux-Arts de Gand', url: 'https://fr.wikipedia.org/wiki/Mus%C3%A9e_des_Beaux-Arts_de_Gand' },
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Sint-Baafskathedraal', url: 'https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Bavon_de_Gand' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien de temps pour aller de Bruxelles à Gand en autocar ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bruxelles–Gand représente environ 55 km et 45 minutes à 1h de trajet en autocar selon la circulation. C'est l'une des excursions les plus rapides depuis Bruxelles.",
      },
    },
    {
      '@type': 'Question',
      name: "Gand vaut-il la peine d'être visité ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolument. Gand est souvent considérée comme plus authentique que Bruges — moins touristique, mais tout aussi riche en histoire médiévale, art flamand (l'Agneau Mystique de Van Eyck) et gastronomie (cuberdon, bières locales).",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le tarif d'une excursion Gand en autocar depuis Bruxelles ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Prix indicatifs aller-retour en journée : minibus 8–16 places dès 380€, bus 20–35 places dès 520€, autocar 40–55 places dès 680€. Chauffeur et carburant inclus. Devis personnalisé gratuit.",
      },
    },
    {
      '@type': 'Question',
      name: "Gand ou Bruges : quelle destination choisir pour un groupe ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un groupe qui veut éviter la foule touristique et découvrir une ville authentique, Gand est idéale. Pour un cadre plus romantique et plus connu, Bruges est le choix classique. Les deux peuvent se combiner sur une journée au départ de Bruxelles.",
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
    { '@type': 'ListItem', position: 3, name: 'Gand', item: 'https://www.locationautocar.be/destinations/gand' },
  ],
};

const highlights = [
  { name: 'Gravensteen', desc: 'Le Château des Comtes de Flandre, l\'un des châteaux médiévaux les mieux conservés d\'Europe.' },
  { name: 'Graslei & Korenlei', desc: 'Les deux quais historiques face à face, avec leurs guildes médiévales — cœur de la vie nocturne gantoise.' },
  { name: 'Sint-Baafskathedraal', desc: 'L\'Agneau Mystique de Jan et Hubert Van Eyck (1432), chef-d\'œuvre absolu de la peinture flamande.' },
  { name: 'Cuberdon & Gastronomie', desc: 'Les fameux cuberdon (bonbons violets en forme de cône) et les bistrots gantois incontournables.' },
  { name: 'STAM', desc: 'Le musée municipal de l\'histoire de Gand, installé dans une abbaye cistercienne du XVIIe siècle.' },
];

export default function GandPage() {
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
            <li className="text-gray-900 font-semibold">Gand</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>45 min depuis Bruxelles · 55 km</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Excursion Gand depuis Bruxelles en Autocar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Gand, cité médiévale et universitaire, est la destination secrète des connaisseurs.
            À seulement 55 km de Bruxelles — 45 minutes en autocar — elle offre un patrimoine
            exceptionnel et une atmosphère authentique, loin des foules de Bruges.
          </p>
        </div>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Les incontournables de Gand pour groupes</h2>
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
              { time: '09:00', step: 'Départ de Bruxelles' },
              { time: '09:50', step: 'Arrivée à Gand — parking autocar Sint-Pietersplein' },
              { time: '10:00', step: 'Visite du Gravensteen (Château des Comtes)' },
              { time: '11:30', step: 'Promenade sur les Graslei et Korenlei' },
              { time: '12:30', step: 'Déjeuner dans un estaminet gantois' },
              { time: '14:00', step: 'Sint-Baafskathedraal — L\'Agneau Mystique de Van Eyck' },
              { time: '15:30', step: 'Temps libre : cuberdon, bières, boutiques' },
              { time: '17:00', step: 'Retour à l\'autocar et départ' },
              { time: '18:00', step: 'Arrivée estimée à Bruxelles' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tarifs excursion Gand depuis Bruxelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { vehicle: 'Minibus', capacity: '8–16 places', price: 'Dès 380€' },
              { vehicle: 'Bus', capacity: '20–35 places', price: 'Dès 520€' },
              { vehicle: 'Autocar', capacity: '40–55 places', price: 'Dès 680€' },
            ].map((v) => (
              <div key={v.vehicle} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-bold text-gray-900 mb-1">{v.vehicle}</p>
                <p className="text-sm text-gray-500 mb-2">{v.capacity}</p>
                <p className="text-blue-600 font-semibold">{v.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">Tarifs indicatifs aller-retour, chauffeur et carburant inclus.</p>
        </section>

        {/* Infos pratiques */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Infos pratiques pour groupes</h2>
          <ul className="space-y-3 max-w-2xl">
            {[
              'Centre de Gand partiellement piéton — dépôt au plus proche (Sint-Pietersplein ou Kouter)',
              'Parking autocar : Sint-Pietersplein ou parking Rooigem (Park & Ride)',
              'Visite de l\'Agneau Mystique : réservation groupe obligatoire à l\'avance',
              'Gand est plus calme que Bruges en été — idéal pour les groupes qui veulent éviter la foule',
              'Possibilité de combiner Gand + Bruges en une journée (distances courtes)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gand vs Bruges */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gand ou Bruges pour votre groupe ?</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700"></th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-700">Gand</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-700">Bruges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Distance depuis Bruxelles', '55 km — 45 min', '90 km — 1h15'],
                  ['Fréquentation touristique', 'Modérée', 'Très élevée en été'],
                  ['Patrimoine UNESCO', 'Non (mais exceptionnel)', 'Oui (centre historique)'],
                  ['Ambiance', 'Universitaire, jeune, vivante', 'Romantique, médiévale'],
                  ['Idéal pour', 'Culture, art flamand, gastronomie', 'Canaux, chocolat, postcard'],
                ].map(([label, gand, bruges]) => (
                  <tr key={label}>
                    <td className="px-4 py-3 font-medium text-gray-700">{label}</td>
                    <td className="px-4 py-3 text-gray-600">{gand}</td>
                    <td className="px-4 py-3 text-gray-600">{bruges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            <Link href="/destinations/bruges" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Bruges</Link>
            <Link href="/destinations/belgique" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Belgique</Link>
            <Link href="/destinations/cologne" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Cologne</Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Réservez votre excursion à Gand</h2>
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
