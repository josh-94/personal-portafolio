import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { t, type Locale } from '../../i18n/ui';
import { routes } from '../../lib/routes';
import { collectionHref, entryBySlug, formatDate, type Kind } from '../../lib/content';
import { Callout } from '../Callout';

export function ArticlePage({ locale, kind, slug }: { locale: Locale; kind: Kind; slug: string }) {
  const entry = entryBySlug(kind, locale, slug);
  if (!entry) notFound();
  const copy = t(locale);
  const data = entry.data;
  const techBase = routes[locale].tech;
  return (
    <article className="wrap page-head">
      <nav className="crumbs" aria-label={locale === 'es' ? 'Ruta' : 'Breadcrumb'}>
        <a href={routes[locale].home}>{locale === 'es' ? 'Inicio' : 'Home'}</a>
        <span aria-hidden="true">/</span>
        <a href={collectionHref(locale, kind)}>{copy.kinds[kind]}</a>
      </nav>
      <p className="kicker">
        {copy.kinds[kind]} · {copy.levels[data.level]}
      </p>
      <h1>{data.title}</h1>
      <p>{data.summary}</p>
      <p className="meta">
        <time dateTime={data.date.toISOString()}>{formatDate(data.date, locale)}</time>
        {data.technologies.map((tech) => (
          <a className="chip" key={tech} href={`${techBase}/${tech}`}>
            {copy.tags[tech as keyof typeof copy.tags] ?? tech}
          </a>
        ))}
      </p>
      <div className="article">
        <div className="prose">
          <MDXRemote source={entry.body} components={{ Callout }} />
          <p>
            <a className="btn btn-primary" href={routes[locale].contact}>
              {copy.article.related}
            </a>
          </p>
        </div>
        <aside className="side">
          {data.problem && (
            <div className="panel">
              <dl className="dl">
                <div>
                  <dt>{copy.article.problem}</dt>
                  <dd>{data.problem}</dd>
                </div>
                <div>
                  <dt>{copy.article.approach}</dt>
                  <dd>{data.approach}</dd>
                </div>
                <div>
                  <dt>{copy.article.outcome}</dt>
                  <dd>{data.outcome || copy.article.pending}</dd>
                </div>
                {data.sector && (
                  <div>
                    <dt>Sector</dt>
                    <dd>{data.sector}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}
          {data.trigger && (
            <div className="panel">
              <dl className="dl">
                <div>
                  <dt>{locale === 'es' ? 'Disparador' : 'Trigger'}</dt>
                  <dd>{data.trigger}</dd>
                </div>
                <div>
                  <dt>{locale === 'es' ? 'Conectores' : 'Connectors'}</dt>
                  <dd>{(data.connectors ?? []).join(', ')}</dd>
                </div>
              </dl>
            </div>
          )}
          {data.systems && (
            <div className="panel">
              <dl className="dl">
                <div>
                  <dt>{locale === 'es' ? 'Sistemas' : 'Systems'}</dt>
                  <dd>{data.systems.join(', ')}</dd>
                </div>
              </dl>
            </div>
          )}
          {data.gaps.length > 0 && (
            <div className="gap-note">
              <strong>{copy.article.gaps}</strong>
              <ul>
                {data.gaps.map((gap) => (
                  <li key={gap}>{gap}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
