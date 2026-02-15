import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Camera, CheckCircle, ArrowRight, Phone, Mail, Star, Calendar, Globe, Plane } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { destinationSchemas } from '../data/enhancedSchemas';

const DestinationsPage: React.FC = () => {
  const mainDestinations = [
    {
      name: "Bruxelles",
      subtitle: "Capitale de l'Europe",
      description: "Découvrez le cœur de l'Europe : Grand-Place UNESCO, Atomium, quartier européen et institutions internationales.",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Grand-Place de Bruxelles patrimoine UNESCO avec maisons dorées et Hôtel de Ville gothique",
      duration: "1-2 jours",
      distance: "Point de départ",
      highlights: ["Grand-Place UNESCO", "Atomium", "Parlement européen", "Musées royaux", "Quartier Marolles"],
      link: "/destinations/bruxelles",
      category: "Capitale"
    },
    {
      name: "Belgique",
      subtitle: "Trésors du Royaume",
      description: "Explorez les joyaux belges : Bruges médiévale, Gand universitaire, Anvers diamantaire et vallées wallonnes.",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Bruges canaux médiévaux Venise du Nord patrimoine UNESCO Flandre",
      duration: "1-3 jours",
      distance: "30-100 km",
      highlights: ["Bruges UNESCO", "Gand historique", "Anvers port", "Dinant Meuse", "Châteaux"],
      link: "/destinations/belgique",
      category: "National"
    },
    {
      name: "Europe",
      subtitle: "Capitales et Merveilles",
      description: "Voyagez vers les plus belles capitales européennes : Paris romantique, Amsterdam canaux, Prague magique.",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/locationautocar-image-logo-1.jpg?updatedAt=1750900561845&tr=w-600,h-400,c-maintain_ratio,f-webp,q-85",
      imageAlt: "Tour Eiffel Paris coucher soleil Seine voyages Europe autocar grand tourisme",
      duration: "2-7 jours",
      distance: "200-1000 km",
      highlights: ["Paris Tour Eiffel", "Amsterdam canaux", "Prague château", "Cologne cathédrale", "Strasbourg"],
      link: "/destinations/europe",
      category: "International"
    }
  ];

  const popularCircuits = [
    {
      name: "Bruxelles Essentiel",
      duration: "1 jour",
      price: "À partir de 45€",
      description: "Grand-Place, Atomium, Manneken-Pis, Galeries Royales",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-300,h-200,c-maintain_ratio,f-webp,q-85"
    },
    {
      name: "Triangle d'Or Flamand",
      duration: "2 jours",
      price: "À partir de 180€",
      description: "Bruges, Gand, Anvers - Les trois joyaux de Flandre",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Paris Week-end",
      duration: "3 jours",
      price: "À partir de 320€",
      description: "Tour Eiffel, Louvre, Champs-Élysées, Montmartre",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky.jpg?tr=w-300,h-200,c-maintain_ratio,f-webp,q-85"
    },
    {
      name: "Amsterdam Découverte",
      duration: "2 jours",
      price: "À partir de 250€",
      description: "Canaux, Rijksmuseum, Van Gogh, Jordaan",
      image: "https://ik.imagekit.io/by733ltn6/locationautocar/beautiful-shot-bicycles-leaned-again-fence-bridge-river.jpg?tr=w-300,h-200,c-maintain_ratio,f-webp,q-85"
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Groupes de Toutes Tailles",
      description: "De 8 à 55 passagers selon vos besoins"
    },
    {
      icon: Globe,
      title: "Guides Francophones",
      description: "Accompagnateurs expérimentés et passionnés"
    },
    {
      icon: Camera,
      title: "Circuits Personnalisés",
      description: "Itinéraires adaptés à vos centres d'intérêt"
    },
    {
      icon: Plane,
      title: "Transport Confortable",
      description: "Véhicules modernes climatisés avec WiFi"
    }
  ];

  const practicalInfo = [
    {
      title: "Réservation",
      content: "Minimum 48h à l'avance, idéalement 1 semaine pour les circuits européens"
    },
    {
      title: "Paiement",
      content: "Acompte 30% à la réservation, solde avant le départ"
    },
    {
      title: "Annulation",
      content: "Gratuite jusqu'à 48h, conditions spéciales pour groupes"
    },
    {
      title: "Assurance",
      content: "Véhicules et passagers couverts, assurance annulation recommandée"
    }
  ];

  const destinationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Destinations Touristiques - Location Autocar Bruxelles",
    "description": "Découvrez nos destinations en autocar avec chauffeur : Bruxelles, Belgique, Europe. Circuits organisés, guides francophones, transport confortable depuis Bruxelles.",
    "numberOfItems": 3,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": destinationSchemas.bruxelles
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": destinationSchemas.belgique
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": destinationSchemas.europe
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quelles destinations proposez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous proposons des excursions à Bruxelles (Grand-Place, Atomium), des circuits en Belgique (Bruges, Gand, Anvers) et des voyages en Europe (Paris, Amsterdam, Prague, Allemagne). Toutes nos destinations sont accessibles en autocar confortable avec guide francophone."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps durent vos circuits ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos circuits varient de 1 jour (Bruxelles, villes belges) à 7 jours (grands circuits européens). La plupart de nos excursions en Belgique durent 1-2 jours, tandis que les voyages européens s'étendent sur 2-4 jours en moyenne."
        }
      },
      {
        "@type": "Question",
        "name": "Vos circuits incluent-ils un guide ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, tous nos circuits incluent un guide francophone expérimenté, spécialisé dans chaque destination. Nos guides sont passionnés d'histoire, d'art et de culture locale, et enrichiront votre voyage de leurs connaissances."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on personnaliser les itinéraires ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument ! Nous créons des circuits sur mesure selon vos centres d'intérêt, votre budget et la durée souhaitée. Contactez-nous pour élaborer ensemble votre voyage idéal."
        }
      },
      {
        "@type": "Question",
        "name": "Quand réserver son circuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous recommandons de réserver au minimum 48h à l'avance, idéalement 1 semaine pour les circuits européens. Pour les périodes de forte affluence (été, fêtes), réservez 2-3 semaines à l'avance."
        }
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
        "name": "Destinations",
        "item": "https://www.locationautocar.be/destinations"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Destinations Excursions Autocar | Bruxelles, Belgique, Europe | Guide Francophone"
        metaTitle="Destinations Autocar Bruxelles | Excursions Belgique Europe | Guide"
        description="Découvrez nos destinations en autocar avec chauffeur et guide francophone : Bruxelles Grand-Place Atomium, Belgique Bruges Gand, Europe Paris Amsterdam. Circuits organisés depuis Bruxelles."
        keywords="destinations autocar bruxelles, excursions belgique, circuits europe, guide francophone, bruges gand anvers, paris amsterdam prague"
        canonical="https://www.locationautocar.be/destinations"
        schema={destinationsSchema}
        faqSchema={faqSchema}
        breadcrumbSchema={breadcrumbSchema}
        ogImage="https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85"
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Destinations depuis Bruxelles
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explorez <strong>Bruxelles, la Belgique et l'Europe</strong> avec nos circuits en autocar. 
              Guides francophones expérimentés, transport confortable et itinéraires soigneusement élaborés 
              pour découvrir les plus beaux sites européens. Notre{' '}
              <Link to="/notre-flotte/autocars" className="text-blue-600 hover:text-blue-700 font-semibold">flotte d'autocars grand tourisme</Link>{' '}
              vous emmène vers toutes nos{' '}
              <Link to="/nos-services/excursions-tourisme" className="text-blue-600 hover:text-blue-700 font-semibold">excursions organisées</Link>.
            </p>
          </div>

          {/* Main Destinations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {mainDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.imageAlt}
                    title={`Excursions ${destination.name} en autocar avec guide francophone`}
                    className="w-full h-64 object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    width="600"
                    height="400"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {destination.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {destination.name}
                  </h2>
                  <p className="text-blue-600 font-semibold mb-3">
                    {destination.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      <span>{destination.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Points forts :</h3>
                    <div className="space-y-1">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" aria-hidden="true" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                      {destination.highlights.length > 3 && (
                        <p className="text-xs text-gray-500 mt-1">
                          +{destination.highlights.length - 3} autres sites
                        </p>
                      )}
                    </div>
                  </div>

                  <Link
                    to={destination.link}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 text-center block"
                    title={`Découvrir nos excursions ${destination.name}`}
                  >
                    Découvrir {destination.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Circuits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Circuits Populaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCircuits.map((circuit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <img
                    src={circuit.image}
                    alt={circuit.name}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {circuit.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>{circuit.duration}</span>
                      </div>
                      <div className="text-blue-600 font-semibold">
                        {circuit.price}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {circuit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nos Services Inclus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <service.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Informations Pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practicalInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* External Links Section */}
          <div className="mb-16 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ressources Touristiques et Voyage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Tourisme Bruxelles</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Site officiel du tourisme à Bruxelles avec événements et actualités.
                </p>
                <a 
                  href="https://visit.brussels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 text-sm"
                >
                  Visit Brussels
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Tourisme Belgique</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Guide officiel du tourisme belge pour planifier vos excursions.
                </p>
                <a 
                  href="https://www.visitbelgium.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 text-sm"
                >
                  Visit Belgium
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Europe Tourisme</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Informations officielles sur les voyages en Europe.
                </p>
                <a 
                  href="https://visiteurope.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 text-sm"
                >
                  Visit Europe
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Conseils Voyage UE</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Conseils officiels pour voyager en sécurité dans l'Union européenne.
                </p>
                <a 
                  href="https://re-open.europa.eu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 text-sm"
                >
                  Re-open EU
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Questions Fréquentes sur Nos Destinations
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqSchema.mainEntity.map((item, index) => (
                <details key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gray-900 inline">
                      {item.name}
                    </h3>
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.acceptedAnswer.text}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Découvrir Nos Destinations ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Circuits organisés, guides francophones passionnés, transport confortable. 
              Explorez Bruxelles, la Belgique et l'Europe avec les spécialistes depuis 2007.
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
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Disponibilité</div>
                  <div className="text-sm text-blue-100">Toute l'année</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2"
                title="Demander devis gratuit circuit destination"
              >
                Demander un Devis
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+3225800325"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
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

export default DestinationsPage;