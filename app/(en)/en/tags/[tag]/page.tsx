import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { tagValues } from '@/lib/content';
import { TaxonomyPage } from '@/components/pages/TaxonomyPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return tagValues('en').map((value) => ({ tag: value }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const copy = t('en');
  const label = copy.tags[tag as keyof typeof copy.tags] ?? tag;
  const other = tagValues('es');
  return pageMetadata({
    title: label,
    description: 'Pieces tagged ' + label + '.',
    locale: 'en',
    path: '/en/tags/' + tag,
    alternate: other.includes(tag) ? '/etiquetas/' + tag : '/',
  });
}

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  return <TaxonomyPage locale="en" kind="tag" value={tag} />;
}
