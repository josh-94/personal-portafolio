import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { ContactPage } from '@/components/pages/ContactPage';

const copy = t('en');

export const metadata: Metadata = pageMetadata({
  title: copy.contact.title,
  description: copy.contact.lead,
  locale: 'en',
  path: '/en/contact',
  alternate: '/contacto',
});

export default function Page() {
  return <ContactPage locale="en" />;
}
