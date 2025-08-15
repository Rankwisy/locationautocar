import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, Wifi, Star, CheckCircle, ArrowRight, Phone, Mail, Clock, MapPin, Award } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import BreadcrumbComponent from '../components/SEO/BreadcrumbComponent';
import { vehicleSchemas } from '../data/enhancedSchemas';

const FleetMinibusPage: React.FC = () => {
  const minibusModels = [
    {
      id: 1,
      name: "Mercedes Sprinter Luxe 16 places",
      capacity: 16,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Minibus Mercedes Sprinter luxe 16 places avec chauffeur professionnel",
      features: [
        "Sièges cuir ergonomiques",
        "Climatisation automatique bi-zone",
        "WiFi gratuit haut débit",
        "Prises USB individuelles",
        "Système audio premium Bose",
        "Vitres teintées panoramiques",
        "Éclairage LED d'ambiance",
        "Plancher antidérapant"
      ],
      description: "Le summum du confort pour vos transferts VIP et excursions de prestige.",
      priceRange: "€€€",
      rating: 4.9
    },
    {
      id: 2,
      name: "Mercedes Sprinter Standard 12 places",
      capacity: 12,
      year: 2022,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Minibus Mercedes Sprinter 12 places pour transport de groupe",
      features: [
        "Sièges confortables ergonomiques",
        "Climatisation efficace",
        "Système audio Bluetooth",
        "Espace bagages optimisé",
        "Ceintures de sécurité 3 points",
        "Éclairage LED intérieur",
        "Vitres électriques",
        "Direction assistée"
      ],
      description: "Solution économique sans compromis sur la qualité et la sécurité.",
      priceRange: "€€",
      rating: 4.7
    },
    {
      id: 3,
      name: "Ford Transit Premium 14 places",
      capacity: 14,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Minibus Ford Transit premium 14 places moderne",
      features: [
        "Sièges sport ergonomiques",
        "Climatisation automatique",
        "Écran tactile multimédia",
        "Caméra de recul",
        "Aide au stationnement",
        "Régulateur de vitesse",
        "Jantes alliage",
        "Système de navigation GPS"
      ],
      description: "Technologie moderne et confort optimal pour tous vos déplacements.",
      priceRange: "€€",
      rating: 4.8
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Groupes Intimes",
      description: "8 à 16 passagers pour une ambiance conviviale"
    },
    {
      icon: Shield,
      title: "Sécurité Premium",
      description: "Véhicules récents avec équipements de sécurité avancés"
    },
    {
      icon: Wifi,
      title: "Connectivité",
      description: "WiFi gratuit et prises de recharge"
    },
    {
      icon: Award,
      title: "Service VIP",
      description: "Chauffeurs expérimentés et service personnalisé"
    }
  ];

  const useCases = [
    "Transferts aéroports et gares VIP",
    "Excursions touristiques petits groupes",
    "Voyages d'affaires et séminaires",
    "Événements familiaux et mariages",
    "Sorties culturelles et gastronomiques",
    "Transferts hôtels de luxe"
  ];

  const minibusSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Location Minibus avec Chauffeur - Bruxelles",
    "description": "Location de minibus 8-16 places avec chauffeur professionnel pour transferts VIP, excursions et voyages d'affaires en Belgique et Europe.",
    "category": "Minibus Rental Service",
    "brand": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "lowPrice": "120",
      "highPrice": "300",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "BE",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 0,
        "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility",
        "merchantReturnLink": "https://www.locationautocar.be/contactez-nous"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "124"
    }
  };

  return (
    <>
      <SEOHead
        title="Location Minibus avec Chauffeur Bruxelles | 8-16 Places | Service VIP"
        metaTitle="Minibus Mercedes Chauffeur | 8-16 Places | Transferts VIP Bruxelles"
        description="Location de minibus avec chauffeur professionnel à Bruxelles. Flotte Mercedes moderne 8-16 places pour transferts VIP, excursions et voyages d'affaires. Devis gratuit."
        keywords="minibus mercedes chauffeur, transferts vip bruxelles, 8-16 places, excursions petits groupes"
        canonical="https://www.locationautocar.be/notre-flotte/minibus"
        schema={vehicleSchemas.minibus}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <BreadcrumbComponent 
            items={[
              { name: "Notre Flotte", href: "/notre-flotte" },
              { name: "Minibus" }
            ]}
          />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Location Minibus avec Chauffeur
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre flotte de <strong>minibus Mercedes de 8 à 16 places</strong> avec chauffeur professionnel. 
              Idéaux pour vos transferts VIP et excursions de prestige vers nos{' '}
              <Link to="/destinations/bruxelles" className="text-blue-600 hover:text-blue-700 font-semibold">excursions à Bruxelles</Link>{' '}
              et{' '}
              <Link to="/destinations/belgique" className="text-blue-600 hover:text-blue-700 font-semibold">circuits en Belgique</Link>.
            </p>
          </div>

          {/* Minibus Models Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {minibusModels.map((minibus) => (
              <div key={minibus.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={minibus.image}
                    alt={minibus.imageAlt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {minibus.capacity} places
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold">
                    {minibus.priceRange}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {minibus.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{minibus.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {minibus.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Équipements inclus :</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {minibus.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      +{minibus.features.length - 4} autres équipements
                    </p>
                  </div>

                  <Link
                    to="/contactez-nous"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center block"
                  >
                    Demander un Devis
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Advantages Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi Choisir Nos Minibus ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <advantage.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Utilisations Recommandées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* External Links Section */}
          <div className="mb-16 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ressources Utiles pour Votre Voyage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Aéroports de Bruxelles</h3>
                <p className="text-gray-600 mb-4">
                  Informations officielles sur les aéroports de Bruxelles pour vos transferts.
                </p>
                <a 
                  href="https://www.brusselsairport.be" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Brussels Airport - Site Officiel
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Tourisme Bruxelles</h3>
                <p className="text-gray-600 mb-4">
                  Guide officiel du tourisme à Bruxelles pour planifier vos excursions.
                </p>
                <a 
                  href="https://visit.brussels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit Brussels - Guide Officiel
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Comparison with Other Vehicles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comparez Avec Notre Flotte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Minibus (8-16 places)</h3>
                <p className="text-blue-700 mb-4">Vous êtes ici - Idéal pour petits groupes VIP</p>
                <div className="text-blue-800 font-semibold">Page actuelle</div>
              </div>
              <Link to="/notre-flotte/bus" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Bus (20-35 places)</h3>
                <p className="text-gray-600 mb-4">Parfait équilibre capacité et confort</p>
                <div className="text-blue-600 font-semibold">Voir les bus →</div>
              </Link>
              <Link to="/notre-flotte/autocars" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Autocars (40-55 places)</h3>
                <p className="text-gray-600 mb-4">Grands groupes et voyages longue distance</p>
                <div className="text-blue-600 font-semibold">Voir les autocars →</div>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Réservez Votre Minibus VIP
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Service premium depuis 2007. Chauffeurs expérimentés, véhicules Mercedes récents. 
              Devis personnalisé sous 24h.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <div className="text-sm text-blue-100">+32 2 580 03 25</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-blue-100">info@locationautocar.be</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Disponibilité</div>
                  <div className="text-sm text-blue-100">Service 24/7</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                Demander un Devis Gratuit
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+3225800325"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Appeler Maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FleetMinibusPage;