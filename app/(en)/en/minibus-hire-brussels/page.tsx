import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

const PATH = '/en/minibus-hire-brussels';

export const metadata = enMetadata({
  path: PATH,
  title: 'Minibus Hire with Driver in Brussels | 8 to 16 Seats',
  description:
    'Minibus hire with driver in Brussels for small groups: airport transfers, business visits, VIP guests and day trips. Air-conditioned and comfortable. Free quote.',
});

const faqs = [
  {
    q: 'How many people fit in a minibus?',
    a: 'Our minibuses have 8 to 16 seats. For larger groups we provide a bus or coach.',
  },
  {
    q: 'How much does a minibus with driver cost?',
    a: 'A day trip from Brussels by minibus starts from around €400, driver and fuel included. For transfers and hourly hire we prepare a tailored quote.',
  },
  {
    q: 'Is there room for luggage?',
    a: 'Yes, our minibuses have luggage space, ideal for transfers to and from the airport.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Minibus hire"
      h1="Minibus Hire with Driver in Brussels"
      intro="For small groups, a minibus with driver is the most flexible option. We pick you up at your door, hotel, station or the airport and take you comfortably to your destination."
      sections={[
        {
          title: 'Ideal for',
          bullets: [
            'Airport transfers to and from Brussels Airport (Zaventem) and Charleroi.',
            'Business visits, roadshows and delegations.',
            'VIP guests and small executive groups.',
            'Day trips to Bruges, Ghent, Antwerp or the Belgian coast.',
          ],
        },
        {
          title: 'Comfort on board',
          paragraphs: [
            'Our minibuses are recent, air-conditioned, fitted with comfortable seats and meet the Euro 6 standard for the Brussels Low Emission Zone.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/merrcedes-van1.png?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Minibus with driver in Brussels' }}
    />
  );
}
