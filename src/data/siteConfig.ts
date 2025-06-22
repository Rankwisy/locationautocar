import { SiteConfig } from '../types/content';

export const siteConfig: SiteConfig = {
  title: "Location Auto Car - Location de voitures en Belgique",
  description: "Service de location de voitures professionnel en Belgique. Véhicules récents, tarifs compétitifs, service client de qualité.",
  url: "https://www.locationautocar.be",
  logo: "/images/logo-locationautocar.png",
  favicon: "/favicon.ico",
  socialMedia: {
    facebook: "https://facebook.com/locationautocar",
    instagram: "https://instagram.com/locationautocar"
  },
  contact: {
    phone: "+32 2 XXX XX XX",
    email: "info@locationautocar.be",
    address: "Rue Example 123, 1000 Bruxelles, Belgique"
  },
  business: {
    name: "Location Auto Car",
    type: "Car Rental Service",
    location: {
      street: "Rue Example 123",
      city: "Bruxelles",
      postalCode: "1000",
      country: "BE"
    }
  }
};