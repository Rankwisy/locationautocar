import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
              alt="Location Autocar Bruxelles"
              className="h-12 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-300 mb-4">
              Location d'autocar avec chauffeur depuis 2007. 
              Service professionnel en Belgique et en Europe.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+3225800325" className="text-blue-400 hover:text-blue-300">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:info@locationautocar.be" className="text-blue-400 hover:text-blue-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white">
                  Transferts Aéroports
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white">
                  Excursions Touristiques
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white">
                  Voyages d'Affaires
                </Link>
              </li>
              <li>
                <Link to="/nos-services" className="text-gray-300 hover:text-white">
                  Mise à Disposition
                </Link>
              </li>
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Notre Flotte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/notre-flotte/minibus" className="text-gray-300 hover:text-white">
                  Minibus (8-16 places)
                </Link>
              </li>
              <li>
                <Link to="/notre-flotte/bus" className="text-gray-300 hover:text-white">
                  Bus (20-35 places)
                </Link>
              </li>
              <li>
                <Link to="/notre-flotte/autocars" className="text-gray-300 hover:text-white">
                  Autocars (40-55 places)
                </Link>
              </li>
              <li>
                <Link to="/lez-bruxelles" className="text-green-400 hover:text-green-300 font-semibold">
                  Conformité LEZ Bruxelles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Bd Industriel 9</p>
                  <p className="text-gray-300">1070 Bruxelles</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <a href="tel:+3225800325" className="text-gray-300 hover:text-white">
                  +32 2 580 03 25
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <a href="mailto:info@locationautocar.be" className="text-gray-300 hover:text-white">
                  info@locationautocar.be
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Lun-Ven: 8h-22h</p>
                  <p className="text-gray-300">Sam-Dim: 10h-22h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Location Autocar Bruxelles. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-sm">
                Mentions Légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;