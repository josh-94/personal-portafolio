import { t } from '../../src/i18n/ui';

export default function NotFound() {
  const copy = t('es');
  return (
    <div className="wrap page-head" data-pagefind-ignore="all">
      <h1>{copy.notFound.title}</h1>
      <p>{copy.notFound.lead}</p>
      <p>
        <a href="/">{copy.notFound.back}</a> · <a href="/en">English</a>
      </p>
    </div>
  );
}
