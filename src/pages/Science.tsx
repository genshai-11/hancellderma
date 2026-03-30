import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Droplets, Shield, Sparkles } from 'lucide-react';
import { products } from '../data/products';

const biopeptide = products.find((product) => product.id === 'biopeptide-cream') ?? products[0];
const serum = products.find((product) => product.id === 'hydrating-b5-serum') ?? products[0];
const sunscreen = products.find((product) => product.id === 'uv-shield-sunscreen') ?? products[0];
const peelSet = products.find((product) => product.id === 'peel-care-set') ?? products[0];

const pillars = [
  {
    icon: Sparkles,
    title: 'Peptide Technology',
    badge: 'Wrinkle Support',
    description:
      'Multi-peptide complexes that signal skin cells to produce collagen, helping reduce the look of wrinkles from within.',
    product: biopeptide,
  },
  {
    icon: Droplets,
    title: 'Hydro-Infusion',
    badge: 'Hydration',
    description:
      'A water-binding approach designed to deliver moisture and support lasting hydration through lightweight, skin-friendly textures.',
    product: serum,
  },
  {
    icon: Shield,
    title: 'Barrier Shield',
    badge: 'Barrier Care',
    description:
      "Ceramide NP helps reinforce the skin's natural lipid barrier, reducing moisture loss and supporting protection against environmental stress.",
    product: sunscreen,
  },
  {
    icon: Beaker,
    title: 'Triple Acid Peel',
    badge: 'Texture Refining',
    description:
      'A professional-style combination of AHA, BHA, and PHA designed for controlled exfoliation and refined-looking skin texture.',
    product: peelSet,
  },
];

const metrics = [
  { label: 'Hydration', value: '95%', note: 'showed improved hydration' },
  { label: 'Wrinkle Depth', value: '87%', note: 'reduced wrinkle depth in 4 weeks' },
  { label: 'Testing', value: '100%', note: 'dermatologist tested' },
  { label: 'Additives', value: '0', note: 'harmful additives' },
];

export default function Science() {
  return (
    <div>
      <section className="pt-32 pb-16 bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 text-center animate-fade-up">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Science & Tech</div>
          <h1 className="text-4xl lg:text-6xl font-bold font-headline tracking-tighter mb-6 text-on-surface">
            The Science Behind Hancell Derma
          </h1>
          <p className="text-lg text-on-surface-variant font-body max-w-3xl mx-auto leading-relaxed">
            Korean biotechnology meets dermatological precision through carefully selected actives, barrier-supportive care, and routine-based formulation design.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 interactive-scale">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                      {item.badge}
                    </div>
                    <h2 className="text-2xl font-bold font-headline text-on-surface mb-3">{item.title}</h2>
                    <p className="text-on-surface-variant font-body leading-7">{item.description}</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-5 flex items-center gap-4 border border-outline-variant/20 interactive-scale">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-contain shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-outline font-semibold mb-1">Featured Formula</div>
                    <div className="font-headline font-bold text-on-surface">{item.product.shortName}</div>
                    <div className="text-sm text-primary font-medium">{item.product.priceDisplay}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-fixed mb-3">Reported Results</div>
            <h2 className="text-4xl font-bold font-headline mb-4">Visible Performance from Current Source Materials</h2>
            <p className="text-surface-variant font-body text-lg leading-relaxed">
              These statements are presented exactly as reported in the current Hancell source materials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-white/6 border border-white/10 rounded-2xl p-8 text-center hover-lift animate-fade-up">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4 interactive-scale">
                  <Sparkles className="w-6 h-6 text-primary-fixed" />
                </div>
                <div className="font-headline text-4xl font-bold text-surface mb-2">{metric.value}</div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-fixed mb-2">{metric.label}</div>
                <p className="text-surface-variant font-body leading-6">{metric.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center animate-fade-up-delay-1">
            <Link to="/products" className="inline-flex items-center gap-2 primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all interactive-scale">
              Discover the Collection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
