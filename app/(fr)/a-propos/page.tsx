import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos | Location Autocar Bruxelles depuis 2007',
  description:
    "Découvrez l'équipe de Location Autocar Bruxelles : plus de 15 ans d'expérience dans le transport de groupes en Belgique et en Europe. Chauffeurs certifiés, flotte Euro 6.",
  alternates: { canonical: 'https://www.locationautocar.be/a-propos' },
  openGraph: {
    title: 'À Propos | Location Autocar Bruxelles depuis 2007',
    description:
      "Découvrez l'équipe de Location Autocar Bruxelles : plus de 15 ans d'expérience dans le transport de groupes en Belgique et en Europe.",
    url: 'https://www.locationautocar.be/a-propos',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Équipe Location Autocar Bruxelles',
  jobTitle: 'Experts en transport de groupes',
  worksFor: {
    '@type': 'LocalBusiness',
    name: 'Location Autocar Bruxelles',
    url: 'https://www.locationautocar.be',
  },
  knowsAbout: [
    'transport de groupe',
    'location autocar Belgique',
    'transferts aéroports Bruxelles',
    'excursions touristiques Europe',
    'navettes entreprise Bruxelles',
    'réglementation LEZ Bruxelles',
    'norme Euro 6',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Permis D — Transport en commun' },
    { '@type': 'EducationalOccupationalCredential', name: 'Formation continue sécurité routière' },
    { '@type': 'EducationalOccupationalCredential', name: 'Certification qualité transport 2023' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.locationautocar.be' },
    { '@type': 'ListItem', position: 2, name: 'À Propos', item: 'https://www.locationautocar.be/a-propos' },
  ],
};

const milestones = [
  { year: '2007', label: 'Fondation de la société à Anderlecht, Bruxelles' },
  { year: '2012', label: 'Première flotte entièrement renouvelée — norme Euro 5' },
  { year: '2018', label: 'Expansion vers les destinations européennes longue distance' },
  { year: '2022', label: 'Certification qualité transport — Excellence Client Award' },
  { year: '2024', label: 'Flotte 100% Euro 6 — conformité totale LEZ Bruxelles' },
  { year: '2026', label: '15 ans d\'expertise, +500 entreprises et associations servies' },
];

const values = [
  {
    icon: CheckCircle,
    title: 'Ponctualité garantie',
    desc: 'Nous suivons chaque vol et adaptons les horaires en temps réel. Votre groupe ne attend jamais.',
  },
  {
    icon: Award,
    title: 'Chauffeurs certifiés',
    desc: 'Permis D, formation sécurité routière, casier judiciaire vierge. Sélection rigoureuse à chaque recrutement.',
  },
  {
    icon: Users,
    title: 'Experts groupes',
    desc: 'Entreprises, écoles, associations, mariages — nous avons transporté tous types de groupes depuis 2007.',
  },
  {
    icon: Clock,
    title: 'Disponibles 24h/24',
    desc: 'Notre équipe répond à vos demandes urgentes à toute heure. Devis sous 24h, même le week-end.',
  },
];

export default function AProposPage() {
  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4">
        <nav className="mb-6" aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">Accueil</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold">À Propos</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Location Autocar Bruxelles — Notre Histoire
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Depuis 2007, nous transportons groupes, entreprises et familles à travers Bruxelles,
              la Belgique et l&apos;Europe. Notre expertise, c&apos;est votre sérénité.
            </p>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '15+', label: 'Années d\'expérience' },
              { value: '500+', label: 'Clients fidèles' },
              { value: '100%', label: 'Flotte Euro 6' },
              { value: '24h/24', label: 'Support disponible' },
            ].map((stat) => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h2>
            <p className="text-gray-700 mb-4">
              Location Autocar Bruxelles est née d&apos;une conviction simple : le transport de groupe doit être
              fiable, confortable et transparent. Implantés à Anderlecht depuis 2007, nous couvrons les
              19 communes bruxelloises, toute la Belgique et les destinations européennes les plus prisées.
            </p>
            <p className="text-gray-700 mb-4">
              Notre flotte — 100% conforme aux normes Euro 6 et autorisée en zone LEZ Bruxelles — est
              conduite par des chauffeurs professionnels sélectionnés pour leur ponctualité, leur courtoisie
              et leur connaissance des routes européennes.
            </p>
            <p className="text-gray-700">
              Nous travaillons avec des entreprises du quartier Schuman, des établissements scolaires,
              des agences événementielles et des particuliers qui nous confient leurs moments les plus
              importants : mariages, sorties d&apos;entreprise, voyages scolaires.
            </p>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos engagements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <v.icon className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{v.title}</h3>
                    <p className="text-gray-600 text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Notre parcours</h2>
            <div className="space-y-4">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-4 items-start">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0 mt-0.5">
                    {m.year}
                  </span>
                  <p className="text-gray-700">{m.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Expertise */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre expertise</h2>
            <p className="text-gray-700 mb-4">
              Nos chauffeurs et gestionnaires sont des spécialistes reconnus dans les domaines suivants :
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Transport de groupe en Belgique et en Europe',
                'Transferts aéroports Bruxelles-Zaventem et Charleroi',
                'Excursions touristiques : Bruges, Gand, Paris, Amsterdam',
                'Navettes corporate pour institutions européennes',
                'Réglementation LEZ et normes Euro 6',
                'Gestion logistique de convois de groupes',
                'Transport scolaire sécurisé',
                'Location autocar pour mariages et événements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Faites confiance à 15 ans d&apos;expertise</h2>
            <p className="text-blue-100 mb-6">
              Devis gratuit sous 24h · Sans engagement · Chauffeurs professionnels
            </p>
            <Link
              href="/contactez-nous"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
