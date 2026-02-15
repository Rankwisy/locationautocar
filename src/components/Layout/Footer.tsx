import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ROUTES, MAIN_CANONICAL_PAGES } from '../../data/canonicalRoutes';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to={ROUTES.HOME} className="inline-block">
              <img
                src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
                alt="Location Autocar Bruxelles"
                className="h-12 w-auto mb-4 bg-white p-2 rounded"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Location d'autocar avec chauffeur depuis 2007. 
              Service professionnel en Belgique et en Europe.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+3225800325" className="text-blue-400 hover:text-blue-300" aria-label="Téléphone">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:info@locationautocar.be" className="text-blue-400 hover:text-blue-300" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services - direct links to canonical service pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.SERVICE_TRANSFERTS} className="text-gray-300 hover:text-white">
                  Transferts Aéroports
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICE_EXCURSIONS} className="text-gray-300 hover:text-white">
                  Excursions Touristiques
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICE_VOYAGES_AFFAIRES} className="text-gray-300 hover:text-white">
                  Voyages d'Affaires
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICE_MISE_A_DISPOSITION} className="text-gray-300 hover:text-white">
                  Mise à Disposition
                </Link>
              </li>
            </ul>
          </div>

          {/* Fleet - canonical flotte + sub-pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Notre Flotte</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.FLOTTE} className="text-gray-300 hover:text-white">
                  Notre flotte
                </Link>
              </li>
              <li>
                <Link to={ROUTES.FLOTTE_MINIBUS} className="text-gray-300 hover:text-white">
                  Minibus (8-16 places)
                </Link>
              </li>
              <li>
                <Link to={ROUTES.FLOTTE_BUS} className="text-gray-300 hover:text-white">
                  Bus (20-35 places)
                </Link>
              </li>
              <li>
                <Link to={ROUTES.FLOTTE_AUTOCARS} className="text-gray-300 hover:text-white">
                  Autocars (40-55 places)
                </Link>
              </li>
              <li>
                <Link to={ROUTES.LEZ} className="text-green-400 hover:text-green-300 font-semibold">
                  Conformité LEZ Bruxelles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <Link to={ROUTES.CONTACT} className="text-blue-400 hover:text-blue-300 font-medium inline-block mb-2">
                Page contact
              </Link>
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

        {/* Site map: all canonical pages in one row for accessibility and SEO */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6" aria-label="Navigation principale">
            {MAIN_CANONICAL_PAGES.map(({ label, path }) => (
              <Link key={path} to={path} className="text-gray-400 hover:text-white text-sm">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Location Autocar Bruxelles. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 mt-4 md:mt-0">
              <Link to={ROUTES.MENTIONS_LEGALES} className="text-gray-400 hover:text-white text-sm">
                Mentions Légales
              </Link>
              <Link to={ROUTES.POLITIQUE_CONFIDENTIALITE} className="text-gray-400 hover:text-white text-sm">
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