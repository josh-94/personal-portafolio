import map from './path-alternates.json';

const alternates = map as Record<string, string>;

export function alternateFor(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  if (alternates[path]) return alternates[path];
  return path.startsWith('/en') ? '/' : '/en';
}
