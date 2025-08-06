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
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Location minibus Mercedes luxe avec chauffeur professionnel à Bruxelles - 8 à 16 places pour transferts VIP et excursions",
      imageTitle: "Minibus Mercedes moderne équipé climatisation WiFi pour transport groupes Bruxelles Europe",
      link: "/notre-flotte/minibus",
      capacity: "Idéal pour petits groupes"
    },
    {
      name: "Bus",
      description: "20 à 35 passagers",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/comfortable-tourist-bus-traveling-sunset.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Location bus touristique confortable 20-35 places avec chauffeur pour voyages Europe excursions Belgique",
      imageTitle: "Bus tourisme équipé climatisation WiFi sièges ergonomiques trajets longue distance",
      link: "/notre-flotte/bus",
      capacity: "Parfait pour groupes moyens"
    },
    {
      name: "Autocars",
      description: "40 à 55 passagers",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Location autocar grand tourisme 40-55 places avec chauffeur professionnel circuits Europe voyages organisés",
      imageTitle: "Autocar grand tourisme équipements premium toilettes WiFi pour voyages longue distance Europe",
      link: "/notre-flotte/autocars",
      capacity: "Grands groupes et voyages longue distance"
    }
  ];

  const destinations = [
    {
      name: "Bruxelles",
      description: "Atomium, Grand-Place, Musées",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Excursions Bruxelles Grand-Place Atomium avec autocar chauffeur guide francophone"
    },
    {
      name: "Paris",
      description: "Excursions depuis Bruxelles",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Voyages Paris Tour Eiffel en autocar depuis Bruxelles circuits organisés guide"
    },
    {
      name: "Amsterdam",
      description: "Circuits touristiques",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-shot-bicycles-leaned-again-fence-bridge-river.jpg?tr=w-400,h-300,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Excursions Amsterdam canaux vélos autocar confortable depuis Belgique"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels types de véhicules proposez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous proposons une flotte complète : minibus 8-16 places, bus 20-35 places et autocars grand tourisme 40-55 places, tous avec chauffeur professionnel."
        }
      },
      {
        "@type": "Question",
        "name": "Couvrez-vous toute l'Europe ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous organisons des voyages dans toute l'Europe : France, Pays-Bas, Allemagne, République Tchèque, Autriche et bien d'autres destinations."
        }
      },
      {
        "@type": "Question",
        "name": "Vos chauffeurs sont-ils qualifiés ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tous nos chauffeurs possèdent les permis requis (D, D1, D1E), une formation continue en sécurité routière et une excellente connaissance des destinations européennes."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous un service 24/7 ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, notre service client est disponible 24h/24 et 7j/7 pour vos urgences et réservations de dernière minute."
        }
      },
      {
        "@type": "Question",
        "name": "Comment obtenir un devis ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contactez-nous par téléphone au +32 2 580 03 25, par email à info@locationautocar.be ou via notre formulaire en ligne. Devis gratuit sous 24h."
        }
      }
    ]
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Location Autocar Bruxelles",
    "url": "https://www.locationautocar.be",
    "logo": "https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png",
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
    "foundingDate": "2007",
    "openingHours": ["Mo-Fr 08:00-22:00", "Sa-Su 10:00-22:00"],
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "50.8503",
        "longitude": "4.3517"
      },
      "geoRadius": "1000000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8503",
      "longitude": "4.3517"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Brussels"
      },
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "Place",
        "name": "Europe"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Transport",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Location Minibus avec Chauffeur",
            "description": "Service de location de minibus 8-16 places avec chauffeur professionnel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Location Bus avec Chauffeur",
            "description": "Service de location de bus 20-35 places avec chauffeur professionnel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Location Autocar avec Chauffeur",
            "description": "Service de location d'autocar 40-55 places avec chauffeur professionnel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transferts Aéroports",
            "description": "Service de transfert professionnel vers tous les aéroports"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Excursions Touristiques",
            "description": "Circuits organisés avec guide francophone en Belgique et Europe"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Voyages d'Affaires",
            "description": "Transport de groupes pour séminaires et événements d'entreprise"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marie Dubois"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Service impeccable pour notre séminaire d'entreprise. Chauffeur professionnel et ponctuel."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jean Martin"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent service pour nos excursions. Véhicules confortables et chauffeurs expérimentés."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sophie Laurent"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Partenaire de confiance pour nos transferts aéroport. Service 24/7 très apprécié."
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Location Autocar Bruxelles - Bus Minibus avec Chauffeur"
        metaTitle="Location Autocar Bruxelles | Bus Minibus Chauffeur | Devis Gratuit"
        description="Location autocar avec chauffeur Bruxelles depuis 2007. Minibus, bus, autocars pour transferts, excursions Europe. Service 24/7. Devis gratuit."
        keywords="location autocar bruxelles, bus chauffeur, minibus belgique, excursions europe, transfert aeroport, voyage affaires"
        canonical="https://www.locationautocar.be/"
        schema={homeSchema}
        faqSchema={faqSchema}
        ogImage="https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Responsive Optimization */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source 
              media="(min-width: 1024px)"
              srcSet="https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?updatedAt=1750900171624&tr=w-1920,h-1080,c-maintain_ratio,f-webp,q-85"
              type="image/webp"
            />
            <source 
              media="(min-width: 768px)"
              srcSet="https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?updatedAt=1750900171624&tr=w-1200,h-800,c-maintain_ratio,f-webp,q-85"
              type="image/webp"
            />
            <source 
              media="(max-width: 767px)"
              srcSet="https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?updatedAt=1750900171624&tr=w-800,h-600,c-maintain_ratio,f-webp,q-85"
              type="image/webp"
            />
            <img
              src="https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?updatedAt=1750900171624&tr=w-1920,h-1080,c-maintain_ratio,f-auto,q-85"
              alt="Location Autocar Bruxelles - Bus et minibus avec chauffeur professionnel pour transferts excursions voyages Europe"
              title="Service location autocar bus minibus chauffeur Bruxelles depuis 2007 - Devis gratuit"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              style={{ backgroundColor: '#f5f5f5' }}
            />
          </picture>
          
          {/* Semi-transparent overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Location Autocar Bruxelles
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-blue-100 font-medium">
              Bus et Minibus avec chauffeur depuis 2007
            </p>
            
            {/* Services Description */}
            <p className="text-base sm:text-lg md:text-xl mb-8 text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Transferts • Excursions • Voyages d'affaires • Mise à disposition
              <br className="hidden sm:block" />
              Service professionnel en Belgique et en Europe
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contactez-nous"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 min-w-[200px]"
                title="Demander devis gratuit location autocar bus minibus Bruxelles"
              >
                Devis Gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/nos-services"
                className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-white/10 min-w-[200px]"
                title="Découvrir services transport autocar transferts excursions"
              >
                Nos Services
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-blue-200 bg-black/20 backdrop-blur-sm rounded-2xl px-6 py-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Pas de frais cachés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Vous ne payez que ce que vous utilisez</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Support 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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
              <a 
                href="https://fr.wikipedia.org/wiki/Autocar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold"
                title="En savoir plus sur les autocars - Wikipédia"
              >
                Autocars
              </a>, bus et minibus modernes avec chauffeurs expérimentés 
              pour tous vos déplacements en Belgique et en Europe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetTypes.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <picture>
                    <source 
                      srcSet={`${vehicle.image}&tr=f-webp`}
                      type="image/webp"
                    />
                    <img 
                      src={vehicle.image}
                      alt={vehicle.imageAlt}
                      title={vehicle.imageTitle}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      style={{ backgroundColor: '#f5f5f5' }}
                    />
                  </picture>
                  
                  {/* SEO-friendly overlay with vehicle info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{vehicle.imageTitle}</p>
                    </div>
                  </div>
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
                    title={`Découvrir notre flotte ${vehicle.name.toLowerCase()} avec chauffeur`}
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
              Excursions et circuits organisés depuis{' '}
              <a 
                href="https://fr.wikipedia.org/wiki/Bruxelles" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold"
                title="Découvrir Bruxelles - Wikipédia"
              >
                Bruxelles
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={destination.image} 
                    alt={destination.imageAlt}
                    title={`Excursions ${destination.name} en autocar avec guide depuis Bruxelles`}
                    className="w-full h-full object-cover"
                    width="400"
                    decoding="async"
                    width="400"
                    height="300"
                    height="300"
                    loading={index === 0 ? "eager" : "lazy"}
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
              title="Demander devis gratuit transport autocar bus minibus"
            >
              Demander un Devis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+3225800325"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
              title="Appeler Location Autocar Bruxelles service 24/7"
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