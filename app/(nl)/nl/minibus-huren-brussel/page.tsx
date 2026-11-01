import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { NL, nlMetadata } from '@/data/nlSeo';

const PATH = '/nl/minibus-huren-brussel';

export const metadata = nlMetadata({
  path: PATH,
  title: 'Minibus huren met chauffeur in Brussel | 8 tot 16 plaatsen',
  description:
    'Minibus met chauffeur huren in Brussel voor kleine groepen: luchthaventransfers, bedrijfsbezoeken en uitstappen. Comfortabel, met airco. Gratis offerte binnen 24 uur.',
});

const faqs = [
  {
    q: 'Hoeveel personen kunnen er mee in een minibus?',
    a: 'Onze minibussen hebben 8 tot 16 plaatsen. Voor grotere groepen zetten we een bus of autocar in.',
  },
  {
    q: 'Wat kost een minibus met chauffeur?',
    a: 'Een dagtrip vanuit Brussel met een minibus kost vanaf ongeveer 400 €, chauffeur en brandstof inbegrepen. Voor transfers en ritten per uur maken we een offerte op maat.',
  },
  {
    q: 'Is er plaats voor bagage?',
    a: 'Ja, onze minibussen hebben bagageruimte, ideaal voor transfers van en naar de luchthaven.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={NL}
      path={PATH}
      crumb="Minibus huren"
      h1="Minibus huren met chauffeur in Brussel"
      intro="Voor kleine groepen is een minibus met chauffeur de meest flexibele oplossing. Wij halen u op aan de deur, aan het station of op de luchthaven en brengen u comfortabel naar uw bestemming."
      sections={[
        {
          title: 'Ideaal voor',
          bullets: [
            'Luchthaventransfers van en naar Zaventem en Charleroi.',
            'Bedrijfsbezoeken, roadshows en zakenreizen.',
            'Familiefeesten, huwelijken en vrijgezellenuitstappen.',
            'Dagtrips naar Brugge, Gent, Antwerpen of de kust.',
          ],
        },
        {
          title: 'Comfort aan boord',
          paragraphs: [
            'Onze minibussen zijn recent, voorzien van airco en comfortabele zetels, en voldoen aan de Euro 6-norm voor de Brusselse lage-emissiezone.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Minibus met chauffeur in Brussel' }}
    />
  );
}
