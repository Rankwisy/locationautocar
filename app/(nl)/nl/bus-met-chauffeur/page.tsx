import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { NL, nlMetadata } from '@/data/nlSeo';

const PATH = '/nl/bus-met-chauffeur';

export const metadata = nlMetadata({
  path: PATH,
  title: 'Bus met chauffeur huren voor groepen | Events, huwelijken, bedrijven',
  description:
    'Bus met chauffeur huren in Brussel voor bedrijfsevents, seminaries, huwelijken, scholen en verenigingen. Voertuigen van 20 tot 60 plaatsen. Gratis offerte.',
});

const faqs = [
  {
    q: 'Kunnen jullie meerdere bussen voor één event voorzien?',
    a: 'Ja. Voor congressen, seminaries en grote events coördineren we meerdere voertuigen met vaste ophaalpunten en uurroosters.',
  },
  {
    q: 'Rijden jullie ook voor huwelijken?',
    a: 'Ja, wij vervoeren gasten tussen kerk of stadhuis, receptie en feestzaal, en voorzien desgewenst een late terugrit.',
  },
  {
    q: 'Wat kost een bus met chauffeur?',
    a: 'Een dagtrip met een bus van 20 tot 35 plaatsen kost vanaf ongeveer 550 €, met een autocar van 40 tot 60 plaatsen vanaf ongeveer 700 €. Voor events maken we een offerte op maat.',
  },
];

export default function Page() {
  return (
    <LangPageTemplate
      locale={NL}
      path={PATH}
      crumb="Bus met chauffeur"
      h1="Bus met chauffeur huren voor uw groep"
      intro="Een bus met chauffeur zorgt ervoor dat uw groep samen, op tijd en zonder parkeerzorgen aankomt. Wij rijden voor bedrijven, scholen, verenigingen en privéfeesten in Brussel en heel België."
      sections={[
        {
          title: 'Voor elke gelegenheid',
          cards: [
            { title: 'Bedrijfsevents', text: 'Teambuildings, seminaries, personeelsfeesten en shuttles voor congressen.' },
            { title: 'Huwelijken', text: 'Vervoer van uw gasten tussen ceremonie, receptie en feestzaal.' },
            { title: 'Scholen en verenigingen', text: 'Schoolreizen, sportclubs, jeugdbewegingen en seniorenuitstappen.' },
          ],
        },
        {
          title: 'Uw voordelen',
          bullets: [
            'Eén aanspreekpunt van offerte tot terugrit.',
            'Stipte, ervaren chauffeurs.',
            'Voertuigen van 20 tot 60 plaatsen, Euro 6.',
            'Heldere prijs zonder verborgen kosten.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Bus met chauffeur voor een groep in Brussel' }}
    />
  );
}
