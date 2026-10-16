import type { ExtraContentData } from '@/components/SEO/ExtraContent';

const COMMON_LINKS = [
  { to: '/notre-flotte', label: 'Notre flotte' },
  { to: '/nos-services/prix', label: 'Tarifs location autocar' },
  { to: '/contactez-nous', label: 'Devis gratuit' },
];

export const DESTINATION_EXTRA: Record<string, ExtraContentData> = {
  paris: {
    sections: [
      {
        title: 'Bruxelles–Paris en autocar : ce qu’il faut savoir',
        paragraphs: [
          'Paris se situe à environ 320 km de Bruxelles. Comptez 3h30 de route en autocar selon la circulation et les conditions sur l’autoroute. Le voyage se fait sans correspondance : votre groupe reste ensemble du départ jusqu’à la destination, avec un chauffeur professionnel qui connaît les accès, les zones de dépose et les parkings pour autocars de la capitale.',
          'Selon votre programme, nous organisons une excursion à la journée, un week-end ou un séjour plus long. Les horaires de départ et de retour sont définis avec vous, de façon à profiter au maximum du temps sur place.',
        ],
      },
      {
        title: 'Que visiter à Paris avec un groupe ?',
        bullets: [
          'La Tour Eiffel et le Champ-de-Mars, point de départ classique de toute visite.',
          'Le musée du Louvre et le jardin des Tuileries.',
          'Les Champs-Élysées et l’Arc de Triomphe.',
          'Montmartre et la basilique du Sacré-Cœur.',
          'Notre-Dame, l’île de la Cité et les quais de Seine.',
          'Versailles, pour un circuit à la journée au départ de Paris.',
        ],
      },
      {
        title: 'Quel véhicule choisir pour Bruxelles–Paris ?',
        paragraphs: [
          'Pour un trajet de plus de trois heures, le confort compte. Nos autocars grand tourisme (40 à 60 places) disposent de sièges inclinables, de la climatisation, de toilettes et du WiFi. Pour un petit groupe, un minibus (8 à 16 places) ou un bus (20 à 35 places) reste une solution souple et économique. Dites-nous le nombre de participants : nous vous proposons le véhicule le mieux adapté.',
        ],
      },
      {
        title: 'Tarif d’un voyage en autocar vers Paris',
        paragraphs: [
          'Le prix dépend de la durée, du nombre de passagers, du véhicule et de l’itinéraire (aller-retour dans la journée ou séjour avec nuitée). Pour un voyage de plusieurs jours en Europe, comptez en général entre 1 200 € et 1 800 €. Nous établissons un devis gratuit et sans engagement sous 24 heures.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Combien de temps dure le trajet Bruxelles–Paris en autocar ?',
        a: 'Environ 3h30 pour 320 km, selon la circulation. Nous prévoyons une pause si nécessaire.',
      },
      {
        q: 'Peut-on faire Paris en une journée depuis Bruxelles ?',
        a: 'Oui, en partant tôt le matin et en rentrant en fin de soirée, mais pour profiter pleinement de la ville nous recommandons un séjour d’au moins une nuit.',
      },
      {
        q: 'Les autocars sont-ils équipés pour un long trajet ?',
        a: 'Oui : climatisation, toilettes, WiFi et sièges inclinables sur nos autocars grand tourisme.',
      },
    ],
    links: [{ to: '/destinations/amsterdam', label: 'Amsterdam' }, { to: '/destinations/europe', label: 'Europe' }, ...COMMON_LINKS],
  },

  amsterdam: {
    sections: [
      {
        title: 'Bruxelles–Amsterdam en autocar : trajet et organisation',
        paragraphs: [
          'Amsterdam se trouve à environ 200 km de Bruxelles, soit 2h30 de route en autocar. C’est l’une des destinations les plus demandées par les groupes : le trajet est direct, confortable, et vous évite de chercher un parking dans le centre. Notre chauffeur dépose le groupe au plus près des lieux de visite et vous récupère à l’heure convenue.',
          'Nous proposons des excursions à la journée, des week-ends et des circuits combinés avec d’autres villes des Pays-Bas ou de Belgique.',
        ],
      },
      {
        title: 'Que voir à Amsterdam avec un groupe ?',
        bullets: [
          'Les canaux historiques, classés au patrimoine mondial de l’UNESCO, à découvrir en bateau.',
          'Le Rijksmuseum et le musée Van Gogh.',
          'La place du Dam et le palais royal.',
          'Le quartier du Jordaan, ses boutiques et ses cafés.',
          'La Maison d’Anne Frank (réservation à l’avance indispensable).',
          'Les environs : Zaanse Schans et ses moulins, ou Haarlem.',
        ],
      },
      {
        title: 'Conseils pratiques pour votre excursion',
        bullets: [
          'Réservez vos musées et croisières à l’avance, surtout de mai à septembre.',
          'Prévoyez un départ matinal pour rester une longue journée sur place.',
          'Le centre est très piéton et cyclable : privilégiez la dépose du groupe en bordure puis la marche à pied.',
          'Pour les groupes scolaires ou d’entreprise, indiquez-nous le programme afin d’adapter les horaires.',
        ],
      },
      {
        title: 'Quel véhicule et quel tarif ?',
        paragraphs: [
          'Du minibus (8 à 16 places) à l’autocar grand tourisme (40 à 60 places), nous adaptons le véhicule à la taille de votre groupe. Le tarif dépend de la durée, du nombre de passagers et du programme. Demandez votre devis gratuit : réponse sous 24 heures.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Combien de temps faut-il pour aller de Bruxelles à Amsterdam en autocar ?',
        a: 'Environ 2h30 pour 200 km, selon le trafic aux abords d’Anvers et d’Amsterdam.',
      },
      {
        q: 'Peut-on visiter Amsterdam en une journée ?',
        a: 'Oui. Avec un départ tôt le matin, il est possible de voir les principaux sites et de faire une croisière sur les canaux avant le retour en fin de journée.',
      },
      {
        q: 'Peut-on combiner Amsterdam avec une autre ville ?',
        a: 'Oui, nous organisons des circuits multi-villes (Rotterdam, La Haye, Anvers…). Contactez-nous avec votre programme.',
      },
    ],
    links: [{ to: '/destinations/paris', label: 'Paris' }, { to: '/destinations/cologne', label: 'Cologne' }, ...COMMON_LINKS],
  },
};

export const SERVICE_EXTRA: Record<string, ExtraContentData> = {
  'autocar-mariage': {
    sections: [
      {
        title: 'Transport des invités de mariage : comment ça se passe ?',
        paragraphs: [
          'Le jour du mariage, le transport des invités est un souci de moins pour les mariés. Avec un autocar ou un minibus avec chauffeur, tous vos invités voyagent ensemble entre la cérémonie, la salle de réception et leur hébergement. Plus de problème de parking, plus de conducteur qui ne peut pas profiter de la fête.',
          'Nous préparons un plan de transport avec vous : lieux et horaires de prise en charge, nombre de rotations, trajet retour tard dans la nuit.',
        ],
      },
      {
        title: 'Quel véhicule pour votre mariage ?',
        bullets: [
          'Minibus de 8 à 16 places pour la famille proche et le cortège.',
          'Bus de 20 à 35 places pour un mariage de taille moyenne.',
          'Autocar de 40 à 60 places pour les grands groupes d’invités.',
          'Plusieurs véhicules possibles pour faire les trajets en parallèle.',
        ],
      },
      {
        title: 'Nos engagements',
        bullets: [
          'Chauffeur professionnel et ponctuel.',
          'Véhicules propres, climatisés et confortables.',
          'Horaires adaptés au déroulement de votre journée, avec marge de flexibilité.',
          'Devis clair, sans frais cachés.',
        ],
      },
    ],
    faqs: [
      {
        q: 'À quelle date faut-il réserver un autocar pour un mariage ?',
        a: 'Dès que la date et le lieu sont fixés, surtout pour les week-ends de mai à septembre où la demande est forte.',
      },
      {
        q: 'Peut-on prévoir un retour tardif ?',
        a: 'Oui, les horaires de retour sont définis avec vous à l’avance, y compris en fin de soirée ou de nuit.',
      },
      {
        q: 'Le chauffeur peut-il attendre pendant la cérémonie ?',
        a: 'Oui, nous pouvons prévoir une mise à disposition pour toute la durée de la journée.',
      },
    ],
    links: [{ to: '/nos-services/mise-a-disposition', label: 'Mise à disposition' }, ...COMMON_LINKS],
  },

  'location-bus-groupe': {
    sections: [
      {
        title: 'Louer un bus pour un groupe à Bruxelles',
        paragraphs: [
          'Écoles, entreprises, associations, clubs sportifs, familles : nous transportons tous les types de groupes, pour une journée ou pour plusieurs jours, en Belgique comme à l’étranger. Un seul véhicule pour tout le monde, c’est plus simple à organiser et souvent plus économique par personne qu’une multitude de trajets individuels.',
        ],
      },
      {
        title: 'Comment choisir le bon véhicule ?',
        bullets: [
          'Minibus (8 à 16 places) : petits groupes, transferts, équipes réduites.',
          'Bus (20 à 35 places) : sorties scolaires, séminaires, excursions.',
          'Autocar grand tourisme (40 à 60 places) : grands groupes et longs trajets, avec toilettes et WiFi.',
        ],
      },
      {
        title: 'Cas d’usage fréquents',
        bullets: [
          'Voyages scolaires et sorties pédagogiques.',
          'Séminaires, team building et déplacements professionnels.',
          'Excursions touristiques vers Bruges, Gand, Amsterdam ou Paris.',
          'Événements, concerts, festivals et compétitions sportives.',
        ],
      },
      {
        title: 'Demander un devis',
        paragraphs: [
          'Indiquez-nous la date, le nombre de personnes, le lieu de départ et l’itinéraire. Nous vous répondons avec un devis gratuit et sans engagement sous 24 heures. Tous nos véhicules sont conformes à la zone de basses émissions (LEZ) de Bruxelles.',
        ],
      },
    ],
    faqs: [
      {
        q: 'À partir de combien de personnes loue-t-on un bus ?',
        a: 'Dès 8 personnes avec un minibus. Pour 20 personnes ou plus, un bus ou un autocar est généralement plus adapté.',
      },
      {
        q: 'Le chauffeur est-il inclus ?',
        a: 'Oui, tous nos véhicules sont loués avec chauffeur professionnel.',
      },
      {
        q: 'Peut-on louer un bus pour plusieurs jours ?',
        a: 'Oui, pour des circuits de plusieurs jours en Belgique ou en Europe. Demandez un devis personnalisé.',
      },
    ],
    links: [{ to: '/nos-services/excursions-tourisme', label: 'Excursions touristiques' }, { to: '/destinations', label: 'Destinations' }, ...COMMON_LINKS],
  },

  'voyages-affaires': {
    sections: [
      {
        title: 'Le transport en autocar pour vos événements professionnels',
        paragraphs: [
          'Séminaires, conférences, salons, visites de sites, team building : le déplacement d’un groupe de collaborateurs ou de clients doit être fluide et ponctuel. Notre service de transport d’affaires vous garantit un trajet confortable, avec un chauffeur professionnel qui respecte vos horaires.',
          'Nous travaillons avec des entreprises, des agences événementielles et des organisateurs de congrès à Bruxelles, en Belgique et en Europe.',
        ],
      },
      {
        title: 'Ce que nous proposons',
        bullets: [
          'Navettes entre l’aéroport, la gare, l’hôtel et le lieu de l’événement.',
          'Transport de groupes de 8 à 60 personnes, avec climatisation et WiFi.',
          'Horaires flexibles et adaptation en cas de changement de programme.',
          'Facturation entreprise et devis détaillé.',
          'Véhicules conformes à la LEZ de Bruxelles.',
        ],
      },
      {
        title: 'Comment organiser votre déplacement ?',
        paragraphs: [
          'Envoyez-nous le programme (dates, lieux, nombre de participants). Nous construisons un plan de transport, puis un devis gratuit sous 24 heures. Le jour J, votre chauffeur est présent à l’heure et à l’endroit convenus.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Peut-on organiser des navettes régulières pour un événement ?',
        a: 'Oui, nous mettons en place des rotations pendant toute la durée du séminaire ou du salon.',
      },
      {
        q: 'Proposez-vous une facturation pour les entreprises ?',
        a: 'Oui, une facture au nom de votre société est établie, avec le détail du service.',
      },
      {
        q: 'Peut-on voyager à l’étranger pour un voyage d’affaires ?',
        a: 'Oui, nous assurons des trajets vers les principales villes européennes avec chauffeur.',
      },
    ],
    links: [{ to: '/nos-services/navette-entreprise', label: 'Navette entreprise' }, { to: '/nos-services/transferts-aeroports', label: 'Transferts aéroports' }, ...COMMON_LINKS],
  },

  'mise-a-disposition': {
    sections: [
      {
        title: 'La mise à disposition : un autocar et un chauffeur à votre service',
        paragraphs: [
          'Avec la mise à disposition, vous gardez le véhicule et son chauffeur pendant la durée dont vous avez besoin : quelques heures, une demi-journée ou plusieurs jours. Vous décidez des étapes, des arrêts et des horaires. C’est la formule idéale quand le programme comporte plusieurs lieux ou qu’il peut évoluer en cours de route.',
        ],
      },
      {
        title: 'Pour quels besoins ?',
        bullets: [
          'Visites guidées de Bruxelles et de sa région avec plusieurs arrêts.',
          'Mariages, réceptions et événements avec plusieurs lieux.',
          'Congrès et salons avec navettes tout au long de la journée.',
          'Circuits touristiques sur mesure en Belgique et en Europe.',
        ],
      },
      {
        title: 'Comment est calculé le prix ?',
        paragraphs: [
          'La tarification dépend de la durée de mise à disposition, du type de véhicule et de la distance prévue. Elle est transparente : le devis détaille ce qui est inclus, sans frais cachés. Pour une demande précise, contactez-nous avec vos dates et votre programme.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Quelle est la durée minimale de mise à disposition ?',
        a: 'Nous proposons des formules à l’heure, à la demi-journée ou à la journée. Contactez-nous pour connaître les conditions selon votre besoin.',
      },
      {
        q: 'Le chauffeur reste-t-il avec le véhicule toute la durée ?',
        a: 'Oui, le chauffeur est à votre disposition pendant toute la durée convenue, dans le respect de la réglementation sur les temps de conduite.',
      },
      {
        q: 'Peut-on modifier l’itinéraire en cours de route ?',
        a: 'Oui, dans la limite de la durée réservée. C’est l’intérêt de la formule.',
      },
    ],
    links: [{ to: '/nos-services/autocar-mariage', label: 'Autocar mariage' }, { to: '/nos-services/excursions-tourisme', label: 'Excursions' }, ...COMMON_LINKS],
  },
};

export const DESTINATIONS_INDEX_EXTRA: ExtraContentData = {
  sections: [
    {
      title: 'Voyager en autocar depuis Bruxelles',
      paragraphs: [
        'Bruxelles est idéalement située au cœur de l’Europe : en quelques heures d’autocar, votre groupe rejoint Bruges, Gand, Amsterdam, Cologne ou Paris. Chaque destination peut être organisée en excursion à la journée ou en séjour de plusieurs jours, avec un chauffeur professionnel et un véhicule adapté à votre nombre de participants.',
      ],
    },
    {
      title: 'Comment choisir sa destination ?',
      bullets: [
        'Bruges et Gand : excursions d’une journée, villes médiévales à moins de 1h15 de route.',
        'Amsterdam : environ 2h30 de trajet, idéal pour une journée longue ou un week-end.',
        'Cologne : 2h30 à 3h de trajet, marchés de Noël et cathédrale.',
        'Paris : environ 3h30 de trajet, pour un week-end ou un séjour plus long.',
      ],
    },
    {
      title: 'Pourquoi réserver avec nous ?',
      paragraphs: [
        'Depuis 2007, nous transportons des groupes de 8 à 60 personnes en Belgique et en Europe. Nos véhicules sont modernes, climatisés et conformes à la LEZ de Bruxelles. Chaque devis est gratuit, sans engagement, et vous est envoyé sous 24 heures.',
      ],
    },
  ],
  links: COMMON_LINKS,
};

export const CONTACT_EXTRA: ExtraContentData = {
  sections: [
    {
      title: 'Comment se déroule votre demande de devis ?',
      bullets: [
        'Vous nous indiquez la date, le lieu de départ, la destination et le nombre de personnes.',
        'Nous étudions votre demande et choisissons le véhicule adapté (minibus, bus ou autocar).',
        'Vous recevez un devis gratuit et sans engagement sous 24 heures.',
        'Après confirmation, nous organisons le transport et vous communiquons les détails pratiques.',
      ],
    },
    {
      title: 'Nous contacter par téléphone ou par e-mail',
      paragraphs: [
        'Pour une demande urgente ou un renseignement rapide, appelez-nous au +32 2 580 03 25 aux heures d’ouverture (du lundi au vendredi, de 9h30 à 18h30). Vous pouvez aussi écrire à info@locationautocar.be en précisant votre programme : nous vous répondons rapidement.',
      ],
    },
  ],
};
