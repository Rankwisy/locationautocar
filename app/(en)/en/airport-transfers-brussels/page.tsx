import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

const PATH = '/en/airport-transfers-brussels';

export const metadata = enMetadata({
  path: PATH,
  title: 'Brussels Airport Transfers for Groups | Zaventem and Charleroi',
  description:
    'Group transfers by coach or minibus with driver to and from Brussels Airport (Zaventem) and Charleroi. Flight tracking and free quote within 24 hours.',
});

const faqs = [
  {
    q: 'How much is a transfer from Brussels Airport to the city centre?',
    a: 'As a guide, a transfer from Brussels Airport (Zaventem) to central Brussels with a 30-seat coach starts from around €250. The price depends on group size and destination.',
  },
  {
    q: 'What if my flight is delayed?',
    a: 'We track your flight and adjust the pick-up time to the actual landing time.',
  },
  {
    q: 'Do you also serve Charleroi airport?',
    a: 'Yes, we provide transfers to and from Brussels Airport (Zaventem) and Brussels South Charleroi Airport, to Brussels and any destination in Belgium.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Airport transfers"
      h1="Brussels Airport Transfers for Groups"
      intro="Arrive in Brussels stress-free. We meet your group at Brussels Airport (Zaventem) or Charleroi and take you directly to your hotel, office or event venue."
      sections={[
        {
          title: 'A service designed for groups',
          bullets: [
            'Your driver waits for the group at the agreed meeting point.',
            'Flight tracking in case of delays.',
            'Vehicles from 8 to 60 seats with luggage space.',
            'One-way, return or round-trip transfers.',
          ],
        },
        {
          title: 'Airports and stations',
          paragraphs: [
            'We cover Brussels Airport (Zaventem), Charleroi and Brussels-Midi station (Eurostar and international trains), with transfers to Brussels, Bruges, Ghent, Antwerp and anywhere in Belgium.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-aeroport-bruxelles-scaled.jpeg?updatedAt=1750900457571&tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Coach at Brussels Airport' }}
    />
  );
}
