import { Link, useLocation } from 'react-router-dom';
import navbarLogoImg from '../../image/logo-quare.png';
import { useI18n } from '../i18n/I18nProvider';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { lang, setLang, languages, languageLabels, text } = useI18n();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm animate-fade-up">
      <div className="flex justify-between items-center px-6 md:px-8 py-2 md:py-3 max-w-7xl mx-auto gap-6">
        <Link to="/" className="flex items-center text-on-surface whitespace-nowrap interactive-scale shrink-0">
          <img src={navbarLogoImg} alt="Hancell logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
        </Link>
        <div className="hidden lg:flex items-center gap-6 font-headline tracking-tight font-semibold text-sm xl:text-base">
          <Link to="/products" className={`nav-link-underline ${isActive('/products') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>{text.nav.products[lang]}</Link>
          <Link to="/routine" className={`nav-link-underline ${isActive('/routine') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>{text.nav.routine[lang]}</Link>
          <Link to="/science" className={`nav-link-underline ${isActive('/science') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>{text.nav.science[lang]}</Link>
          <Link to="/about" className={`nav-link-underline ${isActive('/about') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>{text.nav.about[lang]}</Link>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center rounded-full border border-outline-variant/30 bg-white/80 p-1">
            {languages.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLang(item)}
                className={`px-3 py-1 rounded-full text-xs font-headline font-bold transition-colors ${lang === item ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {languageLabels[item]}
              </button>
            ))}
          </div>
          <Link to="/products" className="primary-gradient text-white px-4 md:px-6 py-2 rounded-lg font-headline font-semibold transition-transform active:scale-95 hover:opacity-90 whitespace-nowrap interactive-scale text-sm md:text-base">
            {text.nav.cta[lang]}
          </Link>
        </div>
      </div>
    </nav>
  );
}
