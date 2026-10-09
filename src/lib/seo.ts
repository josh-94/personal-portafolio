import type { Metadata } from 'next';
import type { Locale } from '../i18n/ui';

const site = 'https://codewithjosh.codes';

export function pageMetadata({
  title,
  description,
  locale,
  path,
  alternate,
  noindex = false,
}: {
  title: string;
  description: string;
  locale: Locale;
  path: string;
  alternate?: string | null;
  noindex?: boolean;
}): Metadata {
  const fullTitle = title.toLowerCase().includes('codewithjosh') ? title : `${title} · codewithjosh`;
  const esPath = locale === 'es' ? path : alternate || '/';
  const enPath = locale === 'en' ? path : alternate || '/en';
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site),
    alternates: {
      canonical: path,
      languages: {
        es: esPath,
        en: enPath,
        'x-default': esPath,
      },
    },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      siteName: 'codewithjosh',
      title: fullTitle,
      description,
      url: path,
      locale: locale === 'es' ? 'es_PE' : 'en_US',
      images: [{ url: '/brand/og.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/brand/og.png'],
    },
  };
}
