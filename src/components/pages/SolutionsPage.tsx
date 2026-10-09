import { t, type Locale } from '../../i18n/ui';
import { routes } from '../../lib/routes';

export function SolutionsPage({ locale }: { locale: Locale }) {
  const copy = t(locale);
  return (
    <div className="wrap page-head">
      <h1>{copy.solutions.title}</h1>
      <p>{copy.solutions.lead}</p>
      <div className="grid-2">
        {copy.solutions.items.map((item) => (
          <article className="panel" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <p className="actions">
        <a className="btn btn-primary" href={routes[locale].contact}>
          {copy.home.ctaContact}
        </a>
        <a className="btn btn-ghost" href={routes[locale].cases}>
          {copy.home.ctaCases}
        </a>
      </p>
    </div>
  );
}
