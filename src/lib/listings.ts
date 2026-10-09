import type { Locale } from '../i18n/ui';
import type { Kind } from './content';

export const listingCopy: Record<Locale, Record<Kind, { title: string; lead: string; pattern?: boolean }>> = {
  es: {
    blog: {
      title: 'Blog',
      lead: 'Notas de práctica sobre Power Platform, ALM e integraciones. Sin casos inventados.',
    },
    guias: {
      title: 'Manuales y guías',
      lead: 'Material para seguir un criterio: entornos, datos e integraciones.',
    },
    casos: {
      title: 'Casos',
      lead: 'Fichas a partir de soluciones ya mostradas en el portafolio. Sin cliente y sin cifra mientras ese dato no esté confirmado.',
    },
    automatizaciones: {
      title: 'Automatizaciones',
      lead: 'Patrones de flujo para reutilizar. Cada ficha dice qué dispara el flujo y con qué se conecta.',
      pattern: true,
    },
    integraciones: {
      title: 'Integraciones',
      lead: 'Criterio para conectar sistemas que ya existen. No es un catálogo de clientes.',
      pattern: true,
    },
  },
  en: {
    blog: {
      title: 'Blog',
      lead: 'Practice notes on Power Platform, ALM, and integrations. No invented cases.',
    },
    guias: {
      title: 'Guides',
      lead: 'Material you can follow: environments, data, and integrations.',
    },
    casos: {
      title: 'Cases',
      lead: 'Write-ups from solutions already shown on the portfolio. No client name and no metric until that fact is confirmed.',
    },
    automatizaciones: {
      title: 'Automations',
      lead: 'Flow patterns you can reuse. Each note names the trigger and the connectors.',
      pattern: true,
    },
    integraciones: {
      title: 'Integrations',
      lead: 'How to connect systems that already exist. This is not a client catalog.',
      pattern: true,
    },
  },
};
