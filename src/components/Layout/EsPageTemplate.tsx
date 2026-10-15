import React from 'react';
import Link from 'next/link';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import { BASE, ES_CONTACT } from '@/data/esSeo';

export interface EsSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: { title: string; text: string; href?: string }[];
}

interface Props {
  path: string;
  crumb?: string;
  h1: string;
  intro: string;
  sections: EsSection[];
  faqs?: { q: string; a: string }[];
}

export default function EsPageTemplate({ path, crumb, h1, intro, sections, faqs = [] }: Props) {
  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE}/es` },
        ...(crumb ? [{ '@type': 'ListItem', position: 2, name: crumb, item: `${BASE}${path}` }] : []),
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: h1,
      inLanguage: 'es',
      areaServed: ['Bruselas', 'Bélgica', 'Europa'],
      provider: {
        '@type': 'LocalBusiness',
        name: 'Location Autocar Bruxelles',
        url: BASE,
        telephone: ES_CONTACT.phone,
        email: ES_CONTACT.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Priemstraat 43 bus',
          postalCode: '1000',
          addressLocality: 'Bruselas',
          addressCountry: 'BE',
        },
      },
    },
  ];
  if (faqs.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <div className="py-12">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="container mx-auto px-4">
        {crumb && (
          <nav className="mb-8 text-sm text-gray-500" aria-label="Ruta de navegación">
            <Link href="/es" className="hover:text-blue-600">Inicio</Link> /{' '}
            <span className="text-gray-900 font-semibold">{crumb}</span>
          </nav>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{h1}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-12">{intro}</p>

        {sections.map((s) => (
          <section key={s.title} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="text-gray-700 max-w-3xl mb-3">{p}</p>
            ))}
            {s.bullets && (
              <ul className="space-y-3 max-w-3xl">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.cards && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {s.cards.map((c) => {
                  const body = (
                    <>
                      <h3 className="font-semibold text-gray-900 mb-1">{c.title}</h3>
                      <p className="text-gray-600 text-sm">{c.text}</p>
                    </>
                  );
                  const cls = 'bg-white rounded-xl border border-gray-100 shadow-sm p-5 block';
                  return c.href ? (
                    <Link key={c.title} href={c.href} className={`${cls} hover:border-blue-300`}>{body}</Link>
                  ) : (
                    <div key={c.title} className={cls}>{body}</div>
                  );
                })}
              </div>
            )}
          </section>
        ))}

        {faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
            <div className="space-y-6 max-w-3xl">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-700">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-blue-50 rounded-2xl p-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Solicite su presupuesto gratuito</h2>
          <p className="text-gray-700 mb-5">
            Indíquenos fecha, número de personas y recorrido. Le respondemos en 24 horas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={ES_CONTACT.phoneHref} className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700">
              <Phone className="w-4 h-4" aria-hidden="true" /> {ES_CONTACT.phone}
            </a>
            <a href={`mailto:${ES_CONTACT.email}`} className="inline-flex items-center gap-2 bg-white text-blue-700 border border-blue-200 px-5 py-2.5 rounded-lg hover:bg-blue-100">
              <Mail className="w-4 h-4" aria-hidden="true" /> {ES_CONTACT.email}
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">{ES_CONTACT.hours} · {ES_CONTACT.address}</p>
        </section>
      </div>
    </div>
  );
}
