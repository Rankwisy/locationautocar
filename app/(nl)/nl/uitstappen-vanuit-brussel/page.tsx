import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { NL, nlMetadata } from '@/data/nlSeo';

const PATH = '/nl/uitstappen-vanuit-brussel';

export const metadata = nlMetadata({
  path: PATH,
  title: 'Uitstappen met de autocar vanuit Brussel | Brugge, Gent, Amsterdam',
  description:
    'Groepsuitstap met autocar en chauffeur vanuit Brussel naar Brugge, Gent, Antwerpen, Amsterdam of Parijs. Dagtrips op maat en gratis offerte binnen 24 uur.',
});

const faqs = [
  {
    q: 'Welke bestemmingen zijn populair voor een dagtrip?',
    a: 'Brugge, Gent, Antwerpen, Leuven en de Belgische kust zijn de klassiekers. Ook Amsterdam, Parijs, Rijsel en Keulen zijn goed haalbaar op één dag.',
  },
  {
    q: 'Wacht de chauffeur tijdens het bezoek?',
    a: 'Ja. De chauffeur zet u af, wacht in de buurt en haalt u op het afgesproken uur weer op.',
  },
  {
    q: 'Wat kost een dagtrip?',
    a: 'Ter indicatie: een dagtrip vanuit Brussel kost vanaf ongeveer 400 € met een minibus, 550 € met een bus en 700 € met een autocar, chauffeur en brandstof inbegrepen.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={NL}
      path={PATH}
      crumb="Uitstappen vanuit Brussel"
      h1="Uitstappen met de autocar vanuit Brussel"
      intro="Ontdek de mooiste steden van België en de buurlanden met uw groep. Wij stellen uw dagtrip samen en zorgen voor comfortabel vervoer met chauffeur, van vertrek tot terugkeer."
      sections={[
        {
          title: 'Populaire bestemmingen',
          cards: [
            { title: 'Brugge', text: 'Middeleeuws centrum, reitjes en het Belfort. Ongeveer 1u15 van Brussel.' },
            { title: 'Gent en Antwerpen', text: 'Twee Vlaamse kunststeden op één dag.', href: '/nl/uitstap-gent-antwerpen' },
            { title: 'Amsterdam en Parijs', text: 'Grotere uitstappen over de grens, ook met overnachting.' },
          ],
        },
        {
          title: 'Zo verloopt uw uitstap',
          bullets: [
            'U kiest bestemming, datum en aantal personen.',
            'Wij stellen een route en uurrooster voor.',
            'De chauffeur haalt uw groep op aan uw adres, hotel of station.',
            'Na het bezoek brengen we iedereen veilig terug.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/if-its-sunday-this-must-be-bruxelles.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Groepsuitstap met de autocar vanuit Brussel' }}
    />
  );
}
