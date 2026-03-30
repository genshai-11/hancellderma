import { Dna, Leaf, Microscope, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import { useI18n } from '../i18n/I18nProvider';

const heroProduct = products.find((product) => product.id === 'biopeptide-cream') ?? products[0];
const supportProduct = products.find((product) => product.id === 'melanoxpert-cream') ?? products[0];

export default function About() {
  const { lang, text } = useI18n();
  return (
    <div>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-fixed mb-4">{text.about.story[lang]}</div>
              <h1 className="text-5xl lg:text-7xl font-bold font-headline tracking-tighter leading-[1.1] mb-6">{text.about.title[lang]}</h1>
              <p className="text-xl text-surface-variant font-body mb-10 leading-relaxed">{text.about.hero[lang]}</p>
            </div>
            <div className="bg-white rounded-3xl p-8 editorial-shadow"><img src={heroProduct.image} alt={heroProduct.name} className="w-full aspect-[4/5] object-contain" /></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20"><img src={supportProduct.image} alt={supportProduct.name} className="rounded-2xl object-contain aspect-[4/5] w-full" /></div>
            <div>
              <h2 className="text-4xl font-bold font-headline mb-6 text-on-surface">{text.about.skinTitle[lang]}</h2>
              <p className="text-lg text-on-surface-variant font-body mb-6 leading-relaxed">{text.about.skinDesc1[lang]}</p>
              <p className="text-lg text-on-surface-variant font-body mb-8 leading-relaxed">{text.about.skinDesc2[lang]}</p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
                <div><div className="text-4xl font-bold font-headline text-primary mb-2">{text.about.all[lang]}</div><div className="text-sm font-semibold text-outline uppercase tracking-wider">{text.about.skinTypes[lang]}</div></div>
                <div><div className="text-4xl font-bold font-headline text-primary mb-2">4</div><div className="text-sm font-semibold text-outline uppercase tracking-wider">{text.about.steps[lang]}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16"><h2 className="text-4xl font-bold font-headline mb-4 text-on-surface">{text.about.standard[lang]}</h2><p className="text-on-surface-variant font-body text-lg">{text.about.standardDesc[lang]}</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Microscope, title: text.about.pillars.p1t[lang], desc: text.about.pillars.p1d[lang] },
              { icon: ShieldCheck, title: text.about.pillars.p2t[lang], desc: text.about.pillars.p2d[lang] },
              { icon: Dna, title: text.about.pillars.p3t[lang], desc: text.about.pillars.p3d[lang] },
              { icon: Leaf, title: text.about.pillars.p4t[lang], desc: text.about.pillars.p4d[lang] },
            ].map((pillar, i) => (
              <div key={i} className="bg-surface p-8 rounded-2xl border border-outline-variant/20"><div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6"><pillar.icon className="w-7 h-7 text-primary" /></div><h3 className="text-xl font-bold font-headline mb-3 text-on-surface">{pillar.title}</h3><p className="text-on-surface-variant font-body">{pillar.desc}</p></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
