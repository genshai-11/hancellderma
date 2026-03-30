import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Sparkles, Microscope, Users, Layers3 } from 'lucide-react';
import { featuredProducts, products } from '../data/products';

const heroProduct = products.find((product) => product.id === 'biopeptide-cream') ?? products[0];
const cleanseProduct = products.find((product) => product.id === 'ultra-deep-purifying-cleanser') ?? products[0];
const treatProduct = products.find((product) => product.id === 'hydrating-b5-serum') ?? products[0];
const moisturizeProduct = products.find((product) => product.id === 'biopeptide-cream') ?? products[0];
const protectProduct = products.find((product) => product.id === 'uv-shield-sunscreen') ?? products[0];

export default function Home() {
  return (
    <div>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-outline-variant/30 mb-8 animate-fade-up-delay-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold tracking-wide text-primary uppercase">Korean Dermatological Skincare</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-headline tracking-tighter leading-[1.1] mb-6 text-on-surface animate-fade-up-delay-1">
                Where Science<br />
                <span className="text-primary">Meets Skin</span>
              </h1>
              <p className="text-lg lg:text-xl text-on-surface-variant font-body mb-6 leading-relaxed max-w-xl animate-fade-up-delay-2">
                Trusted Korean dermatology formulas, engineered for every skin type — from deep hydration and brightening, to pore care and wrinkle correction.
              </p>
              <p className="text-base lg:text-lg text-on-surface-variant font-body mb-10 leading-relaxed max-w-lg animate-fade-up-delay-2">
                Science-backed skincare formulated in Korea to cleanse, treat, moisturize, and protect with visible everyday results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
                <Link to="/products" className="primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all text-center interactive-scale">
                  Explore Our Range
                </Link>
                <Link to="/about" className="px-8 py-4 rounded-xl font-headline font-semibold text-lg bg-white text-on-surface border border-outline-variant/30 hover:bg-surface-container-low transition-all text-center interactive-scale">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-up-delay-2">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-150"></div>
              <div className="relative z-10 rounded-3xl bg-white p-8 editorial-shadow animate-soft-float hover-lift">
                <img src={heroProduct.image} alt={heroProduct.name} className="rounded-2xl object-contain aspect-[4/5] w-full" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl editorial-shadow z-20 max-w-xs hover-lift animate-fade-up-delay-3">
                <div className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-2">Featured Product</div>
                <p className="font-headline font-bold text-on-surface text-lg mb-1">{heroProduct.shortName}</p>
                <p className="text-sm text-on-surface-variant font-body mb-3">Advanced anti-aging care with peptide and ceramide support.</p>
                <div className="font-semibold text-primary">{heroProduct.priceDisplay}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/20 bg-white py-8 animate-fade-up">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: Sparkles, text: 'Science-Backed Formulas' },
              { icon: CheckCircle2, text: 'Clinically Tested' },
              { icon: Droplets, text: 'All Skin Types' },
              { icon: ShieldCheck, text: 'K-Beauty Standard' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 hover-lift rounded-2xl p-4">
                <item.icon className="w-6 h-6 text-primary" />
                <span className="font-headline font-semibold text-on-surface">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.35fr] gap-10 items-start">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                <Microscope className="w-4 h-4" /> Brand Science
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-headline leading-tight mb-5 text-on-surface text-balance">
                Korean Derma Science, Engineered for Results
              </h2>
              <p className="text-on-surface-variant font-body text-lg leading-8 max-w-xl">
                Hancell is rooted in Korean dermatological research. Every formula is built with clinically studied active ingredients designed to deliver targeted, visible results — not promises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up-delay-1">
              {[
                {
                  icon: Microscope,
                  title: 'Backed by Dermatological Science',
                  desc: 'Clinically studied actives are selected for efficacy, comfort, and skin compatibility.',
                },
                {
                  icon: Users,
                  title: 'Designed for Everyone',
                  desc: 'Inclusive formulas are engineered to support sensitive, oily, combination, and dry skin types.',
                },
                {
                  icon: Layers3,
                  title: 'One Complete Routine',
                  desc: 'Cleanse, treat, moisturize, and protect with a Hancell system designed to work together seamlessly.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 lg:p-7 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up min-h-[260px] flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-3 text-on-surface leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant font-body leading-7 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12 gap-6 flex-col md:flex-row md:items-end animate-fade-up">
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Featured Products</div>
              <h2 className="text-4xl font-bold font-headline mb-4 text-on-surface">Explore Our Range</h2>
              <p className="text-on-surface-variant font-body text-lg max-w-2xl">
                From deep cleansing and hydration to brightening, anti-aging, and daily UV protection, discover the Hancell essentials for a complete skincare routine.
              </p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 font-headline font-semibold text-primary hover:text-primary-container transition-colors interactive-scale">
              View Full Collection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 border border-outline-variant/20 hover:border-primary/30 transition-colors group hover-lift animate-fade-up">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-lowest product-card-gradient p-4">
                  <img src={product.image} alt={product.name} className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                  {product.isSet ? (
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Set</div>
                  ) : null}
                </div>
                <div className="text-sm text-outline font-semibold uppercase tracking-wider mb-1">{product.line}</div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-1">{product.shortName}</h3>
                <div className="text-sm text-on-surface-variant mb-2">{product.capacity}</div>
                <div className="font-body text-primary font-semibold">{product.priceDisplay}</div>
              </div>
            ))}
          </div>
          <Link to="/products" className="md:hidden mt-8 flex items-center justify-center gap-2 font-headline font-semibold text-primary interactive-scale">
            View Full Collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">The Complete Lineup</div>
            <h2 className="text-4xl font-bold font-headline mb-4 text-on-surface">Every Step, Scientifically Covered</h2>
            <p className="text-on-surface-variant font-body text-lg">
              A four-step Hancell system inspired by the gold standard of Korean dermatological care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                label: 'Cleanse',
                title: cleanseProduct.shortName,
                desc: 'Remove impurities and makeup without compromising the skin barrier.',
                img: cleanseProduct.image,
              },
              {
                step: '02',
                label: 'Treat',
                title: treatProduct.shortName,
                desc: 'Apply targeted serums and actives to hydrate, brighten, and refine.',
                img: treatProduct.image,
              },
              {
                step: '03',
                label: 'Moisturize',
                title: moisturizeProduct.shortName,
                desc: 'Support the barrier and improve elasticity with nourishing daily care.',
                img: moisturizeProduct.image,
              },
              {
                step: '04',
                label: 'Protect',
                title: protectProduct.shortName,
                desc: 'Finish with broad daily UV defense and a comfortable dry-touch finish.',
                img: protectProduct.image,
              },
            ].map((item) => (
              <div key={item.step} className="group animate-fade-up">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-white p-6 editorial-shadow hover-lift">
                  <img src={item.img} alt={item.title} className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <span className="font-headline font-bold text-primary">{item.step} · {item.label}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-2 text-on-surface">{item.title}</h3>
                <p className="text-on-surface-variant font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-fixed mb-3">Skin Concern Guide</div>
            <h2 className="text-4xl font-bold font-headline mb-6">Find Your Routine</h2>
            <p className="text-surface-variant font-body text-lg leading-relaxed mb-8">
              Match your primary skin concern to a curated Hancell routine — each combination is designed to work synergistically for clearer, brighter, smoother-looking skin.
            </p>
            <Link to="/products" className="inline-flex items-center gap-2 primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all interactive-scale">
              Shop the Routine <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { concern: 'Dull / Uneven Tone', routine: 'OptiLight Cream + Hydrating B5 Serum + Brightening UV Shield SPF 50+' },
              { concern: 'Dark Spots / Melasma', routine: 'MelanoXpert Cream + Peel Care Set' },
              { concern: 'Aging / Wrinkles', routine: 'BioPeptide Cream + Hydrating B5 Serum' },
              { concern: 'Pores / Congestion', routine: 'Pore Deep Cleansing Water + Ultra Deep Purifying Cleanser' },
            ].map((item) => (
              <div key={item.concern} className="bg-white/6 border border-white/10 rounded-2xl p-6 hover-lift animate-fade-up">
                <h3 className="font-headline font-bold text-lg mb-3 text-surface">{item.concern}</h3>
                <p className="text-surface-variant font-body leading-7">{item.routine}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
