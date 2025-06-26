import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar, Clock, ArrowRight, CheckCircle, Plane, Building, Camera } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import RelatedContent from '../components/common/RelatedContent';

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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?updatedAt=1750900171624&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Service de transfert aéroport avec autocar professionnel",
      link: "/nos-services/transferts-aeroports"
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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/vication4.jpg?updatedAt=1750958134435&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Excursions touristiques et voyages de loisirs en autocar",
      link: "/nos-services/excursions-tourisme"
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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/Tourisme.jpg?updatedAt=1750958114112&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Transport professionnel pour voyages d'affaires et événements corporate",
      link: "/nos-services/voyages-affaires"
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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Service de mise à disposition d'autocar avec chauffeur",
      link: "/nos-services/mise-a-disposition"
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

  const relatedFleetItems = [
    {
      title: "Minibus Mercedes Luxe",
      description: "Parfait pour vos transferts aéroports et petits groupes (8-16 places)",
      link: "/notre-flotte/minibus",
      type: "internal" as const,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-100,h-100,c-maintain_ratio,f-webp,q-85"
    },
    {
      title: "Autocars Grand Tourisme",
      description: "Idéal pour vos excursions et voyages d'affaires longue distance (40-55 places)",
      link: "/notre-flotte/autocars",
      type: "internal" as const,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-100,h-100,c-maintain_ratio,f-webp,q-85"
    },
    {
      title: "Bus Confort",
      description: "Solution équilibrée pour groupes moyens et trajets régionaux (20-35 places)",
      link: "/notre-flotte/bus",
      type: "internal" as const,
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-100,h-100,c-maintain_ratio,f-webp,q-85"
    }
  ];

  const relatedDestinationItems = [
    {
      title: "Découvrir Bruxelles",
      description: "Explorez la capitale belge avec nos circuits locaux et transferts urbains",
      link: "/destinations/bruxelles",
      type: "internal" as const
    },
    {
      title: "Circuits en Belgique",
      description: "Visitez les plus belles villes de Belgique lors d'excursions organisées",
      link: "/destinations/belgique",
      type: "internal" as const
    },
    {
      title: "Voyages en Europe",
      description: "Découvrez les capitales européennes avec nos autocars grand tourisme",
      link: "/destinations/europe",
      type: "internal" as const
    }
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

      <Breadcrumbs />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services de Transport
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Depuis 2007, nous proposons des services complets de transport en autocar avec chauffeur 
              pour particuliers et entreprises en <Link to="/destinations/belgique" className="text-blue-600 hover:text-blue-700 font-semibold">Belgique</Link> et en <Link to="/destinations/europe" className="text-blue-600 hover:text-blue-700 font-semibold">Europe</Link>.
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
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <picture>
                      <source 
                        srcSet={`${service.image}&tr=f-webp`}
                        type="image/webp"
                      />
                      <img 
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        style={{ backgroundColor: '#f5f5f5' }}
                      />
                    </picture>
                    
                    {/* Overlay with service info on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">{service.imageAlt}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={service.link}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold group"
                    >
                      En Savoir Plus
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                    <Link
                      to="/contactez-nous"
                      className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 font-semibold"
                    >
                      Demander un Devis
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Destinations */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Destinations
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous desservons un large réseau de destinations en <Link to="/destinations/belgique" className="text-blue-600 hover:text-blue-700 font-semibold">Belgique</Link> et en <Link to="/destinations/europe" className="text-blue-600 hover:text-blue-700 font-semibold">Europe</Link> avec notre <Link to="/notre-flotte" className="text-blue-600 hover:text-blue-700 font-semibold">flotte moderne</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.map((destination, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium">{destination}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Content Sections */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelatedContent
              title="Véhicules Recommandés"
              items={relatedFleetItems}
            />
            
            <RelatedContent
              title="Destinations Populaires"
              items={relatedDestinationItems}
            />
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
              Contactez-nous pour un <Link to="/contactez-nous" className="text-blue-600 hover:text-blue-700 font-semibold">devis gratuit et personnalisé</Link>
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