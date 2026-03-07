import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ROUTES, MAIN_CANONICAL_PAGES } from '../../data/canonicalRoutes';

const FooterNext: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <Link href={ROUTES.HOME} className="inline-block">
              <img
                src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
                alt="Location Autocar Bruxelles"
                className="h-12 w-auto mb-4 bg-white p-2 rounded"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Location d'autocar avec chauffeur depuis 2007. Service professionnel en Belgique et en Europe.
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href={ROUTES.SERVICES} className="text-blue-400 hover:text-blue-300 font-medium">
                  Tous nos services
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICE_TRANSFERTS} className="text-gray-300 hover:text-white">
                  Transferts Aéroports
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICE_EXCURSIONS} className="text-gray-300 hover:text-white">
                  Excursions Touristiques
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICE_VOYAGES_AFFAIRES} className="text-gray-300 hover:text-white">
                  Voyages d&apos;Affaires
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICE_MISE_A_DISPOSITION} className="text-gray-300 hover:text-white">
                  Mise à Disposition
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICE_PRIX} className="text-gray-300 hover:text-white">
                  Prix & Devis
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICE_LOCATION_BUS_GROUPE} className="text-gray-300 hover:text-white">
                  Location Bus Groupe
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICE_AUTOCAR_MARIAGE} className="text-gray-300 hover:text-white">
                  Autocar Mariage
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICE_NAVETTE_ENTREPRISE} className="text-gray-300 hover:text-white">
                  Navette Entreprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Notre Flotte</h3>
            <ul className="space-y-2">
              <li>
                <Link href={ROUTES.FLOTTE} className="text-gray-300 hover:text-white">
                  Notre flotte
                </Link>
              </li>
              <li>
                <Link href={ROUTES.FLOTTE_MINIBUS} className="text-gray-300 hover:text-white">
                  Minibus (8-16 places)
                </Link>
              </li>
              <li>
                <Link href={ROUTES.FLOTTE_BUS} className="text-gray-300 hover:text-white">
                  Bus (20-35 places)
                </Link>
              </li>
              <li>
                <Link href={ROUTES.FLOTTE_AUTOCARS} className="text-gray-300 hover:text-white">
                  Autocars (40-55 places)
                </Link>
              </li>
              <li>
                <Link href={ROUTES.LEZ} className="text-green-400 hover:text-green-300 font-semibold">
                  Conformité LEZ Bruxelles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href={ROUTES.DESTINATIONS} className="text-blue-400 hover:text-blue-300 font-medium">
                  Toutes nos destinations
                </Link>
              </li>
              <li>
                <Link href={ROUTES.DESTINATION_BRUXELLES} className="text-gray-300 hover:text-white">
                  Bruxelles
                </Link>
              </li>
              <li>
                <Link href={ROUTES.DESTINATION_BELGIQUE} className="text-gray-300 hover:text-white">
                  Belgique
                </Link>
              </li>
              <li>
                <Link href={ROUTES.DESTINATION_EUROPE} className="text-gray-300 hover:text-white">
                  Europe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Blog</h3>
            <div className="space-y-3">
              <Link href={ROUTES.CONTACT} className="text-blue-400 hover:text-blue-300 font-medium inline-block mb-2">
                Page contact
              </Link>
              <Link href={ROUTES.BLOG} className="text-gray-300 hover:text-white block">
                Blog & Conseils
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

        <div className="border-t border-gray-800 mt-8 pt-6">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6" aria-label="Navigation principale">
            {MAIN_CANONICAL_PAGES.map(({ label, path }) => (
              <Link key={path} href={path} className="text-gray-400 hover:text-white text-sm">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Location Autocar Bruxelles. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-4 md:mt-0">
              <a
                href="https://transportbelgique.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm"
                title="Transport Belgique - Secteur transport"
              >
                Transport Belgique
              </a>
              <a
                href="https://top.brussels/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm"
                title="TOP Brussels - Tourisme et économie Bruxelles"
              >
                TOP Brussels
              </a>
              <Link href={ROUTES.MENTIONS_LEGALES} className="text-gray-400 hover:text-white text-sm">
                Mentions Légales
              </Link>
              <Link href={ROUTES.POLITIQUE_CONFIDENTIALITE} className="text-gray-400 hover:text-white text-sm">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNext;
