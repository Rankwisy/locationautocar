import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Bus } from 'lucide-react';
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
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{siteConfig.contact.email}</span>
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
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Bus className="h-8 w-8 text-white" />
            </div>
            <div>
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
            >
              Devis Gratuit
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
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