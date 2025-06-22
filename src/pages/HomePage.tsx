import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, Shield, Clock, Star, CheckCircle, ArrowRight, Users, MapPin, Calendar } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: MapPin,
      title: "Transferts & Navettes",
      description: "Aéroports, gares, hôtels - Service de transfert professionnel avec chauffeur expérimenté"
    },
    {
      icon: Users,
      title: "Excursions & Tourisme",
      description: "Découvrez Bruxelles, l'Atomium, les musées et l'Europe avec nos circuits organisés"
    },
    {
      icon: Calendar,
      title: "Voyages d'Affaires",
      description: "Transport de groupes pour séminaires, conférences et événements d'entreprise"
    },
    {
      icon: Clock,
      title: "Mise à Disposition",
      description: "Location à l'heure selon vos besoins spécifiques - Flexibilité maximale"
    }
  ];

  const fleetTypes = [
    {
      name: "Minibus",
      description: "8 à 16 passagers",
      image: "/images/fleet/minibus.jpg",
      link: "/notre-flotte/minibus",
      capacity: "Idéal pour petits groupes"
    },
    {
      name: "Bus",
      description: "20 à 35 passagers",
      image: "/images/fleet/bus.jpg",
      link: "/notre-flotte/bus",
      capacity: "Parfait pour groupes moyens"
    },
    {
      name: "Autocars",
      description: "40 à 55 passagers",
      image: "/images/fleet/autocar.jpg",
      link: "/notre-flotte/autocars",
      capacity: "Grands groupes et voyages longue distance"
    }
  ];

  const destinations = [
    {
      name: "Bruxelles",
      description: "Atomium, Grand-Place, Musées",
      image: "/images/destinations/bruxelles.jpg"
    },
    {
      name: "Paris",
      description: "Excursions depuis Bruxelles",
      image: "/images/destinations/paris.jpg"
    },
    {
      name: "Amsterdam",
      description: "Circuits touristiques",
      image: "/images/destinations/amsterdam.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Entreprise ABC",
      rating: 5,
      comment: "Service impeccable pour notre séminaire d'entreprise. Chauffeur professionnel et ponctuel."
    },
    {
      name: "Jean Martin",
      company: "Groupe Tourisme",
      rating: 5,
      comment: "Excellent service pour nos excursions. Véhicules confortables et chauffeurs expérimentés."
    },
    {
      name: "Sophie Laurent",
      company: "Hôtel Central",
      rating: 5,
      comment: "Partenaire de confiance pour nos transferts aéroport. Service 24/7 très apprécié."
    }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Location Autocar Bruxelles",
    "url": "https://www.locationautocar.be",
    "logo": "https://www.locationautocar.be/images/logo-locationautocar.png",
    "description": "Location d'autocar avec chauffeur à Bruxelles depuis 2007. Services de transferts, excursions, voyages d'affaires en Europe.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bd Industriel 9",
      "addressLocality": "Bruxelles",
      "postalCode": "1070",
      "addressCountry": "BE"
    },
    "telephone": "+32 2 580 03 25",
    "email": "info@locationautocar.be",
    "openingHours": ["Mo-Fr 08:00-22:00", "Sa-Su 10:00-22:00"],
    "foundingDate": "2007",
    "areaServed": ["Brussels", "Belgium", "Europe"],
    "serviceType": ["Bus Rental", "Coach Rental", "Airport Transfer", "Tourism"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
    }
  };

  return (
    <>
      <SEOHead
        title="Location Autocar Bruxelles - Bus et Minibus avec chauffeur"
        description="Location d'autocar avec chauffeur à Bruxelles depuis 2007. Services de transferts, excursions, voyages d'affaires en Europe. Devis gratuit 24/7."
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Location Autocar Bruxelles
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Bus et Minibus avec chauffeur depuis 2007
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Transferts • Excursions • Voyages d'affaires • Mise à disposition
              <br />
              Service professionnel en Belgique et en Europe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Devis Gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/nos-services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Nos Services
              </Link>
            </div>
            <div className="mt-6 text-sm text-blue-200">
              ✓ Pas de frais cachés • ✓ Vous ne payez que ce que vous utilisez • ✓ Support 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services de Transport
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis 2007, nous offrons des services de transport en autocar avec chauffeur 
              pour tous vos besoins : transferts, excursions, voyages d'affaires et mise à disposition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Flotte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Autocars, bus et minibus modernes avec chauffeurs expérimentés 
              pour tous vos déplacements en Belgique et en Europe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetTypes.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={vehicle.image} 
                    alt={`${vehicle.name} avec chauffeur`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {vehicle.description}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {vehicle.capacity}
                  </p>
                  <Link
                    to={vehicle.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Voir les détails
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Destinations Populaires
            </h2>
            <p className="text-xl text-gray-600">
              Excursions et circuits organisés depuis Bruxelles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={destination.image} 
                    alt={`Excursion à ${destination.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Location Autocar Bruxelles ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Depuis 2007</h3>
              <p className="text-gray-600">Plus de 15 ans d'expérience dans le transport de groupes</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pas de Frais Cachés</h3>
              <p className="text-gray-600">Tarification transparente - vous ne payez que ce que vous utilisez</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Service 24/7</h3>
              <p className="text-gray-600">Support et assistance disponibles à tout moment</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Devis Gratuit</h3>
              <p className="text-gray-600">Estimation personnalisée sans engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que Disent nos Clients
            </h2>
            <p className="text-xl text-gray-600">
              La satisfaction de nos clients est notre priorité depuis 2007
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un Transport en Autocar ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous pour un devis gratuit et personnalisé. Service disponible 24/7.
          </p>
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
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" />
              +32 2 580 03 25
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;