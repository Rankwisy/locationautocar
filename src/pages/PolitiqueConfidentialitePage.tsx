import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, UserCheck, Mail, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Politique de Confidentialité - Location Autocar Bruxelles"
        metaTitle="Politique de Confidentialité | Protection des Données RGPD"
        description="Politique de confidentialité et protection des données personnelles de Location Autocar Bruxelles. Conformité RGPD et respect de votre vie privée."
        keywords="politique confidentialite, rgpd, protection donnees, vie privee"
        canonical="https://www.locationautocar.be/politique-confidentialite"
      />

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600" />
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
                Location Autocar Bruxelles s'engage à protéger votre vie privée et vos données personnelles.
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-blue-600" />
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
                  <Eye className="w-6 h-6 text-blue-600" />
                  2. Données Collectées
                </h2>
                <p className="text-gray-700 mb-4">
                  Nous collectons les données personnelles suivantes :
                </p>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Informations d'Identité</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Adresse postale (si nécessaire pour la facturation)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Informations de Réservation</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Dates et horaires souhaités</li>
                      <li>Destination et itinéraire</li>
                      <li>Nombre de passagers</li>
                      <li>Services demandés</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Données de Navigation</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées</li>
                      <li>Données de cookies (avec votre consentement)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du Traitement</h2>
                <p className="text-gray-700 mb-4">
                  Vos données sont collectées et utilisées pour les finalités suivantes :
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <div className="text-green-600 mt-1">✓</div>
                    <div className="text-gray-700">
                      <strong>Gestion des réservations :</strong> traitement de vos demandes de devis et de réservation
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <div className="text-green-600 mt-1">✓</div>
                    <div className="text-gray-700">
                      <strong>Communication :</strong> vous contacter concernant votre réservation et nos services
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <div className="text-green-600 mt-1">✓</div>
                    <div className="text-gray-700">
                      <strong>Facturation :</strong> établir et envoyer les factures
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <div className="text-green-600 mt-1">✓</div>
                    <div className="text-gray-700">
                      <strong>Amélioration du service :</strong> analyser l'utilisation du site pour améliorer nos services
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <div className="text-green-600 mt-1">✓</div>
                    <div className="text-gray-700">
                      <strong>Obligations légales :</strong> respecter les obligations comptables et fiscales
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Légale du Traitement</h2>
                <p className="text-gray-700 mb-4">
                  Le traitement de vos données personnelles repose sur les bases légales suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Exécution du contrat :</strong> nécessaire pour traiter votre réservation</li>
                  <li><strong>Consentement :</strong> pour l'envoi de communications marketing (avec opt-out)</li>
                  <li><strong>Obligations légales :</strong> conservation des données comptables</li>
                  <li><strong>Intérêt légitime :</strong> amélioration de nos services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-blue-600" />
                  5. Durée de Conservation
                </h2>
                <p className="text-gray-700 mb-4">
                  Vos données personnelles sont conservées pendant les durées suivantes :
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span>Données de réservation</span>
                      <span className="font-semibold">3 ans après la prestation</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span>Données comptables</span>
                      <span className="font-semibold">10 ans (obligation légale)</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span>Cookies analytiques</span>
                      <span className="font-semibold">13 mois maximum</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Données de contact (newsletter)</span>
                      <span className="font-semibold">Jusqu'à désinscription</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Partage des Données</h2>
                <p className="text-gray-700 mb-4">
                  Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement avec :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Nos chauffeurs (informations nécessaires pour la prestation)</li>
                  <li>Prestataires de paiement (traitement sécurisé des transactions)</li>
                  <li>Services d'hébergement web (stockage sécurisé des données)</li>
                  <li>Autorités légales (en cas d'obligation légale)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Tous nos sous-traitants sont situés dans l'Union Européenne et respectent le RGPD.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos Droits RGPD</h2>
                <p className="text-gray-700 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit d'Accès</h3>
                    <p className="text-gray-700 text-sm">Obtenir une copie de vos données personnelles</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit de Rectification</h3>
                    <p className="text-gray-700 text-sm">Corriger vos données inexactes ou incomplètes</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit à l'Effacement</h3>
                    <p className="text-gray-700 text-sm">Demander la suppression de vos données</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit d'Opposition</h3>
                    <p className="text-gray-700 text-sm">Vous opposer au traitement de vos données</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit à la Portabilité</h3>
                    <p className="text-gray-700 text-sm">Recevoir vos données dans un format structuré</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Droit de Limitation</h3>
                    <p className="text-gray-700 text-sm">Limiter le traitement de vos données</p>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-3">
                    <strong>Pour exercer vos droits, contactez-nous :</strong>
                  </p>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-5 h-5 text-green-600" />
                    <a href="mailto:info@locationautocar.be" className="text-blue-600 hover:text-blue-700 font-semibold">
                      info@locationautocar.be
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Nous vous répondrons dans un délai maximum de 30 jours.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des Données</h2>
                <p className="text-gray-700 mb-4">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Chiffrement SSL/TLS pour toutes les communications</li>
                  <li>Accès aux données limité aux personnes autorisées</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Serveurs hébergés dans des datacenters certifiés en Union Européenne</li>
                  <li>Surveillance et mises à jour de sécurité régulières</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience. Nous utilisons :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (pas de consentement requis)</li>
                  <li><strong>Cookies analytiques :</strong> pour comprendre l'utilisation du site (avec consentement)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications de la Politique</h2>
                <p className="text-gray-700 mb-4">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                  Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
                  Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Réclamations</h2>
                <p className="text-gray-700 mb-4">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de l'autorité de contrôle belge :
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2"><strong>Autorité de Protection des Données (APD)</strong></p>
                  <p className="text-gray-700 mb-2">Rue de la Presse 35, 1000 Bruxelles</p>
                  <p className="text-gray-700 mb-2">Email : contact@apd-gba.be</p>
                  <p className="text-gray-700">Site web : <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">www.autoriteprotectiondonnees.be</a></p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/mentions-legales"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Mentions Légales
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

export default PolitiqueConfidentialitePage;
