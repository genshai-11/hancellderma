import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function Footer() {
  const { lang, text } = useI18n();

  return (
    <footer className="bg-on-surface text-surface py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-headline font-bold mb-4">Hancell Derma</h2>
          <p className="text-surface-variant font-body mb-6 max-w-sm leading-7">
            {text.footer.brand[lang]}
          </p>

        </div>
        <div>
          <h4 className="font-headline font-bold mb-4 text-primary-fixed">{text.footer.explore[lang]}</h4>
          <ul className="space-y-2 font-body text-surface-variant">
            <li><Link to="/products" className="hover:text-white transition-colors">{text.footer.productLine[lang]}</Link></li>
            <li><Link to="/routine" className="hover:text-white transition-colors">{text.footer.skinRoutine[lang]}</Link></li>
            <li><Link to="/science" className="hover:text-white transition-colors">{text.footer.science[lang]}</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">{text.footer.story[lang]}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold mb-4 text-primary-fixed">{text.footer.connect[lang]}</h4>
          <ul className="space-y-2 font-body text-surface-variant">
            <li><Link to="/contact" className="hover:text-white transition-colors">{text.footer.inquiries[lang]}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">{text.footer.partnerships[lang]}</Link></li>
            <li><a href="mailto:contact@hancellderma.com" className="hover:text-white transition-colors">{text.footer.stockists[lang]}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 text-center text-surface-variant font-body text-sm">
        <p>&copy; 2025 {text.footer.rights[lang]}</p>
      </div>
    </footer>
  );
}
