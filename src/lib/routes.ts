import type { Locale } from '../i18n/ui';

export const routes = {
  es: {
    home: '/',
    about: '/sobre-mi',
    solutions: '/soluciones',
    cases: '/casos',
    integrations: '/integraciones',
    automations: '/automatizaciones',
    blog: '/blog',
    guides: '/guias',
    training: '/formacion',
    contact: '/contacto',
    thanks: '/contacto/gracias',
    search: '/buscar',
    tags: '/etiquetas',
    tech: '/tecnologias',
    rss: '/rss.xml',
  },
  en: {
    home: '/en',
    about: '/en/about',
    solutions: '/en/solutions',
    cases: '/en/cases',
    integrations: '/en/integrations',
    automations: '/en/automations',
    blog: '/en/blog',
    guides: '/en/guides',
    training: '/en/training',
    contact: '/en/contact',
    thanks: '/en/contact/thanks',
    search: '/en/search',
    tags: '/en/tags',
    tech: '/en/technologies',
    rss: '/en/rss.xml',
  },
} as const;

export type RouteKey = keyof typeof routes.es;

const pairs: Array<[string, string]> = [
  [routes.es.home, routes.en.home],
  [routes.es.about, routes.en.about],
  [routes.es.solutions, routes.en.solutions],
  [routes.es.cases, routes.en.cases],
  [routes.es.integrations, routes.en.integrations],
  [routes.es.automations, routes.en.automations],
  [routes.es.blog, routes.en.blog],
  [routes.es.guides, routes.en.guides],
  [routes.es.training, routes.en.training],
  [routes.es.contact, routes.en.contact],
  [routes.es.thanks, routes.en.thanks],
  [routes.es.search, routes.en.search],
];

export function staticAlternate(pathname: string): string | undefined {
  const path = pathname.replace(/\/$/, '') || '/';
  for (const [es, en] of pairs) {
    if (path === es) return en;
    if (path === en) return es;
  }
  return undefined;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function collectionPrefix(locale: Locale, kind: string) {
  const map = {
    es: {
      blog: routes.es.blog,
      guias: routes.es.guides,
      casos: routes.es.cases,
      automatizaciones: routes.es.automations,
      integraciones: routes.es.integrations,
    },
    en: {
      blog: routes.en.blog,
      guias: routes.en.guides,
      casos: routes.en.cases,
      automatizaciones: routes.en.automations,
      integraciones: routes.en.integrations,
    },
  } as const;
  return map[locale][kind as keyof typeof map.es];
}
