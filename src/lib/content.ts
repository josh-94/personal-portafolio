import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Locale } from '../i18n/ui';
import { collectionPrefix, routes } from './routes';

export const kinds = ['blog', 'guias', 'casos', 'automatizaciones', 'integraciones'] as const;
export type Kind = (typeof kinds)[number];
export type Level = 'basico' | 'intermedio' | 'avanzado';

export type EntryData = {
  title: string;
  summary: string;
  date: Date;
  updated?: Date;
  tags: string[];
  level: Level;
  technologies: string[];
  lang: Locale;
  translationKey: string;
  draft: boolean;
  cover?: string;
  seoTitle?: string;
  seoDescription?: string;
  gaps: string[];
  featured?: boolean;
  sector?: string;
  role?: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  trigger?: string;
  connectors?: string[];
  systems?: string[];
};

export type Entry = {
  slug: string;
  kind: Kind;
  body: string;
  data: EntryData;
};

const levels = new Set<Level>(['basico', 'intermedio', 'avanzado']);
const cache = new Map<Kind, Entry[]>();

function asDate(value: unknown, file: string, field: string) {
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) throw new Error(`${file}: ${field} is not a date`);
  return date;
}

function asList(value: unknown) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  return [String(value)];
}

function readKind(kind: Kind): Entry[] {
  const cached = cache.get(kind);
  if (cached) return cached;
  const dir = path.join(process.cwd(), 'src/content', kind);
  const entries = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const full = path.join(dir, file);
      const raw = fs.readFileSync(full, 'utf8');
      const { data, content } = matter(raw);
      const slug = file.replace(/\.mdx?$/, '');
      const lang = data.lang;
      if (lang !== 'es' && lang !== 'en') throw new Error(`${full}: lang must be es or en`);
      const level = data.level as Level;
      if (!levels.has(level)) throw new Error(`${full}: level is missing`);
      if (!data.title || !data.summary || !data.translationKey) {
        throw new Error(`${full}: title, summary, and translationKey are required`);
      }
      if (kind === 'casos' && (!data.problem || !data.approach)) {
        throw new Error(`${full}: a case needs problem and approach`);
      }
      if (kind === 'automatizaciones' && !data.trigger) throw new Error(`${full}: trigger is required`);
      const entry: Entry = {
        slug,
        kind,
        body: content.replace(/^import\s.+;?\s*$/gm, '').trim(),
        data: {
          title: String(data.title),
          summary: String(data.summary),
          date: asDate(data.date, full, 'date'),
          updated: data.updated ? asDate(data.updated, full, 'updated') : undefined,
          tags: asList(data.tags),
          level,
          technologies: asList(data.technologies),
          lang,
          translationKey: String(data.translationKey),
          draft: Boolean(data.draft),
          cover: data.cover ? String(data.cover) : undefined,
          seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
          seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
          gaps: asList(data.gaps),
          featured: Boolean(data.featured),
          sector: data.sector ? String(data.sector) : undefined,
          role: data.role ? String(data.role) : undefined,
          problem: data.problem ? String(data.problem) : undefined,
          approach: data.approach ? String(data.approach) : undefined,
          outcome: data.outcome ? String(data.outcome) : undefined,
          trigger: data.trigger ? String(data.trigger) : undefined,
          connectors: data.connectors ? asList(data.connectors) : undefined,
          systems: data.systems ? asList(data.systems) : undefined,
        },
      };
      return entry;
    });
  cache.set(kind, entries);
  return entries;
}

export function published(kind: Kind, locale: Locale) {
  return readKind(kind)
    .filter((entry) => entry.data.lang === locale && !entry.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function allPublished(locale: Locale) {
  return kinds
    .flatMap((kind) => published(kind, locale).map((entry) => ({ kind, entry })))
    .sort((a, b) => b.entry.data.date.getTime() - a.entry.data.date.getTime());
}

export function entryBySlug(kind: Kind, locale: Locale, slug: string) {
  return published(kind, locale).find((entry) => entry.slug === slug);
}

export function hrefFor(kind: Kind, entry: { slug: string; data: { lang: Locale } }) {
  return `${collectionPrefix(entry.data.lang, kind)}/${entry.slug}`;
}

export function translationOf(kind: Kind, entry: Entry) {
  return readKind(kind).find(
    (item) =>
      item.data.translationKey === entry.data.translationKey &&
      item.data.lang !== entry.data.lang &&
      !item.data.draft,
  );
}

export function formatDate(date: Date, locale: Locale) {
  return date.toLocaleDateString(locale === 'es' ? 'es-PE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function collectionHref(locale: Locale, kind: Kind) {
  const map = {
    blog: routes[locale].blog,
    guias: routes[locale].guides,
    casos: routes[locale].cases,
    automatizaciones: routes[locale].automations,
    integraciones: routes[locale].integrations,
  } as const;
  return map[kind];
}

export function tagValues(locale: Locale) {
  return [...new Set(allPublished(locale).flatMap(({ entry }) => entry.data.tags))];
}

export function techValues(locale: Locale) {
  return [...new Set(allPublished(locale).flatMap(({ entry }) => entry.data.technologies))];
}

export function staticPaths() {
  const pages = [
    routes.es.home,
    routes.en.home,
    routes.es.about,
    routes.en.about,
    routes.es.solutions,
    routes.en.solutions,
    routes.es.cases,
    routes.en.cases,
    routes.es.blog,
    routes.en.blog,
    routes.es.guides,
    routes.en.guides,
    routes.es.automations,
    routes.en.automations,
    routes.es.integrations,
    routes.en.integrations,
    routes.es.training,
    routes.en.training,
    routes.es.contact,
    routes.en.contact,
    routes.es.search,
    routes.en.search,
  ];
  const content = kinds.flatMap((kind) =>
    (['es', 'en'] as const).flatMap((locale) => published(kind, locale).map((entry) => hrefFor(kind, entry))),
  );
  const tags = (['es', 'en'] as const).flatMap((locale) =>
    tagValues(locale).map((tag) => `${routes[locale].tags}/${tag}`),
  );
  const techs = (['es', 'en'] as const).flatMap((locale) =>
    techValues(locale).map((tech) => `${routes[locale].tech}/${tech}`),
  );
  return [...pages, ...content, ...tags, ...techs];
}
