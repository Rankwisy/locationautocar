import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ES_CONTACT } from '@/data/esSeo';

const NAV = [
  { href: '/es', label: 'Inicio' },
  { href: '/es/alquiler-autocar-bruselas', label: 'Alquiler de autocar' },
  { href: '/es/excursiones-desde-bruselas', label: 'Excursiones' },
  { href: '/es/transfer-aeropuerto-bruselas', label: 'Traslado aeropuerto' },
];

export function EsHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <Link href="/es" className="inline-block">
          <img
            src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
            alt="Location Autocar Bruselas"
            className="h-10 w-auto"
          />
        </Link>
        <nav aria-label="Navegación principal" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-gray-700">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-blue-600">
              {n.label}
            </Link>
          ))}
          <a href={ES_CONTACT.phoneHref} className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700">
            {ES_CONTACT.phone}
          </a>
          <Link href="/" hrefLang="fr" lang="fr" className="text-gray-500 hover:text-blue-600" aria-label="Voir en français">
            FR
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function EsFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold mb-2">Location Autocar Bruselas</p>
          <p className="text-gray-300 text-sm">
            Alquiler de autocares, autobuses y minibuses con conductor en Bruselas desde 2007.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-gray-300">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/" hrefLang="fr" lang="fr" className="hover:text-white">
              Version française
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <a href={ES_CONTACT.phoneHref} className="hover:text-white">{ES_CONTACT.phone}</a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <a href={`mailto:${ES_CONTACT.email}`} className="hover:text-white">{ES_CONTACT.email}</a>
          </li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden="true" />{ES_CONTACT.address}</li>
          <li className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" />{ES_CONTACT.hours}</li>
        </ul>
      </div>
    </footer>
  );
}
