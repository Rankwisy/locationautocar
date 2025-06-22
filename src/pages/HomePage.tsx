import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Car,
      title: "Véhicules Récents",
      description: "Flotte moderne et bien entretenue pour votre confort et sécurité"
    },
    {
      icon: Shield,
      title: "Assurance Complète",
      description: "Protection optimale incluse dans tous nos contrats de location"
    },
    {
      icon: Clock,
      title: "Service 24/7",
      description: "Assistance disponible à tout moment pour votre tranquillité d'esprit"
    },
    {
      icon: Star,
      title: "Service Premium",
      description: "Expérience client exceptionnelle et service personnalisé"
    }
  ];

  const vehicleCategories = [
    {
      name: "Économiques",
      description: "Parfaites pour la ville",
      image: "/images/categories/economique.jpg",
      link: "/vehicules/economiques",
      price: "À partir de 25€/jour"
    },
    {
      name: "Familiales",
      description: "Confort pour toute la famille",
      image: "/images/categories/familiale.jpg",
      link: "/vehicules/familiales",
      price: "À partir de 35€/jour"
    },
    {
      name: "Luxe",
      description: "Élégance et performance",
      image: "/images/categories/luxe.jpg",
      link: "/vehicules/luxe",
      price: "À partir de 80€/jour"
    },
    {
      name: "Utilitaires",
      description: "Pour vos déménagements",
      image: "/images/categories/utilitaire.jpg",
      link: "/vehicules/utilitaires",
      price: "À partir de 45€/jour"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      rating: 5,
      comment: "Service impeccable ! Véhicule propre et en parfait état. Je recommande vivement."
    },
    {
      name: "Jean Martin",
      rating: 5,
      comment: "Réservation facile, prix compétitifs et excellent accueil. Parfait pour mes déplacements professionnels."
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      comment: "Très satisfaite de ma location. Personnel professionnel et véhicule conforme à mes attentes."
    }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Location Auto Car",
    "url": "https://www.locationautocar.be",
    "logo": "https://www.locationautocar.be/images/logo-locationautocar.png",
    "description": "Service de location de voitures professionnel en Belgique. Véhicules récents, tarifs compétitifs, service client de qualité.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue Example 123",
      "addressLocality": "Bruxelles",
      "postalCode": "1000",
      "addressCountry": "BE"
    },
    "telephone": "+32 2 XXX XX XX",
    "email": "info@locationautocar.be",
    "openingHours": "Mo-Su 08:00-20:00",
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <SEOHead
        title="Location Auto Car - Location de voitures en Belgique"
        description="Service de location de voitures professionnel en Belgique. Véhicules récents, tarifs compétitifs, service client de qualité. Réservez dès maintenant !"
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Location de Voitures en Belgique
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Découvrez notre flotte moderne et profitez d'un service de qualité 
              pour tous vos déplacements en Belgique et en Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservation"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Réserver Maintenant
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/vehicules"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Voir nos Véhicules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Location Auto Car ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à vous offrir la meilleure expérience de location 
              avec un service professionnel et des véhicules de qualité.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Flotte de Véhicules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez parmi notre large gamme de véhicules adaptés à tous vos besoins, 
              de la citadine économique au véhicule de luxe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={category.image} 
                    alt={`Véhicules ${category.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Link
                    to={category.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Voir les véhicules
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
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
              La satisfaction de nos clients est notre priorité
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
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Réserver Votre Véhicule ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Réservation simple et rapide en ligne. Service client disponible 24/7.
          </p>
          <Link
            to="/reservation"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
          >
            Commencer ma Réservation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;