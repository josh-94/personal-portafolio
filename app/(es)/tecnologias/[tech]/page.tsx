import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { techValues } from '@/lib/content';
import { TaxonomyPage } from '@/components/pages/TaxonomyPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return techValues('es').map((value) => ({ tech: value }));
}

export async function generateMetadata({ params }: { params: Promise<{ tech: string }> }): Promise<Metadata> {
  const { tech } = await params;
  const copy = t('es');
  const label = copy.tags[tech as keyof typeof copy.tags] ?? tech;
  const other = techValues('en');
  return pageMetadata({
    title: label,
    description: 'Piezas sobre ' + label + '.',
    locale: 'es',
    path: '/tecnologias/' + tech,
    alternate: other.includes(tech) ? '/en/technologies/' + tech : '/en',
  });
}

export default async function Page({ params }: { params: Promise<{ tech: string }> }) {
  const { tech } = await params;
  return <TaxonomyPage locale="es" kind="tech" value={tech} />;
}
