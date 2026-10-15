import type { Metadata } from 'next';
import '../globals.css';
import { EsHeader, EsFooter } from '@/components/Layout/EsChrome';
import { BASE } from '@/data/esSeo';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  robots: { index: true, follow: true },
};

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
        >
          Ir al contenido principal
        </a>
        <EsHeader />
        <main id="main-content" className="flex-1 min-h-screen" role="main">
          {children}
        </main>
        <EsFooter />
      </body>
    </html>
  );
}
