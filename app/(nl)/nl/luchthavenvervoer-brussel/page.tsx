import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { NL, nlMetadata } from '@/data/nlSeo';

const PATH = '/nl/luchthavenvervoer-brussel';

export const metadata = nlMetadata({
  path: PATH,
  title: 'Luchthavenvervoer Brussel voor groepen | Zaventem en Charleroi',
  description:
    'Groepsvervoer met autocar of minibus en chauffeur van en naar Brussels Airport (Zaventem) en Charleroi. Opvolging van uw vlucht en gratis offerte.',
});

const faqs = [
  {
    q: 'Wat kost een transfer van Zaventem naar het centrum van Brussel?',
    a: 'Ter indicatie: een transfer van Brussels Airport naar het centrum van Brussel met een autocar van 30 plaatsen kost vanaf ongeveer 250 €. De prijs hangt af van het aantal personen en de bestemming.',
  },
  {
    q: 'Wat als mijn vlucht vertraging heeft?',
    a: 'Wij volgen uw vlucht op en passen het ophaaluur aan het werkelijke landingsuur aan.',
  },
  {
    q: 'Rijden jullie ook naar Charleroi?',
    a: 'Ja, wij verzorgen transfers van en naar Brussels Airport (Zaventem) en Brussels South Charleroi Airport, naar Brussel en elke bestemming in België.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={NL}
      path={PATH}
      crumb="Luchthavenvervoer"
      h1="Luchthavenvervoer in Brussel voor groepen"
      intro="Kom zorgeloos aan in Brussel. Wij halen uw groep op in Zaventem of Charleroi en brengen u rechtstreeks naar uw hotel, kantoor of vertrekpunt."
      sections={[
        {
          title: 'Een service op maat van groepen',
          bullets: [
            'De chauffeur wacht op uw groep op het afgesproken punt.',
            'Opvolging van uw vlucht bij vertraging.',
            'Voertuigen van 8 tot 60 plaatsen met ruimte voor bagage.',
            'Enkele rit, terugrit of heen en terug.',
          ],
        },
        {
          title: 'Luchthavens en stations',
          paragraphs: [
            'Wij rijden van en naar Brussels Airport (Zaventem), Charleroi en het station Brussel-Zuid, naar Brussel, Brugge, Gent, Antwerpen en heel België.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-aeroport-bruxelles-scaled.jpeg?updatedAt=1750900457571&tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Autocar aan de luchthaven van Brussel' }}
    />
  );
}
