import type { Metadata } from 'next';
import { ArticlePage } from '@/components/pages/ArticlePage';
import { articleMetadata, articleParams } from '@/lib/article-route';

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams('guias', 'en');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata('guias', 'en', slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticlePage kind="guias" locale="en" slug={slug} />;
}
