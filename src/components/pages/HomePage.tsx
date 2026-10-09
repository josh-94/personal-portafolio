import { t, type Locale } from '../../i18n/ui';
import { routes } from '../../lib/routes';
import { hrefFor, published } from '../../lib/content';
import { IntegrationDiagram } from '../IntegrationDiagram';
import { EntryCard } from '../EntryCard';
import { Cover } from '../Cover';
import { HoverCard, Rise } from '../Motion';
import type { Entry, Kind } from '../../lib/content';

function ReadingRow({
  copy,
  index,
  kind,
  entry,
}: {
  copy: ReturnType<typeof t>;
  index: number;
  kind: Kind;
  entry: Entry;
}) {
  const href = hrefFor(kind, entry);
  return (
    <li className="read-card panel">
      <Cover translationKey={entry.data.translationKey} />
      <div className="read-body">
        <p className="kicker">
          {String(index + 1).padStart(2, '0')} · {copy.kinds[kind]} · {copy.levels[entry.data.level]}
        </p>
        <h3>
          <a href={href}>{entry.data.title}</a>
        </h3>
        <p>{entry.data.summary}</p>
        <a className="more" href={href}>
          {copy.home.read}
        </a>
      </div>
    </li>
  );
}

function accentWord(value: string) {
  const parts = value.trim().split(' ');
  const last = parts.pop() ?? value;
  return { lead: parts.join(' '), last };
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const r = routes[locale];
  const cases = published('casos', locale).filter((entry) => entry.data.featured).slice(0, 3);
  const reading = (['blog', 'guias'] as const)
    .flatMap((kind) => published(kind, locale).map((entry) => ({ kind, entry })))
    .sort((a, b) => b.entry.data.date.getTime() - a.entry.data.date.getTime());
  const titleB = accentWord(copy.home.titleB);
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jeshua Cabanillas Blanco',
    alternateName: ['Josh', 'codewithjosh'],
    jobTitle: 'Power Platform Developer',
    url: 'https://codewithjosh.codes/',
    image: 'https://codewithjosh.codes/jeshua.png',
    address: { '@type': 'PostalAddress', addressLocality: 'Lima', addressCountry: 'PE' },
    worksFor: { '@type': 'Organization', name: 'Surgicorp' },
    sameAs: ['https://www.linkedin.com/in/jeshuacabanillas/'],
    knowsAbout: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'SQL Server', 'Power Platform Pipelines'],
    alumniOf: ['Holberton School', 'Universidad San Ignacio de Loyola', 'Utel Universidad'],
  };

  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <section className="hero">
        <Rise>
          <p className="pill">
            <span className="pill-dot" aria-hidden="true" />
            {copy.home.kicker}
          </p>
          <h1>
            {copy.home.titleA}
            <br />
            {titleB.lead} <span className="accent">{titleB.last}</span>
          </h1>
          <p className="lead">{copy.home.lead}</p>
          <div className="actions">
            <a className="btn btn-primary" href={r.cases}>
              {copy.home.ctaCases}
            </a>
            <a className="btn btn-ghost" href={r.contact}>
              {copy.home.ctaContact}
            </a>
          </div>
        </Rise>
        <Rise className="hero-panel" delay={0.08}>
          <p className="kicker">{copy.home.diagramTitle}</p>
          <IntegrationDiagram locale={locale} />
        </Rise>
      </section>

      <section className="section" aria-labelledby="pillars-title">
        <h2 id="pillars-title">{copy.home.pillarsTitle}</h2>
        <div className="grid-3">
          {copy.home.pillars.map((item) => (
            <HoverCard className="card" key={item.key}>
              <Cover translationKey={item.key} />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </HoverCard>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="cases-title">
        <h2 id="cases-title">{copy.home.casesTitle}</h2>
        <p>{copy.home.casesLead}</p>
        <div className="grid-3">
          {cases.map((entry) => (
            <EntryCard locale={locale} kind="casos" entry={entry} key={entry.slug} />
          ))}
        </div>
        <p>
          <a className="more" href={r.cases}>
            {copy.home.allCases}
          </a>
        </p>
      </section>

      {reading.length > 0 && (
        <section className="section" aria-labelledby="guide-title">
          <div className="section-head">
            <div>
              <h2 id="guide-title">{copy.home.guideTitle}</h2>
              <p>{copy.home.guideLead}</p>
            </div>
            <a className="more" href={r.guides}>
              {copy.home.allGuides}
            </a>
          </div>
          <ol className="reading-list">
            {reading.map(({ kind, entry }, index) => (
              <ReadingRow copy={copy} index={index} key={entry.slug} kind={kind} entry={entry} />
            ))}
          </ol>
        </section>
      )}

      <section className="band" aria-labelledby="cred-title">
        <article className="panel">
          <h2 id="cred-title">{copy.home.credentialTitle}</h2>
          <p>{copy.home.credential}</p>
          <p>
            <a href={r.training}>{copy.training.title}</a>
          </p>
        </article>
        <article className="panel">
          <h3>RUMBO</h3>
          <p>{copy.home.rumbo}</p>
          <p>
            <a href="https://mi.apprumbo.online/">mi.apprumbo.online</a>
          </p>
        </article>
      </section>
    </div>
  );
}
