import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

const PATH = '/en/coach-hire-brussels';

export const metadata = enMetadata({
  path: PATH,
  title: 'Coach Hire Brussels with Driver | Prices and Free Quote',
  description:
    'Coach hire with driver in Brussels: minibus, bus or coach from 8 to 60 seats for trips, transfers and business travel. Indicative prices and free quote.',
});

const faqs = [
  {
    q: 'How much does it cost to hire a coach with driver in Brussels?',
    a: 'The price depends on the vehicle, duration and route. As a guide, a return day trip from Brussels starts from around €400 with a minibus (8–16 seats), €550 with a bus (20–35 seats) and €700 with a coach (40–60 seats), driver and fuel included. We send you an exact quote with no obligation.',
  },
  {
    q: 'Can I hire a coach by the hour?',
    a: 'Yes. As well as day trips, we offer coaches at your disposal by the hour, for example for an event, a city tour or several journeys on the same day.',
  },
  {
    q: 'Are your coaches allowed in the Brussels Low Emission Zone (LEZ)?',
    a: 'Yes. Our fleet meets the Euro 6 standard and can drive in the Brussels LEZ without restriction.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'The earlier the better, especially in spring and December. For urgent requests we can often provide a vehicle at short notice.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Coach hire in Brussels"
      h1="Coach Hire with Driver in Brussels"
      intro="Hire a coach, bus or minibus with a professional driver in Brussels. We transport your group safely and comfortably, whether for a short city journey or a trip across Belgium and Europe."
      sections={[
        {
          title: 'A vehicle for every group size',
          cards: [
            { title: 'Minibus', text: '8 to 16 seats. Ideal for small groups and transfers.', href: '/en/minibus-hire-brussels' },
            { title: 'Bus', text: '20 to 35 seats. For medium-sized groups and events.', href: '/en/bus-hire-with-driver' },
            { title: 'Coach', text: '40 to 60 seats. For large groups and long distances.' },
          ],
        },
        {
          title: 'Always included',
          bullets: [
            'Professional driver experienced in group transport.',
            'Fuel and insurance.',
            'Recent air-conditioned vehicles with comfortable seats and luggage space.',
            'Personal follow-up of your booking.',
          ],
        },
        {
          title: 'Who hires our coaches?',
          paragraphs: [
            'Our clients include international companies, schools, associations, travel agencies and private groups. We drive for conferences, team buildings, school trips, weddings, sports clubs and tourist groups.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Coach with driver on the road in Belgium' }}
    />
  );
}
