import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { listingCopy } from '@/lib/listings';
import { ListingPage } from '@/components/pages/ListingPage';

const copy = listingCopy.es.automatizaciones;

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.lead,
  locale: 'es',
  path: '/automatizaciones',
  alternate: '/en/automations',
});

export default function Page() {
  return <ListingPage locale="es" kind="automatizaciones" title={copy.title} lead={copy.lead} pattern={Boolean(copy.pattern)} />;
}
