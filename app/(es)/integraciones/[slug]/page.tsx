import type { Metadata } from 'next';
import { ArticlePage } from '@/components/pages/ArticlePage';
import { articleMetadata, articleParams } from '@/lib/article-route';

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams('integraciones', 'es');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata('integraciones', 'es', slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticlePage kind="integraciones" locale="es" slug={slug} />;
}
