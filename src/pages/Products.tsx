import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { productCategories, products, type ProductCategory } from '../data/products';
import { useI18n } from '../i18n/I18nProvider';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'all' | ProductCategory>('all');
  const { lang, text, localizeProduct, localizeLine } = useI18n();

  const filteredProducts = useMemo(
    () => (activeTab === 'all' ? products : products.filter((product) => product.line === activeTab)),
    [activeTab]
  );

  return (
    <div>
      <section className="pt-32 pb-16 bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 text-center animate-fade-up">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">{text.products.badge[lang]}</div>
          <h1 className="text-4xl lg:text-6xl font-bold font-headline tracking-tighter mb-6 text-on-surface">{text.products.title[lang]}</h1>
          <p className="text-lg text-on-surface-variant font-body max-w-3xl mx-auto leading-relaxed">{text.products.desc[lang]}</p>
        </div>
      </section>

      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 animate-fade-up">
            <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 hide-scrollbar">
              {[{ id: 'all' as const, label: lang === 'ko' ? '전체 제품' : lang === 'vi' ? 'Tất cả sản phẩm' : 'All Products' }, ...productCategories.slice(1).map(tab => ({ id: tab.id, label: localizeLine(tab.id as ProductCategory) }))].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap px-6 py-2 rounded-full font-headline font-semibold text-sm transition-colors interactive-scale ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-white text-on-surface border border-outline-variant/30 hover:border-primary/50'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end text-on-surface-variant">
              <div className="flex items-center gap-2 text-sm font-headline font-semibold"><Filter className="w-4 h-4" /> {text.products.browse[lang]}</div>
              <div className="flex items-center gap-2 text-sm font-headline font-semibold">{filteredProducts.length} {text.products.formulas[lang]} <ChevronDown className="w-4 h-4" /></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const localized = localizeProduct(product);
              return (
                <Link key={product.id} to={`/products/${product.slug}`} className="bg-white rounded-2xl p-5 border border-outline-variant/20 hover:border-primary/30 transition-colors group editorial-shadow block hover-lift animate-fade-up">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-surface-container-lowest product-card-gradient p-6">
                    <img src={product.image} alt={localized.name} className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                    {product.isSet ? <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{lang === 'ko' ? '세트' : 'Set'}</div> : null}
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="text-xs text-outline font-semibold uppercase tracking-wider">{localizeLine(product.line)}</div>
                    <div className="text-xs text-on-surface-variant">{product.capacity}</div>
                  </div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-2">{localized.shortName}</h3>
                  {localized.subtitle ? <p className="text-sm text-primary font-medium mb-3">{localized.subtitle}</p> : null}
                  <p className="text-on-surface-variant font-body text-sm leading-6 mb-4">{localized.benefit}</p>
                  <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-4">
                    <div className="font-body text-primary font-semibold text-lg">{product.priceDisplay}</div>
                    <div className="text-xs text-outline uppercase tracking-[0.2em]">{text.products.viewDetails[lang]}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
