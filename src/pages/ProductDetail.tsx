import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Droplets, FlaskConical, Layers3, Sparkles } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useI18n } from '../i18n/I18nProvider';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { lang, text, localizeProduct, localizeLine, localizeConcern } = useI18n();

  if (!product) return <Navigate to="/products" replace />;

  const localized = localizeProduct(product);
  const relatedProducts = getRelatedProducts(product).map(localizeProduct);

  return (
    <div>
      <section className="pt-32 pb-16 bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary font-headline font-semibold mb-8 hover:text-primary-container transition-colors interactive-scale">
            <ArrowLeft className="w-4 h-4" /> {text.detail.back[lang]}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-3xl p-8 editorial-shadow border border-outline-variant/20 hover-lift animate-fade-up">
              <img src={product.image} alt={localized.name} className="w-full aspect-[4/5] object-contain" />
            </div>
            <div className="animate-fade-up-delay-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">{localizeLine(product.line)}</span>
                <span className="inline-flex items-center rounded-full bg-white border border-outline-variant/20 px-4 py-2 text-xs text-on-surface-variant">{product.capacity}</span>
                {product.isSet ? <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{text.detail.set[lang]}</span> : null}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-headline tracking-tighter text-on-surface mb-4">{localized.shortName}</h1>
              {localized.subtitle ? <p className="text-lg text-primary font-medium mb-4">{localized.subtitle}</p> : null}
              <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-6">{localized.detailSummary}</p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="text-3xl font-bold font-headline text-primary">{product.priceDisplay}</div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-outline-variant/20 px-4 py-2 text-sm font-medium text-on-surface"><Sparkles className="w-4 h-4 text-primary" /> {text.detail.allSkin[lang]}</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {localized.keyHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white rounded-2xl border border-outline-variant/20 p-4 hover-lift"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-on-surface font-body">{item}</span></div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/products" className="primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all interactive-scale">{text.detail.exploreLine[lang]}</Link>
                <Link to="/routine" className="px-8 py-4 rounded-xl font-headline font-semibold text-lg bg-white text-on-surface border border-outline-variant/30 hover:bg-surface-container-low transition-all interactive-scale">{text.detail.routineGuide[lang]}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up">
            <div className="flex items-center gap-3 mb-3 text-primary"><Layers3 className="w-6 h-6" /><div className="text-sm font-semibold tracking-[0.2em] uppercase">{text.detail.benefits[lang]}</div></div>
            <h2 className="text-3xl font-bold font-headline text-on-surface mb-4">{text.detail.whatItDoes[lang]}</h2>
            <p className="text-on-surface-variant font-body leading-8 mb-6">{localized.benefit}</p>
            <div className="flex flex-wrap gap-3">{localized.suitableFor.map((item) => <div key={item} className="inline-flex items-center gap-2 rounded-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-2 text-sm font-medium text-on-surface interactive-scale"><Droplets className="w-4 h-4 text-primary" />{item}</div>)}</div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up-delay-1">
            <div className="flex items-center gap-3 mb-3 text-primary"><FlaskConical className="w-6 h-6" /><div className="text-sm font-semibold tracking-[0.2em] uppercase">{text.detail.ingredientFocus[lang]}</div></div>
            <h2 className="text-3xl font-bold font-headline text-on-surface mb-4">{text.detail.ingredientSnapshot[lang]}</h2>
            <p className="text-on-surface-variant font-body leading-8 mb-6">{localized.ingredients}</p>
            <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/20 p-5 text-sm text-on-surface-variant leading-7"><span className="font-semibold text-on-surface">{text.detail.fullIngredients[lang]}:</span> {localized.fullIngredients}</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up">
              <div className="flex items-center gap-3 mb-3 text-primary"><Sparkles className="w-6 h-6" /><div className="text-sm font-semibold tracking-[0.2em] uppercase">{text.detail.routineContext[lang]}</div></div>
              <h2 className="text-3xl font-bold font-headline text-on-surface mb-4">{text.detail.fitLine[lang]}</h2>
              <p className="text-on-surface-variant font-body leading-8 mb-6">{text.detail.fitDesc[lang]} <span className="font-semibold text-on-surface">{localizeLine(product.line)}</span> {text.detail.canExplore[lang]}</p>
              <div className="flex flex-wrap gap-3"><div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">{localizeLine(product.line)}</div><div className="inline-flex items-center rounded-full bg-white border border-outline-variant/20 px-4 py-2 text-sm font-medium text-on-surface">{text.detail.concern[lang]}: {localizeConcern(product.relatedConcern)}</div></div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up-delay-1 flex flex-col justify-between">
              <div><div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">{text.detail.quickView[lang]}</div><h2 className="text-3xl font-bold font-headline text-on-surface mb-4">{text.detail.atGlance[lang]}</h2></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl bg-surface-container-lowest p-5 border border-outline-variant/20 interactive-scale"><div className="text-xs uppercase tracking-[0.2em] text-outline font-semibold mb-2">{text.detail.line[lang]}</div><div className="font-headline font-bold text-on-surface text-lg">{localizeLine(product.line)}</div></div>
                <div className="rounded-2xl bg-surface-container-lowest p-5 border border-outline-variant/20 interactive-scale"><div className="text-xs uppercase tracking-[0.2em] text-outline font-semibold mb-2">{text.detail.capacity[lang]}</div><div className="font-headline font-bold text-on-surface text-lg">{product.capacity}</div></div>
                <div className="rounded-2xl bg-surface-container-lowest p-5 border border-outline-variant/20 sm:col-span-2 interactive-scale"><div className="text-xs uppercase tracking-[0.2em] text-outline font-semibold mb-2">{text.detail.price[lang]}</div><div className="font-headline font-bold text-primary text-2xl">{product.priceDisplay}</div></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mb-10 gap-6 flex-col md:flex-row md:items-end animate-fade-up">
            <div><div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">{text.detail.related[lang]}</div><h2 className="text-4xl font-bold font-headline text-on-surface">{text.detail.continue[lang]}</h2></div>
            <Link to="/products" className="hidden md:flex items-center gap-2 font-headline font-semibold text-primary hover:text-primary-container transition-colors interactive-scale">{text.detail.viewAll[lang]} <ArrowRight className="w-5 h-5" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link key={item.slug} to={`/products/${item.slug}`} className="bg-white rounded-2xl p-5 border border-outline-variant/20 hover:border-primary/30 transition-colors group editorial-shadow block hover-lift animate-fade-up">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-surface-container-lowest product-card-gradient p-6"><img src={item.image} alt={item.name} className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="flex items-center justify-between gap-4 mb-2"><div className="text-xs text-outline font-semibold uppercase tracking-wider">{localizeLine(item.line)}</div><div className="text-xs text-on-surface-variant">{item.capacity}</div></div>
                <h3 className="font-headline font-bold text-xl text-on-surface mb-2">{item.shortName}</h3>
                <p className="text-on-surface-variant font-body text-sm leading-6 mb-4">{item.benefit}</p>
                <div className="font-body text-primary font-semibold text-lg">{item.priceDisplay}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
