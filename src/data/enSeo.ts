import { localeMetadata, type Locale } from './i18n';
import type { FormStrings } from '@/components/Forms/LangContactForm';

export const EN: Locale = {
  lang: 'en',
  ogLocale: 'en_GB',
  siteName: 'Coach Hire Brussels',
  ogAlt: 'Coach hire with driver in Brussels',
  home: '/en',
  homeLabel: 'Home',
  navAria: 'Main navigation',
  breadcrumbAria: 'Breadcrumb',
  skipLink: 'Skip to main content',
  nav: [
    { href: '/en', label: 'Home' },
    { href: '/en/coach-hire-brussels', label: 'Coach hire' },
    { href: '/en/minibus-hire-brussels', label: 'Minibus hire' },
    { href: '/en/corporate-event-transport-brussels', label: 'Corporate events' },
    { href: '/en/day-trips-from-brussels', label: 'Day trips' },
    { href: '/en/airport-transfers-brussels', label: 'Airport transfers' },
    { href: '/en/contact', label: 'Contact' },
  ],
  contact: {
    phone: '+32 2 580 03 25',
    phoneHref: 'tel:+3225800325',
    email: 'info@locationautocar.be',
    address: 'Priemstraat 43 bus, 1000 Brussels, Belgium',
    hours: 'Monday to Friday: 9:30am–6:30pm, Saturday: 1:30pm–6:30pm',
    city: 'Brussels',
  },
  areaServed: ['Brussels', 'Belgium', 'Europe'],
  footerTitle: 'Location Autocar Brussels',
  footerText: 'Coach, bus and minibus hire with driver in Brussels since 2007.',
  frLink: 'Version française',
  faqTitle: 'Frequently asked questions',
  ctaTitle: 'Get your free quote',
  ctaText: 'Tell us the date, number of passengers and route. We reply within 24 hours.',
  ctaForm: { href: '/en/contact', label: 'Quote request form' },
};

export const EN_FORM: FormStrings = {
  name: 'Full name',
  email: 'Email',
  phone: 'Phone',
  service: 'Service',
  servicePlaceholder: 'Choose a service',
  services: {
    transfert: 'Airport or station transfer',
    excursion: 'Day trip or sightseeing',
    business: 'Business trip or corporate event',
    disposition: 'Coach at your disposal',
  },
  date: 'Date',
  passengers: 'Number of passengers',
  destination: 'Pick-up and destination',
  destinationPlaceholder: 'E.g. Brussels – Bruges',
  message: 'Message',
  submit: 'Send my request',
  submitting: 'Sending...',
  successTitle: 'Thank you! Your request has been sent.',
  successText: 'We will get back to you shortly with your personalised quote.',
  errorTitle: 'Sending failed.',
  errorText: 'Please try again or contact us on',
  or: 'or',
  required: '* Required fields. Reply within 24 hours.',
};

export const enMetadata = (opts: { path: string; title: string; description: string }) =>
  localeMetadata(EN, opts);
