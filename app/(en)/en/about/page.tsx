import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { AboutPage } from '@/components/pages/AboutPage';

const copy = t('en');

export const metadata: Metadata = pageMetadata({
  title: copy.about.title,
  description: copy.about.lead,
  locale: 'en',
  path: '/en/about',
  alternate: '/sobre-mi',
});

export default function Page() {
  return <AboutPage locale="en" />;
}
