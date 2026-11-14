import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

const PATH = '/en/day-trips-from-brussels';

export const metadata = enMetadata({
  path: PATH,
  title: 'Day Trips from Brussels by Coach | Bruges, Ghent, Amsterdam',
  description:
    'Group day trips by coach with driver from Brussels to Bruges, Ghent, Antwerp, Amsterdam or Paris. Tailor-made itineraries and free quote within 24 hours.',
});

const faqs = [
  {
    q: 'Which destinations are popular for a day trip?',
    a: 'Bruges, Ghent, Antwerp, Leuven and the Belgian coast are the classics. Amsterdam, Paris, Lille and Cologne are also easy to reach in a day.',
  },
  {
    q: 'Does the driver wait during the visit?',
    a: 'Yes. The driver drops you off, waits nearby and picks you up again at the agreed time.',
  },
  {
    q: 'How much does a day trip cost?',
    a: 'As a guide, a day trip from Brussels starts from around €400 by minibus, €550 by bus and €700 by coach, driver and fuel included.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Day trips from Brussels"
      h1="Day Trips from Brussels by Coach"
      intro="Discover the most beautiful cities of Belgium and its neighbours with your group. We plan your day trip and provide comfortable transport with driver from departure to return."
      sections={[
        {
          title: 'Popular destinations',
          cards: [
            { title: 'Bruges and Ghent', text: 'Two medieval jewels of Flanders in one day.', href: '/en/bruges-ghent-day-trip' },
            { title: 'Antwerp', text: 'Cathedral, Grand Place, MAS museum and the diamond district.' },
            { title: 'Amsterdam and Paris', text: 'Cross-border trips, also with overnight stays.' },
          ],
        },
        {
          title: 'How your trip works',
          bullets: [
            'You choose the destination, date and group size.',
            'We suggest a route and timetable.',
            'The driver picks up your group at your address, hotel or station.',
            'After the visit we bring everyone safely back.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Group day trip by coach from Brussels' }}
    />
  );
}
