import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import InternalLinkNext from '@/components/SEO/InternalLinkNext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Week-end Cologne depuis Bruxelles en Autocar | Guide Groupes 2026',
  description:
    "Organisez votre week-end à Cologne depuis Bruxelles en autocar avec chauffeur. Cathédrale, musées, bières Kölsch. Guide complet groupes. Devis gratuit.",
  alternates: { canonical: 'https://www.locationautocar.be/destinations/cologne' },
  openGraph: {
    title: 'Week-end Cologne depuis Bruxelles en Autocar | Guide Groupes 2026',
    description:
      "Organisez votre week-end à Cologne depuis Bruxelles en autocar avec chauffeur. Cathédrale UNESCO, bières Kölsch, marché de Noël. Guide groupes.",
    url: 'https://www.locationautocar.be/destinations/cologne',
    images: [
      {
        url: 'https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85',
        width: 1200,
        height: 630,
        alt: 'Cathédrale de Cologne (Kölner Dom) — voyage autocar depuis Bruxelles',
      },
    ],
  },
};

const touristDestinationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Cologne',
  description:
    "Cologne (Köln) est la quatrième plus grande ville d'Allemagne, à 250 km de Bruxelles. Sa cathédrale gothique classée UNESCO, ses brasseries Kölsch et son marché de Noël légendaire en font une destination de groupe idéale.",
  url: 'https://www.locationautocar.be/destinations/cologne',
  touristType: ['Voyages d\'entreprise', 'Groupes culturels', 'Marchés de Noël', 'Sorties scolaires'],
  containsPlace: [
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Kölner Dom (Cathédrale de Cologne)', url: 'https://fr.wikipedia.org/wiki/Cath%C3%A9drale_de_Cologne' },
    { '@type': 'Museum', name: 'Musée Ludwig', url: 'https://fr.wikipedia.org/wiki/Mus%C3%A9e_Ludwig' },
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Vieille ville de Cologne (Altstadt)', url: 'https://fr.wikipedia.org/wiki/Cologne' },
    { '@type': 'LandmarksOrHistoricalBuildings', name: 'Marché de Noël de Cologne', url: 'https://fr.wikipedia.org/wiki/March%C3%A9_de_No%C3%ABl_de_Cologne' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien de temps pour aller de Bruxelles à Cologne en autocar ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bruxelles–Cologne représente environ 250 km et 2h30 à 3h de trajet en autocar selon la circulation. C'est la distance idéale pour une excursion de 2 jours ou une longue journée.",
      },
    },
    {
      '@type': 'Question',
      name: "Cologne vaut-il le détour pour un groupe ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolument. La cathédrale de Cologne (Kölner Dom) est l'un des monuments gothiques les plus impressionnants d'Europe. Ajoutez le musée Ludwig, les brasseries Kölsch et l'ambiance de l'Altstadt — Cologne offre une journée ou un week-end de groupe inoubliable.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le tarif d'un voyage Cologne en autocar depuis Bruxelles ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour un aller-retour journée (ou départ la veille) : minibus dès 700€, bus dès 950€, autocar grand tourisme dès 1 200€. Pour un week-end 2 jours avec nuit, le tarif inclut les heures d'attente du chauffeur — devis personnalisé recommandé.",
      },
    },
    {
      '@type': 'Question',
      name: "Quand est le marché de Noël de Cologne ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le marché de Noël de Cologne ouvre généralement fin novembre et se tient jusqu'au 23-24 décembre. C'est l'un des plus beaux d'Europe — nous proposons des navettes spéciales Cologne Noël pour les groupes.",
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
    { '@type': 'ListItem', position: 3, name: 'Cologne', item: 'https://www.locationautocar.be/destinations/cologne' },
  ],
};

const highlights = [
  { name: 'Kölner Dom', desc: 'La cathédrale gothique de Cologne, classée UNESCO depuis 1996. Haute de 157m, elle domine la ville depuis plus de 600 ans.' },
  { name: 'Musée Ludwig', desc: 'L\'un des plus importants musées d\'art moderne au monde — Picasso, Warhol, Lichtenstein.' },
  { name: 'Altstadt & Rhin', desc: 'La vieille ville au bord du Rhin avec ses brasseries typiques servant la Kölsch, la bière locale en verre de 0,2L.' },
  { name: 'Marché de Noël', desc: 'Considéré parmi les plus beaux d\'Europe — 7 marchés différents dans la ville, avec la cathédrale en toile de fond.' },
  { name: 'Eau de Cologne', desc: 'Berceau du célèbre parfum — visite de la maison Farina, la plus ancienne fabrique de parfum du monde (1709).' },
];

