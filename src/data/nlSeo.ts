import { localeMetadata, type Locale } from './i18n';
import type { FormStrings } from '@/components/Forms/LangContactForm';

export const NL: Locale = {
  lang: 'nl-BE',
  ogLocale: 'nl_BE',
  siteName: 'Autocar huren in Brussel',
  ogAlt: 'Autocar met chauffeur huren in Brussel',
  home: '/nl',
  homeLabel: 'Home',
  navAria: 'Hoofdnavigatie',
  breadcrumbAria: 'Kruimelpad',
  skipLink: 'Naar de hoofdinhoud',
  nav: [
    { href: '/nl', label: 'Home' },
    { href: '/nl/autocar-huren-brussel', label: 'Autocar huren' },
    { href: '/nl/minibus-huren-brussel', label: 'Minibus huren' },
    { href: '/nl/bus-met-chauffeur', label: 'Bus met chauffeur' },
    { href: '/nl/uitstappen-vanuit-brussel', label: 'Uitstappen' },
    { href: '/nl/luchthavenvervoer-brussel', label: 'Luchthavenvervoer' },
    { href: '/nl/contact', label: 'Contact' },
  ],
  contact: {
    phone: '+32 2 580 03 25',
    phoneHref: 'tel:+3225800325',
    email: 'info@locationautocar.be',
    address: 'Priemstraat 43 bus, 1000 Brussel',
    hours: 'Maandag tot vrijdag: 9u30–18u30, zaterdag: 13u30–18u30',
    city: 'Brussel',
  },
  areaServed: ['Brussel', 'België', 'Europa'],
  footerTitle: 'Location Autocar Brussel',
  footerText: 'Autocars, bussen en minibussen met chauffeur huren in Brussel sinds 2007.',
  frLink: 'Version française',
  faqTitle: 'Veelgestelde vragen',
  ctaTitle: 'Vraag uw gratis offerte aan',
  ctaText: 'Geef ons de datum, het aantal personen en de route door. U krijgt binnen 24 uur een antwoord.',
  ctaForm: { href: '/nl/contact', label: 'Offerteformulier' },
};

export const NL_FORM: FormStrings = {
  name: 'Naam',
  email: 'E-mail',
  phone: 'Telefoon',
  service: 'Dienst',
  servicePlaceholder: 'Kies een dienst',
  services: {
    transfert: 'Luchthaven- of stationstransfer',
    excursion: 'Toeristische uitstap',
    business: 'Zakenreis of bedrijfsevent',
    disposition: 'Terbeschikkingstelling',
  },
  date: 'Datum',
  passengers: 'Aantal personen',
  destination: 'Vertrek en bestemming',
  destinationPlaceholder: 'Bijv. Brussel – Brugge',
  message: 'Bericht',
  submit: 'Verstuur mijn aanvraag',
  submitting: 'Bezig met verzenden...',
  successTitle: 'Bedankt! Uw aanvraag is goed verzonden.',
  successText: 'Wij nemen zo snel mogelijk contact met u op met uw persoonlijke offerte.',
  errorTitle: 'Verzenden mislukt.',
  errorText: 'Probeer opnieuw of contacteer ons via',
  or: 'of',
  required: '* Verplichte velden. Antwoord binnen 24 uur.',
};

export const nlMetadata =(opts: { path: string; title: string; description: string }) =>
  localeMetadata(NL, opts);
