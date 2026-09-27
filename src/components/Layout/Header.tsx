import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();


  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleDropdownToggle = (href: string) => {
    setOpenDropdown(openDropdown === href ? null : href);
  };
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
              alt="Location Autocar Bruxelles"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.url)}
                      onMouseEnter={() => setOpenDropdown(item.url)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                        isActive(item.url)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div 
                      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                        openDropdown === item.url ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="py-2">
                        <Link
                          to={item.url}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label} - Aperçu
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.url}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isActive(item.url)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+3225800325"
              className="flex items-center text-sm text-gray-600 hover:text-blue-600"
            >
              <Phone className="w-4 h-4 mr-1" />
              +32 2 580 03 25
            </a>
            <a
              href="mailto:info@locationautocar.be"
              className="flex items-center text-sm text-gray-600 hover:text-blue-600"
            >
              <Mail className="w-4 h-4 mr-1" />
              Email
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {mainNavigation.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.url}
                    className={`block px-2 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.url)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.url}
                          className="block px-2 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+3225800325"
                  className="flex items-center text-sm text-gray-600 hover:text-blue-600 mb-2"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +32 2 580 03 25
                </a>
                <a
                  href="mailto:info@locationautocar.be"
                  className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@locationautocar.be
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;