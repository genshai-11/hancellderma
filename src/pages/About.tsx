import { Dna, Leaf, Microscope, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';

const heroProduct = products.find((product) => product.id === 'biopeptide-cream') ?? products[0];
const supportProduct = products.find((product) => product.id === 'melanoxpert-cream') ?? products[0];

export default function About() {
  return (
    <div>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-fixed mb-4">Our Story</div>
              <h1 className="text-5xl lg:text-7xl font-bold font-headline tracking-tighter leading-[1.1] mb-6">
                Korean Derma Science,<br />
                Engineered for Results
              </h1>
              <p className="text-xl text-surface-variant font-body mb-10 leading-relaxed">
                Hancell Derma is rooted in Korean dermatological research, with every formula designed to deliver targeted, visible results across hydration, brightening, pore care, and wrinkle correction.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 editorial-shadow">
              <img src={heroProduct.image} alt={heroProduct.name} className="w-full aspect-[4/5] object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20">
              <img src={supportProduct.image} alt={supportProduct.name} className="rounded-2xl object-contain aspect-[4/5] w-full" />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-headline mb-6 text-on-surface">Where Science Meets Skin</h2>
              <p className="text-lg text-on-surface-variant font-body mb-6 leading-relaxed">
                Every Hancell formula is built around clinically studied active ingredients selected for efficacy, comfort, and skin compatibility. Our approach is simple: no unnecessary fillers, no exaggerated claims — only purposeful skincare designed to perform.
              </p>
              <p className="text-lg text-on-surface-variant font-body mb-8 leading-relaxed">
                From sensitive to oily, combination to dry, Hancell develops inclusive formulas for all skin types. The collection is designed as a complete routine so each step works in harmony with the next.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
                <div>
                  <div className="text-4xl font-bold font-headline text-primary mb-2">All</div>
                  <div className="text-sm font-semibold text-outline uppercase tracking-wider">Skin Types</div>
                </div>
                <div>
                  <div className="text-4xl font-bold font-headline text-primary mb-2">4</div>
                  <div className="text-sm font-semibold text-outline uppercase tracking-wider">Routine Steps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-headline mb-4 text-on-surface">The Hancell Standard</h2>
            <p className="text-on-surface-variant font-body text-lg">Four principles guide every formula in the collection.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Microscope,
                title: 'Science-Backed Formulas',
                desc: 'Active ingredients are selected for clinically proven efficacy and visible performance.',
              },
              {
                icon: ShieldCheck,
                title: 'Dermatology-Led Care',
                desc: 'Each formula is created with a derma-first mindset focused on comfort, balance, and results.',
              },
              {
                icon: Dna,
                title: 'Complete Routine Design',
                desc: 'Cleanse, treat, moisturize, and protect with products designed to work seamlessly together.',
              },
              {
                icon: Leaf,
                title: 'Made for All Skin Types',
                desc: 'Inclusive formulas are engineered to support daily use across a wide range of skin needs.',
              },
            ].map((pillar, i) => (
              <div key={i} className="bg-surface p-8 rounded-2xl border border-outline-variant/20">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-3 text-on-surface">{pillar.title}</h3>
                <p className="text-on-surface-variant font-body">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
