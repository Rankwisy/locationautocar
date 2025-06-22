import { NavigationItem } from '../types/content';

export const mainNavigation: NavigationItem[] = [
  {
    label: "Accueil",
    url: "/"
  },
  {
    label: "Nos Véhicules",
    url: "/vehicules",
    children: [
      { label: "Voitures Économiques", url: "/vehicules/economiques" },
      { label: "Voitures Familiales", url: "/vehicules/familiales" },
      { label: "Voitures de Luxe", url: "/vehicules/luxe" },
      { label: "Utilitaires", url: "/vehicules/utilitaires" }
    ]
  },
  {
    label: "Tarifs",
    url: "/tarifs"
  },
  {
    label: "Réservation",
    url: "/reservation"
  },
  {
    label: "À Propos",
    url: "/a-propos"
  },
  {
    label: "Contact",
    url: "/contact"
  },
  {
    label: "Blog",
    url: "/blog"
  }
];