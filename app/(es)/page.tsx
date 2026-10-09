import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { HomePage } from '@/components/pages/HomePage';

const copy = t('es');

export const metadata: Metadata = pageMetadata({
  title: copy.home.titleA,
  description: copy.home.lead,
  locale: 'es',
  path: '/',
  alternate: '/en',
});

export default function Page() {
  return <HomePage locale="es" />;
}
