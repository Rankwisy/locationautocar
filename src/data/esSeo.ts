import { localeMetadata, type Locale } from './i18n';

export const ES: Locale = {
  lang: 'es',
  ogLocale: 'es_ES',
  siteName: 'Alquiler de Autocar en Bruselas',
  ogAlt: 'Alquiler de autocar con conductor en Bruselas',
  home: '/es',
  homeLabel: 'Inicio',
  navAria: 'Navegación principal',
  breadcrumbAria: 'Ruta de navegación',
  skipLink: 'Ir al contenido principal',
  nav: [
    { href: '/es', label: 'Inicio' },
    { href: '/es/alquiler-autocar-bruselas', label: 'Alquiler de autocar' },
    { href: '/es/excursiones-desde-bruselas', label: 'Excursiones' },
    { href: '/es/transfer-aeropuerto-bruselas', label: 'Traslado aeropuerto' },
  ],
  contact: {
    phone: '+32 2 580 03 25',
    phoneHref: 'tel:+3225800325',
    email: 'info@locationautocar.be',
    address: 'Priemstraat 43 bus, 1000 Bruselas, Bélgica',
    hours: 'Lunes a viernes: 9:30–18:30',
    city: 'Bruselas',
  },
  areaServed: ['Bruselas', 'Bélgica', 'Europa'],
  footerTitle: 'Location Autocar Bruselas',
  footerText: 'Alquiler de autocares, autobuses y minibuses con conductor en Bruselas desde 2007.',
  frLink: 'Version française',
  faqTitle: 'Preguntas frecuentes',
  ctaTitle: 'Solicite su presupuesto gratuito',
  ctaText: 'Indíquenos fecha, número de personas y recorrido. Le respondemos en 24 horas.',
};

export const esMetadata = (opts: { path: string; title: string; description: string }) =>
  localeMetadata(ES, opts);
