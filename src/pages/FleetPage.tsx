import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Star, Filter, Search, ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import LEZBadge from '../components/LEZBadge';
import { fleetFAQ } from '../data/faqData';
import { serviceVehicleSchemas } from '../data/enhancedSchemas';

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
      euroStandard: "Euro 6",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Minibus Mercedes Sprinter luxe 16 places Euro 6 conforme LEZ Bruxelles avec chauffeur professionnel climatisation WiFi sièges cuir",
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
      rating: 4.9
    },
    {
      id: 2,
      name: "Mercedes Sprinter Standard",
      type: "Minibus",
      capacity: 12,
      year: 2022,
      euroStandard: "Euro 6",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Minibus Mercedes Sprinter 12 places Euro 6 conforme LEZ économique transport groupe climatisation système audio",
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
      rating: 4.7
    },
    {
      id: 3,
      name: "Autocar Tourisme Premium",
      type: "Autocar",
      capacity: 55,
      year: 2023,
      euroStandard: "Euro 6",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Autocar grand tourisme 55 places Euro 6 LEZ Bruxelles premium toilettes WiFi kitchenette voyages longue distance Europe",
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
      rating: 4.9
    },
    {
      id: 4,
      name: "Bus Tourisme Confort",
      type: "Bus",
      capacity: 35,
      year: 2022,
      euroStandard: "Euro 6",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Bus touristique 35 places Euro 6 conforme LEZ Bruxelles confortable excursions climatisation vitres panoramiques soute bagages",
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
      rating: 4.8
    },
    {
      id: 5,
      name: "Autocar Grand Tourisme",
      type: "Autocar",
      capacity: 49,
      year: 2021,
      euroStandard: "Euro 6",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Autocar 49 places Euro 6 LEZ compliant grand tourisme voyages groupe Europe climatisation réfrigérateur multimédia",
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
      rating: 4.6
    },
    {
      id: 6,
      name: "Bus Urbain Écologique",
      type: "Bus",
      capacity: 25,
      year: 2023,
      euroStandard: "Euro 6",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Bus écologique 25 places moteur Euro 6 conforme LEZ Bruxelles plancher bas accessible PMR transport urbain",
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
      rating: 4.5
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

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const fleetSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Flotte de véhicules - Location Autocar Bruxelles",
    "description": "Découvrez notre flotte moderne d'autocars, bus et minibus avec chauffeur pour tous vos besoins de transport en Belgique et en Europe.",
    "numberOfItems": vehicles.length,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": serviceVehicleSchemas.minibus
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": serviceVehicleSchemas.bus
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": serviceVehicleSchemas.autocar
      }
    ]
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
        "name": "Notre Flotte",
        "item": "https://www.locationautocar.be/notre-flotte"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Notre Flotte - Location Autocar Bruxelles"
        metaTitle="Flotte Autocar Bus Minibus Bruxelles | Chauffeur | Devis Gratuit"
        description="Flotte moderne autocar bus minibus Euro 6 conforme LEZ Bruxelles avec chauffeur. Véhicules récents climatisés WiFi pour transferts excursions Europe. Accès centre-ville garanti. Réservation 24/7."
        keywords="flotte autocar bruxelles, bus chauffeur, minibus mercedes, vehicules transport groupe, location autocar belgique, autocar euro 6, lez bruxelles, transport ecologique, autocar acces centre-ville bruxelles, bus conforme zone basse emission"
        canonical="https://www.locationautocar.be/notre-flotte"
        schema={fleetSchema}
        faqSchema={fleetFAQ}
        breadcrumbSchema={breadcrumbSchema}
        ogImage="https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85"
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Flotte
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre flotte moderne de véhicules avec chauffeur professionnel. 
              Du <Link to="/notre-flotte/minibus" className="text-blue-600 hover:text-blue-700 font-semibold">minibus luxe</Link> à 
              l'<Link to="/notre-flotte/autocars" className="text-blue-600 hover:text-blue-700 font-semibold">autocar grand tourisme</Link>, 
              nous avons le véhicule parfait pour tous vos{' '}
              <Link to="/nos-services" className="text-blue-600 hover:text-blue-700 font-semibold">besoins de transport</Link>.
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-gray-900">Filtrer par :</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recherche
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
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
                      title={`${vehicle.name} - Location avec chauffeur Bruxelles`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="400"
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
                      <Users className="w-4 h-4" aria-hidden="true" />
                      {vehicle.capacity} places
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {vehicle.year}
                    </div>
                  </div>

                  <div className="mb-4">
                    <LEZBadge standard={vehicle.euroStandard} variant="compact" />
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {vehicle.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Équipements :</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {vehicle.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" aria-hidden="true" />
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

                  <div className="flex gap-2">
                    <Link
                      to="/contactez-nous"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center text-sm"
                      title={`Réserver ${vehicle.name} avec chauffeur`}
                    >
                      Réserver
                    </Link>
                    <Link
                      to={`/notre-flotte/${vehicle.type.toLowerCase()}`}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
                      title={`Voir détails ${vehicle.name}`}
                    >
                      Détails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fleet Statistics */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Notre Flotte en Chiffres
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-green-100">Véhicules</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2023</div>
                <div className="text-green-100">Année moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-green-100">Euro 6+ LEZ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-green-100">Avec chauffeur</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-green-100">Service disponible</div>
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
                  <Shield className="w-8 h-8 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sécurité Maximale</h3>
                <p className="text-gray-600 text-sm">Véhicules récents, entretien rigoureux, chauffeurs expérimentés</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Confort Premium</h3>
                <p className="text-gray-600 text-sm">Équipements modernes, sièges ergonomiques, climatisation</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ponctualité</h3>
                <p className="text-gray-600 text-sm">Respect des horaires, planification optimisée, suivi en temps réel</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-8 h-8 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Service Complet</h3>
                <p className="text-gray-600 text-sm">Assistance 24/7, devis gratuit, service personnalisé</p>
              </div>
            </div>
          </div>

          <div className="mb-16 bg-green-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ressources Véhicules et Sécurité
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Sécurité Routière Belgique</h3>
                <p className="text-gray-600 mb-4">
                  Informations officielles sur la sécurité routière et les réglementations belges.
                </p>
                <a 
                  href="https://www.vias.be" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  VIAS Institute - Sécurité Routière
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Normes Véhicules UE</h3>
                <p className="text-gray-600 mb-4">
                  Standards européens pour les véhicules de transport de passagers.
                </p>
                <a 
                  href="https://ec.europa.eu/transport/modes/road/vehicles_en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Standards UE Véhicules
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Questions Fréquentes sur Notre Flotte
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {fleetFAQ.mainEntity.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <ArrowRight 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openFaqIndex === index ? 'rotate-90' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.acceptedAnswer.text}
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
              Contactez-nous pour un devis personnalisé et découvrez le véhicule parfait pour vos besoins. 
              Service professionnel garanti depuis 2007.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <div className="text-sm">+32 2 580 03 25</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm">info@locationautocar.be</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-sm">Bd Industriel 9, 1070 Bruxelles</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
                title="Demander devis gratuit location véhicule avec chauffeur"
              >
                Demander un Devis Gratuit
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+3225800325"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
                title="Appeler Location Autocar Bruxelles"
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

export default FleetPage;