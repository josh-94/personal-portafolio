import { t, type Locale } from '../i18n/ui';
import { routes } from '../lib/routes';

export function Footer({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const r = routes[locale];
  return (
    <footer className="site-footer" data-pagefind-ignore>
      <div className="wrap footer-grid">
        <p>{copy.footerNote}</p>
        <nav aria-label={locale === 'es' ? 'Pie' : 'Footer'}>
          <a href={r.training}>{copy.training.title}</a>
          <a href={r.contact}>{copy.nav.contact}</a>
          <a href={r.rss}>{copy.rss}</a>
        </nav>
      </div>
    </footer>
  );
}
