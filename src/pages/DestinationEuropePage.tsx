import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Plane, CheckCircle, ArrowRight, Phone, Mail, Star, Calendar, Globe } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { destinationSchemas } from '../data/enhancedSchemas';

const DestinationEuropePage: React.FC = () => {
  const destinations = [
    {
      name: "Paris - Ville Lumière",
      country: "France",
      distance: "320 km - 3h30",
      duration: "2-3 jours",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      highlights: ["Tour Eiffel", "Louvre", "Champs-Élysées", "Montmartre", "Seine"],
      description: "Capitale mondiale de l'art, de la mode et de la gastronomie."
    },
    {
      name: "Amsterdam - Venise du Nord",
      country: "Pays-Bas",
      distance: "200 km - 2h30",
      duration: "1-2 jours",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-shot-bicycles-leaned-again-fence-bridge-river.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      highlights: ["Canaux", "Rijksmuseum", "Van Gogh", "Jordaan", "Vondelpark"],
      description: "Ville des canaux, des musées et de l'art de vivre hollandais."
    },
    {
      name: "Cologne - Métropole Rhénane",
      country: "Allemagne", 
      distance: "280 km - 3h",
      duration: "1-2 jours",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400",
      highlights: ["Cathédrale gothique", "Musées", "Vieille ville", "Rhin", "Bières"],
      description: "Ville millénaire alliant patrimoine historique et modernité."
    },
    {
      name: "Luxembourg - Grand-Duché",
      country: "Luxembourg",
      distance: "220 km - 2h30", 
      duration: "1 jour",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400",
      highlights: ["Vieille ville UNESCO", "Casemates", "Palais Grand-Ducal", "Kirchberg"],
      description: "Petit pays aux grandes richesses, centre financier européen."
    },
    {
      name: "Prague - Ville aux Cent Clochers",
      country: "République Tchèque",
      distance: "920 km - 9h",
      duration: "3-4 jours",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400",
      highlights: ["Château de Prague", "Pont Charles", "Vieille ville", "Horloge astronomique"],
      description: "Joyau de l'Europe centrale, ville de conte de fées."
    },
    {
      name: "Strasbourg - Capitale Européenne",
      country: "France",
      distance: "450 km - 4h30",
      duration: "1-2 jours",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400",
      highlights: ["Cathédrale Notre-Dame", "Petite France", "Parlement européen", "Barrage Vauban"],
      description: "Symbole de la réconciliation franco-allemande et de l'Europe."
    }
  ];

  const circuits = [
    {
      name: "Capitales du Nord",
      duration: "4 jours",
      destinations: ["Paris", "Amsterdam", "Bruxelles"],
      price: "À partir de 680€",
      description: "Les trois capitales incontournables d'Europe du Nord",
      includes: ["Transport autocar", "Hôtels 3*", "Guides locaux", "Petits déjeuners"]
    },
    {
      name: "Europe Centrale",
      duration: "6 jours",
      destinations: ["Prague", "Vienne", "Budapest"],
      price: "À partir de 890€",
      description: "Découverte des joyaux de l'ancien empire austro-hongrois",
      includes: ["Transport", "Hôtels 4*", "Demi-pension", "Guides francophones"]
    },
    {
      name: "Vallée du Rhin",
      duration: "3 jours",
      destinations: ["Cologne", "Strasbourg", "Heidelberg"],
      price: "À partir de 520€",
      description: "Le long du Rhin romantique et de ses châteaux",
      includes: ["Transport", "Hôtels", "Croisière Rhin", "Visites guidées"]
    }
  ];

  const services = [
    {
      title: "Transport Longue Distance",
      description: "Autocars grand tourisme équipés pour les longs trajets",
      features: ["Sièges inclinables", "Toilettes à bord", "WiFi", "Climatisation"]
    },
    {
      title: "Guides Expérimentés", 
      description: "Accompagnateurs francophones spécialisés par destination",
      features: ["Formation continue", "Connaissance locale", "Passion du voyage", "Service personnalisé"]
    },
    {
      title: "Hébergements Sélectionnés",
      description: "Hôtels 3* et 4* bien situés dans les centres-villes",
      features: ["Localisation centrale", "Confort garanti", "Petit déjeuner", "WiFi gratuit"]
    }
  ];

  const europeSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Europe - Voyages et Circuits en Autocar",
    "description": "Découvrez l'Europe avec nos circuits en autocar grand tourisme : Paris, Amsterdam, Prague, Allemagne. Voyages organisés avec guide francophone depuis Bruxelles.",
    "image": "https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Europe"
    },
    "touristType": ["Cultural Tourism", "City Break", "Heritage Tourism"],
    "availableLanguage": ["fr", "en", "nl", "de"],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "520",
      "highPrice": "890", 
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead
        title="Voyages Europe en Autocar | Paris, Amsterdam, Prague | Circuits Organisés"
        metaTitle="Voyages Europe Autocar | Paris Amsterdam Prague | Grand Tourisme"
        description="Découvrez l'Europe avec nos circuits en autocar grand tourisme : Paris, Amsterdam, Prague, Allemagne. Voyages organisés avec guide francophone depuis Bruxelles. Réservez maintenant."
        keywords="voyages europe autocar, paris amsterdam prague, circuits organises, autocar grand tourisme, guide francophone"
        canonical="https://www.locationautocar.be/destinations/europe"
        schema={destinationSchemas.europe}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link to="/" className="hover:text-blue-600">Accueil</Link></li>
              <li>/</li>
              <li><Link to="/destinations" className="hover:text-blue-600">Destinations</Link></li>
              <li>/</li>
              <li className="text-gray-900">Europe</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Voyages en Europe au départ de Bruxelles
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explorez l'<strong>Europe en autocar grand tourisme</strong> avec nos circuits organisés. 
              De Paris romantique à Prague magique, découvrez les capitales européennes avec nos{' '}
              <Link to="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">guides francophones expérimentés</Link>{' '}
              et notre{' '}
              <Link to="/notre-flotte/autocars" className="text-blue-600 hover:text-blue-700 font-semibold">flotte d'autocars grand tourisme</Link>.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img
              src="https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg?tr=w-1200,h-600,c-maintain_ratio,f-webp,q-85"
              alt="Tour Eiffel Paris au coucher de soleil - Voyages Europe en autocar"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              loading="eager"
            />
          </div>

          {/* Destinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Destinations Européennes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" aria-hidden="true" />
                        <span>{destination.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 text-sm">
                      {destination.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500" aria-hidden="true" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-blue-600 font-medium">
                      {destination.country}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Circuits Proposés */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Circuits Européens
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {circuits.map((circuit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {circuit.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{circuit.duration}</span>
                    </div>
                    <div className="text-blue-600 font-semibold">
                      {circuit.price}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {circuit.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Destinations :</h4>
                    <div className="flex flex-wrap gap-2">
                      {circuit.destinations.map((dest, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Inclus :</h4>
                    <div className="space-y-1">
                      {circuit.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contactez-nous"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center block"
                  >
                    Réserver ce Circuit
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Services Longue Distance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* External Links Section */}
          <div className="mb-16 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ressources Voyage et Culture Européenne
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Union Européenne</h3>
                <p className="text-gray-600 mb-4">
                  Informations officielles sur les voyages et la libre circulation en Europe.
                </p>
                <a 
                  href="https://europa.eu/youreurope/citizens/travel-in-eu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Your Europe - Voyager dans l'UE
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Eurail Pass</h3>
                <p className="text-gray-600 mb-4">
                  Informations sur les voyages en train en Europe pour compléter vos circuits.
                </p>
                <a 
                  href="https://www.eurail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Eurail - Voyages Train Europe
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Capitales Européennes</h3>
                <p className="text-gray-600 mb-4">
                  Réseau officiel des capitales européennes de la culture.
                </p>
                <a 
                  href="https://www.ecoc-doc-athens.eu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Capitales Culture Europe
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Other Destinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Autres Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/destinations/bruxelles" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Bruxelles</h3>
                <p className="text-gray-600 mb-4">Capitale européenne : Grand-Place, Atomium, institutions UE</p>
                <div className="text-blue-600 font-semibold">Découvrir Bruxelles →</div>
              </Link>
              <Link to="/destinations/belgique" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Belgique</h3>
                <p className="text-gray-600 mb-4">Bruges, Gand, Anvers : les trésors de la Belgique</p>
                <div className="text-blue-600 font-semibold">Explorer la Belgique →</div>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Partez à la Découverte de l'Europe
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Circuits organisés, autocars grand tourisme, guides francophones. 
              Explorez l'Europe en toute sérénité avec les spécialistes depuis 2007.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Réservations</div>
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
                <Globe className="w-5 h-5" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Destinations</div>
                  <div className="text-sm text-blue-100">Toute l'Europe</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                Demander un Devis
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

export default DestinationEuropePage;