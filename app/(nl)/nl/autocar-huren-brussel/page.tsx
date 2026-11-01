import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { NL, nlMetadata } from '@/data/nlSeo';

const PATH = '/nl/autocar-huren-brussel';

export const metadata = nlMetadata({
  path: PATH,
  title: 'Autocar huren in Brussel met chauffeur | Prijzen en offerte',
  description:
    'Autocar huren met chauffeur in Brussel: minibus, bus of autocar van 8 tot 60 plaatsen voor uitstappen, transfers en bedrijfsreizen. Indicatieve prijzen en gratis offerte.',
});

const faqs = [
  {
    q: 'Wat kost het om een autocar met chauffeur te huren in Brussel?',
    a: 'De prijs hangt af van het voertuig, de duur en de route. Ter indicatie: een dagtrip heen en terug vanuit Brussel kost vanaf ongeveer 400 € met een minibus (8–16 plaatsen), 550 € met een bus (20–35 plaatsen) en 700 € met een autocar (40–60 plaatsen), chauffeur en brandstof inbegrepen. U ontvangt vrijblijvend een exacte offerte.',
  },
  {
    q: 'Kan ik een autocar per uur huren?',
    a: 'Ja. Naast dagtrips bieden wij ook terbeschikkingstelling per uur aan, bijvoorbeeld voor een event, een stadsbezoek of verschillende ritten op één dag.',
  },
  {
    q: 'Mogen jullie in de Brusselse lage-emissiezone (LEZ) rijden?',
    a: 'Ja. Onze vloot voldoet aan de Euro 6-norm en mag zonder beperking in de Brusselse LEZ rijden.',
  },
  {
    q: 'Hoe lang op voorhand moet ik reserveren?',
    a: 'Hoe vroeger, hoe beter, zeker in het voorjaar en in december. Voor dringende aanvragen kunnen we vaak ook op korte termijn een voertuig voorzien.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={NL}
      path={PATH}
      crumb="Autocar huren in Brussel"
      h1="Autocar huren met chauffeur in Brussel"
      intro="Huur een autocar, bus of minibus met professionele chauffeur in Brussel. Wij vervoeren uw groep veilig en comfortabel, voor een korte rit in de stad of een reis door België en Europa."
      sections={[
        {
          title: 'Voertuigen voor elke groepsgrootte',
          cards: [
            { title: 'Minibus', text: '8 tot 16 plaatsen. Ideaal voor kleine groepen en transfers.', href: '/nl/minibus-huren-brussel' },
            { title: 'Bus', text: '20 tot 35 plaatsen. Voor middelgrote groepen en events.', href: '/nl/bus-met-chauffeur' },
            { title: 'Autocar', text: '40 tot 60 plaatsen. Voor grote groepen en lange afstanden.' },
          ],
        },
        {
          title: 'Altijd inbegrepen',
          bullets: [
            'Professionele chauffeur met ervaring in groepsvervoer.',
            'Brandstof en verzekering.',
            'Recente voertuigen met airco, comfortabele zetels en bagageruimte.',
            'Persoonlijke opvolging van uw reservatie.',
          ],
        },
        {
          title: 'Wanneer huurt u een autocar?',
          paragraphs: [
            'Onze klanten zijn scholen, verenigingen, bedrijven, reisbureaus en particulieren. Wij rijden voor schoolreizen, teambuildings, seminaries, huwelijken, sportclubs en toeristische groepen.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Autocar met chauffeur onderweg in België' }}
    />
  );
}
