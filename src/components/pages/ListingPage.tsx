import { t, type Locale } from '../../i18n/ui';
import { collectionHref, published, type Kind } from '../../lib/content';
import { routes } from '../../lib/routes';
import { EntryCard } from '../EntryCard';

export function ListingPage({
  locale,
  kind,
  title,
  lead,
  pattern = false,
}: {
  locale: Locale;
  kind: Kind;
  title: string;
  lead: string;
  pattern?: boolean;
}) {
  const copy = t(locale);
  const entries = published(kind, locale);
  const tags = [...new Set(entries.flatMap((entry) => entry.data.tags))];
  const tagBase = routes[locale].tags;
  return (
    <div className="wrap page-head">
      <h1>{title}</h1>
      <p>{lead}</p>
      {pattern && <p>{copy.listing.pattern}</p>}
      {tags.length > 0 && (
        <nav className="filters" aria-label={copy.listing.filters}>
          {tags.map((tag) => (
            <a className="chip" key={tag} href={`${tagBase}/${tag}`}>
              {copy.tags[tag as keyof typeof copy.tags] ?? tag}
            </a>
          ))}
        </nav>
      )}
      {entries.length === 0 ? (
        <p className="empty">
          {copy.listing.empty}{' '}
          {locale === 'en' && <a href={collectionHref('es', kind)}>{copy.listing.seeEs}</a>}
        </p>
      ) : (
        <div className="grid-2">
          {entries.map((entry) => (
            <EntryCard locale={locale} kind={kind} entry={entry} key={entry.slug} />
          ))}
        </div>
      )}
    </div>
  );
}
