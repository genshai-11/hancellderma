import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Sparkles, Microscope, Users, Layers3 } from 'lucide-react';
import { featuredProducts, products } from '../data/products';
import heroCollectionImg from '../../image/4fda9141da055b5b0214.jpg';
import hancellLogoImg from '../../image/HANCELL_bluecolor2.png';
import { useI18n } from '../i18n/I18nProvider';

const cleanseProduct = products.find((product) => product.id === 'ultra-deep-purifying-cleanser') ?? products[0];
const treatProduct = products.find((product) => product.id === 'hydrating-b5-serum') ?? products[0];
const moisturizeProduct = products.find((product) => product.id === 'biopeptide-cream') ?? products[0];
const protectProduct = products.find((product) => product.id === 'uv-shield-sunscreen') ?? products[0];

export default function Home() {
  const { lang, text, localizeProduct, localizeLine, localizeConcern } = useI18n();
  const heroFeatured = featuredProducts.map(localizeProduct);

  return (
    <div>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
            <div className="max-w-2xl animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-outline-variant/30 mb-8 animate-fade-up-delay-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold tracking-wide text-primary uppercase">{text.home.badge[lang]}</span>
              </div>
              <img src={hancellLogoImg} alt="Hancell logo" className="h-12 w-auto mb-6 animate-fade-up-delay-1" />
              <h1 className="text-5xl lg:text-7xl font-bold font-headline tracking-tighter leading-[1.1] mb-6 text-on-surface animate-fade-up-delay-1">
                {text.home.heroTitleA[lang]}<br />
                <span className="text-primary">{text.home.heroTitleB[lang]}</span>
              </h1>
              <p className="text-lg lg:text-xl text-on-surface-variant font-body mb-6 leading-relaxed max-w-xl animate-fade-up-delay-2">
                {text.home.heroDesc1[lang]}
              </p>
              <p className="text-base lg:text-lg text-on-surface-variant font-body mb-10 leading-relaxed max-w-lg animate-fade-up-delay-2">
                {text.home.heroDesc2[lang]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
                <Link to="/products" className="primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all text-center interactive-scale">
                  {text.home.cta1[lang]}
                </Link>
                <Link to="/about" className="px-8 py-4 rounded-xl font-headline font-semibold text-lg bg-white text-on-surface border border-outline-variant/30 hover:bg-surface-container-low transition-all text-center interactive-scale">
                  {text.home.cta2[lang]}
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-up-delay-2">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-150"></div>
              <div className="relative z-10 rounded-[2rem] bg-white p-3 md:p-4 editorial-shadow animate-soft-float hover-lift">
                <div className="rounded-[1.5rem] overflow-hidden bg-surface-container-lowest border border-outline-variant/10 min-h-[520px] md:min-h-[640px] flex items-center justify-center">
                  <img src={heroCollectionImg} alt="Hancell skincare collection" className="w-full h-full object-contain object-center scale-[1.02] -translate-y-6 md:-translate-y-8" />
                </div>
              </div>
              <div className="absolute -bottom-28 md:-bottom-32 lg:-bottom-24 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 bg-white p-4 rounded-2xl editorial-shadow z-20 w-[92%] max-w-md hover-lift animate-fade-up-delay-3 border border-outline-variant/20">
                <div className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-2">{text.home.featuredCollection[lang]}</div>
                <p className="font-headline font-bold text-on-surface text-lg mb-3">{text.home.routineName[lang]}</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    lang === 'ko' ? '클렌징' : lang === 'vi' ? 'Làm sạch' : 'Cleanse',
                    lang === 'ko' ? '보습 & 케어' : lang === 'vi' ? 'Cấp ẩm & điều trị' : 'Hydrate & Treat',
                    lang === 'ko' ? '보습' : lang === 'vi' ? 'Dưỡng ẩm' : 'Moisturize',
                    lang === 'ko' ? '보호' : lang === 'vi' ? 'Bảo vệ' : 'Protect',
                  ].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em]">
                      <Sparkles className="w-3.5 h-3.5" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-10 animate-fade-up">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest/70 backdrop-blur-sm px-6 py-6 md:px-8 editorial-shadow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { icon: Sparkles, text: text.home.trustItems.science[lang] },
                { icon: CheckCircle2, text: text.home.trustItems.tested[lang] },
                { icon: Droplets, text: text.home.trustItems.allSkin[lang] },
                { icon: ShieldCheck, text: text.home.trustItems.standard[lang] },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 hover-lift rounded-2xl p-4 bg-white/70 border border-transparent hover:border-primary/15 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                  <span className="font-headline font-semibold text-on-surface">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.35fr] gap-10 items-start">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                <Microscope className="w-4 h-4" /> {text.home.brandScience[lang]}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-headline leading-tight mb-5 text-on-surface text-balance">{text.home.sectionTitle[lang]}</h2>
              <p className="text-on-surface-variant font-body text-lg leading-8 max-w-xl">{text.home.sectionDesc[lang]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up-delay-1">
              {[
                { icon: Microscope, title: text.home.cards.scienceTitle[lang], desc: text.home.cards.scienceDesc[lang] },
                { icon: Users, title: text.home.cards.everyoneTitle[lang], desc: text.home.cards.everyoneDesc[lang] },
                { icon: Layers3, title: text.home.cards.routineTitle[lang], desc: text.home.cards.routineDesc[lang] },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 lg:p-7 border border-outline-variant/20 editorial-shadow hover-lift animate-fade-up min-h-[260px] flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-3 text-on-surface leading-snug text-balance">{item.title}</h3>
                  <p className="text-on-surface-variant font-body leading-7 text-sm md:text-base">{item.desc}</p>
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
              <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">{text.home.featuredProducts[lang]}</div>
              <h2 className="text-4xl font-bold font-headline mb-4 text-on-surface">{text.home.exploreRange[lang]}</h2>
              <p className="text-on-surface-variant font-body text-lg max-w-2xl">{text.home.exploreDesc[lang]}</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 font-headline font-semibold text-primary hover:text-primary-container transition-colors interactive-scale">
              {text.home.viewAll[lang]} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroFeatured.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 border border-outline-variant/20 hover:border-primary/30 transition-colors group hover-lift animate-fade-up">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-lowest product-card-gradient p-4">
                  <img src={product.image} alt={product.name} className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                  {product.isSet ? <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{lang === 'ko' ? '세트' : lang === 'vi' ? 'Set' : 'Set'}</div> : null}
                </div>
                <div className="text-sm text-outline font-semibold uppercase tracking-wider mb-1">{localizeLine(product.line)}</div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-1">{product.shortName}</h3>
                <div className="text-sm text-on-surface-variant mb-2">{product.capacity}</div>
                <div className="font-body text-primary font-semibold">{product.priceDisplay}</div>
              </div>
            ))}
          </div>
          <Link to="/products" className="md:hidden mt-8 flex items-center justify-center gap-2 font-headline font-semibold text-primary interactive-scale">
            {text.home.viewAll[lang]} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">{text.home.lineupBadge[lang]}</div>
            <h2 className="text-4xl font-bold font-headline mb-4 text-on-surface">{text.home.lineupTitle[lang]}</h2>
            <p className="text-on-surface-variant font-body text-lg">{text.home.lineupDesc[lang]}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', label: lang === 'ko' ? '클렌징' : lang === 'vi' ? 'Làm sạch' : 'Cleanse', title: localizeProduct(cleanseProduct).shortName, desc: lang === 'ko' ? '피부 장벽은 지키면서 노폐물과 메이크업을 말끔하게 지워줍니다.' : lang === 'vi' ? 'Làm sạch cặn bẩn và lớp trang điểm mà vẫn giữ sự cân bằng của da.' : 'Remove impurities and makeup without compromising the skin barrier.', img: cleanseProduct.image },
              { step: '02', label: lang === 'ko' ? '케어' : lang === 'vi' ? 'Điều trị' : 'Treat', title: localizeProduct(treatProduct).shortName, desc: lang === 'ko' ? '수분, 브라이트닝, 피부 결 케어를 위한 집중 세럼 단계입니다.' : lang === 'vi' ? 'Bước serum chuyên sâu giúp cấp ẩm, làm sáng và cải thiện bề mặt da.' : 'Apply targeted serums and actives to hydrate, brighten, and refine.', img: treatProduct.image },
              { step: '03', label: lang === 'ko' ? '보습' : lang === 'vi' ? 'Dưỡng ẩm' : 'Moisturize', title: localizeProduct(moisturizeProduct).shortName, desc: lang === 'ko' ? '보습과 탄력, 피부 장벽 컨디션을 편안하게 관리합니다.' : lang === 'vi' ? 'Hỗ trợ độ ẩm, độ đàn hồi và sự dễ chịu cho làn da.' : 'Support the barrier and improve elasticity with nourishing daily care.', img: moisturizeProduct.image },
              { step: '04', label: lang === 'ko' ? '보호' : lang === 'vi' ? 'Bảo vệ' : 'Protect', title: localizeProduct(protectProduct).shortName, desc: lang === 'ko' ? '데일리 자외선 차단으로 피부를 편안하게 보호합니다.' : lang === 'vi' ? 'Bảo vệ da hằng ngày với bước chống nắng phổ rộng.' : 'Finish with broad daily UV defense and a comfortable dry-touch finish.', img: protectProduct.image },
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

      <section className="py-20 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-fixed mb-3">{text.home.concernBadge[lang]}</div>
            <h2 className="text-4xl font-bold font-headline mb-6">{text.home.concernTitle[lang]}</h2>
            <p className="text-surface-variant font-body text-lg leading-relaxed mb-8">{text.home.concernDesc[lang]}</p>
            <Link to="/products" className="inline-flex items-center gap-2 primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all interactive-scale">
              {text.home.shopRoutine[lang]} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { concern: 'Dull / Uneven Tone', routine: localizeProduct(products.find((p)=>p.id==='optilight-cream')!).shortName + ' + ' + localizeProduct(treatProduct).shortName + ' + ' + localizeProduct(protectProduct).shortName },
              { concern: 'Dark Spots / Melasma', routine: localizeProduct(products.find((p)=>p.id==='melanoxpert-cream')!).shortName + ' + ' + localizeProduct(products.find((p)=>p.id==='peel-care-set')!).shortName },
              { concern: 'Aging / Wrinkles', routine: localizeProduct(moisturizeProduct).shortName + ' + ' + localizeProduct(treatProduct).shortName },
              { concern: 'Pores / Congestion', routine: localizeProduct(products.find((p)=>p.id==='pore-deep-cleansing-water')!).shortName + ' + ' + localizeProduct(cleanseProduct).shortName },
            ].map((item) => (
              <div key={item.concern} className="bg-white/6 border border-white/10 rounded-2xl p-6 hover-lift animate-fade-up">
                <h3 className="font-headline font-bold text-lg mb-3 text-surface">{localizeConcern(item.concern)}</h3>
                <p className="text-surface-variant font-body leading-7">{item.routine}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
