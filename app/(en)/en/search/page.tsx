import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { SearchPage } from '@/components/pages/SearchPage';

const copy = t('en');

export const metadata: Metadata = pageMetadata({
  title: copy.search.title,
  description: copy.search.lead,
  locale: 'en',
  path: '/en/search',
  alternate: '/buscar',
});

export default function Page() {
  return <SearchPage locale="en" />;
}
