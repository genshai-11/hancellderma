import { Link } from 'react-router-dom';
import { ArrowRight, Moon, Sparkles, Sun } from 'lucide-react';
import { products } from '../data/products';

const cleanser = products.find((product) => product.id === 'ultra-deep-purifying-cleanser') ?? products[0];
const serum = products.find((product) => product.id === 'hydrating-b5-serum') ?? products[0];
const moisturizer = products.find((product) => product.id === 'biopeptide-cream') ?? products[0];
const optilight = products.find((product) => product.id === 'optilight-cream') ?? products[0];
const sunscreen = products.find((product) => product.id === 'uv-shield-sunscreen') ?? products[0];

const routineSteps = [
  {
    step: '01',
    label: 'Cleanse',
    product: cleanser,
    usage: 'Use morning and evening as the first step to cleanse away impurities and refresh the skin.',
  },
  {
    step: '02',
    label: 'Treat',
    product: serum,
    usage: 'Apply after cleansing to deliver lightweight hydration and support the skin barrier.',
  },
  {
    step: '03',
    label: 'Moisturize',
    product: moisturizer,
    alternate: optilight,
    usage: 'Follow with a cream step to support moisture, comfort, and a smoother-looking complexion.',
  },
  {
    step: '04',
    label: 'Protect',
    product: sunscreen,
    usage: 'Finish every morning with SPF 50+ daily protection and reapply as needed throughout the day.',
  },
];

const concerns = [
  {
    concern: 'Dull / Uneven Tone',
    routine: 'OptiLight Cream + Hydrating B5 Serum + Brightening UV Shield SPF 50+',
  },
  {
    concern: 'Dark Spots / Melasma',
    routine: 'MelanoXpert Cream + RenewGlow Peeling Serum + SkinCalm Neutralizer Oil',
  },
  {
    concern: 'Aging / Wrinkles',
    routine: 'BioPeptide Cream + Hydrating B5 Serum',
  },
  {
    concern: 'Pores / Congestion',
    routine: 'Pore Deep Cleansing Water + Ultra Deep Purifying Cleanser',
  },
];

export default function Routine() {
  return (
    <div>
      <section className="pt-32 pb-16 bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 text-center animate-fade-up">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Skin Routine</div>
          <h1 className="text-4xl lg:text-6xl font-bold font-headline tracking-tighter mb-6 text-on-surface">
            Your Complete Hancell Routine
          </h1>
          <p className="text-lg text-on-surface-variant font-body max-w-3xl mx-auto leading-relaxed">
            A four-step routine inspired by Korean dermatological care — designed to cleanse, treat, moisturise, and protect for visible everyday results.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Sun className="w-6 h-6" />
                <h2 className="text-2xl font-bold font-headline text-on-surface">Morning</h2>
              </div>
              <p className="text-on-surface-variant font-body leading-7">
                Begin with cleansing, follow with targeted treatment, seal in moisture, then finish with daily UV protection.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up-delay-1">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Moon className="w-6 h-6" />
                <h2 className="text-2xl font-bold font-headline text-on-surface">Evening</h2>
              </div>
              <p className="text-on-surface-variant font-body leading-7">
                Repeat the routine without the SPF step, focusing on cleansing, hydration, and restorative care through the night.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {routineSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 border border-outline-variant/20 editorial-shadow group hover-lift animate-fade-up">
                <div className="relative aspect-[4/5] rounded-2xl bg-surface-container-lowest p-5 mb-6 overflow-hidden">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 shadow-sm text-sm font-headline font-bold text-primary">
                    {item.step}
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-primary text-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
                    {item.label}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface mb-2">{item.product.shortName}</h3>
                {item.alternate ? (
                  <p className="text-sm text-primary font-medium mb-3">Also suitable: {item.alternate.shortName}</p>
                ) : null}
                <p className="text-on-surface-variant font-body text-sm leading-6 mb-4">{item.usage}</p>
                <div className="font-semibold text-primary">{item.product.priceDisplay}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Skin Concern Guide</div>
            <h2 className="text-4xl font-bold font-headline mb-4 text-on-surface">Find the Right Combination</h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed">
              Match your primary concern with a Hancell routine combination drawn directly from the current product materials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concerns.map((item) => (
              <div key={item.concern} className="bg-white rounded-2xl p-8 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  <Sparkles className="w-4 h-4" /> Concern Focus
                </div>
                <h3 className="text-2xl font-bold font-headline text-on-surface mb-3">{item.concern}</h3>
                <p className="text-on-surface-variant font-body leading-7">{item.routine}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center animate-fade-up-delay-1">
            <Link to="/products" className="inline-flex items-center gap-2 primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all interactive-scale">
              Explore the Product Line <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
