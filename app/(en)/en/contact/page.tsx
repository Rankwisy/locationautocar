import LangPageTemplate from '@/components/Layout/LangPageTemplate';
import LangContactForm from '@/components/Forms/LangContactForm';
import { EN, EN_FORM, enMetadata } from '@/data/enSeo';

const PATH = '/en/contact';

export const metadata = enMetadata({
  path: PATH,
  title: 'Contact and Free Quote | Coach Hire Brussels',
  description:
    'Request your free quote for a coach, bus or minibus with driver in Brussels. Reply within 24 hours. Tel. +32 2 580 03 25.',
});

export default function Page() {
  return (
    <LangPageTemplate
      locale={EN}
      path={PATH}
      crumb="Contact"
      h1="Contact Us for a Free Quote"
      intro="Fill in the form with the date, number of passengers and route. We will send you a no-obligation quote within 24 hours."
      sections={[]}
    >
      <section className="mb-12 max-w-3xl">
        <LangContactForm t={EN_FORM} />
      </section>
    </LangPageTemplate>
  );
}
