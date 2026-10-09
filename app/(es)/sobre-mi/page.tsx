import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { AboutPage } from '@/components/pages/AboutPage';

const copy = t('es');

export const metadata: Metadata = pageMetadata({
  title: copy.about.title,
  description: copy.about.lead,
  locale: 'es',
  path: '/sobre-mi',
  alternate: '/en/about',
});

export default function Page() {
  return <AboutPage locale="es" />;
}
