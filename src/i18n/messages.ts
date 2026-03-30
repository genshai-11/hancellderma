import type { Product, ProductCategory } from '../data/products';

export type Lang = 'ko' | 'en' | 'vi';

export const languages: Lang[] = ['ko', 'en', 'vi'];

export const languageLabels: Record<Lang, string> = {
  ko: 'KO',
  en: 'EN',
  vi: 'VI',
};

export const translateLine = (lang: Lang, line: ProductCategory) => {
  const map: Record<ProductCategory, Record<Lang, string>> = {
    Cleansing: { ko: '클렌징', en: 'Cleansing', vi: 'Làm sạch' },
    'Skin Care': { ko: '스킨케어', en: 'Skin Care', vi: 'Chăm sóc da' },
    'Sun Care': { ko: '선 케어', en: 'Sun Care', vi: 'Chống nắng' },
  };
  return map[line][lang];
};

export const translateConcern = (lang: Lang, concern?: string) => {
  const map: Record<string, Record<Lang, string>> = {
    'Dull / Uneven Tone': { ko: '칙칙함 / 톤 불균형', en: 'Dull / Uneven Tone', vi: 'Da xỉn màu / không đều màu' },
    'Dark Spots / Melasma': { ko: '잡티 / 멜라스마', en: 'Dark Spots / Melasma', vi: 'Đốm nâu / nám' },
    'Aging / Wrinkles': { ko: '탄력 저하 / 주름', en: 'Aging / Wrinkles', vi: 'Lão hóa / nếp nhăn' },
    'Pores / Congestion': { ko: '모공 / 노폐물', en: 'Pores / Congestion', vi: 'Lỗ chân lông / bít tắc' },
    'All skin types': { ko: '모든 피부 타입', en: 'All skin types', vi: 'Mọi loại da' },
  };
  return concern ? map[concern]?.[lang] ?? concern : map['All skin types'][lang];
};

