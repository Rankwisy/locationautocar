import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0">
                <img 
                  src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
                  alt="Location Autocar Bruxelles - Logo"
                  className="h-10 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Location Autocar</h3>
                <p className="text-sm text-gray-300">Bruxelles</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Votre partenaire de confiance pour le transport en autocar avec chauffeur 
              depuis 2007. Service professionnel en Belgique et en Europe.
            </p>
            <div className="flex space-x-4">
              {siteConfig.socialMedia.facebook && (
                <a 
                  href={siteConfig.socialMedia.facebook}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.socialMedia.instagram && (
                <a 
                  href={siteConfig.socialMedia.instagram}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/nos-services/transferts-aeroports" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  Transferts Aéroports
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/nos-services/excursions-tourisme" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  Excursions Touristiques
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/nos-services/voyages-affaires" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  Voyages d'Affaires
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/nos-services/mise-a-disposition" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  Mise à Disposition
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Notre Flotte</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/notre-flotte/minibus" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  Minibus (8-16 places)
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/notre-flotte/bus" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  Bus (20-35 places)
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/notre-flotte/autocars" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  Autocars (40-55 places)
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  Destinations
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <a href="tel:+3225800325" className="text-gray-300 hover:text-white transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-xs text-gray-400">Service 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@locationautocar.be" className="text-gray-300 hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Services Populaires */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Services Populaires
              </h5>
              <div className="space-y-1">
                <Link 
                  to="/nos-services/transferts-aeroports" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Navette Aéroport Bruxelles
                </Link>
                <Link 
                  to="/nos-services/excursions-tourisme" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Excursion Paris depuis Bruxelles
                </Link>
                <Link 
                  to="/notre-flotte/minibus" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Location Minibus avec Chauffeur
                </Link>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Destinations
              </h5>
              <div className="space-y-1">
                <Link 
                  to="/destinations/bruxelles" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Visite de Bruxelles
                </Link>
                <Link 
                  to="/destinations/belgique" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Circuits en Belgique
                </Link>
                <Link 
                  to="/destinations/europe" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Voyages en Europe
                </Link>
              </div>
            </div>

            {/* Guides & Blog */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Guides & Conseils
              </h5>
              <div className="space-y-1">
                <Link 
                  to="/blog" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Tous nos Articles
                </Link>
                <Link 
                  to="/blog/eiffel-tower-sunset-magic" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Guide Tour Eiffel
                </Link>
                <Link 
                  to="/blog/amsterdam-canaux-velo" 
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Amsterdam en Autocar
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Location Autocar Bruxelles. Tous droits réservés. Depuis 2007.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Mentions Légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Politique de Confidentialité
              </Link>
              <Link to="/conditions-generales" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Conditions Générales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;