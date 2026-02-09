import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const MentionsLegalesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Mentions Légales - Location Autocar Bruxelles"
        metaTitle="Mentions Légales | Location Autocar Bruxelles"
        description="Mentions légales de Location Autocar Bruxelles. Informations légales sur notre entreprise de transport en autocar avec chauffeur en Belgique."
        keywords="mentions legales, location autocar bruxelles, informations legales"
        canonical="https://www.locationautocar.be/mentions-legales"
      />

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Mentions Légales
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
                  Ce site est hébergé par des services d'hébergement web professionnels garantissant la disponibilité et la sécurité du site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété Intellectuelle</h2>
                <p className="text-gray-700 mb-4">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, design) est la propriété exclusive de Location Autocar Bruxelles ou de ses partenaires.
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l'accord écrit préalable de Location Autocar Bruxelles.
                </p>
                <p className="text-gray-700 mb-4">
                  Les marques, logos et signes distinctifs reproduits sur ce site sont la propriété de Location Autocar Bruxelles ou font l'objet d'une autorisation d'utilisation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des Données Personnelles</h2>
                <p className="text-gray-700 mb-4">
                  Les informations recueillies sur ce site sont nécessaires pour le traitement de vos demandes de devis et réservations.
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
                </p>
                <p className="text-gray-700 mb-4">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <a href="mailto:info@locationautocar.be" className="text-blue-600 hover:text-blue-700">info@locationautocar.be</a>
                </p>
                <p className="text-gray-700 mb-4">
                  Pour plus d'informations, consultez notre <Link to="/politique-confidentialite" className="text-blue-600 hover:text-blue-700 font-semibold">Politique de Confidentialité</Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilité</h2>
                <p className="text-gray-700 mb-4">
                  Location Autocar Bruxelles s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
                  Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                </p>
                <p className="text-gray-700 mb-4">
                  Location Autocar Bruxelles ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liens Hypertextes</h2>
                <p className="text-gray-700 mb-4">
                  Ce site peut contenir des liens vers d'autres sites internet. Location Autocar Bruxelles ne peut être tenu responsable du contenu de ces sites externes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Loi Applicable</h2>
                <p className="text-gray-700 mb-4">
                  Les présentes mentions légales sont régies par le droit belge. En cas de litige, les tribunaux belges seront seuls compétents.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                <p className="text-gray-700 mb-4">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+3225800325" className="text-gray-700 hover:text-blue-600">+32 2 580 03 25</a>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:info@locationautocar.be" className="text-gray-700 hover:text-blue-600">info@locationautocar.be</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
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
                  to="/politique-confidentialite"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Politique de Confidentialité
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contactez-nous"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Nous Contacter
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentionsLegalesPage;
