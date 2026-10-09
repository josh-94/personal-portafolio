import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { TrainingPage } from '@/components/pages/TrainingPage';

const copy = t('en');

export const metadata: Metadata = pageMetadata({
  title: copy.training.title,
  description: copy.training.lead,
  locale: 'en',
  path: '/en/training',
  alternate: '/formacion',
});

export default function Page() {
  return <TrainingPage locale="en" />;
}
