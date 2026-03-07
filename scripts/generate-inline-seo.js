/**
 * Génère public/seo-inline.js (title, description, canonical avant React).
 * Exécuter : node scripts/generate-inline-seo.js
 * Synchroniser avec src/data/seoData.ts et les pages si les meta changent.
 */

const BASE = 'https://www.locationautocar.be';

const META = {
  '/': {
    t: "Location Autocar Bruxelles – Devis gratuit",
    d: "Autocariste Bruxelles pour location autocar avec chauffeur. Bus et minibus confort pour groupes et événements. Devis gratuit immédiat."
  },
  '/nos-services': {
    t: "Nos Services | Autocariste Bruxelles avec Chauffeur",
    d: "Autocariste à Bruxelles : location d'autocar avec chauffeur pour transferts aéroports, excursions, voyages d'affaires et événements. Devis rapide."
  },
  '/nos-services/transferts-aeroports': {
    t: "Transferts Aéroports Bruxelles | Chauffeur Professionnel Belgique",
    d: "Service de navette professionnelle depuis l'aéroport de Bruxelles-National et Charleroi vers toutes destinations en Belgique."
  },
  '/nos-services/excursions-tourisme': {
    t: "Excursions Touristiques Bruxelles | Chauffeur Professionnel Belgique",
    d: "Circuits touristiques organisés à Bruxelles, en Belgique et en Europe avec autocar et chauffeur professionnel."
  },
  '/nos-services/voyages-affaires': {
    t: "Voyages d'Affaires Bruxelles | Chauffeur Professionnel Belgique",
    d: "Transport en autocar pour séminaires, conférences et événements d'entreprise en Belgique et en Europe."
  },
  '/nos-services/mise-a-disposition': {
    t: "Mise à Disposition Autocar Bruxelles | Chauffeur Professionnel Belgique",
    d: "Location d'autocar avec chauffeur à l'heure pour vos déplacements personnalisés en Belgique et Europe."
  },
  '/nos-services/prix': {
    t: "Location autocar Bruxelles prix : Tarifs & Devis 2026",
    d: "Prix location autocar avec chauffeur à Bruxelles. Tarifs transferts, excursions, groupes. Devis gratuit sous 24h."
  },
  '/nos-services/location-bus-groupe': {
    t: "Location Bus Bruxelles Groupe : 20–55 Places",
    d: "Location bus et autocar pour groupes à Bruxelles. Scolaires, entreprises, événements. Minibus à autocars. Devis rapide."
  },
  '/nos-services/autocar-mariage': {
    t: "Autocar Mariage Bruxelles : Transport Invités",
    d: "Autocar et bus pour mariage à Bruxelles. Transport invités, cortège. Chauffeur professionnel. Devis personnalisé."
  },
  '/nos-services/navette-entreprise': {
    t: "Navette Entreprise Bruxelles : Transport Salariés",
    d: "Navette entreprise Bruxelles pour salariés. Trajets réguliers, aéroports, sites. Service sur mesure. Devis gratuit."
  },
  '/notre-flotte': {
    t: "Flotte Bus Minibus Autocar Bruxelles | Euro 6 LEZ | Choisissez Votre Véhicule",
    d: "Comparez minibus 8-16 places, bus 20-35 et autocars 40-55 places. Tous Euro 6, accès LEZ Bruxelles garanti. Climatisation, WiFi, chauffeur pro. Réservez 24/7."
  },
  '/notre-flotte/minibus': {
    t: "Minibus Mercedes Chauffeur | Transferts VIP & Excursions Petits Groupes",
    d: "Minibus Mercedes 8-16 places : transferts aéroport Zaventem/Charleroi, excursions Bruxelles, séminaires. Sièges cuir, WiFi, climatisation. Devis rapide."
  },
  '/notre-flotte/bus': {
    t: "Bus Touristique 20-35 Places | Excursions Belgique Europe",
    d: "Bus 20-35 places pour excursions Bruges, Gand, Paris, Amsterdam. Équilibre confort/capacité. Climatisation, prises USB. Idéal groupes moyens."
  },
  '/notre-flotte/autocars': {
    t: "Autocar Grand Tourisme Europe | Paris Amsterdam Prague | Toilettes WiFi",
    d: "Autocars 40-55 places : circuits Europe, Paris, Amsterdam, Prague. Toilettes, kitchenette, WiFi. Confort longue distance depuis Bruxelles."
  },
  '/destinations': {
    t: "Circuits Autocar Bruxelles | Bruges Paris Amsterdam | Guides Francophones",
    d: "Hub de nos circuits : Bruxelles (Grand-Place, Atomium), Belgique (Bruges, Gand, Anvers), Europe (Paris, Amsterdam, Prague). Comparez les offres."
  },
  '/destinations/bruxelles': {
    t: "Visite Guidée Bruxelles Autocar | Circuits Capitale Europe",
    d: "Circuits Bruxelles : Grand-Place UNESCO, Atomium, quartier européen, Manneken-Pis. Transport et guide inclus. Circuits classique, moderne ou gourmand."
  },
  '/destinations/belgique': {
    t: "Excursions Belgique Autocar | Triangle Flamand Vallée Meuse",
    d: "Bruges UNESCO, Gand médiéval, Anvers diamantaire, Dinant Meuse. Circuits 1-2 jours. Patrimoine, bières trappistes, chocolat."
  },
  '/destinations/europe': {
    t: "Circuits Europe Autocar | Capitales Nord & Centrale",
    d: "Paris, Amsterdam, Prague, Cologne, Luxembourg, Strasbourg. Voyages 2-7 jours. Autocar grand tourisme, hébergements sélectionnés."
  },
  '/lez-bruxelles': {
    t: "LEZ Bruxelles 2026 | Flotte Autocar Euro 6 Conforme | Sans Amende",
    d: "Tous nos autocars sont conformes aux normes LEZ Bruxelles 2026. Flotte 100% Euro 6 garantissant accès illimité au centre-ville. Pas d'amende, pas de restriction."
  },
  '/blog': {
    t: "Blog Voyage Autocar | Guides Destinations | Conseils Transport Groupe",
    d: "Découvrez nos guides de voyage, conseils pratiques et actualités sur le transport en autocar. Destinations, itinéraires et astuces pour vos voyages de groupe."
  },
  '/blog/lez-bruxelles-2026-guide-complet-normes-euro-6': {
    t: "LEZ Bruxelles 2026 : Guide Normes Euro 6, Amendes et Conformité",
    d: "Tout savoir sur la Zone de Basses Émissions de Bruxelles 2026 : normes Euro 6, amendes de 350€, zones concernées et comment circuler légalement au centre-ville."
  },
  '/blog/location-autocar-evenements-bruxelles-2025': {
    t: "Location Autocar Bruxelles Événements 2025 | Plaisirs d'Hiver & Festivals",
    d: "Profitez des événements majeurs à Bruxelles (Plaisirs d'Hiver, festivals, concerts) avec notre service de location d'autocar avec chauffeur. Confort, sécurité et tarifs compétitifs garantis."
  },
  '/blog/location-autocar-avec-chauffeur-bruxelles-prix': {
    t: "Location autocar avec chauffeur à Bruxelles – Prix & Devis 2025",
    d: "Découvrez tout sur la location d'autocar avec chauffeur à Bruxelles : prix, services, types de véhicules et conseils pour réserver en 2025. Demandez un devis gratuit !"
  },
  '/blog/bruxelles-coeur-europe': {
    t: "Visiter Bruxelles - Guide Complet de la Capitale Européenne 2024",
    d: "Découvrez Bruxelles authentique : Grand-Place, Atomium, quartiers secrets et spécialités locales. Guide complet avec conseils d'initiés pour une visite réussie."
  },
  '/blog/amsterdam-canaux-velo': {
    t: "Visiter Amsterdam à Vélo - Guide Complet des Canaux 2024",
    d: "Découvrez Amsterdam authentique à vélo : canaux historiques, quartiers bohèmes, musées incontournables et culture locale. Guide pratique avec itinéraires secrets."
  },
  '/blog/eiffel-tower-sunset-magic': {
    t: "Visiter la Tour Eiffel au Coucher de Soleil - Guide Complet 2024",
    d: "Découvrez les meilleurs spots pour admirer la Tour Eiffel au coucher de soleil, conseils pratiques, horaires et astuces photo pour une visite inoubliable."
  },
  '/contactez-nous': {
    t: "Contact Location Autocar Bruxelles | Devis Gratuit | Service 24/7",
    d: "Contactez Location Autocar Bruxelles pour vos besoins de transport en autocar avec chauffeur. Devis gratuit, service 24/7. Bd Industriel 9, 1070 Bruxelles."
  },
  '/mentions-legales': {
    t: "Mentions Légales | Location Autocar Bruxelles",
    d: "Mentions légales de Location Autocar Bruxelles. Informations légales sur notre entreprise de transport en autocar avec chauffeur en Belgique."
  },
  '/politique-confidentialite': {
    t: "Politique de Confidentialité | Protection des Données RGPD",
    d: "Politique de confidentialité et protection des données personnelles de Location Autocar Bruxelles. Conformité RGPD et respect de votre vie privée."
  }
};

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const jsContent = `/**
 * SEO inline : met à jour title, canonical, og, twitter avant React
 * Meta description gérée uniquement par React Helmet (SEOHead) pour éviter les doublons
 * Généré par scripts/generate-inline-seo.js
 */
(function(){
  var p = (window.location.pathname || '/').replace(/\\/$/, '') || '/';
  var BASE = '${BASE}';
  var m = ${JSON.stringify(META)};
  var r = m[p] || m['/'];
  function ensureMeta(selector, attrs) {
    var el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      Object.keys(attrs).forEach(function(k){ el.setAttribute(k, attrs[k]); });
      document.head.appendChild(el);
    }
    return el;
  }
  if (r) {
    document.title = r.t;
    /* Meta description: only set by React Helmet (SEOHead) to avoid duplicate tags */
    var url = BASE + p;
    var can = document.querySelector('link[rel="canonical"]');
    if (can) can.setAttribute('href', url);
    else { var l = document.createElement('link'); l.rel = 'canonical'; l.href = url; document.head.appendChild(l); }
    var og = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    og.setAttribute('content', r.t);
    og = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
    og.setAttribute('content', r.d);
    og = ensureMeta('meta[property="og:url"]', { property: 'og:url' });
    og.setAttribute('content', url);
    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    var tw = ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
    tw.setAttribute('content', r.t);
    tw = ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' });
    tw.setAttribute('content', r.d);
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  }
})();
`;

const outPath = path.join(path.dirname(__dirname), 'public', 'seo-inline.js');
fs.writeFileSync(outPath, jsContent, 'utf8');
console.log('Generated', outPath);
console.log('Routes covered:', Object.keys(META).length);
