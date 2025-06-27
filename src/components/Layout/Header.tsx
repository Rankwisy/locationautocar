import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+3225800325" 
                  className="hover:text-blue-200 transition-colors"
                  title="Appeler Location Autocar Bruxelles"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:info@locationautocar.be" 
                  className="hover:text-blue-200 transition-colors"
                  title="Email Location Autocar Bruxelles"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.contact.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4" title="Location Autocar Bruxelles - Accueil">
            <div className="flex-shrink-0">
              <img 
                src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
                alt="Location Autocar Bruxelles - Logo entreprise transport bus minibus chauffeur"
                title="Location Autocar Bruxelles - Service transport depuis 2007"
                className="h-12 w-auto object-contain"
                loading="eager"
                width="120"
                height="48"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-blue-900">Location Autocar</h1>
              <p className="text-sm text-gray-600">Bruxelles • Bus et Minibus avec chauffeur</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.url} className="relative group">
                <Link
                  to={item.url}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  title={`${item.label} - Location Autocar Bruxelles`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.url}
                          to={child.url}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          title={`${child.label} - Location Autocar Bruxelles`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contactez-nous"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              title="Demander devis gratuit Location Autocar Bruxelles"
            >
              Devis Gratuit
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            aria-label="Menu navigation mobile"
            title="Ouvrir menu navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {mainNavigation.map((item) => (
                <div key={item.url}>
                  <Link
                    to={item.url}
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    title={`${item.label} - Location Autocar Bruxelles`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.url}
                          to={child.url}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                          title={`${child.label} - Location Autocar Bruxelles`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contactez-nous"
                className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
                title="Demander devis gratuit Location Autocar Bruxelles"
              >
                Devis Gratuit
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;