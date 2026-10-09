import { t, type Locale } from '../../i18n/ui';
import { SearchBox } from '../SearchBox';

export function SearchPage({ locale }: { locale: Locale }) {
  const copy = t(locale);
  return (
    <div className="wrap page-head" data-pagefind-ignore="all">
      <h1>{copy.search.title}</h1>
      <p>{copy.search.lead}</p>
      <SearchBox locale={locale} label={copy.search.label} empty={copy.search.empty} dev={copy.search.dev} />
    </div>
  );
}
