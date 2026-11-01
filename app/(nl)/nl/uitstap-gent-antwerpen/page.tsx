import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { NL, nlMetadata } from '@/data/nlSeo';

const PATH = '/nl/uitstap-gent-antwerpen';

export const metadata = nlMetadata({
  path: PATH,
  title: 'Groepsuitstap naar Gent en Antwerpen met autocar en chauffeur',
  description:
    'Dagtrip naar Gent en Antwerpen vanuit Brussel met autocar of minibus en chauffeur. Ideaal voor scholen, verenigingen en bedrijven. Gratis offerte.',
});

const faqs = [
  {
    q: 'Kunnen we Gent en Antwerpen op één dag bezoeken?',
    a: 'Ja. Gent ligt op ongeveer 50 minuten van Brussel en Antwerpen op ongeveer 45 minuten. Met een vroege start bezoekt u beide steden op één dag.',
  },
  {
    q: 'Waar parkeert de autocar in Gent en Antwerpen?',
    a: 'Beide steden hebben een lage-emissiezone en een autoluw centrum. Onze chauffeurs kennen de officiële op- en afstapplaatsen voor autocars dicht bij het centrum.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={NL}
      path={PATH}
      crumb="Uitstap naar Gent en Antwerpen"
      h1="Groepsuitstap naar Gent en Antwerpen"
      intro="Gent en Antwerpen zijn twee van de mooiste steden van Vlaanderen. Met een autocar met chauffeur vanuit Brussel geniet uw groep van beide steden zonder zorgen over parkeren of openbaar vervoer."
      sections={[
        {
          title: 'Gent',
          paragraphs: [
            'Het Gravensteen, de Graslei en Korenlei, de Sint-Baafskathedraal met het Lam Gods: Gent combineert geschiedenis met een levendige studentensfeer.',
          ],
        },
        {
          title: 'Antwerpen',
          paragraphs: [
            'De Grote Markt, de Onze-Lieve-Vrouwekathedraal, het MAS en het Centraal Station: Antwerpen is ideaal voor cultuur, shopping en de diamantwijk.',
          ],
        },
        {
          title: 'Voorbeeldprogramma',
          bullets: [
            '08u30 – vertrek in Brussel.',
            '09u30 – geleid bezoek aan Gent en middagpauze.',
            '14u30 – rit naar Antwerpen en vrije namiddag.',
            '18u30 – terugkeer naar Brussel.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Autocar onderweg naar Gent en Antwerpen' }}
    />
  );
}
