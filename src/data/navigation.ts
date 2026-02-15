import { NavigationItem } from '../types/content';
import { ROUTES } from './canonicalRoutes';

export const mainNavigation: NavigationItem[] = [
  {
    label: "Accueil",
    url: ROUTES.HOME
  },
  {
    label: "Nos Services",
    url: ROUTES.SERVICES,
    children: [
      { label: "Transferts Aéroports", url: ROUTES.SERVICE_TRANSFERTS },
      { label: "Excursions & Tourisme", url: ROUTES.SERVICE_EXCURSIONS },
      { label: "Voyages d'Affaires", url: ROUTES.SERVICE_VOYAGES_AFFAIRES },
      { label: "Mise à Disposition", url: ROUTES.SERVICE_MISE_A_DISPOSITION }
    ]
  },
  {
    label: "Notre Flotte",
    url: ROUTES.FLOTTE,
    children: [
      { label: "Autocars", url: ROUTES.FLOTTE_AUTOCARS },
      { label: "Minibus", url: ROUTES.FLOTTE_MINIBUS },
      { label: "Bus", url: ROUTES.FLOTTE_BUS },
      { label: "Conformité LEZ", url: ROUTES.LEZ }
    ]
  },
  {
    label: "Destinations",
    url: ROUTES.DESTINATIONS,
    children: [
      { label: "Bruxelles & Région", url: ROUTES.DESTINATION_BRUXELLES },
      { label: "Belgique", url: ROUTES.DESTINATION_BELGIQUE },
      { label: "Europe", url: ROUTES.DESTINATION_EUROPE }
    ]
  },
  {
    label: "Blog",
    url: ROUTES.BLOG
  },
  {
    label: "Contactez Nous",
    url: ROUTES.CONTACT
  }
];