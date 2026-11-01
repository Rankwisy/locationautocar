import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import { NL, nlMetadata } from '@/data/nlSeo';

export const metadata = nlMetadata({
  path: '/nl',
  title: 'Autocar huren met chauffeur in Brussel | Groepsvervoer sinds 2007',
  description:
    'Autocar, bus of minibus met chauffeur huren in Brussel voor groepen: uitstappen naar Brugge, Gent en Antwerpen, luchthavenvervoer en bedrijfsevents. Gratis offerte binnen 24 uur.',
});

export default function NlHome() {
  return (
    <LangPageTemplate
      locale={NL}
      path="/nl"
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Autocar met chauffeur voor groepen in Brussel' }}
      h1="Autocar met chauffeur huren in Brussel"
      intro="Gaat u op stap met een groep, een vereniging, een school of uw bedrijf? Sinds 2007 verhuren wij autocars, bussen en minibussen met professionele chauffeur voor uitstappen, luchthavenvervoer en zakenreizen in België en Europa."
      sections={[
        {
          title: 'Onze diensten voor groepen',
          cards: [
            {
              title: 'Autocar huren in Brussel',
              text: 'Autocar van 40 tot 60 plaatsen met chauffeur, per uur of per dag.',
              href: '/nl/autocar-huren-brussel',
            },
            {
              title: 'Minibus huren met chauffeur',
              text: 'Comfortabele minibus van 8 tot 16 plaatsen voor kleine groepen.',
              href: '/nl/minibus-huren-brussel',
            },
            {
              title: 'Bus met chauffeur',
              text: 'Voor bedrijfsevents, huwelijken, seminaries en verenigingen.',
              href: '/nl/bus-met-chauffeur',
            },
            {
              title: 'Uitstappen vanuit Brussel',
              text: 'Brugge, Gent, Antwerpen, Amsterdam of Parijs in één dag.',
              href: '/nl/uitstappen-vanuit-brussel',
            },
            {
              title: 'Uitstap naar Gent en Antwerpen',
              text: 'Dagtrip met uw groep naar de Vlaamse kunststeden.',
              href: '/nl/uitstap-gent-antwerpen',
            },
            {
              title: 'Luchthavenvervoer',
              text: 'Ophaling in Zaventem of Charleroi met opvolging van uw vlucht.',
              href: '/nl/luchthavenvervoer-brussel',
            },
          ],
        },
        {
          title: 'Waarom voor ons kiezen',
          bullets: [
            'Meer dan 15 jaar ervaring met groepsvervoer in België en Europa.',
            'Voertuigen van 8 tot 60 plaatsen, afgestemd op de grootte van uw groep.',
            'Ervaren chauffeurs die Brussel en de lage-emissiezone (LEZ) kennen.',
            'Gratis en vrijblijvende offerte binnen 24 uur.',
          ],
        },
      ]}
    />
  );
}
