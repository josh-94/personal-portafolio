import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { listingCopy } from '@/lib/listings';
import { ListingPage } from '@/components/pages/ListingPage';

const copy = listingCopy.en.guias;

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.lead,
  locale: 'en',
  path: '/en/guides',
  alternate: '/guias',
});

export default function Page() {
  return <ListingPage locale="en" kind="guias" title={copy.title} lead={copy.lead} pattern={Boolean(copy.pattern)} />;
}
