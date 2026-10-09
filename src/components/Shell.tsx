import type { ReactNode } from 'react';
import type { Locale } from '../i18n/ui';
import { Header } from './Header';
import { Footer } from './Footer';

export function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <>
      <Header locale={locale} />
      <main id="main" data-pagefind-body>
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
