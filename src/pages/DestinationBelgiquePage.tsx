import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Camera, CheckCircle, ArrowRight, Phone, Mail, Star, Calendar, Castle } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { destinationSchemas } from '../data/enhancedSchemas';

const DestinationBelgiquePage: React.FC = () => {
  const destinations = [
    {
      name: "Bruges - Venise du Nord",
      region: "Flandre Occidentale",
      distance: "100 km de Bruxelles",
      duration: "1 jour",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Centre historique UNESCO", "Canaux romantiques", "Beffroi médiéval", "Musée Groeninge"],
      description: "Ville médiévale parfaitement préservée avec ses canaux, beffroi et architecture gothique."
    },
    {
      name: "Gand - Joyau Flamand",
      region: "Flandre Orientale", 
      distance: "60 km de Bruxelles",
      duration: "1 jour",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Château des Comtes", "Cathédrale Saint-Bavon", "Agneau mystique", "Korenlei"],
      description: "Ville universitaire dynamique alliant patrimoine médiéval et vie culturelle moderne."
    },
    {
      name: "Anvers - Capitale du Diamant",
      region: "Province d'Anvers",
      distance: "45 km de Bruxelles", 
      duration: "1 jour",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Cathédrale Notre-Dame", "Maison Rubens", "Quartier des diamantaires", "Port d'Anvers"],
      description: "Métropole portuaire riche en art baroque et centre mondial du commerce du diamant."
    },
    {
      name: "Dinant - Perle de la Meuse",
      region: "Province de Namur",
      distance: "90 km de Bruxelles",
      duration: "1 jour", 
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Citadelle de Dinant", "Collégiale Notre-Dame", "Maison Adolphe Sax", "Croisière Meuse"],
      description: "Ville natale d'Adolphe Sax, inventeur du saxophone, dominée par sa citadelle."
    },
    {
      name: "Tournai - Ville d'Art et d'Histoire",
      region: "Province de Hainaut",
      distance: "85 km de Bruxelles",
      duration: "1 jour",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600", 
      highlights: ["Cathédrale Notre-Dame", "Beffroi le plus ancien", "Musée des Beaux-Arts", "Grand-Place"],
      description: "Plus ancienne ville de Belgique avec un patrimoine architectural exceptionnel."
    },
    {
      name: "Leuven - Ville Universitaire",
      region: "Brabant Flamand",
      distance: "30 km de Bruxelles",
      duration: "1/2 jour",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: ["Hôtel de Ville gothique", "Université KU Leuven", "Stella Artois", "Begijnhof"],
      description: "Ville universitaire animée, berceau de la bière Stella Artois et de l'université la plus ancienne."
    }
  ];

  const circuits = [
    {
      name: "Triangle d'Or Flamand",
      duration: "2 jours",
      destinations: ["Bruges", "Gand", "Anvers"],
      price: "À partir de 380€",
      description: "Les trois joyaux de la Flandre en un circuit complet",
      includes: ["Transport autocar", "Guide francophone", "Hôtel 3*", "Petits déjeuners"]
    },
    {
      name: "Vallée de la Meuse",
      duration: "1 jour", 
      destinations: ["Dinant", "Namur", "Huy"],
      price: "À partir de 195€",
      description: "Découverte de la Wallonie le long de la Meuse",
      includes: ["Transport", "Guide", "Déjeuner", "Entrées monuments"]
    },
    {
      name: "Châteaux et Abbayes",
      duration: "2 jours",
      destinations: ["Orval", "Rochefort", "Chimay"],
      price: "À partir de 420€", 
      description: "Patrimoine religieux et brassicole de Belgique",
      includes: ["Transport", "Guide spécialisé", "Hôtel", "Dégustations"]
    }
  ];

  const practicalInfo = [
    {
      title: "Distances moyennes",
      content: "30-100 km depuis Bruxelles, idéal pour excursions d'une journée"
    },
    {
      title: "Langues",
      content: "Français en Wallonie, néerlandais en Flandre, allemand à l'est"
    },
    {
      title: "Spécialités",
      content: "Bières trappistes, chocolats, gaufres, moules-frites"
    },
    {
      title: "Patrimoine UNESCO",
      content: "Bruges, beffrois, minières néolithiques de Spiennes"
    }
  ];

  const belgiqueSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Belgique - Circuits et Excursions",
    "description": "Découvrez la Belgique avec nos circuits en autocar : Bruges, Gand, Anvers, vallée de la Meuse. Transport confortable avec guide francophone.",
    "image": "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BE"
    },
    "touristType": ["Cultural Tourism", "Heritage Tourism", "Gastronomic Tourism"],
    "availableLanguage": ["fr", "nl", "de"],
    "offers": {
      "@type": "AggregateOffer", 
      "lowPrice": "195",
      "highPrice": "420",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead
        title="Circuits Belgique en Autocar | Bruges, Gand, Anvers | Guide Francophone"
        metaTitle="Circuits Belgique Autocar | Bruges Gand Anvers | Transport Confortable"
        description="Découvrez la Belgique avec nos circuits en autocar : Bruges UNESCO, Gand médiéval, Anvers diamantaire. Transport confortable avec guide francophone. Réservez votre excursion."
        keywords="circuits belgique, bruges gand anvers, autocar belgique, patrimoine unesco, guide francophone"
        canonical="https://www.locationautocar.be/destinations/belgique"
        schema={destinationSchemas.belgique}
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
              <li className="text-gray-900">Belgique</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Circuits en Belgique
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explorez les <strong>trésors de la Belgique</strong> avec nos circuits en autocar. 
              De Bruges la médiévale aux vallées wallonnes, découvrez un patrimoine exceptionnel avec nos{' '}
              <Link to="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">guides francophones expérimentés</Link>{' '}
              et notre{' '}
              <Link to="/notre-flotte/autocars" className="text-blue-600 hover:text-blue-700 font-semibold">flotte d'autocars confortables</Link>.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img
              src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Bruges - Canaux et architecture médiévale flamande"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              loading="eager"
            />
          </div>

          {/* Destinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Destinations Incontournables
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
                        <MapPin className="w-4 h-4" />
                        <span>{destination.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 text-sm">
                      {destination.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-blue-600 font-medium">
                      {destination.region}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Circuits Proposés */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Circuits Organisés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {circuits.map((circuit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {circuit.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
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
                          <CheckCircle className="w-3 h-3 text-green-500" />
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

          {/* Practical Information */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              La Belgique en Bref
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practicalInfo.map((info, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* External Links Section */}
          <div className="mb-16 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ressources Patrimoine et Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Tourisme Belgique</h3>
                <p className="text-gray-600 mb-4">
                  Site officiel du tourisme belge avec toutes les informations pratiques.
                </p>
                <a 
                  href="https://www.visitbelgium.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit Belgium - Site Officiel
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Patrimoine UNESCO</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les sites belges classés au patrimoine mondial de l'UNESCO.
                </p>
                <a 
                  href="https://whc.unesco.org/en/statesparties/be" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  UNESCO Belgique
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Fédération Wallonie-Bruxelles</h3>
                <p className="text-gray-600 mb-4">
                  Culture et patrimoine de la Wallonie et de Bruxelles.
                </p>
                <a 
                  href="https://www.cfwb.be" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Culture Wallonie-Bruxelles
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
              <Link to="/destinations/europe" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Europe</h3>
                <p className="text-gray-600 mb-4">Voyages longue distance : Paris, Amsterdam, Allemagne</p>
                <div className="text-blue-600 font-semibold">Explorer l'Europe →</div>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Explorez la Belgique avec Nous
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Circuits organisés, guides francophones expérimentés, transport confortable. 
              Découvrez les trésors cachés de la Belgique depuis 2007.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Réservations</div>
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
                <Calendar className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Saison</div>
                  <div className="text-sm text-blue-100">Toute l'année</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                Demander un Devis
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

export default DestinationBelgiquePage;