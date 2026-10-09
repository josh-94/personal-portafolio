import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { SolutionsPage } from '@/components/pages/SolutionsPage';

const copy = t('es');

export const metadata: Metadata = pageMetadata({
  title: copy.solutions.title,
  description: copy.solutions.lead,
  locale: 'es',
  path: '/soluciones',
  alternate: '/en/solutions',
});

export default function Page() {
  return <SolutionsPage locale="es" />;
}
