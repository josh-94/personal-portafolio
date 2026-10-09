import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { listingCopy } from '@/lib/listings';
import { ListingPage } from '@/components/pages/ListingPage';

const copy = listingCopy.es.integraciones;

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.lead,
  locale: 'es',
  path: '/integraciones',
  alternate: '/en/integrations',
});

export default function Page() {
  return <ListingPage locale="es" kind="integraciones" title={copy.title} lead={copy.lead} pattern={Boolean(copy.pattern)} />;
}
