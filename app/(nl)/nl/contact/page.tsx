import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import NlContactForm from '@/components/Forms/NlContactForm';
import { NL, nlMetadata } from '@/data/nlSeo';

const PATH = '/nl/contact';

export const metadata = nlMetadata({
  path: PATH,
  title: 'Contact en gratis offerte | Autocar huren in Brussel',
  description:
    'Vraag uw gratis offerte aan voor een autocar, bus of minibus met chauffeur in Brussel. Antwoord binnen 24 uur. Tel. +32 2 580 03 25.',
});

export default function Page() {
  return (
    <LangPageTemplate
      locale={NL}
      path={PATH}
      crumb="Contact"
      h1="Contacteer ons voor een gratis offerte"
      intro="Vul het formulier in met de datum, het aantal personen en uw route. Wij bezorgen u binnen 24 uur een vrijblijvende offerte."
      sections={[]}
    >
      <section className="mb-12 max-w-3xl">
        <NlContactForm />
      </section>
    </LangPageTemplate>
  );
}
