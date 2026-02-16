import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Leaf, Shield, MapPin, ArrowRight, Info, Phone, Mail } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import LEZBadge from '../components/LEZBadge';
import { semanticKeywords } from '../data/seoData';

const LEZBruxellesPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const lezFAQ = [
    {
      question: "Qu'est-ce que la Zone de Basses Émissions (LEZ) de Bruxelles ?",
      answer: "La LEZ de Bruxelles est une zone environnementale couvrant l'ensemble du territoire de la Région de Bruxelles-Capitale. Elle vise à améliorer la qualité de l'air en limitant l'accès aux véhicules les plus polluants."
    },
    {
      question: "Quelles sont les normes requises en 2026 ?",
      answer: "Depuis janvier 2025, les véhicules diesel doivent répondre minimum à la norme Euro 6 pour circuler dans la LEZ de Bruxelles. Les véhicules Euro 5 diesel sont interdits depuis le 1er janvier 2025. Notre flotte répond à ces exigences avec 100% de véhicules Euro 6 ou supérieurs."
    },
    {
      question: "Quelle est l'amende en cas de non-conformité ?",
      answer: "Le non-respect de la LEZ entraîne une amende de 350€ par infraction. Avec nos véhicules conformes Euro 6+, vous n'avez aucun risque d'amende."
    },
    {
      question: "Quelles zones sont concernées par la LEZ ?",
      answer: "La LEZ couvre l'ensemble des 19 communes de la Région de Bruxelles-Capitale, y compris le centre-ville, le quartier européen, la Grand-Place et tous les principaux sites touristiques et d'affaires."
    },
    {
      question: "Comment vérifier si un véhicule est conforme ?",
      answer: "Tous nos véhicules affichent clairement leur norme Euro 6 dans leurs spécifications. Nous garantissons à 100% la conformité de notre flotte avec les réglementations LEZ actuelles et futures."
    },
    {
      question: "Les autocars de tourisme sont-ils concernés ?",
      answer: "Oui, tous les véhicules circulant dans la LEZ de Bruxelles sont concernés, y compris les autocars de tourisme. C'est pourquoi nous avons investi dans une flotte entièrement conforme Euro 6+."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": lezFAQ.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.locationautocar.be/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "LEZ Bruxelles",
        "item": "https://www.locationautocar.be/lez-bruxelles"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Zone LEZ Bruxelles - Flotte 100% Conforme Euro 6 | Location Autocar"
        metaTitle="LEZ Bruxelles 2026 | Flotte Autocar Euro 6 Conforme | Sans Amende"
        description="Tous nos autocars sont conformes aux normes LEZ Bruxelles 2026. Flotte 100% Euro 6 garantissant accès illimité au centre-ville. Pas d'amende, pas de restriction."
        keywords={semanticKeywords.lez.join(', ')}
        canonical="https://www.locationautocar.be/lez-bruxelles"
        faqSchema={faqSchema}
        breadcrumbSchema={breadcrumbSchema}
        ogImage="https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85"
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Leaf className="w-4 h-4" />
                Conformité Environnementale
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Zone de Basses Émissions (LEZ) Bruxelles
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Notre flotte est 100% conforme aux normes Euro 6 ou supérieures,
                garantissant un accès illimité à la Zone de Basses Émissions de Bruxelles en 2026 et au-delà.
              </p>

              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-6 py-3 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Voyagez en toute sérénité sans risque d'amende ni de restriction</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Important : Nouvelles Réglementations 2026
                  </h2>
                  <p className="text-gray-700 mb-3">
                    Depuis le <strong>1er janvier 2025</strong>, les véhicules diesel Euro 5 sont <strong>interdits</strong> dans la LEZ de Bruxelles.
                    Seuls les véhicules diesel Euro 6 ou supérieurs peuvent circuler librement.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Amende en cas de non-conformité : <span className="text-red-600">350€</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
              <div className="text-center mb-6">
                <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Notre Engagement Environnemental
                </h2>
                <p className="text-lg text-gray-700">
                  100% de notre flotte répond aux normes Euro 6 ou supérieures
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-700 font-semibold">Flotte Conforme</div>
                  <div className="text-sm text-gray-600 mt-2">Tous nos véhicules Euro 6+</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">0€</div>
                  <div className="text-gray-700 font-semibold">Risque d'Amende</div>
                  <div className="text-sm text-gray-600 mt-2">Conformité totale garantie</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-700 font-semibold">Accès Centre-Ville</div>
                  <div className="text-sm text-gray-600 mt-2">Sans restriction ni limite</div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir nos Véhicules Conformes LEZ ?
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Accès Illimité au Centre-Ville
                      </h3>
                      <p className="text-gray-600">
                        Circulez librement vers la Grand-Place, le quartier européen, les musées et tous les sites touristiques
                        sans aucune restriction ni crainte d'amende.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Protection Contre les Amendes
                      </h3>
                      <p className="text-gray-600">
                        Évitez les amendes de 350€ par infraction. Nos véhicules Euro 6+ sont automatiquement conformes
                        et ne déclenchent aucune alerte LEZ.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Conformité Garantie pour le Futur
                      </h3>
                      <p className="text-gray-600">
                        Nos véhicules respectent les normes 2026 et anticipent les réglementations futures.
                        Vous êtes protégés contre les changements de législation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Image Responsable pour Votre Organisation
                      </h3>
                      <p className="text-gray-600">
                        Démontrez l'engagement environnemental de votre entreprise ou groupe en choisissant
                        des transports respectueux de l'environnement et conformes aux normes les plus strictes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Zone Couverte par la LEZ
                  </h3>
                  <p className="text-gray-700 mb-3">
                    La Zone de Basses Émissions couvre l'intégralité du territoire de la Région de Bruxelles-Capitale,
                    soit les 19 communes bruxelloises.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Centre-ville
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Quartier européen
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Grand-Place
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Atomium
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Musées royaux
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Toutes les communes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Normes Euro et Restrictions LEZ
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Norme Euro</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Type de Carburant</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Statut LEZ 2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold">Euro 6 / VI</td>
                      <td className="px-6 py-4">Diesel / Essence</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          <CheckCircle className="w-4 h-4" />
                          Autorisé
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Euro 5 / V</td>
                      <td className="px-6 py-4">Diesel</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                          <AlertTriangle className="w-4 h-4" />
                          Interdit (depuis 2025)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Euro 4 et inférieur</td>
                      <td className="px-6 py-4">Tous carburants</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                          <AlertTriangle className="w-4 h-4" />
                          Interdit
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 font-semibold">Notre Flotte</td>
                      <td className="px-6 py-4">Diesel Euro 6+</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          <CheckCircle className="w-4 h-4" />
                          100% Conforme
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Questions Fréquentes sur la LEZ Bruxelles
              </h2>
              <div className="space-y-4">
                {lezFAQ.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </h3>
                      <ArrowRight
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          openFaqIndex === index ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Ressources Officielles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    Bruxelles Environnement
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Informations officielles sur la Zone de Basses Émissions de Bruxelles
                  </p>
                  <a
                    href="https://lez.brussels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                  >
                    Consulter le site officiel
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    Vérification de Conformité
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Vérifiez la conformité d'un véhicule aux normes LEZ
                  </p>
                  <a
                    href="https://lez.brussels/mytax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                  >
                    Vérifier un véhicule
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un Transport Conforme LEZ ?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Réservez dès maintenant nos véhicules Euro 6+ pour circuler en toute sérénité à Bruxelles
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="text-sm text-blue-100">+32 2 580 03 25</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-blue-100">info@locationautocar.be</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Service</div>
                    <div className="text-sm text-blue-100">24/7 Disponible</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contactez-nous"
                  className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/notre-flotte"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
                >
                  Voir Notre Flotte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LEZBruxellesPage;
