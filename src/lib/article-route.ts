import type { Metadata } from 'next';
import type { Locale } from '../i18n/ui';
import { collectionHref, entryBySlug, hrefFor, published, translationOf, type Kind } from './content';
import { pageMetadata } from './seo';

export function articleParams(kind: Kind, locale: Locale) {
  const params = published(kind, locale).map((entry) => ({ slug: entry.slug }));
  // Static export needs at least one path. Empty archives render the not-found page for this placeholder.
  return params.length > 0 ? params : [{ slug: '__empty__' }];
}

export function articleMetadata(kind: Kind, locale: Locale, slug: string): Metadata {
  const entry = entryBySlug(kind, locale, slug);
  if (!entry) return { robots: { index: false, follow: false }, title: 'Josh' };
  const other = translationOf(kind, entry);
  const alternate = other ? hrefFor(kind, other) : collectionHref(locale === 'es' ? 'en' : 'es', kind);
  return pageMetadata({
    title: entry.data.seoTitle ?? entry.data.title,
    description: entry.data.seoDescription ?? entry.data.summary,
    locale,
    path: hrefFor(kind, entry),
    alternate,
  });
}
