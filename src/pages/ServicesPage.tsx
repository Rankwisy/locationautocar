import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Users, Calendar, Clock, ArrowRight, CheckCircle, Plane, Building, Camera } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { serviceSchemas } from '../data/enhancedSchemas';

const ServicesPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  const services = [
    {
      id: 'transferts-aeroports',
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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-aeroport-bruxelles-scaled.jpeg?updatedAt=1750900457571&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      seoTitle: "Transferts Aéroports Bruxelles",
      seoDescription: "Service de navette professionnelle depuis l'aéroport de Bruxelles-National et Charleroi vers toutes destinations en Belgique."
    },
    {
      id: 'excursions-tourisme',
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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      seoTitle: "Excursions Touristiques Bruxelles",
      seoDescription: "Circuits touristiques organisés à Bruxelles, en Belgique et en Europe avec autocar et chauffeur professionnel."
    },
    {
      id: 'voyages-affaires',
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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      seoTitle: "Voyages d'Affaires Bruxelles",
      seoDescription: "Transport en autocar pour séminaires, conférences et événements d'entreprise en Belgique et en Europe."
    },
    {
      id: 'mise-a-disposition',
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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      seoTitle: "Mise à Disposition Autocar Bruxelles",
      seoDescription: "Location d'autocar avec chauffeur à l'heure pour vos déplacements personnalisés en Belgique et Europe."
    }
  ];

  const activeService = category ? services.find(s => s.id === category) : null;
  const displayedServices = activeService ? [activeService] : services;
  const relatedServices = activeService ? services.filter(s => s.id !== category) : [];

  useEffect(() => {
    if (category) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [category]);

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
    "@type": "ItemList",
    "name": "Services de Location d'Autocar avec Chauffeur",
    "description": "Services complets de transport en autocar : transferts, excursions, voyages d'affaires et mise à disposition",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": serviceSchemas.transferts
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": serviceSchemas.excursions
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Voyages d'Affaires",
          "description": "Transport de groupes pour séminaires et événements d'entreprise"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Mise à Disposition",
          "description": "Location d'autocar avec chauffeur selon vos besoins spécifiques"
        }
      }
    ]
  };

  const pageTitle = activeService
    ? `${activeService.seoTitle} - Location Autocar Bruxelles`
    : "Nos Services - Location Autocar Bruxelles";

  const pageMetaTitle = activeService
    ? `${activeService.seoTitle} | Chauffeur Professionnel Belgique`
    : "Services Transport Autocar Bruxelles | Transferts Excursions | Chauffeur Professionnel";

  const pageDescription = activeService
    ? activeService.seoDescription
    : "Services complets de transport en autocar avec chauffeur à Bruxelles : transferts aéroports, excursions touristiques, voyages d'affaires et mise à disposition en Belgique.";

  const pageCanonical = activeService
    ? `https://www.locationautocar.be/nos-services/${category}`
    : "https://www.locationautocar.be/nos-services";

  return (
    <>
      <SEOHead
        title={pageTitle}
        metaTitle={pageMetaTitle}
        description={pageDescription}
        keywords="services transport autocar bruxelles, transferts aeroports bruxelles, excursions touristiques bruxelles, voyages affaires belgique, chauffeur professionnel bruxelles"
        canonical={pageCanonical}
        schema={servicesSchema}
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb for category pages */}
          {activeService && (
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-blue-600">Accueil</Link></li>
                <li>/</li>
                <li><Link to="/nos-services" className="hover:text-blue-600">Services</Link></li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">{activeService.title}</li>
              </ol>
            </nav>
          )}

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {activeService ? activeService.title : "Nos Services de Transport"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeService
                ? activeService.description
                : <>
                    Depuis 2007, nous proposons des services complets de transport en autocar avec chauffeur
                    pour particuliers et entreprises en Belgique et en Europe. Notre{' '}
                    <Link to="/notre-flotte" className="text-blue-600 hover:text-blue-700 font-semibold">flotte moderne</Link>{' '}
                    dessert toutes nos{' '}
                    <Link to="/destinations" className="text-blue-600 hover:text-blue-700 font-semibold">destinations européennes</Link>.
                  </>
              }
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
            {displayedServices.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
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
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Related Services (shown on category pages) */}
          {activeService && relatedServices.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Découvrez nos autres services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/nos-services/${service.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="300"
                    />
                    <div className="p-6">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Destinations */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.map((destination, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                  <span className="text-gray-700 font-medium">{destination}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ressources Utiles pour Vos Voyages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Réglementation Transport UE</h3>
                <p className="text-gray-600 mb-4">
                  Informations officielles sur la réglementation du transport de voyageurs en Europe.
                </p>
                <a 
                  href="https://transport.ec.europa.eu/transport-modes/road/road-passenger-transport_en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Commission Européenne Transport
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Droits des Passagers</h3>
                <p className="text-gray-600 mb-4">
                  Connaissez vos droits lors de voyages en autocar dans l'Union européenne.
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

          {/* Why Choose Us */}
          <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pourquoi Choisir Nos Services ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">Pas de Frais Cachés</h3>
                <p className="text-blue-100">Vous ne payez que ce que vous utilisez</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">Chauffeurs Expérimentés</h3>
                <p className="text-blue-100">Professionnels qualifiés et courtois</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">Service 24/7</h3>
                <p className="text-blue-100">Disponible à tout moment</p>
              </div>
              <div className="text-center">
                <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" aria-hidden="true" />
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
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                Demander un Devis
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+3225800325"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" aria-hidden="true" />
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