import { t, type Locale } from '../i18n/ui';
import { formatDate, hrefFor, type Entry, type Kind } from '../lib/content';
import { routes } from '../lib/routes';
import { Cover } from './Cover';
import { HoverCard } from './Motion';

export function EntryCard({ locale, kind, entry }: { locale: Locale; kind: Kind; entry: Entry }) {
  const copy = t(locale);
  const href = hrefFor(kind, entry);
  const techBase = locale === 'es' ? routes.es.tech : routes.en.tech;
  return (
    <HoverCard className="card">
      <Cover translationKey={entry.data.translationKey} />
      <div className="card-body">
      <p className="kicker">
        {copy.kinds[kind]} · {copy.levels[entry.data.level]}
      </p>
      <h3>
        <a href={href}>{entry.data.title}</a>
      </h3>
      <p>{entry.data.summary}</p>
      <p className="meta">
        <time dateTime={entry.data.date.toISOString()}>{formatDate(entry.data.date, locale)}</time>
        {entry.data.technologies.slice(0, 3).map((tech) => (
          <a className="chip" key={tech} href={`${techBase}/${tech}`}>
            {copy.tags[tech as keyof typeof copy.tags] ?? tech}
          </a>
        ))}
      </p>
      </div>
    </HoverCard>
  );
}
