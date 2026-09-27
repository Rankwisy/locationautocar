import { NavigationItem } from '../types/content';

export const mainNavigation: NavigationItem[] = [
  {
    label: "Accueil",
    url: "/"
  },
  {
    label: "Nos Services",
    url: "/nos-services",
    children: [
      { label: "Transferts Aéroports", url: "/nos-services/transferts-aeroports" },
      { label: "Excursions & Tourisme", url: "/nos-services/excursions-tourisme" },
      { label: "Voyages d'Affaires", url: "/nos-services/voyages-affaires" },
      { label: "Mise à Disposition", url: "/nos-services/mise-a-disposition" }
    ]
  },
  {
    label: "Notre Flotte",
    url: "/notre-flotte",
    children: [
      { label: "Autocars", url: "/notre-flotte/autocars" },
      { label: "Minibus", url: "/notre-flotte/minibus" },
      { label: "Bus", url: "/notre-flotte/bus" }
    ]
  },
  {
    label: "Destinations",
    url: "/destinations",
    children: [
      { label: "Bruxelles & Région", url: "/destinations/bruxelles" },
      { label: "Belgique", url: "/destinations/belgique" },
      { label: "Europe", url: "/destinations/europe" }
    ]
  },
  {
    label: "Blog",
    url: "/blog"
  },
  {
    label: "Contactez Nous",
    url: "/contactez-nous"
  }
];