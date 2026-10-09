import type { ReactNode } from 'react';
import '@fontsource/outfit/latin-400.css';
import '@fontsource/outfit/latin-500.css';
import '@fontsource/outfit/latin-600.css';
import '@fontsource/outfit/latin-700.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import '../globals.css';
import { DocumentLayout, siteMetadata } from '../../src/components/DocumentLayout';

export const metadata = siteMetadata;

export default function Layout({ children }: { children: ReactNode }) {
  return <DocumentLayout locale="es">{children}</DocumentLayout>;
}
