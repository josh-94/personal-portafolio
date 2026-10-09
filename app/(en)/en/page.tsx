import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { HomePage } from '@/components/pages/HomePage';

const copy = t('en');

export const metadata: Metadata = pageMetadata({
  title: copy.home.titleA,
  description: copy.home.lead,
  locale: 'en',
  path: '/en',
  alternate: '/',
});

export default function Page() {
  return <HomePage locale="en" />;
}
