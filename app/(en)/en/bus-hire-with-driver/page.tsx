import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

const PATH = '/en/bus-hire-with-driver';

export const metadata = enMetadata({
  path: PATH,
  title: 'Bus Hire with Driver for Groups | Brussels and Belgium',
  description:
    'Bus hire with driver in Brussels for groups, schools, associations and companies. Vehicles from 20 to 60 seats. Free quote within 24 hours.',
});

const faqs = [
  {
    q: 'Can you provide several buses for one event?',
    a: 'Yes. For large groups we coordinate several vehicles with fixed pick-up points and timetables.',
  },
  {
    q: 'How much does a bus with driver cost?',
    a: 'A day trip with a 20 to 35-seat bus starts from around €550, and with a 40 to 60-seat coach from around €700. For events we prepare a tailored quote.',
  },
  {
    q: 'Do you drive outside Belgium?',
    a: 'Yes, we regularly drive groups to the Netherlands, France, Germany and Luxembourg.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Bus hire with driver"
      h1="Bus Hire with Driver for Your Group"
      intro="A bus with driver gets your group there together, on time and without parking worries. We drive for companies, schools, associations and private groups in Brussels and across Belgium."
      sections={[
        {
          title: 'For every occasion',
          cards: [
            { title: 'Corporate events', text: 'Conferences, seminars, team buildings and staff parties.', href: '/en/corporate-event-transport-brussels' },
            { title: 'Weddings', text: 'Guest transport between ceremony, reception and venue.', href: '/en/wedding-coach-hire' },
            { title: 'Schools and clubs', text: 'School trips, sports clubs, youth groups and senior outings.' },
          ],
        },
        {
          title: 'Your benefits',
          bullets: [
            'A single contact from quote to return journey.',
            'Punctual, experienced drivers.',
            'Vehicles from 20 to 60 seats, Euro 6.',
            'Clear pricing with no hidden costs.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Bus with driver for a group in Brussels' }}
    />
  );
}
