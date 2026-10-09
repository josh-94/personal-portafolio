import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { listingCopy } from '@/lib/listings';
import { ListingPage } from '@/components/pages/ListingPage';

const copy = listingCopy.en.blog;

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.lead,
  locale: 'en',
  path: '/en/blog',
  alternate: '/blog',
});

export default function Page() {
  return <ListingPage locale="en" kind="blog" title={copy.title} lead={copy.lead} pattern={Boolean(copy.pattern)} />;
}
