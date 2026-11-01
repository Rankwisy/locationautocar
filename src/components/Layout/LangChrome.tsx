import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Locale } from '@/data/i18n';

export function LangHeader({ locale }: { locale: Locale }) {
  const { contact } = locale;
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <Link href={locale.home} className="inline-block">
          <img
            src="https://ik.imagekit.io/by733ltn6/locationautocar/cropped-logo-base-location-autocar-bruxelles.png"
            alt={locale.footerTitle}
            className="h-10 w-auto"
          />
        </Link>
        <nav aria-label={locale.navAria} className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-gray-700">
          {locale.nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-blue-600">
              {n.label}
            </Link>
          ))}
          <a href={contact.phoneHref} className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700">
            {contact.phone}
          </a>
          <Link href="/" hrefLang="fr" lang="fr" className="text-gray-500 hover:text-blue-600" aria-label="Voir en français">
            FR
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function LangFooter({ locale }: { locale: Locale }) {
  const { contact } = locale;
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold mb-2">{locale.footerTitle}</p>
          <p className="text-gray-300 text-sm">{locale.footerText}</p>
        </div>
        <ul className="space-y-2 text-sm text-gray-300">
          {locale.nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/" hrefLang="fr" lang="fr" className="hover:text-white">
              {locale.frLink}
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <a href={contact.phoneHref} className="hover:text-white">{contact.phone}</a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
          </li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden="true" />{contact.address}</li>
          <li className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" />{contact.hours}</li>
          <li>
            BCE/KBO{' '}
            <a
              href="https://kbopub.economie.fgov.be/kbopub/zoeknummerform.html?nummer=2324592033&actionLu=Zoek"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              2.324.592.033
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
