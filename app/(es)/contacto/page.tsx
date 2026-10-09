import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { ContactPage } from '@/components/pages/ContactPage';

const copy = t('es');

export const metadata: Metadata = pageMetadata({
  title: copy.contact.title,
  description: copy.contact.lead,
  locale: 'es',
  path: '/contacto',
  alternate: '/en/contact',
});

export default function Page() {
  return <ContactPage locale="es" />;
}
