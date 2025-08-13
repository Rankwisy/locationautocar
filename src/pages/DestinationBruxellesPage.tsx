import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Camera, CheckCircle, ArrowRight, Phone, Mail, Star, Calendar } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { destinationSchemas } from '../data/enhancedSchemas';

const DestinationBruxellesPage: React.FC = () => {
  const attractions = [
    {
      name: "Grand-Place de Bruxelles",
      description: "Patrimoine mondial UNESCO, cœur historique de la capitale",
      duration: "1-2 heures",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      highlights: ["Hôtel de Ville gothique", "Maisons des corporations", "Musée de la Ville"]
    },
    {
      name: "Atomium",
      description: "Symbole de Bruxelles, structure futuriste de 1958",
      duration: "2-3 heures",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      highlights: ["Vue panoramique", "Expositions", "Restaurant panoramique"]
    },
    {
      name: "Quartier Royal",
      description: "Palais Royal, Musées Royaux des Beaux-Arts",
      duration: "2-4 heures",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      highlights: ["Palais Royal", "Musées d'art", "Parc de Bruxelles"]
    },
    {
      name: "Quartier Européen",
      description: "Institutions européennes, Parlement européen",
      duration: "2-3 heures",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      highlights: ["Parlement européen", "Parlamentarium", "Parc du Cinquantenaire"]
    }
  ];

  const circuits = [
    {
      name: "Bruxelles Classique",
      duration: "4 heures",
      price: "À partir de 180€",
      description: "Grand-Place, Manneken-Pis, Galeries Royales, Cathédrale",
      includes: ["Guide francophone", "Transport", "Entrées monuments"]
    },
    {
      name: "Bruxelles Moderne",
      duration: "6 heures", 
      price: "À partir de 250€",
      description: "Atomium, Quartier européen, Laeken, Parc du Cinquantenaire",
      includes: ["Guide spécialisé", "Transport", "Déjeuner", "Entrées"]
    },
    {
      name: "Bruxelles Gourmande",
      duration: "5 heures",
      price: "À partir de 220€",
      description: "Marchés, chocolatiers, brasseries, dégustation de bières",
      includes: ["Guide gastronome", "Dégustations", "Transport", "Repas"]
    }
  ];

  const practicalInfo = [
    {
      title: "Meilleure période",
      content: "Avril à octobre pour le climat, décembre pour les marchés de Noël"
    },
    {
      title: "Durée recommandée",
      content: "1-2 jours pour les essentiels, 3-4 jours pour approfondir"
    },
    {
      title: "Transport",
      content: "Métro, tram, bus STIB - Pass journalier 7,50€"
    },
    {
      title: "Langues",
      content: "Français, néerlandais, anglais largement parlé"
    }
  ];

  const bruxellesSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Bruxelles - Excursions et Visites Guidées",
    "description": "Découvrez Bruxelles avec nos excursions guidées : Grand-Place, Atomium, quartier européen. Transport en autocar avec chauffeur depuis toute la Belgique.",
    "image": "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bruxelles",
      "addressCountry": "BE"
    },
    "touristType": ["Cultural Tourism", "City Break", "Educational Tourism"],
    "availableLanguage": ["fr", "nl", "en"],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "180",
      "highPrice": "250",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead
        title="Excursions Bruxelles avec Chauffeur | Atomium, Grand-Place | Devis Gratuit"
        metaTitle="Excursions Bruxelles Autocar | Grand-Place Atomium | Guide Francophone"
        description="Découvrez Bruxelles avec nos excursions guidées en autocar : Grand-Place UNESCO, Atomium, quartier européen. Transport avec chauffeur professionnel. Réservez maintenant."
        keywords="excursions bruxelles, visite guidée bruxelles, grand-place atomium, autocar bruxelles, guide francophone"
        canonical="https://www.locationautocar.be/destinations/bruxelles"
        schema={destinationSchemas.bruxelles}
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
              <li className="text-gray-900">Bruxelles</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Excursions à Bruxelles
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez la <strong>capitale de l'Europe</strong> avec nos excursions guidées en autocar. 
              De la Grand-Place UNESCO au quartier européen, explorez Bruxelles avec nos{' '}
              <Link to="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">guides expérimentés</Link>{' '}
              et notre{' '}
              <Link to="/notre-flotte/bus" className="text-blue-600 hover:text-blue-700 font-semibold">transport confortable</Link>.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img
              src="https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-1200,h-600,c-maintain_ratio,f-webp,q-85"
              alt="Grand-Place de Bruxelles avec ses maisons dorées et l'Hôtel de Ville"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              loading="eager"
            />
          </div>

          {/* Main Attractions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Attractions Incontournables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {attraction.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>Durée : {attraction.duration}</span>
                    </div>
                    <div className="space-y-1">
                      {attraction.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Circuits Proposés */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Circuits à Bruxelles
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
                  <p className="text-gray-600 mb-4">
                    {circuit.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Inclus :</h4>
                    <div className="space-y-1">
                      {circuit.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
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
              Informations Pratiques
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
              Ressources Bruxelles et Institutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Office de Tourisme</h3>
                <p className="text-gray-600 mb-4">
                  Site officiel du tourisme à Bruxelles avec événements et actualités.
                </p>
                <a 
                  href="https://visit.brussels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visit Brussels - Site Officiel
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Musées de Bruxelles</h3>
                <p className="text-gray-600 mb-4">
                  Informations sur tous les musées et expositions de la capitale.
                </p>
                <a 
                  href="https://www.brusselsmuseums.be" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Brussels Museums
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Parlement Européen</h3>
                <p className="text-gray-600 mb-4">
                  Visitez le Parlement européen et découvrez les institutions de l'UE.
                </p>
                <a 
                  href="https://www.europarl.europa.eu/visiting/fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Visiter le Parlement UE
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
              <Link to="/destinations/belgique" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Belgique</h3>
                <p className="text-gray-600 mb-4">Découvrez les trésors de la Belgique : Bruges, Gand, Anvers</p>
                <div className="text-blue-600 font-semibold">Explorer la Belgique →</div>
              </Link>
              <Link to="/destinations/europe" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-3">Europe</h3>
                <p className="text-gray-600 mb-4">Voyages longue distance : Paris, Amsterdam, Allemagne</p>
                <div className="text-blue-600 font-semibold">Découvrir l'Europe →</div>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Réservez Votre Excursion à Bruxelles
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Guides expérimentés, transport confortable, groupes de toutes tailles. 
              Découvrez Bruxelles avec les spécialistes depuis 2007.
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
                  <div className="font-semibold">Disponibilité</div>
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

export default DestinationBruxellesPage;