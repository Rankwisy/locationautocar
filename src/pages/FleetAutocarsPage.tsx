import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, Wifi, Coffee, CheckCircle, ArrowRight, Phone, Mail, Star, Clock, MapPin, Plane } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import BreadcrumbComponent from '../components/SEO/BreadcrumbComponent';

const FleetAutocarsPage: React.FC = () => {
  const autocarModels = [
    {
      id: 1,
      name: "Autocar Grand Tourisme Premium 55 places",
      capacity: 55,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Autocar grand tourisme 55 places premium pour voyages longue distance",
      features: [
        "Sièges inclinables cuir premium",
        "Toilettes à bord avec lavabo",
        "Kitchenette équipée",
        "WiFi haut débit satellite",
        "Écrans individuels HD",
        "Climatisation multi-zones",
        "Soutes spacieuses 12m³",
        "Système audio premium"
      ],
      description: "Le summum du confort pour vos voyages longue distance en Europe.",
      priceRange: "€€€",
      rating: 4.9
    },
    {
      id: 2,
      name: "Autocar Tourisme Confort 49 places",
      capacity: 49,
      year: 2022,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Autocar 49 places confortable pour voyages de groupe en Europe",
      features: [
        "Sièges inclinables ergonomiques",
        "Climatisation efficace",
        "Réfrigérateur à bord",
        "Système multimédia",
        "Éclairage d'ambiance LED",
        "Ceintures 3 points",
        "Vitres teintées",
        "Soute à bagages 8m³"
      ],
      description: "Véhicule polyvalent pour tous vos voyages de groupe avec un excellent rapport qualité-prix.",
      priceRange: "€€",
      rating: 4.7
    },
    {
      id: 3,
      name: "Autocar Luxe VIP 45 places",
      capacity: 45,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Autocar VIP 45 places de luxe pour voyages d'affaires",
      features: [
        "Sièges business class cuir",
        "Tables individuelles",
        "Bar à bord",
        "Écrans 4K individuels",
        "WiFi premium fibre",
        "Prises 220V et USB-C",
        "Éclairage personnalisable",
        "Service de conciergerie"
      ],
      description: "Service VIP exclusif pour vos voyages d'affaires et événements de prestige.",
      priceRange: "€€€€",
      rating: 5.0
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Grande Capacité",
      description: "40 à 55 passagers pour grands groupes"
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Équipements de sécurité dernière génération"
    },
    {
      icon: Wifi,
      title: "Connectivité Premium",
      description: "WiFi satellite et écrans individuels"
    },
    {
      icon: Coffee,
      title: "Services à Bord",
      description: "Toilettes, kitchenette et bar"
    }
  ];

  const useCases = [
    "Voyages touristiques longue distance",
    "Circuits organisés en Europe",
    "Voyages d'affaires et séminaires",
    "Pèlerinages et voyages religieux",
    "Excursions scolaires et universitaires",
    "Événements sportifs et culturels"
  ];

  const destinations = [
    "Paris et châteaux de la Loire",
    "Amsterdam et Pays-Bas",
    "Allemagne et Autriche",
    "Suisse et Alpes",
    "République Tchèque",
    "Italie du Nord"
  ];

  const autocarSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Location Autocar avec Chauffeur - Bruxelles",
    "description": "Location d'autocar grand tourisme 40-55 places avec chauffeur professionnel pour voyages longue distance, circuits touristiques et voyages d'affaires en Europe.",
    "category": "Coach Rental Service",
    "brand": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "lowPrice": "300",
      "highPrice": "800",
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
      "reviewCount": "203"
    }
  };

  return (
    <>
      <SEOHead
        title="Location Autocar avec Chauffeur Bruxelles | 40-55 Places | Grand Tourisme"
        description="Location d'autocar grand tourisme avec chauffeur professionnel à Bruxelles. Flotte moderne 40-55 places pour voyages longue distance et circuits en Europe. Devis gratuit."
        canonical="https://www.locationautocar.be/notre-flotte/autocars"
        schema={autocarSchema}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <BreadcrumbComponent 
            items={[
              { name: "Notre Flotte", href: "/notre-flotte" },
              { name: "Autocars" }
            ]}
          />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Location Autocar Grand Tourisme
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre flotte d'<strong>autocars grand tourisme de 40 à 55 places</strong> avec chauffeur professionnel. 
              Parfaits pour vos <Link to="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">circuits touristiques</Link> et 
              <Link to="/nos-services/voyages-affaires" className="text-blue-600 hover:text-blue-700 font-semibold"> voyages d'affaires</Link> longue distance en Europe.
            </p>
          </div>

          {/* Autocar Models Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {autocarModels.map((autocar) => (
              <div key={autocar.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={autocar.image}
                    alt={autocar.imageAlt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {autocar.capacity} places
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold">
                    {autocar.priceRange}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {autocar.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{autocar.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {autocar.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Équipements inclus :</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {autocar.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      +{autocar.features.length - 4} autres équipements
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
              Pourquoi Choisir Nos Autocars ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <advantage.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases and Destinations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Utilisations Recommandées
              </h2>
              <div className="space-y-3">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Destinations Populaires
              </h2>
              <div className="space-y-3">
                {destinations.map((destination, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{destination}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* External Links Section */}
          <div className="mb-16 bg-green-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ressources Utiles pour Vos Voyages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Réglementation Transport UE</h3>
                <p className="text-gray-600 mb-4">
                  Informations officielles sur la réglementation du transport de voyageurs en Europe.
                </p>
                <a 
                  href="https://transport.ec.europa.eu/transport-modes/road/road-passenger-transport_en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Commission Européenne Transport
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Tourisme Europe</h3>
                <p className="text-gray-600 mb-4">
                  Guide officiel du tourisme européen pour planifier vos circuits.
                </p>
                <a 
                  href="https://visiteurope.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit Europe - Guide Officiel
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
              <Link to="/notre-flotte/minibus" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Minibus (8-16 places)</h3>
                <p className="text-gray-600 mb-4">Idéal pour petits groupes et transferts VIP</p>
                <div className="text-blue-600 font-semibold">Voir les minibus →</div>
              </Link>
              <Link to="/notre-flotte/bus" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Bus (20-35 places)</h3>
                <p className="text-gray-600 mb-4">Parfait équilibre capacité et confort</p>
                <div className="text-blue-600 font-semibold">Voir les bus →</div>
              </Link>
              <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Autocars (40-55 places)</h3>
                <p className="text-blue-700 mb-4">Vous êtes ici - Grands groupes longue distance</p>
                <div className="text-blue-800 font-semibold">Page actuelle</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Réservez Votre Autocar Grand Tourisme
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Expertise depuis 2007 dans les voyages longue distance. Autocars modernes, 
              chauffeurs expérimentés, service premium garanti.
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
                <Clock className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Disponibilité</div>
                  <div className="text-sm text-blue-100">Service 24/7</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                Demander un Devis Gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+3225800325"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Appeler Maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FleetAutocarsPage;