export const siteText = {
  nav: {
    products: { ko: '제품', en: 'Products', vi: 'Sản phẩm' },
    routine: { ko: '루틴', en: 'Routine', vi: 'Routine' },
    science: { ko: '사이언스 & 테크', en: 'Science & Tech', vi: 'Khoa học & Công nghệ' },
    about: { ko: '브랜드', en: 'About', vi: 'Giới thiệu' },
    contact: { ko: '문의', en: 'Contact', vi: 'Liên hệ' },
    cta: { ko: '제품 보기', en: 'Explore Our Range', vi: 'Xem trọn bộ' },
  },
  footer: {
    brand: {
      ko: '눈에 보이는 결과를 위해 설계된 한국 더마 사이언스 — 클렌징, 케어, 보습, 보호를 아우르는 완성형 스킨케어 컬렉션입니다.',
      en: 'Korean derma science crafted for visible results — a complete skincare collection designed to cleanse, treat, moisturise, and protect.',
      vi: 'Khoa học da liễu Hàn Quốc cho hiệu quả nhìn thấy rõ — bộ sưu tập chăm sóc da hoàn chỉnh để làm sạch, điều trị, dưỡng ẩm và bảo vệ.',
    },
    explore: { ko: '탐색', en: 'Explore', vi: 'Khám phá' },
    productLine: { ko: '제품 라인', en: 'Product Line', vi: 'Dòng sản phẩm' },
    skinRoutine: { ko: '스킨 루틴', en: 'Skin Routine', vi: 'Quy trình da' },
    science: { ko: '사이언스 & 테크', en: 'Science & Tech', vi: 'Khoa học & Công nghệ' },
    story: { ko: '브랜드 스토리', en: 'Our Story', vi: 'Câu chuyện thương hiệu' },
    connect: { ko: '연결', en: 'Connect', vi: 'Kết nối' },
    inquiries: { ko: '일반 문의', en: 'General Inquiries', vi: 'Liên hệ chung' },
    partnerships: { ko: '파트너십', en: 'Partnerships', vi: 'Đối tác' },
    stockists: { ko: '입점 문의', en: 'Stockists', vi: 'Đại lý phân phối' },
    rights: { ko: 'Hancell Derma. All rights reserved.', en: 'Hancell Derma. All rights reserved.', vi: 'Hancell Derma. Bảo lưu mọi quyền.' },
  },
  home: {
    badge: { ko: '한국 더마톨로지 스킨케어', en: 'Korean Dermatological Skincare', vi: 'Chăm sóc da da liễu Hàn Quốc' },
    heroTitleA: { ko: '과학이 피부를', en: 'Where Science', vi: 'Nơi khoa học' },
    heroTitleB: { ko: '만나는 순간', en: 'Meets Skin', vi: 'gặp làn da' },
    heroDesc1: {
      ko: '깊은 보습과 브라이트닝, 모공 케어와 주름 개선까지 — 모든 피부 타입을 위해 설계된 한국 더마 포뮬러를 만나보세요.',
      en: 'Trusted Korean dermatology formulas, engineered for every skin type — from deep hydration and brightening, to pore care and wrinkle correction.',
      vi: 'Công thức da liễu Hàn Quốc đáng tin cậy, được thiết kế cho mọi loại da — từ cấp ẩm sâu và làm sáng đến chăm sóc lỗ chân lông và cải thiện nếp nhăn.',
    },
    heroDesc2: {
      ko: '클렌징, 케어, 보습, 보호까지 — 한국에서 완성된 사이언스 기반 스킨케어 루틴을 제안합니다.',
      en: 'Science-backed skincare formulated in Korea to cleanse, treat, moisturize, and protect with visible everyday results.',
      vi: 'Chu trình chăm sóc da dựa trên khoa học, được phát triển tại Hàn Quốc để làm sạch, điều trị, dưỡng ẩm và bảo vệ với hiệu quả rõ ràng mỗi ngày.',
    },
    cta1: { ko: '제품 보기', en: 'Explore Our Range', vi: 'Khám phá sản phẩm' },
    cta2: { ko: '브랜드 스토리', en: 'Our Story', vi: 'Câu chuyện thương hiệu' },
    featuredCollection: { ko: '추천 컬렉션', en: 'Featured Collection', vi: 'Bộ sưu tập nổi bật' },
    routineName: { ko: '완성형 한셀 루틴', en: 'Complete Hancell Routine', vi: 'Routine Hancell hoàn chỉnh' },
    routineDesc: {
      ko: '클렌징, 수분 케어, 보습, 보호를 한 루틴으로 구성해 매일 더 밝고 편안하며 매끈한 피부 컨디션을 돕습니다.',
      en: 'A complete skincare collection designed to cleanse, hydrate, moisturize, and protect while supporting brighter, smoother, and more comfortable-looking skin every day.',
      vi: 'Bộ sản phẩm hoàn chỉnh giúp làm sạch, cấp ẩm, dưỡng ẩm và bảo vệ, hỗ trợ làn da sáng hơn, mịn hơn và dễ chịu hơn mỗi ngày.',
    },
    trustItems: {
      science: { ko: '사이언스 기반 포뮬러', en: 'Science-Backed Formulas', vi: 'Công thức dựa trên khoa học' },
      tested: { ko: '피부 테스트 완료', en: 'Clinically Tested', vi: 'Đã kiểm nghiệm' },
      allSkin: { ko: '모든 피부 타입', en: 'All Skin Types', vi: 'Mọi loại da' },
      standard: { ko: 'K-뷰티 스탠다드', en: 'K-Beauty Standard', vi: 'Tiêu chuẩn K-Beauty' },
    },
    brandScience: { ko: '브랜드 사이언스', en: 'Brand Science', vi: 'Nền tảng khoa học' },
    sectionTitle: { ko: '한국 더마 사이언스, 결과를 위해 설계되다', en: 'Korean Derma Science, Engineered for Results', vi: 'Khoa học da liễu Hàn Quốc, thiết kế cho hiệu quả rõ rệt' },
    sectionDesc: {
      ko: '한셀은 한국 피부과학 연구에 뿌리를 두고 있습니다. 모든 포뮬러는 임상적으로 연구된 유효 성분을 바탕으로 설계되어 눈에 보이는 결과를 목표로 합니다.',
      en: 'Hancell is rooted in Korean dermatological research. Every formula is built with clinically studied active ingredients designed to deliver targeted, visible results — not promises.',
      vi: 'Hancell được xây dựng trên nền tảng nghiên cứu da liễu Hàn Quốc. Mỗi công thức đều dựa trên các hoạt chất đã được nghiên cứu lâm sàng, hướng đến hiệu quả rõ rệt thay vì lời hứa suông.',
    },
    cards: {
      scienceTitle: { ko: '더마톨로지 사이언스 기반', en: 'Backed by Dermatological Science', vi: 'Dựa trên khoa học da liễu' },
      scienceDesc: { ko: '임상적으로 연구된 성분을 효능, 사용감, 피부 적합성을 기준으로 선택합니다.', en: 'Clinically studied actives are selected for efficacy, comfort, and skin compatibility.', vi: 'Hoạt chất được nghiên cứu lâm sàng và lựa chọn dựa trên hiệu quả, cảm giác dùng và độ phù hợp với da.' },
      everyoneTitle: { ko: '모두를 위한 설계', en: 'Designed for Everyone', vi: 'Thiết kế cho mọi người' },
      everyoneDesc: { ko: '민감성부터 지성, 복합성, 건성까지 다양한 피부 타입을 고려한 포뮬러입니다.', en: 'Inclusive formulas are engineered to support sensitive, oily, combination, and dry skin types.', vi: 'Công thức phù hợp cho da nhạy cảm, da dầu, da hỗn hợp và da khô.' },
      routineTitle: { ko: '완성형 루틴 시스템', en: 'One Complete Routine', vi: 'Một routine hoàn chỉnh' },
      routineDesc: { ko: '클렌징, 케어, 보습, 보호까지 자연스럽게 이어지는 한셀 루틴을 제안합니다.', en: 'Cleanse, treat, moisturize, and protect with a Hancell system designed to work together seamlessly.', vi: 'Làm sạch, điều trị, dưỡng ẩm và bảo vệ trong một hệ routine Hancell vận hành liền mạch.' },
    },
    featuredProducts: { ko: '추천 제품', en: 'Featured Products', vi: 'Sản phẩm nổi bật' },
    exploreRange: { ko: '한셀 컬렉션 보기', en: 'Explore Our Range', vi: 'Khám phá bộ sưu tập' },
    exploreDesc: { ko: '딥 클렌징, 수분 공급, 브라이트닝, 안티에이징, 데일리 자외선 차단까지 한셀의 핵심 제품을 만나보세요.', en: 'From deep cleansing and hydration to brightening, anti-aging, and daily UV protection, discover the Hancell essentials for a complete skincare routine.', vi: 'Từ làm sạch sâu, cấp ẩm, làm sáng, chống lão hóa đến bảo vệ da hằng ngày, khám phá các sản phẩm cốt lõi của Hancell.' },
    viewAll: { ko: '전체 보기', en: 'View Full Collection', vi: 'Xem toàn bộ' },
    lineupBadge: { ko: '컴플리트 라인업', en: 'The Complete Lineup', vi: 'Bộ sản phẩm hoàn chỉnh' },
    lineupTitle: { ko: '모든 단계, 과학으로 완성되다', en: 'Every Step, Scientifically Covered', vi: 'Mọi bước đều được hoàn thiện bằng khoa học' },
    lineupDesc: { ko: '한국 더마 케어의 기준에서 영감을 받은 4단계 한셀 시스템입니다.', en: 'A four-step Hancell system inspired by the gold standard of Korean dermatological care.', vi: 'Hệ thống 4 bước của Hancell lấy cảm hứng từ tiêu chuẩn chăm sóc da liễu Hàn Quốc.' },
    concernBadge: { ko: '피부 고민 가이드', en: 'Skin Concern Guide', vi: 'Hướng dẫn vấn đề da' },
    concernTitle: { ko: '내 피부에 맞는 루틴 찾기', en: 'Find Your Routine', vi: 'Tìm routine phù hợp' },
    concernDesc: { ko: '주요 피부 고민에 맞춰 한셀 루틴을 조합해 더 맑고 편안한 피부 컨디션을 경험해보세요.', en: 'Match your primary skin concern to a curated Hancell routine — each combination is designed to work synergistically for clearer, brighter, smoother-looking skin.', vi: 'Kết hợp routine Hancell theo từng vấn đề da để hỗ trợ làn da sáng hơn, mịn hơn và cân bằng hơn.' },
    shopRoutine: { ko: '루틴 보기', en: 'Shop the Routine', vi: 'Xem routine' },
  },
  products: {
    badge: { ko: '제품 라인', en: 'Product Line', vi: 'Dòng sản phẩm' },
    title: { ko: '한셀 컬렉션 둘러보기', en: 'Explore the Hancell Collection', vi: 'Khám phá bộ sưu tập Hancell' },
    desc: { ko: '클렌징, 케어, 보습, 보호까지 — 일상 속 가시적인 결과를 위한 한국 더마 스킨케어를 만나보세요.', en: 'Discover Korean dermatological skincare designed to cleanse, treat, moisturize, and protect. Each formula is crafted with performance-led ingredients for visible, everyday results.', vi: 'Khám phá chăm sóc da da liễu Hàn Quốc được thiết kế để làm sạch, điều trị, dưỡng ẩm và bảo vệ. Mỗi công thức đều hướng đến hiệu quả rõ rệt mỗi ngày.' },
    browse: { ko: '라인별 보기', en: 'Browse by Line', vi: 'Xem theo dòng' },
    formulas: { ko: '개 포뮬러', en: 'Formulas', vi: 'công thức' },
    viewDetails: { ko: '상세 보기', en: 'View Details', vi: 'Xem chi tiết' },
    peelSet: { ko: '필 세트', en: 'Peel Set', vi: 'Bộ peel' },
  },
  detail: {
    back: { ko: '제품으로 돌아가기', en: 'Back to Products', vi: 'Quay lại sản phẩm' },
    allSkin: { ko: '모든 피부 타입', en: 'For All Skin Types', vi: 'Phù hợp mọi loại da' },
    exploreLine: { ko: '라인 보기', en: 'Explore the Line', vi: 'Xem dòng sản phẩm' },
    routineGuide: { ko: '루틴 가이드', en: 'View Routine Guide', vi: 'Xem hướng dẫn routine' },
    benefits: { ko: '제품 효과', en: 'Product Benefits', vi: 'Công dụng sản phẩm' },
    whatItDoes: { ko: '무엇을 도와주나요', en: 'What It Does', vi: 'Sản phẩm giúp gì' },
    ingredientFocus: { ko: '성분 포인트', en: 'Ingredient Focus', vi: 'Điểm nhấn thành phần' },
    ingredientSnapshot: { ko: '주요 성분 요약', en: 'Key Ingredient Snapshot', vi: 'Tóm tắt thành phần chính' },
    fullIngredients: { ko: '전성분', en: 'Full ingredients', vi: 'Thành phần đầy đủ' },
    routineContext: { ko: '루틴 맥락', en: 'Routine Context', vi: 'Ngữ cảnh routine' },
    fitLine: { ko: '라인 안에서의 역할', en: 'How It Fits Into the Line', vi: 'Vai trò trong dòng sản phẩm' },
    fitDesc: { ko: '이 제품은', en: 'This formula belongs to the', vi: 'Sản phẩm này thuộc dòng' },
    canExplore: { ko: '라인에 속하며 클렌징, 케어, 보습, 보호로 이어지는 한셀 루틴 안에서 함께 활용할 수 있습니다.', en: 'line and can be explored alongside the Hancell routine structure: cleanse, treat, moisturise, and protect.', vi: 'và có thể được kết hợp trong routine Hancell gồm làm sạch, điều trị, dưỡng ẩm và bảo vệ.' },
    concern: { ko: '고민', en: 'Concern', vi: 'Vấn đề da' },
    quickView: { ko: '퀵 뷰', en: 'Quick View', vi: 'Thông tin nhanh' },
    atGlance: { ko: '한눈에 보기', en: 'At a Glance', vi: 'Tổng quan nhanh' },
    line: { ko: '라인', en: 'Line', vi: 'Dòng' },
    capacity: { ko: '용량', en: 'Capacity', vi: 'Dung tích' },
    price: { ko: '가격', en: 'Price', vi: 'Giá' },
    related: { ko: '관련 제품', en: 'Related Products', vi: 'Sản phẩm liên quan' },
    continue: { ko: '계속 둘러보기', en: 'Continue Exploring', vi: 'Tiếp tục khám phá' },
    viewAll: { ko: '전체 제품 보기', en: 'View All Products', vi: 'Xem tất cả sản phẩm' },
    set: { ko: '세트', en: 'Set', vi: 'Set' },
  },
  about: {
    story: { ko: '브랜드 스토리', en: 'Our Story', vi: 'Câu chuyện thương hiệu' },
    title: { ko: '한국 더마 사이언스, 결과를 위해 설계되다', en: 'Korean Derma Science, Engineered for Results', vi: 'Khoa học da liễu Hàn Quốc, thiết kế cho hiệu quả rõ rệt' },
    hero: { ko: '한셀 더마는 한국 피부과학 연구를 바탕으로, 보습·브라이트닝·모공 케어·주름 개선까지 눈에 보이는 결과를 위한 포뮬러를 제안합니다.', en: 'Hancell Derma is rooted in Korean dermatological research, with every formula designed to deliver targeted, visible results across hydration, brightening, pore care, and wrinkle correction.', vi: 'Hancell Derma được xây dựng từ nghiên cứu da liễu Hàn Quốc, với mỗi công thức hướng đến hiệu quả rõ rệt trong cấp ẩm, làm sáng, chăm sóc lỗ chân lông và cải thiện nếp nhăn.' },
    skinTitle: { ko: '과학이 피부를 만나는 곳', en: 'Where Science Meets Skin', vi: 'Nơi khoa học gặp làn da' },
    skinDesc1: { ko: '모든 포뮬러는 효능, 사용감, 피부 적합성을 고려해 선별한 임상 연구 기반 성분으로 설계됩니다.', en: 'Every Hancell formula is built around clinically studied active ingredients selected for efficacy, comfort, and skin compatibility. Our approach is simple: no unnecessary fillers, no exaggerated claims — only purposeful skincare designed to perform.', vi: 'Mỗi công thức Hancell được xây dựng trên các hoạt chất đã được nghiên cứu lâm sàng, lựa chọn dựa trên hiệu quả, cảm giác sử dụng và độ phù hợp với da.' },
    skinDesc2: { ko: '민감성부터 지성, 복합성, 건성까지 모든 피부 타입을 고려해 설계되며, 전체 컬렉션은 하나의 완성형 루틴으로 연결됩니다.', en: 'From sensitive to oily, combination to dry, Hancell develops inclusive formulas for all skin types. The collection is designed as a complete routine so each step works in harmony with the next.', vi: 'Từ da nhạy cảm đến da dầu, hỗn hợp và da khô, Hancell phát triển các công thức phù hợp cho nhiều loại da, đồng thời tạo thành một routine hoàn chỉnh và đồng bộ.' },
    all: { ko: '모든', en: 'All', vi: 'Mọi' },
    skinTypes: { ko: '피부 타입', en: 'Skin Types', vi: 'Loại da' },
    steps: { ko: '루틴 단계', en: 'Routine Steps', vi: 'Bước routine' },
    standard: { ko: '한셀 스탠다드', en: 'The Hancell Standard', vi: 'Chuẩn mực Hancell' },
    standardDesc: { ko: '모든 포뮬러를 이끄는 네 가지 원칙입니다.', en: 'Four principles guide every formula in the collection.', vi: 'Bốn nguyên tắc định hướng toàn bộ công thức của bộ sưu tập.' },
    pillars: {
      p1t: { ko: '사이언스 기반 포뮬러', en: 'Science-Backed Formulas', vi: 'Công thức dựa trên khoa học' },
      p1d: { ko: '활성 성분은 임상적으로 연구된 효능을 바탕으로 선택됩니다.', en: 'Active ingredients are selected for clinically proven efficacy and visible performance.', vi: 'Hoạt chất được lựa chọn dựa trên hiệu quả đã được nghiên cứu lâm sàng.' },
      p2t: { ko: '더마톨로지 중심 케어', en: 'Dermatology-Led Care', vi: 'Chăm sóc theo định hướng da liễu' },
      p2d: { ko: '모든 포뮬러는 편안함, 밸런스, 결과를 위한 더마 중심 사고에서 출발합니다.', en: 'Each formula is created with a derma-first mindset focused on comfort, balance, and results.', vi: 'Mỗi công thức được phát triển với tư duy da liễu, chú trọng sự dễ chịu, cân bằng và hiệu quả.' },
      p3t: { ko: '완성형 루틴 설계', en: 'Complete Routine Design', vi: 'Thiết kế routine hoàn chỉnh' },
      p3d: { ko: '클렌징, 케어, 보습, 보호 단계가 자연스럽게 연결되도록 설계되었습니다.', en: 'Cleanse, treat, moisturize, and protect with products designed to work seamlessly together.', vi: 'Các bước làm sạch, điều trị, dưỡng ẩm và bảo vệ được thiết kế để phối hợp liền mạch.' },
      p4t: { ko: '모든 피부를 위한 포뮬러', en: 'Made for All Skin Types', vi: 'Dành cho nhiều loại da' },
      p4d: { ko: '다양한 피부 니즈를 고려한 데일리 포뮬러입니다.', en: 'Inclusive formulas are engineered to support daily use across a wide range of skin needs.', vi: 'Công thức phù hợp cho việc sử dụng hằng ngày trên nhiều nhu cầu da khác nhau.' },
    },
  },
  contact: { /* shortened in pages via direct labels below */ },
};

