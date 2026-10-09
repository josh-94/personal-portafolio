import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { listingCopy } from '@/lib/listings';
import { ListingPage } from '@/components/pages/ListingPage';

const copy = listingCopy.es.guias;

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.lead,
  locale: 'es',
  path: '/guias',
  alternate: '/en/guides',
});

export default function Page() {
  return <ListingPage locale="es" kind="guias" title={copy.title} lead={copy.lead} pattern={Boolean(copy.pattern)} />;
}
