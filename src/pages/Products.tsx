import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { productCategories, products, type ProductCategory } from '../data/products';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'all' | ProductCategory>('all');

  const filteredProducts = useMemo(
    () => (activeTab === 'all' ? products : products.filter((product) => product.line === activeTab)),
    [activeTab]
  );

  return (
    <div>
      <section className="pt-32 pb-16 bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 text-center animate-fade-up">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Product Line</div>
          <h1 className="text-4xl lg:text-6xl font-bold font-headline tracking-tighter mb-6 text-on-surface">
            Explore the Hancell Collection
          </h1>
          <p className="text-lg text-on-surface-variant font-body max-w-3xl mx-auto leading-relaxed">
            Discover Korean dermatological skincare designed to cleanse, treat, moisturize, and protect. Each formula is crafted with performance-led ingredients for visible, everyday results.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 animate-fade-up">
            <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 hide-scrollbar">
              {productCategories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap px-6 py-2 rounded-full font-headline font-semibold text-sm transition-colors interactive-scale ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-on-surface border border-outline-variant/30 hover:border-primary/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end text-on-surface-variant">
              <div className="flex items-center gap-2 text-sm font-headline font-semibold">
                <Filter className="w-4 h-4" /> Browse by Line
              </div>
              <div className="flex items-center gap-2 text-sm font-headline font-semibold">
                {filteredProducts.length} Formulas <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="bg-white rounded-2xl p-5 border border-outline-variant/20 hover:border-primary/30 transition-colors group editorial-shadow block hover-lift animate-fade-up"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-surface-container-lowest product-card-gradient p-6">
                  <img src={product.image} alt={product.name} className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                  {product.isSet ? (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Peel Set</div>
                  ) : null}
                </div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="text-xs text-outline font-semibold uppercase tracking-wider">{product.line}</div>
                  <div className="text-xs text-on-surface-variant">{product.capacity}</div>
                </div>
                <h3 className="font-headline font-bold text-xl text-on-surface mb-2">{product.shortName}</h3>
                {product.subtitle ? <p className="text-sm text-primary font-medium mb-3">{product.subtitle}</p> : null}
                <p className="text-on-surface-variant font-body text-sm leading-6 mb-4">{product.benefit}</p>
                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-4">
                  <div className="font-body text-primary font-semibold text-lg">{product.priceDisplay}</div>
                  <div className="text-xs text-outline uppercase tracking-[0.2em]">View Details</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
