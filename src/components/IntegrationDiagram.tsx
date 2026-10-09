import { t, type Locale } from '../i18n/ui';
import { routes } from '../lib/routes';
import { Mark } from './Mark';

const products = [
  { id: 'apps', name: 'Power Apps' },
  { id: 'automate', name: 'Power Automate' },
  { id: 'dataverse', name: 'Dataverse' },
  { id: 'sharepoint', name: 'SharePoint' },
] as const;

type ProductId = (typeof products)[number]['id'];

function ProductIcon({ id }: { id: ProductId }) {
  if (id === 'apps') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#5B21B6" />
        <rect x="6.5" y="7" width="12" height="15" rx="2.2" fill="#ffffff" />
        <rect x="13.5" y="11" width="12" height="14" rx="2.2" fill="#DDD6FE" />
        <rect x="13.5" y="11" width="12" height="3.4" rx="1.4" fill="#ffffff" />
      </svg>
    );
  }
  if (id === 'automate') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#1D4ED8" />
        <path d="M7 16.5h9.2" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M14 12.2 20.2 16.5 14 20.8" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.2 12.4c2.3 1 3.5 2.4 3.5 4.1s-1.2 3.1-3.5 4.1" fill="none" stroke="#BFDBFE" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'dataverse') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#155E75" />
        <path fill="#ffffff" d="M9 11.2c0-1.9 3.1-3.3 7-3.3s7 1.4 7 3.3v9.6c0 1.9-3.1 3.3-7 3.3s-7-1.4-7-3.3v-9.6z" />
        <path fill="none" stroke="#155E75" strokeWidth="1.35" d="M9 11.2c0 1.9 3.1 3.3 7 3.3s7-1.4 7-3.3M9 16c0 1.9 3.1 3.3 7 3.3s7-1.4 7-3.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0F766E" />
      <circle cx="11" cy="16" r="2.7" fill="#ffffff" />
      <circle cx="21.2" cy="10.4" r="2.7" fill="#ffffff" />
      <circle cx="21.2" cy="21.6" r="2.7" fill="#99F6E4" />
      <path d="M13.5 14.7 18.7 11.6M13.5 17.3 18.7 20.4" fill="none" stroke="#ffffff" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IntegrationDiagram({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const sources =
    locale === 'es'
      ? ['Sistemas legacy', 'Aplicaciones SaaS', 'APIs propias']
      : ['Legacy systems', 'SaaS applications', 'Custom APIs'];
  return (
    <figure className="diagram">
      <div className="diagram-grid">
        <div className="source-col">
          {sources.map((label) => (
            <a className="node" key={label} href={routes[locale].integrations}>
              {label}
            </a>
          ))}
        </div>
        <svg className="flow-svg" viewBox="0 0 72 180" aria-hidden="true">
          <path className="flow-line" d="M4 24 C 40 24, 32 90, 68 90" />
          <path className="flow-line accent" d="M4 90 H 68" />
          <path className="flow-line" d="M4 156 C 40 156, 32 90, 68 90" />
        </svg>
        <a className="hub" href={routes[locale].home} aria-label={copy.brand}>
          <Mark onNavy title="Josh" />
        </a>
        <svg className="flow-svg" viewBox="0 0 72 180" aria-hidden="true">
          <path className="flow-line accent" d="M4 90 H 68" />
        </svg>
        <div className="product-card">
          {products.map((product) => (
            <a className="product-link" key={product.id} href={routes[locale].solutions} aria-label={product.name}>
              <ProductIcon id={product.id} />
            </a>
          ))}
        </div>
      </div>
      <figcaption className="sr-only">{copy.home.diagramLead}</figcaption>
    </figure>
  );
}
