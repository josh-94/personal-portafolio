import type { MetadataRoute } from 'next';
import { staticPaths } from '../src/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths().map((path) => ({
    url: path === '/' ? 'https://codewithjosh.codes/' : `https://codewithjosh.codes${path}`,
  }));
}