const localizedProductText: Record<Lang, Record<string, Partial<Product>>> = {
  en: {},
  ko: {
    'pore-deep-cleansing-water': { shortName: '포어 딥 클렌징 워터', benefit: '모공 속 노폐물과 과잉 피지를 부드럽게 제거해 피부를 매끈하고 산뜻하게 정돈합니다.', detailSummary: '메이크업 제거와 수분감, 환경 오염 케어를 함께 고려한 미셀라 클렌징 워터입니다.', keyHighlights: ['메이크업 클렌징', '안티폴루션 케어', '모공 집중 클렌징'], suitableFor: ['모든 피부 타입', '모공 / 노폐물'] },
    'ultra-deep-purifying-cleanser': { shortName: '울트라 딥 퓨리파잉 클렌저', benefit: '메이크업과 각질, 과잉 유분을 말끔히 씻어내며 깨끗한 모공 케어를 돕습니다.', detailSummary: '수분감을 지키면서 피부를 깨끗하고 산뜻하게 정돈하는 데일리 폼 클렌저입니다.', keyHighlights: ['딥 스킨 클리어', '산뜻한 마무리', '데일리 폼 클렌저'], suitableFor: ['모든 피부 타입', '모공 / 노폐물'] },
    'hydrating-b5-serum': { shortName: '하이드레이팅 B5 세럼', benefit: '깊은 보습과 진정을 돕고 피부 장벽 컨디션을 편안하게 케어합니다.', detailSummary: '나이아신아마이드와 판테놀 B5를 담은 가벼운 하이드로 인퓨전 세럼입니다.', keyHighlights: ['보습 부스팅', '하이드로 인퓨전 텍스처', '장벽 서포트'], suitableFor: ['모든 피부 타입', '칙칙함 / 톤 불균형', '탄력 저하 / 주름'] },
    'melanoxpert-cream': { shortName: '멜라녹스퍼트 크림', benefit: '잡티와 색소 침착 케어를 도우며 보다 균일하고 밝은 피부 톤을 지원합니다.', detailSummary: '멜라스마, 주근깨, 다크스팟 케어를 위한 타깃 트리트먼트 크림입니다.', keyHighlights: ['멜라스마 케어', '브라이트닝 서포트', '다크 스팟 케어'], suitableFor: ['모든 피부 타입', '잡티 / 멜라스마'] },
    'biopeptide-cream': { shortName: '바이오펩타이드 크림', benefit: '탄력, 보습, 피부 컨디션 회복을 도우며 주름과 흔적 케어를 지원합니다.', detailSummary: '멀티 펩타이드와 세라마이드 NP를 담은 데일리 안티에이징 크림입니다.', keyHighlights: ['멀티 펩타이드 + 세라마이드 NP', '안티에이징 서포트', '장벽 케어'], suitableFor: ['모든 피부 타입', '탄력 저하 / 주름'] },
    'uv-shield-sunscreen': { shortName: 'UV 쉴드 선스크린', benefit: '드라이 터치와 매트한 마무리로 피부를 보호하면서 톤을 화사하게 보이도록 돕습니다.', detailSummary: 'SPF 50+ PA+++의 데일리 자외선 차단 포뮬러입니다.', keyHighlights: ['SPF 50+ PA+++', '드라이 터치', '매티파잉 효과'], suitableFor: ['모든 피부 타입', '칙칙함 / 톤 불균형'] },
    'peel-care-set': { shortName: '필 케어 세트', subtitle: '리뉴글로우 필링 세럼 + 스킨캄 뉴트럴라이저 오일', benefit: '각질 정돈과 피부 결 케어 후 진정 밸런스를 함께 고려한 필링 & 뉴트럴라이징 세트입니다.', detailSummary: '리뉴글로우 필링 세럼과 스킨캄 뉴트럴라이저 오일을 함께 구성한 트리트먼트 듀오입니다.', keyHighlights: ['트리플 애시드 콤플렉스', '포스트 트리트먼트 진정', '세트 가격 적용'], suitableFor: ['모든 피부 타입', '잡티 / 멜라스마'] },
    'optilight-cream': { shortName: '옵티라이트 크림', benefit: '칙칙한 피부를 즉각적으로 밝혀 보이게 하고 수분감을 더해 보다 고른 톤을 연출합니다.', detailSummary: '피부 톤을 정돈하고 수분감을 더하는 데일리 브라이트닝 크림입니다.', keyHighlights: ['톤업 케어', '촉촉한 마무리', '데일리 브라이트닝'], suitableFor: ['모든 피부 타입', '칙칙함 / 톤 불균형'] },
  },
  vi: {
    'pore-deep-cleansing-water': { shortName: 'Pore Deep Cleansing Water', benefit: 'Giúp làm sạch cặn bẩn và bã nhờn sâu trong lỗ chân lông, mang lại cảm giác da mịn và tươi mới.', detailSummary: 'Nước tẩy trang micellar hỗ trợ làm sạch lớp trang điểm, cấp ẩm nhẹ và bảo vệ da trước tác động ô nhiễm.', keyHighlights: ['Tẩy trang', 'Chống ô nhiễm', 'Làm sạch lỗ chân lông'], suitableFor: ['Mọi loại da', 'Lỗ chân lông / bít tắc'] },
    'ultra-deep-purifying-cleanser': { shortName: 'Ultra Deep Purifying Cleanser', benefit: 'Giúp loại bỏ lớp trang điểm, tế bào chết và dầu thừa, hỗ trợ da sạch thoáng và lỗ chân lông thông thoáng.', detailSummary: 'Sữa rửa mặt tạo bọt hằng ngày, làm sạch mà vẫn giữ cảm giác ẩm mượt cho da.', keyHighlights: ['Làm sạch sâu', 'Cho da tươi mới', 'Sữa rửa mặt dùng hằng ngày'], suitableFor: ['Mọi loại da', 'Lỗ chân lông / bít tắc'] },
    'hydrating-b5-serum': { shortName: 'Hydrating B5 Serum', benefit: 'Cấp ẩm sâu, làm dịu da và hỗ trợ hàng rào bảo vệ da trước tình trạng khô và kích ứng.', detailSummary: 'Serum hydro-infused nhẹ da với Niacinamide và Panthenol B5, phù hợp cho mọi loại da.', keyHighlights: ['Tăng cường độ ẩm', 'Kết cấu hydro-infused', 'Hỗ trợ hàng rào da'], suitableFor: ['Mọi loại da', 'Da xỉn màu / không đều màu', 'Lão hóa / nếp nhăn'] },
    'melanoxpert-cream': { shortName: 'MelanoXpert Cream', benefit: 'Hỗ trợ làm mờ đốm nâu, tàn nhang và sắc tố, giúp làn da sáng và đều màu hơn.', detailSummary: 'Kem điều trị tập trung cho nám, tàn nhang và đốm nâu.', keyHighlights: ['Hỗ trợ nám', 'Làm sáng da', 'Chăm sóc đốm nâu'], suitableFor: ['Mọi loại da', 'Đốm nâu / nám'] },
    'biopeptide-cream': { shortName: 'BioPeptide Cream', benefit: 'Hỗ trợ độ đàn hồi, độ ẩm và tái tạo da, đồng thời giúp cải thiện nếp nhăn và dấu hiệu lão hóa.', detailSummary: 'Kem chống lão hóa với multi peptide và Ceramide NP cho chăm sóc hằng ngày.', keyHighlights: ['Multi Peptide + Ceramide NP', 'Hỗ trợ chống lão hóa', 'Chăm sóc hàng rào da'], suitableFor: ['Mọi loại da', 'Lão hóa / nếp nhăn'] },
    'uv-shield-sunscreen': { shortName: 'UV Shield Sunscreen', benefit: 'Bảo vệ da với hiệu ứng khô ráo, lì nhẹ và giúp da trông sáng hơn.', detailSummary: 'Kem chống nắng SPF 50+ PA+++ bảo vệ phổ rộng dùng hằng ngày.', keyHighlights: ['SPF 50+ PA+++', 'Khô ráo', 'Hiệu ứng lì'], suitableFor: ['Mọi loại da', 'Da xỉn màu / không đều màu'] },
    'peel-care-set': { shortName: 'Peel Care Set', subtitle: 'RenewGlow Peeling Serum + SkinCalm Neutralizer Oil', benefit: 'Bộ peel và trung hòa giúp làm mới bề mặt da, cải thiện kết cấu và hỗ trợ làm dịu sau peel.', detailSummary: 'Bộ đôi điều trị gồm RenewGlow Peeling Serum và SkinCalm Neutralizer Oil cho bước peel và làm dịu sau đó.', keyHighlights: ['Triple Acid Complex', 'Làm dịu sau treatment', 'Giá set'], suitableFor: ['Mọi loại da', 'Đốm nâu / nám'] },
    'optilight-cream': { shortName: 'OptiLight Cream', benefit: 'Giúp da sáng tức thì, đều màu hơn và duy trì độ ẩm cho bề mặt da.', detailSummary: 'Kem dưỡng làm sáng hằng ngày giúp cải thiện tông da và mang lại bề mặt mịn hơn.', keyHighlights: ['Nâng tông', 'Dưỡng ẩm', 'Làm sáng hằng ngày'], suitableFor: ['Mọi loại da', 'Da xỉn màu / không đều màu'] },
  },
};

export const getLocalizedProduct = (lang: Lang, product: Product): Product => ({
  ...product,
  ...(localizedProductText[lang][product.slug] ?? {}),
});
