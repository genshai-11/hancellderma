import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Lang, languageLabels, languages, siteText, getLocalizedProduct, translateConcern, translateLine } from './messages';
import type { Product, ProductCategory } from '../data/products';

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  languages: Lang[];
  languageLabels: Record<Lang, string>;
  text: typeof siteText;
  localizeProduct: (product: Product) => Product;
  localizeLine: (line: ProductCategory) => string;
  localizeConcern: (concern?: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('hancell-lang') as Lang | null : null;
    return stored && languages.includes(stored) ? stored : 'ko';
  });

  useEffect(() => {
    window.localStorage.setItem('hancell-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nContextType>(() => ({
    lang,
    setLang,
    languages,
    languageLabels,
    text: siteText,
    localizeProduct: (product) => getLocalizedProduct(lang, product),
    localizeLine: (line) => translateLine(lang, line),
    localizeConcern: (concern) => translateConcern(lang, concern),
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
