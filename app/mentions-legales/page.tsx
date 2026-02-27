import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - Location Autocar Bruxelles',
  description: 'Mentions légales de Location Autocar Bruxelles. Informations légales sur notre entreprise de transport en autocar avec chauffeur en Belgique.',
  keywords: 'mentions legales, location autocar bruxelles, informations legales',
  alternates: { canonical: 'https://www.locationautocar.be/mentions-legales' },
  openGraph: {
    title: 'Mentions Légales | Location Autocar Bruxelles',
    description: 'Mentions légales et informations légales de Location Autocar Bruxelles.',
    url: 'https://www.locationautocar.be/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Mentions Légales - Location Autocar Bruxelles
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du Site</h2>
              <p className="text-gray-700 mb-4">
                Le site <strong>www.locationautocar.be</strong> est édité par :
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-2"><strong>Raison sociale :</strong> Location Autocar Bruxelles</p>
                <p className="text-gray-700 mb-2"><strong>Forme juridique :</strong> Société de services</p>
                <p className="text-gray-700 mb-2"><strong>Adresse :</strong> Boulevard Industriel 9, 1070 Bruxelles, Belgique</p>
                <p className="text-gray-700 mb-2"><strong>Téléphone :</strong> <a href="tel:+3225800325" className="text-blue-600 hover:text-blue-700">+32 2 580 03 25</a></p>
                <p className="text-gray-700"><strong>Email :</strong> <a href="mailto:info@locationautocar.be" className="text-blue-600 hover:text-blue-700">info@locationautocar.be</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
              <p className="text-gray-700 mb-4">
                Ce site est hébergé par des services d&apos;hébergement web professionnels garantissant la disponibilité et la sécurité du site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété Intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, design) est la propriété exclusive de Location Autocar Bruxelles ou de ses partenaires.
                Toute reproduction sans l&apos;accord écrit préalable est strictement interdite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des Données Personnelles</h2>
              <p className="text-gray-700 mb-4">
                Les informations recueillies sur ce site sont nécessaires pour le traitement de vos demandes de devis et réservations.
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données vous concernant.
              </p>
              <p className="text-gray-700 mb-4">
                Pour plus d&apos;informations, consultez notre{' '}
                <Link href="/politique-confidentialite" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilité</h2>
              <p className="text-gray-700 mb-4">
                Location Autocar Bruxelles s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site.
                Nous ne pouvons toutefois garantir l&apos;exactitude ou l&apos;exhaustivité des informations mises à disposition.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Loi Applicable</h2>
              <p className="text-gray-700 mb-4">
                Les présentes mentions légales sont régies par le droit belge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
              <p className="text-gray-700 mb-4">Pour toute question concernant ces mentions légales :</p>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <a href="tel:+3225800325" className="text-gray-700 hover:text-blue-600">+32 2 580 03 25</a>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <a href="mailto:info@locationautocar.be" className="text-gray-700 hover:text-blue-600">info@locationautocar.be</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" aria-hidden="true" />
                  <div className="text-gray-700">
                    Boulevard Industriel 9<br />
                    1070 Bruxelles, Belgique
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/politique-confidentialite"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Politique de Confidentialité
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
