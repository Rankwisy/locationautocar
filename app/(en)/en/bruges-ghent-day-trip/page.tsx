import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

const PATH = '/en/bruges-ghent-day-trip';

export const metadata = enMetadata({
  path: PATH,
  title: 'Bruges and Ghent Day Trip from Brussels by Coach | Groups',
  description:
    'Private group day trip from Brussels to Bruges and Ghent by coach or minibus with driver. Ideal for companies, schools and tourist groups. Free quote.',
});

const faqs = [
  {
    q: 'Can we visit Bruges and Ghent in one day?',
    a: 'Yes. Ghent is about 50 minutes from Brussels and Bruges about 1 hour 15 minutes. With an early start your group can enjoy both cities in one day.',
  },
  {
    q: 'Where does the coach stop in Bruges and Ghent?',
    a: 'Both cities have a Low Emission Zone and a largely car-free centre. Our drivers know the official coach drop-off points close to the historic centres.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Bruges and Ghent day trip"
      h1="Bruges and Ghent Day Trip from Brussels"
      intro="Bruges and Ghent are the two most visited cities of Flanders. With a private coach and driver from Brussels, your group enjoys both without worrying about trains, connections or parking."
      sections={[
        {
          title: 'Ghent',
          paragraphs: [
            'The Gravensteen castle, the Graslei and Korenlei quays and St Bavo’s Cathedral with the Ghent Altarpiece: Ghent combines history with a lively student atmosphere.',
          ],
        },
        {
          title: 'Bruges',
          paragraphs: [
            'Canals, the Belfry, the Markt and the Begijnhof: the medieval centre of Bruges is a UNESCO World Heritage Site and a highlight of any visit to Belgium.',
          ],
        },
        {
          title: 'Sample itinerary',
          bullets: [
            '8:30am – departure from Brussels.',
            '9:30am – visit of Ghent and lunch break.',
            '2:00pm – drive to Bruges and free afternoon.',
            '6:30pm – return to Brussels.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Coach on the way to Bruges and Ghent' }}
    />
  );
}
