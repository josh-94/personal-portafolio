'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { t, type Locale } from '../i18n/ui';
import { routes } from '../lib/routes';
import { alternateFor } from '../lib/alternates';
import { Mark } from './Mark';

function current(href: string, path: string) {
  const normalized = path.replace(/\/$/, '') || '/';
  if (href === '/' || href === '/en') return normalized === href;
  return normalized === href || normalized.startsWith(`${href}/`);
}

export function Header({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const r = routes[locale];
  const pathname = usePathname() || r.home;
  const switchHref = alternateFor(pathname);
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    setOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  };

  return (
    <>
      <a className="skip" href="#main">
        {copy.skip}
      </a>
      <header className={open ? 'site-header is-open' : 'site-header'} data-pagefind-ignore>
        <div className="wrap header-bar">
          <a className="brand" href={r.home}>
            <Mark title={copy.brand} />
            <span>{copy.brand}</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? copy.close : copy.menu}
          </button>
          <nav id="site-nav" className="site-nav" aria-label={locale === 'es' ? 'Principal' : 'Main'}>
            <a href={r.solutions} aria-current={current(r.solutions, pathname) ? 'page' : undefined}>
              {copy.nav.solutions}
            </a>
            <a href={r.cases} aria-current={current(r.cases, pathname) ? 'page' : undefined}>
              {copy.nav.cases}
            </a>
            <div className={resourcesOpen ? 'resources is-open' : 'resources'}>
              <button className="menu-btn" type="button" aria-expanded={resourcesOpen} onClick={() => setResourcesOpen((value) => !value)}>
                {copy.nav.resources}
              </button>
              <div className="resources-panel">
                <a href={r.blog}>{copy.nav.blog}</a>
                <a href={r.guides}>{copy.nav.guides}</a>
                <a href={r.automations}>{copy.nav.automations}</a>
                <a href={r.integrations}>{copy.nav.integrations}</a>
              </div>
            </div>
            <a href={r.about} aria-current={current(r.about, pathname) ? 'page' : undefined}>
              {copy.nav.about}
            </a>
            <a href={r.contact} aria-current={current(r.contact, pathname) ? 'page' : undefined}>
              {copy.nav.contact}
            </a>
          </nav>
          <div className="tools">
            <a href={r.search} aria-label={copy.searchLabel}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <circle cx="7.5" cy="7.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M11 11.2 15 15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
            <a href={switchHref} hrefLang={locale === 'es' ? 'en' : 'es'} aria-label={copy.langLabel}>
              {copy.lang}
            </a>
            <button id="theme-toggle" type="button" aria-pressed={dark} aria-label={copy.theme} onClick={toggleTheme}>
              <span aria-hidden="true">◐</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
