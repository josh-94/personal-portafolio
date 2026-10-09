import type { ReactNode } from 'react';

export function Callout({ title, children }: { title?: string; children?: ReactNode }) {
  return (
    <aside className="callout callout-note">
      {title && <strong>{title}</strong>}
      <div>{children}</div>
    </aside>
  );
}
