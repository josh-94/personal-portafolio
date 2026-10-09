import { t, type Locale } from '../../i18n/ui';
import { allPublished, type Kind } from '../../lib/content';
import { EntryCard } from '../EntryCard';

export function TaxonomyPage({
  locale,
  kind,
  value,
}: {
  locale: Locale;
  kind: 'tag' | 'tech';
  value: string;
}) {
  const copy = t(locale);
  const label = copy.tags[value as keyof typeof copy.tags] ?? value;
  const items = allPublished(locale).filter(({ entry }) =>
    kind === 'tag' ? entry.data.tags.includes(value) : entry.data.technologies.includes(value),
  );
  return (
    <div className="wrap page-head">
      <p className="kicker">{kind === 'tag' ? (locale === 'es' ? 'Etiqueta' : 'Tag') : locale === 'es' ? 'Tecnología' : 'Technology'}</p>
      <h1>{label}</h1>
      {items.length === 0 ? (
        <p className="empty">{copy.listing.empty}</p>
      ) : (
        <div className="grid-2">
          {items.map(({ kind: entryKind, entry }) => (
            <EntryCard locale={locale} kind={entryKind as Kind} entry={entry} key={`${entryKind}-${entry.slug}`} />
          ))}
        </div>
      )}
    </div>
  );
}
