import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={siteConfig.logo} 
                alt={siteConfig.business.name}
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-bold">Location Auto Car</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour la location de véhicules en Belgique. 
              Service professionnel, véhicules récents et tarifs compétitifs.
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/vehicules" className="text-gray-300 hover:text-white transition-colors duration-200">Nos Véhicules</Link></li>
              <li><Link to="/tarifs" className="text-gray-300 hover:text-white transition-colors duration-200">Tarifs</Link></li>
              <li><Link to="/reservation" className="text-gray-300 hover:text-white transition-colors duration-200">Réservation</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors duration-200">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li><Link to="/vehicules/economiques" className="text-gray-300 hover:text-white transition-colors duration-200">Location Courte Durée</Link></li>
              <li><Link to="/vehicules/familiales" className="text-gray-300 hover:text-white transition-colors duration-200">Location Longue Durée</Link></li>
              <li><Link to="/vehicules/luxe" className="text-gray-300 hover:text-white transition-colors duration-200">Véhicules de Luxe</Link></li>
              <li><Link to="/vehicules/utilitaires" className="text-gray-300 hover:text-white transition-colors duration-200">Utilitaires</Link></li>
              <li><Link to="/assurance" className="text-gray-300 hover:text-white transition-colors duration-200">Assurance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Location Auto Car. Tous droits réservés.
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