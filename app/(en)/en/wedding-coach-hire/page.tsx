import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

const PATH = '/en/wedding-coach-hire';

export const metadata = enMetadata({
  path: PATH,
  title: 'Wedding Coach Hire in Brussels and Belgium | Guest Transport',
  description:
    'Wedding coach and minibus hire with driver in Brussels and Belgium: guest transport between ceremony, reception and venue, late return trips. Free quote.',
});

const faqs = [
  {
    q: 'Can you take guests home late at night?',
    a: 'Yes. We organise late return journeys after the party, with one or several drop-off points.',
  },
  {
    q: 'Can you collect guests from several hotels?',
    a: 'Yes, we plan a route with pick-ups at the different hotels or meeting points before the ceremony.',
  },
  {
    q: 'How early should we book for a wedding?',
    a: 'Wedding season (May to September) is busy, so we recommend booking several months in advance.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Wedding coach hire"
      h1="Wedding Coach Hire in Brussels"
      intro="Let your guests enjoy the day without worrying about driving or parking. We transport them between hotels, ceremony, reception and party venue, and bring everyone home safely."
      sections={[
        {
          title: 'Our wedding service',
          bullets: [
            'Pick-ups from hotels, stations or a central meeting point.',
            'Transfers between town hall, church, reception and venue.',
            'Late return trips after the party.',
            'Minibuses and coaches from 8 to 60 seats.',
          ],
        },
        {
          title: 'Destination weddings in Belgium',
          paragraphs: [
            'Getting married in a castle in Wallonia, a farmhouse in Flanders or a venue in Brussels? We take care of guest transport anywhere in Belgium, including airport transfers for guests travelling from abroad.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Coach for wedding guests in Belgium' }}
    />
  );
}
