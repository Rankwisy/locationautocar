import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, UserCheck, Mail, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Location Autocar Bruxelles',
  description: 'Politique de confidentialité et protection des données personnelles de Location Autocar Bruxelles. Conformité RGPD et respect de votre vie privée.',
  keywords: 'politique confidentialite, rgpd, protection donnees, vie privee',
  alternates: { canonical: 'https://www.locationautocar.be/politique-confidentialite' },
  openGraph: {
    title: 'Politique de Confidentialité | Protection des Données RGPD',
    description: 'Politique de confidentialité et protection des données personnelles. Conformité RGPD.',
    url: 'https://www.locationautocar.be/politique-confidentialite',
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Shield className="w-8 h-8 text-blue-600" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Politique de Confidentialité - Location Autocar Bruxelles
              </h1>
              <p className="text-gray-600 mt-2">Dernière mise à jour : Février 2026</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              Location Autocar Bruxelles s&apos;engage à protéger votre vie privée et vos données personnelles.
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations
              conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-blue-600" aria-hidden="true" />
                1. Responsable du Traitement
              </h2>
              <p className="text-gray-700 mb-4">
                Le responsable du traitement de vos données personnelles est :
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-2"><strong>Location Autocar Bruxelles</strong></p>
                <p className="text-gray-700 mb-2">Boulevard Industriel 9, 1070 Bruxelles, Belgique</p>
                <p className="text-gray-700 mb-2">Email : <a href="mailto:info@locationautocar.be" className="text-blue-600 hover:text-blue-700">info@locationautocar.be</a></p>
                <p className="text-gray-700">Téléphone : <a href="tel:+3225800325" className="text-blue-600 hover:text-blue-700">+32 2 580 03 25</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-blue-600" aria-hidden="true" />
                2. Données Collectées
              </h2>
              <p className="text-gray-700 mb-4">
                Nous collectons les données personnelles suivantes : nom et prénom, adresse email, numéro de téléphone,
                informations de réservation (dates, destinations, nombre de passagers), données de navigation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du Traitement</h2>
              <p className="text-gray-700 mb-4">
                Vos données sont collectées pour : gestion des réservations, communication, facturation,
                amélioration du service, obligations légales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-blue-600" aria-hidden="true" />
                4. Durée de Conservation
              </h2>
              <p className="text-gray-700 mb-4">
                Données de réservation : 3 ans après la prestation. Données comptables : 10 ans (obligation légale).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Vos Droits RGPD</h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits d&apos;accès, de rectification, d&apos;effacement,
                d&apos;opposition, à la portabilité et de limitation du traitement.
              </p>
              <p className="text-gray-700 mb-4">
                Pour exercer vos droits : <a href="mailto:info@locationautocar.be" className="text-blue-600 hover:text-blue-700 font-semibold">info@locationautocar.be</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Réclamations</h2>
              <p className="text-gray-700 mb-4">
                Vous pouvez déposer une réclamation auprès de l&apos;Autorité de Protection des Données (APD) belge :
                Rue de la Presse 35, 1000 Bruxelles.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mentions-legales"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Mentions Légales
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contactez-nous"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Nous Contacter
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
