import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { EN, enMetadata } from '@/data/enSeo';

export const metadata = enMetadata({
  path: '/en',
  title: 'Coach Hire with Driver in Brussels | Group Transport since 2007',
  description:
    'Coach, bus and minibus hire with driver in Brussels: corporate events, airport transfers, day trips to Bruges and Ghent, weddings. Free quote within 24 hours.',
});

export default function EnHome() {
  return (
    <LangPageTemplate
      locale={EN}
      path="/en"
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Coach with driver for groups in Brussels' }}
      h1="Coach Hire with Driver in Brussels"
      intro="Travelling to or around Brussels with a group? Since 2007 we have provided coaches, buses and minibuses with professional drivers for corporate events, airport transfers, sightseeing and day trips across Belgium and Europe."
      sections={[
        {
          title: 'Our group transport services',
          cards: [
            { title: 'Coach hire in Brussels', text: '40 to 60-seat coaches with driver, by the hour or by the day.', href: '/en/coach-hire-brussels' },
            { title: 'Minibus hire with driver', text: '8 to 16-seat minibuses for smaller groups and VIP guests.', href: '/en/minibus-hire-brussels' },
            { title: 'Corporate event transport', text: 'Shuttles for conferences, EU and NATO events, seminars and incentives.', href: '/en/corporate-event-transport-brussels' },
            { title: 'Airport transfers', text: 'Brussels Airport (Zaventem) and Charleroi, with flight tracking.', href: '/en/airport-transfers-brussels' },
            { title: 'Day trips from Brussels', text: 'Bruges, Ghent, Antwerp, Amsterdam or Paris in a single day.', href: '/en/day-trips-from-brussels' },
            { title: 'Wedding coach hire', text: 'Guest transport between ceremony, reception and venue.', href: '/en/wedding-coach-hire' },
          ],
        },
        {
          title: 'Why choose us',
          bullets: [
            'More than 15 years of experience in group transport in Belgium and Europe.',
            'Vehicles from 8 to 60 seats, matched to the size of your group.',
            'Experienced drivers who know Brussels and its Low Emission Zone (LEZ).',
            'Free, no-obligation quote within 24 hours.',
          ],
        },
      ]}
    />
  );
}
