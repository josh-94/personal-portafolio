import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import type { Locale } from '../i18n/ui';
import { Shell } from './Shell';

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var t=s||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.dataset.theme=t;}catch(e){}})();`;

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://codewithjosh.codes'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/brand/apple-touch.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#0B1F3A',
  },
};

export function DocumentLayout({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale === 'es' ? 'es-PE' : 'en'} data-pagefind-filter={locale === 'es' ? 'lang:es' : 'lang:en'} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Shell locale={locale}>{children}</Shell>
      </body>
    </html>
  );
}
