import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { techValues } from '@/lib/content';
import { TaxonomyPage } from '@/components/pages/TaxonomyPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return techValues('en').map((value) => ({ tech: value }));
}

export async function generateMetadata({ params }: { params: Promise<{ tech: string }> }): Promise<Metadata> {
  const { tech } = await params;
  const copy = t('en');
  const label = copy.tags[tech as keyof typeof copy.tags] ?? tech;
  const other = techValues('es');
  return pageMetadata({
    title: label,
    description: 'Pieces about ' + label + '.',
    locale: 'en',
    path: '/en/technologies/' + tech,
    alternate: other.includes(tech) ? '/tecnologias/' + tech : '/',
  });
}

export default async function Page({ params }: { params: Promise<{ tech: string }> }) {
  const { tech } = await params;
  return <TaxonomyPage locale="en" kind="tech" value={tech} />;
}
