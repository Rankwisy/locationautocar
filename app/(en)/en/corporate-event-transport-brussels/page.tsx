import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

const PATH = '/en/corporate-event-transport-brussels';

export const metadata = enMetadata({
  path: PATH,
  title: 'Corporate Event Transport Brussels | Conference and Delegate Shuttles',
  description:
    'Coach and minibus shuttles for conferences, EU and NATO events, seminars and incentives in Brussels. Coordinated pick-ups, punctual drivers. Free quote.',
});

const faqs = [
  {
    q: 'Can you run shuttles between hotels and a conference venue?',
    a: 'Yes. We set up shuttle loops between hotels, stations, the airport and venues such as Brussels Expo, The Square or the European Quarter, with a timetable agreed in advance.',
  },
  {
    q: 'Can you handle several vehicles and arrival times?',
    a: 'Yes. For delegations and large events we coordinate several minibuses and coaches, including staggered airport pick-ups.',
  },
  {
    q: 'Do you issue invoices for companies and institutions?',
    a: 'Yes, we work with companies, agencies and public bodies and provide a detailed quote and invoice for every booking.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Corporate event transport"
      h1="Corporate Event Transport in Brussels"
      intro="Brussels hosts thousands of conferences, summits and corporate events every year. We move your delegates, staff and guests between airports, hotels and venues, on time and with a single point of contact."
      sections={[
        {
          title: 'What we organise',
          cards: [
            { title: 'Conference shuttles', text: 'Hotel–venue loops for congresses, trade fairs and summits.' },
            { title: 'Delegations and VIPs', text: 'Airport pick-ups and dedicated vehicles for official visitors.' },
            { title: 'Incentives and team building', text: 'Day trips, dinners and activities for your teams and clients.' },
          ],
        },
        {
          title: 'Why companies choose us',
          bullets: [
            'One coordinator for all vehicles and timetables.',
            'Drivers used to the European Quarter, Brussels Expo and city-centre access.',
            'Euro 6 fleet, accepted in the Brussels Low Emission Zone.',
            'Detailed quote within 24 hours.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-aeroport-bruxelles-scaled.jpeg?updatedAt=1750900457571&tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Coach shuttle for a corporate event in Brussels' }}
    />
  );
}
