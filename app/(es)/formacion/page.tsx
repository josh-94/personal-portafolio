import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { TrainingPage } from '@/components/pages/TrainingPage';

const copy = t('es');

export const metadata: Metadata = pageMetadata({
  title: copy.training.title,
  description: copy.training.lead,
  locale: 'es',
  path: '/formacion',
  alternate: '/en/training',
});

export default function Page() {
  return <TrainingPage locale="es" />;
}
