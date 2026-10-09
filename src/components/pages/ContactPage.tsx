import { t, type Locale } from '../../i18n/ui';
import { routes } from '../../lib/routes';

export function ContactPage({ locale, thanks = false }: { locale: Locale; thanks?: boolean }) {
  const copy = t(locale);
  const r = routes[locale];
  if (thanks) {
    return (
      <div className="wrap page-head" data-pagefind-ignore="all">
        <h1>{copy.contact.thanksTitle}</h1>
        <p>{copy.contact.thanks}</p>
        <p>
          <a href={r.home}>{copy.notFound.back}</a>
        </p>
      </div>
    );
  }
  return (
    <div className="wrap page-head">
      <div className="grid-2">
        <div>
          <h1>{copy.contact.title}</h1>
          <p>{copy.contact.lead}</p>
          <p>
            <a href="https://www.linkedin.com/in/jeshuacabanillas/">LinkedIn</a>
          </p>
          <p className="gap-note">{copy.contact.todoEmail}</p>
        </div>
        <form className="form" name="contact" method="POST" action={r.thanks} data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="locale" value={locale} />
          <p className="hp" aria-hidden="true">
            <label>
              No llenar <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <label>
            {copy.contact.name}
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            {copy.contact.email}
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            {copy.contact.phone} ({copy.contact.optional})
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            {copy.contact.company} ({copy.contact.optional})
            <input name="company" type="text" autoComplete="organization" />
          </label>
          <label>
            {copy.contact.message}
            <textarea name="message" required />
          </label>
          <button className="btn btn-primary" type="submit">
            {copy.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
}
