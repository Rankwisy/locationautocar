import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, Wifi, Coffee, CheckCircle, ArrowRight, Phone, Mail, Star, Clock, MapPin } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import BreadcrumbComponent from '../components/SEO/BreadcrumbComponent';
import { vehicleSchemas } from '../data/enhancedSchemas';

const FleetBusPage: React.FC = () => {
  const busModels = [
    {
      id: 1,
      name: "Bus Tourisme Confort 35 places",
      capacity: 35,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Bus touristique 35 places confortable pour excursions en Europe",
      features: [
        "Sièges ergonomiques inclinables",
        "Climatisation automatique",
        "Système audio/vidéo HD",
        "WiFi gratuit haut débit",
        "Prises électriques individuelles",
        "Vitres panoramiques teintées",
        "Soute à bagages spacieuse",
        "Éclairage LED d'ambiance"
      ],
      description: "Parfait équilibre entre confort et capacité pour vos excursions touristiques et voyages d'affaires.",
      priceRange: "€€",
      rating: 4.8
    },
    {
      id: 2,
      name: "Bus Urbain Écologique 25 places",
      capacity: 25,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Bus écologique 25 places pour transport urbain respectueux de l'environnement",
      features: [
        "Moteur Euro 6 faibles émissions",
        "Plancher bas accessible PMR",
        "Climatisation écologique",
        "Éclairage LED économique",
        "Système stop & start",
        "Aide au stationnement",
        "Caméras de sécurité",
        "Revêtements antibactériens"
      ],
      description: "Solution écologique pour vos déplacements urbains avec un impact environnemental réduit.",
      priceRange: "€",
      rating: 4.6
    },
    {
      id: 3,
      name: "Bus Premium 30 places",
      capacity: 30,
      year: 2022,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Bus premium 30 places avec équipements haut de gamme",
      features: [
        "Sièges cuir premium",
        "Tables individuelles",
        "Réfrigérateur à bord",
        "Système multimédia avancé",
        "Éclairage d'ambiance",
        "Ceintures 3 points",
        "Suspension pneumatique",
        "Isolation phonique renforcée"
      ],
      description: "Confort premium pour vos voyages d'affaires et événements spéciaux.",
      priceRange: "€€€",
      rating: 4.9
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Capacité Optimale",
      description: "De 20 à 35 passagers selon vos besoins"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Équipements de sécurité dernière génération"
    },
    {
      icon: Wifi,
      title: "Connectivité",
      description: "WiFi gratuit et prises électriques"
    },
    {
      icon: Coffee,
      title: "Confort Premium",
      description: "Sièges ergonomiques et climatisation"
    }
  ];

  const useCases = [
    "Excursions touristiques en Belgique et Europe",
    "Voyages d'affaires et séminaires",
    "Transferts groupes moyens aéroports/gares",
    "Événements sportifs et culturels",
    "Sorties scolaires et universitaires",
    "Pèlerinages et voyages associatifs"
  ];

  const busSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Location Bus avec Chauffeur - Bruxelles",
    "description": "Location de bus 20-35 places avec chauffeur professionnel pour excursions, voyages d'affaires et transferts en Belgique et Europe.",
    "category": "Bus Rental Service",
    "brand": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "lowPrice": "150",
      "highPrice": "400",
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
      "reviewCount": "89"
    }
  };

  return (
    <>
      <SEOHead
        title="Location Bus avec Chauffeur Bruxelles | 20-35 Places | Devis Gratuit"
        metaTitle="Bus Touristique Chauffeur | 20-35 Places | Excursions Confortables"
        description="Location de bus avec chauffeur professionnel à Bruxelles. Flotte moderne 20-35 places pour excursions, voyages d'affaires et transferts en Europe. Devis gratuit 24/7."
        keywords="bus touristique chauffeur, 20-35 places, excursions confortables, voyages affaires europe"
        canonical="https://www.locationautocar.be/notre-flotte/bus"
        schema={vehicleSchemas.bus}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <BreadcrumbComponent 
            items={[
              { name: "Notre Flotte", href: "/notre-flotte" },
              { name: "Bus" }
            ]}
          />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Location Bus avec Chauffeur
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre flotte de <strong>bus modernes de 20 à 35 places</strong> avec chauffeur professionnel. 
              Parfaits pour vos excursions touristiques vers nos{' '}
              <Link to="/destinations/europe" className="text-blue-600 hover:text-blue-700 font-semibold">destinations européennes</Link>{' '}
              et voyages d'affaires avec notre{' '}
              <Link to="/nos-services" className="text-blue-600 hover:text-blue-700 font-semibold">service professionnel</Link>.
            </p>
          </div>

          {/* Bus Models Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {busModels.map((bus) => (
              <div key={bus.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={bus.image}
                    alt={bus.imageAlt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {bus.capacity} places
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold">
                    {bus.priceRange}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {bus.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{bus.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {bus.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Équipements inclus :</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {bus.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      +{bus.features.length - 4} autres équipements
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
              Pourquoi Choisir Nos Bus ?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Nos bus modernes offrent le parfait équilibre entre capacité et confort pour tous vos{' '}
              <Link 
                to="/nos-services" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
                title="Découvrir tous nos services de transport"
              >
                besoins de transport professionnel
              </Link>{' '}
              en Belgique et en Europe.
            </p>
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
                <h3 className="text-lg font-semibold mb-3">Informations Touristiques</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les attractions et événements en Belgique pour planifier vos excursions.
                </p>
                <a 
                  href="https://www.visitbelgium.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit Belgium - Guide Officiel
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Transport en Europe</h3>
                <p className="text-gray-600 mb-4">
                  Informations sur les réglementations européennes du transport de voyageurs.
                </p>
                <a 
                  href="https://europa.eu/youreurope/citizens/travel-in-eu/passenger-rights/index_fr.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Droits des Passagers UE
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
              <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Bus (20-35 places)</h3>
                <p className="text-blue-700 mb-4">Vous êtes ici - Parfait équilibre capacité/confort</p>
                <div className="text-blue-800 font-semibold">Page actuelle</div>
              </div>
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
              Réservez Votre Bus Dès Maintenant
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Service professionnel depuis 2007. Devis gratuit sous 24h. 
              Chauffeurs expérimentés et véhicules entretenus régulièrement.
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

export default FleetBusPage;