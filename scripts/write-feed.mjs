import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const kinds = {
  blog: { es: '/blog', en: '/en/blog' },
  guias: { es: '/guias', en: '/en/guides' },
  casos: { es: '/casos', en: '/en/cases' },
  automatizaciones: { es: '/automatizaciones', en: '/en/automations' },
  integraciones: { es: '/integraciones', en: '/en/integrations' },
};

const staticPairs = [
  ['/', '/en'],
  ['/sobre-mi', '/en/about'],
  ['/soluciones', '/en/solutions'],
  ['/casos', '/en/cases'],
  ['/integraciones', '/en/integrations'],
  ['/automatizaciones', '/en/automations'],
  ['/blog', '/en/blog'],
  ['/guias', '/en/guides'],
  ['/formacion', '/en/training'],
  ['/contacto', '/en/contact'],
  ['/contacto/gracias', '/en/contact/thanks'],
  ['/buscar', '/en/search'],
];

const map = {};
for (const [es, en] of staticPairs) {
  map[es] = en;
  map[en] = es;
}

const grouped = new Map();
const tags = { es: new Set(), en: new Set() };
const techs = { es: new Set(), en: new Set() };
const feed = { es: [], en: [] };

for (const kind of Object.keys(kinds)) {
  const dir = path.join('src/content', kind);
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    const { data } = matter(readFileSync(path.join(dir, file), 'utf8'));
    if (data.draft === true || data.draft === 'true') continue;
    const lang = data.lang;
    if (lang !== 'es' && lang !== 'en') continue;
    const slug = file.replace(/\.mdx?$/, '');
    const href = `${kinds[kind][lang]}/${slug}`;
    const key = `${kind}:${data.translationKey}`;
    const bucket = grouped.get(key) ?? {};
    bucket[lang] = href;
    grouped.set(key, bucket);
    for (const tag of data.tags ?? []) tags[lang].add(String(tag));
    for (const tech of data.technologies ?? []) techs[lang].add(String(tech));
    const date = data.date instanceof Date ? data.date : new Date(data.date);
    feed[lang].push({
      title: String(data.title),
      summary: String(data.summary),
      href,
      date,
    });
  }
}

for (const bucket of grouped.values()) {
  if (bucket.es && bucket.en) {
    map[bucket.es] = bucket.en;
    map[bucket.en] = bucket.es;
  } else if (bucket.es) {
    const kind = bucket.es.split('/')[1];
    map[bucket.es] = kinds[kind]?.en ?? '/en';
  } else if (bucket.en) {
    const segment = bucket.en.split('/')[2];
    const kind = Object.keys(kinds).find((name) => kinds[name].en.endsWith(`/${segment}`));
    map[bucket.en] = kind ? kinds[kind].es : '/';
  }
}

for (const tag of tags.es) map[`/etiquetas/${tag}`] = tags.en.has(tag) ? `/en/tags/${tag}` : '/en';
for (const tag of tags.en) map[`/en/tags/${tag}`] = tags.es.has(tag) ? `/etiquetas/${tag}` : '/';
for (const tech of techs.es) map[`/tecnologias/${tech}`] = techs.en.has(tech) ? `/en/technologies/${tech}` : '/en';
for (const tech of techs.en) map[`/en/technologies/${tech}`] = techs.es.has(tech) ? `/tecnologias/${tech}` : '/';

writeFileSync('src/lib/path-alternates.json', `${JSON.stringify(map, null, 2)}\n`);

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function rss(lang) {
  const items = feed[lang].sort((a, b) => b.date - a.date);
  const title = 'Josh — Power Platform';
  const description =
    lang === 'es'
      ? 'Artículos, manuales, casos y patrones de Jeshua Cabanillas Blanco.'
      : 'Articles, guides, cases, and patterns by Jeshua Cabanillas Blanco.';
  const link = lang === 'es' ? 'https://codewithjosh.codes/' : 'https://codewithjosh.codes/en';
  const body = items
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>https://codewithjosh.codes${item.href}</link>
      <guid>https://codewithjosh.codes${item.href}</guid>
      <pubDate>${item.date.toUTCString()}</pubDate>
      <description>${escapeXml(item.summary)}</description>
    </item>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${title}</title>
    <link>${link}</link>
    <description>${description}</description>
    <language>${lang === 'es' ? 'es-pe' : 'en'}</language>
${body}
  </channel>
</rss>
`;
}

mkdirSync('public/en', { recursive: true });
writeFileSync('public/rss.xml', rss('es'));
writeFileSync('public/en/rss.xml', rss('en'));
console.log(`alternates ${Object.keys(map).length}`);
