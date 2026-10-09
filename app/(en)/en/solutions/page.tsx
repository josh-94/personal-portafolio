import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { SolutionsPage } from '@/components/pages/SolutionsPage';

const copy = t('en');

export const metadata: Metadata = pageMetadata({
  title: copy.solutions.title,
  description: copy.solutions.lead,
  locale: 'en',
  path: '/en/solutions',
  alternate: '/soluciones',
});

export default function Page() {
  return <SolutionsPage locale="en" />;
}
