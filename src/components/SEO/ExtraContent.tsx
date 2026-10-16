import React from 'react';
import Link from 'next/link';

export interface ExtraSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ExtraFaq {
  q: string;
  a: string;
}

export interface ExtraContentData {
  sections: ExtraSection[];
  faqs?: ExtraFaq[];
  links?: { to: string; label: string }[];
}

/** Server-rendered text block (headings, paragraphs, bullets, FAQ) appended under a page's main content. */
export default function ExtraContent({ sections, faqs = [], links = [] }: ExtraContentData) {
  const faqSchema = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <div className="mt-16 max-w-4xl">
      {sections.map((s) => (
        <section key={s.title} className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h2>
          {s.paragraphs?.map((p) => (
            <p key={p} className="text-gray-700 mb-3 leading-relaxed">
              {p}
            </p>
          ))}
          {s.bullets && (
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {faqs.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {links.length > 0 && (
        <p className="text-gray-700">
          À consulter aussi :{' '}
          {links.map((l, i) => (
            <React.Fragment key={l.to}>
              {i > 0 && ' · '}
              <Link href={l.to} className="text-blue-600 hover:text-blue-700 underline">
                {l.label}
              </Link>
            </React.Fragment>
          ))}
          .
        </p>
      )}

      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </div>
  );
}
