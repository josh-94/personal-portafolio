import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { listingCopy } from '@/lib/listings';
import { ListingPage } from '@/components/pages/ListingPage';

const copy = listingCopy.en.integraciones;

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.lead,
  locale: 'en',
  path: '/en/integrations',
  alternate: '/integraciones',
});

export default function Page() {
  return <ListingPage locale="en" kind="integraciones" title={copy.title} lead={copy.lead} pattern={Boolean(copy.pattern)} />;
}
