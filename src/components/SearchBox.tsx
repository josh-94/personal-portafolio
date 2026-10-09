'use client';

import { useEffect, useRef } from 'react';
import type { Locale } from '../i18n/ui';

type Pagefind = {
  init: () => Promise<void>;
  search: (term: string, options: { filters: { lang: string } }) => Promise<{
    results: Array<{ data: () => Promise<{ url: string; meta: { title: string }; excerpt: string }> }>;
  }>;
};

export function SearchBox({ locale, label, empty, dev }: { locale: Locale; label: string; empty: string; dev: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const list = listRef.current;
    const status = statusRef.current;
    if (!input || !list || !status) return;
    let pagefind: Pagefind | null = null;
    let timer = 0;
    let cancelled = false;

    async function ready() {
      try {
        const importer = new Function('return import("/pagefind/pagefind.js")') as () => Promise<Pagefind>;
        pagefind = await importer();
        await pagefind.init();
        return true;
      } catch {
        if (!cancelled && status) status.textContent = dev;
        return false;
      }
    }

    async function run() {
      if (!pagefind || !list || !status || !input) return;
      const term = input.value.trim();
      list.innerHTML = '';
      if (term.length < 2) {
        status.textContent = '';
        return;
      }
      const search = await pagefind.search(term, { filters: { lang: locale } });
      const results = await Promise.all(search.results.slice(0, 12).map((result) => result.data()));
      if (cancelled) return;
      status.textContent = results.length ? '' : empty;
      for (const result of results) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = result.url;
        link.textContent = result.meta.title;
        const excerpt = document.createElement('p');
        excerpt.innerHTML = result.excerpt;
        item.append(link, excerpt);
        list.append(item);
      }
    }

    const onInput = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(run, 180);
    };

    ready().then((ok) => {
      if (ok) input.addEventListener('input', onInput);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      input.removeEventListener('input', onInput);
    };
  }, [dev, empty, locale]);

  return (
    <form className="search-ui" role="search" onSubmit={(event) => event.preventDefault()}>
      <label>
        {label}
        <input id="q" name="q" type="search" autoComplete="off" ref={inputRef} />
      </label>
      <p id="search-status" className="empty" aria-live="polite" ref={statusRef} />
      <ul id="search-results" ref={listRef} />
    </form>
  );
}
