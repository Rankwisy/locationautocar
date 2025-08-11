import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Fuel, Settings, Star } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const VehiclesPage: React.FC = () => {
  const vehicles = [
    {
      id: 1,
      name: "Peugeot 208",
      category: "Économique",
      image: "/images/vehicles/peugeot-208.jpg",
      price: 25,
      passengers: 5,
      transmission: "Manuelle",
      fuel: "Essence",
      rating: 4.5,
      features: ["Climatisation", "Bluetooth", "GPS"]
    },
    {
      id: 2,
      name: "Volkswagen Golf",
      category: "Compacte",
      image: "/images/vehicles/vw-golf.jpg",
      price: 35,
      passengers: 5,
      transmission: "Automatique",
      fuel: "Diesel",
      rating: 4.7,
      features: ["Climatisation", "GPS", "Caméra de recul"]
    },
    {
      id: 3,
      name: "BMW Série 3",
      category: "Luxe",
      image: "/images/vehicles/bmw-serie3.jpg",
      price: 80,
      passengers: 5,
      transmission: "Automatique",
      fuel: "Diesel",
      rating: 4.9,
      features: ["Cuir", "GPS Premium", "Système audio premium"]
    },
    {
      id: 4,
      name: "Ford Transit",
      category: "Utilitaire",
      image: "/images/vehicles/ford-transit.jpg",
      price: 45,
      passengers: 3,
      transmission: "Manuelle",
      fuel: "Diesel",
      rating: 4.3,
      features: ["Grand volume", "Aide au stationnement", "Bluetooth"]
    }
  ];

  const vehiclesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Véhicules de location - Location Auto Car",
    "description": "Découvrez notre flotte complète de véhicules de location en Belgique",
    "numberOfItems": vehicles.length,
    "itemListElement": vehicles.map((vehicle, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": vehicle.name,
      "description": `${vehicle.category} - ${vehicle.passengers} passagers`,
      "image": `https://www.locationautocar.be${vehicle.image}`,
      "offers": {
        "@type": "Offer",
        "price": vehicle.price,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "BE",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 0,
          "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility",
          "merchantReturnLink": "https://www.locationautocar.be/contactez-nous"
        }
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Nos Véhicules - Location Auto Car"
        description="Découvrez notre flotte complète de véhicules de location : économiques, familiales, luxe et utilitaires. Réservez en ligne au meilleur prix."
        schema={vehiclesSchema}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Flotte de Véhicules
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez parmi notre large sélection de véhicules récents et bien entretenus, 
              adaptés à tous vos besoins de déplacement en Belgique et en Europe.
            </p>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                    {vehicle.price}€/jour
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {vehicle.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(vehicle.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      ({vehicle.rating})
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {vehicle.passengers}
                    </div>
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 mr-1" />
                      {vehicle.transmission}
                    </div>
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 mr-1" />
                      {vehicle.fuel}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Équipements :</h4>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/reservation?vehicle=${vehicle.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center block"
                  >
                    Réserver ce véhicule
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Catégories de Véhicules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/vehicules/economiques" className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Économiques</h3>
                <p className="text-green-600 text-sm">Parfaites pour la ville et les courts trajets</p>
                <p className="text-green-800 font-bold mt-2">À partir de 25€/jour</p>
              </Link>
              
              <Link to="/vehicules/familiales" className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Familiales</h3>
                <p className="text-blue-600 text-sm">Confort et espace pour toute la famille</p>
                <p className="text-blue-800 font-bold mt-2">À partir de 35€/jour</p>
              </Link>
              
              <Link to="/vehicules/luxe" className="bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Luxe</h3>
                <p className="text-purple-600 text-sm">Élégance et performance premium</p>
                <p className="text-purple-800 font-bold mt-2">À partir de 80€/jour</p>
              </Link>
              
              <Link to="/vehicules/utilitaires" className="bg-orange-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Utilitaires</h3>
                <p className="text-orange-600 text-sm">Pour vos déménagements et transports</p>
                <p className="text-orange-800 font-bold mt-2">À partir de 45€/jour</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehiclesPage;