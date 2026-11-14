import type { Metadata } from 'next';
import '../globals.css';
import { LangHeader, LangFooter } from '@/components/Layout/LangChrome';
import { BASE } from '@/data/i18n';
import { EN } from '@/data/enSeo';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  robots: { index: true, follow: true },
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
        >
          {EN.skipLink}
        </a>
        <LangHeader locale={EN} />
        <main id="main-content" className="flex-1 min-h-screen" role="main">
          {children}
        </main>
        <LangFooter locale={EN} />
      </body>
    </html>
  );
}
