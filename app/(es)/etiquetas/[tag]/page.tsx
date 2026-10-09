import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { tagValues } from '@/lib/content';
import { TaxonomyPage } from '@/components/pages/TaxonomyPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return tagValues('es').map((value) => ({ tag: value }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const copy = t('es');
  const label = copy.tags[tag as keyof typeof copy.tags] ?? tag;
  const other = tagValues('en');
  return pageMetadata({
    title: label,
    description: 'Piezas etiquetadas con ' + label + '.',
    locale: 'es',
    path: '/etiquetas/' + tag,
    alternate: other.includes(tag) ? '/en/tags/' + tag : '/en',
  });
}

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  return <TaxonomyPage locale="es" kind="tag" value={tag} />;
}
