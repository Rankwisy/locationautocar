import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar, Clock, ArrowRight, CheckCircle, Plane, Building, Camera } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: "Transferts Aéroports & Gares",
      description: "Service de navette professionnel entre aéroports, gares et votre destination",
      features: [
        "Aéroport de Bruxelles-National",
        "Aéroport de Charleroi",
        "Gares SNCB",
        "Transferts hôtels",
        "Service 24/7"
      ],
      image: "/images/services/transferts.jpg"
    },
    {
      icon: Camera,
      title: "Excursions & Tourisme",
      description: "Découvrez Bruxelles, la Belgique et l'Europe avec nos circuits organisés",
      features: [
        "Visite de Bruxelles",
        "Atomium et Grand-Place",
        "Musées et monuments",
        "Circuits en Belgique",
        "Voyages en Europe"
      ],
      image: "/images/services/excursions.jpg"
    },
    {
      icon: Building,
      title: "Voyages d'Affaires",
      description: "Transport de groupes pour événements professionnels et séminaires",
      features: [
        "Séminaires d'entreprise",
        "Conférences",
        "Événements corporate",
        "Transferts VIP",
        "Service personnalisé"
      ],
      image: "/images/services/business.jpg"
    },
    {
      icon: Clock,
      title: "Mise à Disposition",
      description: "Location d'autocar avec chauffeur selon vos besoins spécifiques",
      features: [
        "Location à l'heure",
        "Trajets personnalisés",
        "Flexibilité maximale",
        "Chauffeur expérimenté",
        "Tarification transparente"
      ],
      image: "/images/services/disposition.jpg"
    }
  ];

  const tripTypes = [
    {
      title: "Aller Simple",
      description: "Transport direct vers votre destination",
      icon: "→"
    },
    {
      title: "Aller-Retour",
      description: "Service complet avec retour inclus",
      icon: "⇄"
    },
    {
      title: "Mise à Disposition",
      description: "Location à l'heure selon vos besoins",
      icon: "⏰"
    }
  ];

  const destinations = [
    "Bruxelles et région",
    "Anvers et Flandres",
    "Liège et Wallonie",
    "Paris, France",
    "Amsterdam, Pays-Bas",
    "Cologne, Allemagne",
    "Luxembourg",
    "Autres destinations européennes"
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Services de Location d'Autocar avec Chauffeur",
    "provider": {
      "@type": "Organization",
      "name": "Location Autocar Bruxelles"
    },
    "description": "Services complets de transport en autocar : transferts, excursions, voyages d'affaires et mise à disposition",
    "areaServed": ["Brussels", "Belgium", "Europe"],
    "serviceType": ["Bus Rental", "Coach Rental", "Airport Transfer", "Tourism", "Business Travel"]
  };

  return (
    <>
      <SEOHead
        title="Nos Services - Location Autocar Bruxelles"
        description="Services complets de transport en autocar avec chauffeur : transferts aéroports, excursions touristiques, voyages d'affaires et mise à disposition."
        canonical="https://www.locationautocar.be/nos-services"
        schema={servicesSchema}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services de Transport
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis 2007, nous proposons des services complets de transport en autocar avec chauffeur 
              pour particuliers et entreprises en Belgique et en Europe.
            </p>
          </div>

          {/* Trip Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Types de Trajets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tripTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Services */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contactez-nous"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                  >
                    Demander un Devis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Destinations */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.map((destination, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium">{destination}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pourquoi Choisir Nos Services ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pas de Frais Cachés</h3>
                <p className="text-blue-100">Vous ne payez que ce que vous utilisez</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Chauffeurs Expérimentés</h3>
                <p className="text-blue-100">Professionnels qualifiés et courtois</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Service 24/7</h3>
                <p className="text-blue-100">Disponible à tout moment</p>
              </div>
              <div className="text-center">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Depuis 2007</h3>
                <p className="text-blue-100">Plus de 15 ans d'expérience</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à Réserver Votre Transport ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous pour un devis gratuit et personnalisé
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
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                +32 2 580 03 25
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;