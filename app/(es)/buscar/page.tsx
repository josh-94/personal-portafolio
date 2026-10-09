import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { SearchPage } from '@/components/pages/SearchPage';

const copy = t('es');

export const metadata: Metadata = pageMetadata({
  title: copy.search.title,
  description: copy.search.lead,
  locale: 'es',
  path: '/buscar',
  alternate: '/en/search',
});

export default function Page() {
  return <SearchPage locale="es" />;
}