export default function ColognePage() {
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
            <li className="text-gray-900 font-semibold">Cologne</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>2h30 depuis Bruxelles · 250 km · Idéal week-end 2 jours</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Week-end à Cologne depuis Bruxelles en Autocar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Cologne est la destination européenne méconnue par excellence. À 2h30 de Bruxelles en
            autocar, cette ville allemande offre une cathédrale à couper le souffle, une vie culturelle
            intense et les meilleures bières Kölsch d&apos;Allemagne — idéale pour un week-end de groupe.
          </p>
        </div>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Que voir à Cologne avec votre groupe ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{h.name}</h3>
                <p className="text-gray-600 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary 2 jours */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinéraire recommandé 2 jours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Jour 1 — Centre historique</h3>
              <div className="space-y-3">
                {[
                  { time: '07:30', step: 'Départ de Bruxelles' },
                  { time: '10:00', step: 'Arrivée à Cologne, installation à l\'hôtel' },
                  { time: '11:00', step: 'Visite du Kölner Dom (2h)' },
                  { time: '13:30', step: 'Déjeuner dans l\'Altstadt' },
                  { time: '15:00', step: 'Musée Romano-Germanique ou Musée Ludwig' },
                  { time: '18:00', step: 'Brasserie Früh ou Gaffel — dégustation Kölsch' },
                  { time: '20:00', step: 'Dîner en groupe dans la vieille ville' },
                ].map((item) => (
                  <div key={item.time} className="flex gap-3 items-start">
                    <span className="text-xs font-bold text-blue-600 w-10 flex-shrink-0 mt-0.5">{item.time}</span>
                    <p className="text-gray-700 text-sm">{item.step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Jour 2 — Rhin & retour</h3>
              <div className="space-y-3">
                {[
                  { time: '09:00', step: 'Maison Farina (Eau de Cologne) ou shopping' },
                  { time: '11:00', step: 'Promenade sur les bords du Rhin et Deutz' },
                  { time: '13:00', step: 'Dernier déjeuner à Cologne' },
                  { time: '14:30', step: 'Départ pour Bruxelles' },
                  { time: '17:00', step: 'Arrivée estimée à Bruxelles' },
                ].map((item) => (
                  <div key={item.time} className="flex gap-3 items-start">
                    <span className="text-xs font-bold text-blue-600 w-10 flex-shrink-0 mt-0.5">{item.time}</span>
                    <p className="text-gray-700 text-sm">{item.step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="mb-16 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tarifs voyage Cologne depuis Bruxelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { vehicle: 'Minibus', capacity: '8–16 places', price: 'Dès 700€ / AR' },
              { vehicle: 'Bus', capacity: '20–35 places', price: 'Dès 950€ / AR' },
              { vehicle: 'Autocar GT', capacity: '40–55 places', price: 'Dès 1 200€ / AR' },
            ].map((v) => (
              <div key={v.vehicle} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="font-bold text-gray-900 mb-1">{v.vehicle}</p>
                <p className="text-sm text-gray-500 mb-2">{v.capacity}</p>
                <p className="text-blue-600 font-semibold">{v.price}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">Tarifs indicatifs aller-retour journée. Pour un week-end avec nuit (chauffeur en attente), devis personnalisé recommandé.</p>
        </section>

        {/* Infos pratiques */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Infos pratiques pour groupes</h2>
          <ul className="space-y-3 max-w-2xl">
            {[
              'Cologne est en Allemagne — pas de LEZ belge applicable, mais vignette environnementale allemande recommandée (nos véhicules en sont équipés)',
              'Parking autocars central : Breslauer Platz (près de la gare centrale, à côté de la cathédrale)',
              'Cologne a sa propre LEZ (Umweltzone) : tous nos véhicules Euro 6 sont autorisés',
              'Marché de Noël : réserver l\'excursion min. 6 semaines à l\'avance (très demandé)',
              'Monnaie : Euro — pas de change nécessaire depuis la Belgique',
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Autres destinations européennes</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/destinations/paris" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Paris</Link>
            <Link href="/destinations/amsterdam" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Amsterdam</Link>
            <Link href="/destinations/europe" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm transition-colors">Europe</Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Réservez votre voyage à Cologne</h2>
          <p className="text-blue-100 mb-6">
            Devis gratuit sous 24h · <InternalLinkNext to="/notre-flotte/autocars" anchor="Autocars grand tourisme" className="text-blue-300 hover:text-white" /> · Sans engagement
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
