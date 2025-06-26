import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Star, Filter, Search, ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import RelatedContent from '../components/common/RelatedContent';

const FleetPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedCapacity, setSelectedCapacity] = useState('Toutes');
  const [priceRange, setPriceRange] = useState('Tous');

  const vehicles = [
    {
      id: 1,
      name: "Mercedes Sprinter Luxe",
      type: "Minibus",
      capacity: 16,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Minibus Mercedes Sprinter luxe 16 places avec chauffeur professionnel",
      priceRange: "€€",
      features: [
        "Climatisation automatique",
        "Sièges cuir ergonomiques",
        "WiFi gratuit",
        "Prises USB individuelles",
        "Système audio premium",
        "Vitres teintées"
      ],
      description: "Idéal pour les transferts VIP et excursions de petits groupes. Confort premium et finitions haut de gamme.",
      available: true,
      rating: 4.9,
      recommendedServices: ["/nos-services/transferts-aeroports", "/nos-services/voyages-affaires"]
    },
    {
      id: 2,
      name: "Mercedes Sprinter Standard",
      type: "Minibus",
      capacity: 12,
      year: 2022,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Minibus Mercedes Sprinter 12 places pour transport de groupe",
      priceRange: "€",
      features: [
        "Climatisation",
        "Sièges confortables",
        "Système audio",
        "Espace bagages",
        "Ceintures de sécurité",
        "Éclairage LED"
      ],
      description: "Solution économique pour vos déplacements de groupe. Fiabilité Mercedes et confort optimal.",
      available: true,
      rating: 4.7,
      recommendedServices: ["/nos-services/transferts-aeroports", "/nos-services/mise-a-disposition"]
    },
    {
      id: 3,
      name: "Autocar Tourisme Premium",
      type: "Autocar",
      capacity: 55,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Autocar grand tourisme 55 places pour voyages longue distance",
      priceRange: "€€€",
      features: [
        "Sièges inclinables cuir",
        "Toilettes à bord",
        "Kitchenette",
        "WiFi haut débit",
        "Écrans individuels",
        "Climatisation zones",
        "Soutes spacieuses"
      ],
      description: "Le summum du confort pour vos voyages longue distance. Équipements haut de gamme et service premium.",
      available: true,
      rating: 4.9,
      recommendedServices: ["/nos-services/excursions-tourisme", "/nos-services/voyages-affaires"]
    },
    {
      id: 4,
      name: "Bus Tourisme Confort",
      type: "Bus",
      capacity: 35,
      year: 2022,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Bus touristique 35 places confortable pour excursions",
      priceRange: "€€",
      features: [
        "Sièges ergonomiques",
        "Climatisation",
        "Système audio/vidéo",
        "Prises électriques",
        "Vitres panoramiques",
        "Soute à bagages"
      ],
      description: "Parfait équilibre entre confort et capacité. Idéal pour excursions et voyages d'affaires.",
      available: true,
      rating: 4.8,
      recommendedServices: ["/nos-services/excursions-tourisme", "/nos-services/mise-a-disposition"]
    },
    {
      id: 5,
      name: "Autocar Grand Tourisme",
      type: "Autocar",
      capacity: 49,
      year: 2021,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Autocar 49 places pour voyages de groupe en Europe",
      priceRange: "€€",
      features: [
        "Sièges inclinables",
        "Climatisation",
        "Réfrigérateur",
        "Système multimédia",
        "Éclairage d'ambiance",
        "Ceintures 3 points"
      ],
      description: "Véhicule polyvalent pour tous vos voyages. Confort optimal et équipements modernes.",
      available: true,
      rating: 4.6,
      recommendedServices: ["/nos-services/excursions-tourisme", "/nos-services/voyages-affaires"]
    },
    {
      id: 6,
      name: "Bus Urbain Écologique",
      type: "Bus",
      capacity: 25,
      year: 2023,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Bus écologique 25 places pour transport urbain",
      priceRange: "€",
      features: [
        "Moteur Euro 6",
        "Plancher bas",
        "Accès PMR",
        "Climatisation éco",
        "Éclairage LED",
        "Système stop & start"
      ],
      description: "Solution écologique pour vos déplacements urbains. Respect de l'environnement et accessibilité.",
      available: true,
      rating: 4.5,
      recommendedServices: ["/nos-services/transferts-aeroports", "/nos-services/mise-a-disposition"]
    }
  ];

  const vehicleTypes = ['Tous', 'Minibus', 'Bus', 'Autocar'];
  const capacityRanges = ['Toutes', '8-16 places', '17-35 places', '36+ places'];
  const priceRanges = ['Tous', '€', '€€', '€€€'];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'Tous' || vehicle.type === selectedType;
    const matchesCapacity = selectedCapacity === 'Toutes' || 
                           (selectedCapacity === '8-16 places' && vehicle.capacity <= 16) ||
                           (selectedCapacity === '17-35 places' && vehicle.capacity >= 17 && vehicle.capacity <= 35) ||
                           (selectedCapacity === '36+ places' && vehicle.capacity >= 36);
    const matchesPrice = priceRange === 'Tous' || vehicle.priceRange === priceRange;
    
    return matchesSearch && matchesType && matchesCapacity && matchesPrice;
  });

  const relatedServicesItems = [
    {
      title: "Transferts Aéroports",
      description: "Service de navette professionnel avec nos minibus et bus confortables",
      link: "/nos-services/transferts-aeroports",
      type: "internal" as const
    },
    {
      title: "Excursions Touristiques",
      description: "Découvrez l'Europe avec nos autocars grand tourisme équipés",
      link: "/nos-services/excursions-tourisme",
      type: "internal" as const
    },
    {
      title: "Voyages d'Affaires",
      description: "Transport professionnel pour vos événements corporate",
      link: "/nos-services/voyages-affaires",
      type: "internal" as const
    }
  ];

  const relatedDestinationItems = [
    {
      title: "Destinations Belgique",
      description: "Explorez la Belgique avec notre flotte adaptée à tous les trajets",
      link: "/destinations/belgique",
      type: "internal" as const
    },
    {
      title: "Voyages en Europe",
      description: "Découvrez l'Europe en autocar avec nos véhicules longue distance",
      link: "/destinations/europe",
      type: "internal" as const
    },
    {
      title: "Circuits Bruxelles",
      description: "Visitez Bruxelles avec nos véhicules urbains et confortables",
      link: "/destinations/bruxelles",
      type: "internal" as const
    }
  ];

  const faqItems = [
    {
      question: "Quels sont les équipements inclus dans nos véhicules ?",
      answer: "Tous nos véhicules sont équipés de climatisation, système audio, sièges confortables et ceintures de sécurité. Les équipements spécifiques varient selon le type de véhicule (WiFi, toilettes, kitchenette pour les autocars)."
    },
    {
      question: "Nos chauffeurs sont-ils qualifiés ?",
      answer: "Absolument ! Tous nos chauffeurs possèdent les permis requis (D, D1, D1E selon le véhicule), une formation continue en sécurité routière et une excellente connaissance des destinations européennes."
    },
    {
      question: "Quelle est la politique d'annulation ?",
      answer: "Annulation gratuite jusqu'à 48h avant le départ. Entre 24h et 48h : 50% du montant. Moins de 24h : 100% du montant (sauf cas de force majeure)."
    },
    {
      question: "Proposez-vous des services supplémentaires ?",
      answer: "Oui : guide accompagnateur, restauration à bord, WiFi premium, prises électriques, système de sonorisation pour guide, assistance 24/7 pendant le voyage."
    },
    {
      question: "Quelles sont les destinations couvertes ?",
      answer: "Nous couvrons toute la Belgique et l'Europe : France, Pays-Bas, Allemagne, Luxembourg, Suisse, Autriche, République Tchèque, et bien d'autres destinations sur demande."
    },
    {
      question: "Comment obtenir un devis personnalisé ?",
      answer: "Contactez-nous par téléphone, email ou via notre formulaire en ligne. Nous vous répondons sous 24h avec un devis détaillé adapté à vos besoins spécifiques."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const fleetSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Flotte de véhicules - Location Autocar Bruxelles",
    "description": "Découvrez notre flotte moderne d'autocars, bus et minibus avec chauffeur pour tous vos besoins de transport en Belgique et en Europe.",
    "numberOfItems": vehicles.length,
    "itemListElement": vehicles.map((vehicle, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": vehicle.name,
      "description": vehicle.description,
      "image": vehicle.image,
      "category": vehicle.type,
      "offers": {
        "@type": "Offer",
        "availability": vehicle.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Notre Flotte - Location Autocar Bruxelles"
        description="Découvrez notre flotte moderne d'autocars, bus et minibus avec chauffeur. Véhicules récents, équipements premium, chauffeurs expérimentés pour vos voyages en Europe."
        canonical="https://www.locationautocar.be/notre-flotte"
        schema={fleetSchema}
      />

      <Breadcrumbs />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Flotte
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre flotte moderne de véhicules avec chauffeur professionnel. 
              Du <Link to="/notre-flotte/minibus" className="text-blue-600 hover:text-blue-700 font-semibold">minibus luxe</Link> à l'<Link to="/notre-flotte/autocars" className=\"text-blue-600 hover:text-blue-700 font-semibold">autocar grand tourisme</Link>, nous avons le véhicule parfait pour vos besoins.
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Filtrer par :</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recherche
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nom ou type de véhicule"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de véhicule
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {vehicleTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Capacity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Capacité
                </label>
                <select
                  value={selectedCapacity}
                  onChange={(e) => setSelectedCapacity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {capacityRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gamme de prix
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? 's' : ''} trouvé{filteredVehicles.length > 1 ? 's' : ''}
            </div>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <picture>
                    <source 
                      srcSet={`${vehicle.image}&tr=f-webp`}
                      type="image/webp"
                    />
                    <img
                      src={vehicle.image}
                      alt={vehicle.imageAlt}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                    {vehicle.priceRange}
                  </div>
                  {vehicle.available && (
                    <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Disponible
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{vehicle.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {vehicle.capacity} places
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {vehicle.year}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {vehicle.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Équipements :</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {vehicle.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {vehicle.features.length > 4 && (
                      <p className="text-xs text-gray-500 mt-1">
                        +{vehicle.features.length - 4} autres équipements
                      </p>
                    )}
                  </div>

                  {/* Recommended Services */}
                  {vehicle.recommendedServices && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <h5 className="text-xs font-semibold text-blue-800 mb-2">Recommandé pour :</h5>
                      <div className="flex flex-wrap gap-1">
                        {vehicle.recommendedServices.map((serviceLink, index) => {
                          const serviceNames: { [key: string]: string } = {
                            '/nos-services/transferts-aeroports': 'Transferts',
                            '/nos-services/excursions-tourisme': 'Excursions',
                            '/nos-services/voyages-affaires': 'Business',
                            '/nos-services/mise-a-disposition': 'Disposition'
                          };
                          return (
                            <Link
                              key={index}
                              to={serviceLink}
                              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors duration-200"
                            >
                              {serviceNames[serviceLink]}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Link
                      to="/contactez-nous"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center text-sm"
                    >
                      Réserver
                    </Link>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm">
                      Détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Related Content Sections */}
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelatedContent
              title="Services Recommandés"
              items={relatedServicesItems}
            />
            
            <RelatedContent
              title="Destinations Populaires"
              items={relatedDestinationItems}
            />
          </div>

          {/* Fleet Statistics */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Notre Flotte en Chiffres
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Véhicules</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2023</div>
                <div className="text-blue-100">Année moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Avec chauffeur</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Service disponible</div>
              </div>
            </div>
          </div>

          {/* Why Choose Our Fleet */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pourquoi Choisir Notre Flotte ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sécurité Maximale</h3>
                <p className="text-gray-600 text-sm">Véhicules récents, entretien rigoureux, chauffeurs expérimentés</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Confort Premium</h3>
                <p className="text-gray-600 text-sm">Équipements modernes, sièges ergonomiques, climatisation</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ponctualité</h3>
                <p className="text-gray-600 text-sm">Respect des horaires, planification optimisée, suivi en temps réel</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Service Complet</h3>
                <p className="text-gray-600 text-sm">Assistance 24/7, devis gratuit, service personnalisé</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Questions Fréquentes
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
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

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à Réserver Votre Véhicule ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un <Link to="/contactez-nous" className="text-blue-600 hover:text-blue-700 font-semibold">devis personnalisé</Link> et découvrez le véhicule parfait pour vos besoins. 
              Service professionnel garanti depuis 2007.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <div className="text-sm">+32 2 580 03 25</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm">info@locationautocar.be</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-sm">Bd Industriel 9, 1070 Bruxelles</div>
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
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
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

export default FleetPage;