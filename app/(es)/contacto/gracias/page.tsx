import type { Metadata } from 'next';
import { t } from '@/i18n/ui';
import { pageMetadata } from '@/lib/seo';
import { ContactPage } from '@/components/pages/ContactPage';

const copy = t('es');

export const metadata: Metadata = pageMetadata({
  title: copy.contact.thanksTitle,
  description: copy.contact.thanks,
  locale: 'es',
  path: '/contacto/gracias',
  alternate: '/en/contact/thanks',
  noindex: true,
});

export default function Page() {
  return <ContactPage locale="es" thanks />;
}
