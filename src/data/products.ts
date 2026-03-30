import poreDeepImg from '../../image/Nước tẩy trang - Hancell Pore Deep Cleansing Water 80ml.PNG';
import purifyingCleanserImg from '../../image/Sữa rửa mặt làm sạch sâu – Hancell Ultra Deep Purifying Cleanser.png';
import b5SerumImg from '../../image/Serum B5 – Hancell Hydrating B5 Serum.png';
import melanoxpertImg from '../../image/Kem điều trị nám – Hancell MelanoXpert Cream.PNG';
import biopeptideImg from '../../image/Kem dưỡng Peptide – Hancell BioPeptide Cream.png';
import sunscreenImg from '../../image/Hancell Brightening UV Shield Sunscreen.png';
import peelSetImg from '../../image/set peel Serum peel tái tạo da – Hancell RenewGlow Peeling Serum.png';
import optilightImg from '../../image/Kem nâng tông – Hancell OptiLight Cream.png';

export type ProductCategory = 'Cleansing' | 'Skin Care' | 'Sun Care';

export type Product = {
  id: string;
  slug: string;
  line: ProductCategory;
  name: string;
  shortName: string;
  capacity: string;
  image: string;
  benefit: string;
  detailSummary: string;
  ingredients: string;
  fullIngredients: string;
  keyHighlights: string[];
  suitableFor: string[];
  relatedConcern?: string;
  priceValue: number;
  priceDisplay: string;
  featured?: boolean;
  isSet?: boolean;
  subtitle?: string;
};

const formatKrw = (value: number) =>
  new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    maximumFractionDigits: 0,
  }).format(value);

export const products: Product[] = [
  {
    id: 'pore-deep-cleansing-water',
    slug: 'pore-deep-cleansing-water',
    line: 'Cleansing',
    name: 'Nước tẩy trang - Hancell Pore Deep Cleansing Water 80ml',
    shortName: 'Pore Deep Cleansing Water',
    capacity: '80ml',
    image: poreDeepImg,
    benefit:
      'Removes impurities and excess sebum deep within the pores while helping skin feel smooth and refreshed.',
    detailSummary:
      'A micellar cleansing water designed to remove makeup, moisturise the skin, and help protect against environmental pollution.',
    ingredients:
      'Water, Butylene Glycol, Willow Bark Extract, Witch Hazel Extract, Gluconolactone, Centella Asiatica Extract, Camellia Sinensis Leaf Extract.',
    fullIngredients:
      'Water, Butylene Glycol, Salix Alba (Willow) Bark Extract, Hamamelis Virginiana (Witch Hazel) Extract, Gluconolactone, Glycyrrhiza Uralensis Root Extract, Centella Asiatica Extract, Camellia Sinensis Leaf Extract, Rosmarinus Officinalis Leaf Extract, Anthemis Nobilis Flower Extract, Scutellaria Baicalensis Root Extract, Polygonum Cuspidatum Root Extract, Pinus Radiata Bark Extract, Carica Papaya Fruit Extract, Illicium Verum (Anise) Fruit Extract, Beta-Glucan, Polyglutamic Acid, Arginine, Xanthan Gum, 1,2-Hexanediol, Caprylyl Glycol, Disodium EDTA.',
    keyHighlights: ['Make-up remover', 'Anti-pollution care', 'Pore-focused cleansing'],
    suitableFor: ['All skin types', 'Pores / Congestion'],
    relatedConcern: 'Pores / Congestion',
    priceValue: 24500,
    priceDisplay: formatKrw(24500),
    featured: true,
  },
  {
    id: 'ultra-deep-purifying-cleanser',
    slug: 'ultra-deep-purifying-cleanser',
    line: 'Cleansing',
    name: 'Sữa rửa mặt làm sạch sâu – Hancell Ultra Deep Purifying Cleanser',
    shortName: 'Ultra Deep Purifying Cleanser',
    capacity: '80ml',
    image: purifyingCleanserImg,
    benefit:
      'Helps remove makeup, dead skin cells, excess oil, and skin waste while supporting clean and clear pores.',
    detailSummary:
      'A daily foam cleanser created to remove impurities without stripping moisture, helping skin feel clear, fresh, and balanced.',
    ingredients:
      'Water, Decyl Glucoside, Potassium Cocoyl Glycinate, Glycerin, Propanediol, Betaine, Trehalose, Panax Ginseng Root Extract.',
    fullIngredients:
      'Water, Decyl Glucoside, Potassium Cocoyl Glycinate, Glycerin, Propanediol, Butylene Glycol, Betaine, Trehalose, Panax Ginseng Root Extract, Hydrolyzed Corn Starch, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Arginine, 1,2-Hexanediol, Caprylyl Glycol.',
    keyHighlights: ['Deep skin clear', 'Freshens the skin', 'Daily foam cleanser'],
    suitableFor: ['All skin types', 'Pores / Congestion'],
    relatedConcern: 'Pores / Congestion',
    priceValue: 24500,
    priceDisplay: formatKrw(24500),
  },
  {
    id: 'hydrating-b5-serum',
    slug: 'hydrating-b5-serum',
    line: 'Skin Care',
    name: 'Serum B5 – Hancell Hydrating B5 Serum',
    shortName: 'Hydrating B5 Serum',
    capacity: '30ml',
    image: b5SerumImg,
    benefit:
      'Deeply hydrates and soothes the skin while helping strengthen the skin barrier and support recovery from dryness and irritation.',
    detailSummary:
      'An ultra-light hydro-infused serum formulated with Niacinamide and Panthenol B5 to deliver lightweight moisture support for all skin types.',
    ingredients:
      'Water, Butylene Glycol, Panthenol, Niacinamide, Centella Asiatica Leaf Extract, Aloe Vera Leaf Extract, Beta-Glucan, Ectoin.',
    fullIngredients:
      'Water, Butylene Glycol, Panthenol, Niacinamide, Centella Asiatica Leaf Extract, Aloe Barbadensis Leaf Extract, Olea Europaea (Olive) Fruit Oil, Beta-Glucan, Ectoin, Allantoin, Madecassoside, Asiaticoside, Dipotassium Glycyrrhizate, Pinus Pinaster Bark Extract, Glutathione, Pelargonium Graveolens Extract (Geranium), Lavandula Angustifolia (Lavender) Oil, Coriandrum Sativum (Coriander) Fruit Oil, Juniperus Virginiana Oil, Anthemis Nobilis Flower Oil, Lecithin, Ammonium Acryloyldimethyltaurate/VP Copolymer, Sodium Acrylates Copolymer, 1,2-Hexanediol, Caprylyl Glycol, Chlorphenesin, Disodium EDTA, Maltodextrin.',
    keyHighlights: ['Moisture boost', 'Hydro-infused texture', 'Barrier support'],
    suitableFor: ['All skin types', 'Dull / Uneven Tone', 'Aging / Wrinkles'],
    relatedConcern: 'Dull / Uneven Tone',
    priceValue: 29500,
    priceDisplay: formatKrw(29500),
    featured: true,
  },
  {
    id: 'melanoxpert-cream',
    slug: 'melanoxpert-cream',
    line: 'Skin Care',
    name: 'Kem điều trị nám – Hancell MelanoXpert Cream',
    shortName: 'MelanoXpert Cream',
    capacity: '30ml',
    image: melanoxpertImg,
    benefit:
      'Helps fade dark spots, freckles, and pigmentation while supporting a brighter and more even-looking complexion.',
    detailSummary:
      'A targeted treatment cream designed to address melasma, freckles, and dark spots while supporting brighter-looking skin tone.',
    ingredients:
      'Water, Arbutin, Glycerin, Niacinamide, Jojoba Seed Oil, Squalane, Sodium Hyaluronate, Allantoin, Vitamin C derivatives.',
    fullIngredients:
      'Water, Arbutin, Glycerin, Caprylic/Capric Triglyceride, Niacinamide, Cetearyl Alcohol, Butylene Glycol, Glyceryl Stearate, Cyclopentasiloxane, Cetyl Ethylhexanoate, PEG-40 Stearate, Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Sodium Hyaluronate, Allantoin, Benzyl Glycol, Cyclohexasiloxane, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Tocopheryl Acetate, Ascorbyl Glucoside, Sodium Ascorbyl Phosphate, Magnesium Ascorbyl Phosphate, Tetrahexyldecyl Ascorbate, Sodium Riboflavin Phosphate, Carbomer, Triethanolamine, 1,2-Hexanediol, Ethylhexylglycerin, Polysorbate 60, Disodium EDTA, Propanediol, Sorbitan Sesquioleate, Sorbitan Isostearate, Sodium Hyaluronate Crosspolymer, Hydrolyzed Hyaluronic Acid, Hydrolyzed Glycosaminoglycans, Hippophae Rhamnoides Fruit Extract, Milk Protein Extract, Boswellia Serrata Resin Extract, Nicotinamide Mononucleotide.',
    keyHighlights: ['Targets melasma', 'Supports brighter skin tone', 'Dark spot care'],
    suitableFor: ['All skin types', 'Dark Spots / Melasma'],
    relatedConcern: 'Dark Spots / Melasma',
    priceValue: 60000,
    priceDisplay: formatKrw(60000),
    featured: true,
  },
  {
    id: 'biopeptide-cream',
    slug: 'biopeptide-cream',
    line: 'Skin Care',
    name: 'Kem dưỡng Peptide – Hancell BioPeptide Cream',
    shortName: 'BioPeptide Cream',
    capacity: '30ml',
    image: biopeptideImg,
    benefit:
      'Supports elasticity, hydration, and skin regeneration while helping reduce the look of wrinkles, blemishes, and scars.',
    detailSummary:
      'An advanced anti-aging cream with multi peptide and Ceramide NP, designed to support skin regeneration and daily moisture care.',
    ingredients:
      'Water, Butylene Glycol, Niacinamide, Glutathione, Shea Butter, Betaine, Allantoin, Sodium Hyaluronate, Peptide complex.',
    fullIngredients:
      'Water, Butylene Glycol, Cyclohexasiloxane, Cetearyl Alcohol, Glycerin, Triethylhexanoin, Niacinamide, Glutathione, Polyglyceryl-3 Distearate, Cetyl Ethylhexanoate, Dipentaerythrityl Hexa C5-9 Acid Esters, Butyrospermum Parkii (Shea) Butter, Betaine, Allantoin, Ectoin, Sodium Hyaluronate, Ammonium Acryloyldimethyltaurate/VP Copolymer, Carbomer, Dipotassium Glycyrrhizate, Pinus Pinaster Bark Extract, Sodium Polyacrylate, Ubiquinone, Hydrogenated Lecithin, Macadamia Ternifolia Seed Oil, Caprylic/Capric Triglyceride, Cholesterol, Brassica Campestris (Rapeseed) Sterols, Panthenol (Vitamin B5), Madecassoside, Asiaticoside, Madecassic Acid, Asiatic Acid, Ceramide NP, Rosa Canina Fruit Oil, Polyglyceryl-10 Laurate, Palmitoyl Pentapeptide-4, Palmitoyl Tripeptide-1, Hexapeptide-9, Acetyl Hexapeptide-8, Tripeptide-1, Copper Tripeptide-1, Pimpinella Anisum (Anise) Fruit Extract, Camellia Sinensis Leaf Extract, Glyceryl Stearate Citrate, Cetearyl Olivate, Sorbitan Olivate.',
    keyHighlights: ['Multi Peptide + Ceramide NP', 'Anti-aging support', 'Skin barrier care'],
    suitableFor: ['All skin types', 'Aging / Wrinkles'],
    relatedConcern: 'Aging / Wrinkles',
    priceValue: 39000,
    priceDisplay: formatKrw(39000),
    featured: true,
  },
  {
    id: 'uv-shield-sunscreen',
    slug: 'uv-shield-sunscreen',
    line: 'Sun Care',
    name: 'Hancell Brightening UV Shield Sunscreen',
    shortName: 'UV Shield Sunscreen',
    capacity: '30ml',
    image: sunscreenImg,
    benefit:
      'Protects skin with a dry-touch finish and mattifying effect while helping brighten the complexion.',
    detailSummary:
      'A daily SPF 50+ PA+++ sunscreen offering broad-spectrum UV defence with a dry-touch, mattifying finish.',
    ingredients:
      'Water, Dicaprylyl Carbonate, Homosalate, Ethylhexyl Salicylate, Titanium Dioxide, Niacinamide, Sodium Hyaluronate.',
    fullIngredients:
      'Water, Dicaprylyl Carbonate, Homosalate, Ethylhexyl Salicylate, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Titanium Dioxide, Butylene Glycol, Propanediol, Dimethicone, Cetyl PEG/PPG-10/1 Dimethicone, Glycerin, Niacinamide, Butylene Glycol Dicaprylate/Dicaprate, Sodium Chloride, Silica, Ethylhexyl Stearate, Magnesium Stearate, Hydroxyacetophenone, 1,2-Hexanediol, Dimethicone/Vinyl Dimethicone Crosspolymer, Xanthan Gum, Aluminum Hydroxide, Triethoxycaprylylsilane, CI 77491, CI 77492, Adenosine, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Hydrolyzed Glycosaminoglycans, Hydrolyzed Hyaluronic Acid, Hippophae Rhamnoides (Sea Buckthorn) Fruit Extract, Lactobacillus/Rice Ferment Filtrate, Lactobacillus/Panax Ginseng Root Ferment Filtrate, Lactobacillus/Soybean Ferment Extract, Saccharomyces/Potato Extract Ferment Filtrate, Saccharomyces/Coix Lacryma-Jobi Ma-Yuen Seed Ferment Filtrate, Raspberry Ketone, Ethylhexylglycerin, Fragrance, Linalool.',
    keyHighlights: ['SPF 50+ PA+++', 'Dry touch finish', 'Mattifying effect'],
    suitableFor: ['All skin types', 'Dull / Uneven Tone'],
    relatedConcern: 'Dull / Uneven Tone',
    priceValue: 29500,
    priceDisplay: formatKrw(29500),
    featured: true,
  },
  {
    id: 'peel-care-set',
    slug: 'peel-care-set',
    line: 'Skin Care',
    name: 'Hancell Peel Care Set',
    shortName: 'Peel Care Set',
    subtitle: 'RenewGlow Peeling Serum + SkinCalm Neutralizer Oil',
    capacity: '5ml + 5ml',
    image: peelSetImg,
    benefit:
      'A peel-and-neutralize set designed to remove dead skin cells, refine texture, and calm skin after the peeling step.',
    detailSummary:
      'A treatment duo pairing RenewGlow Peeling Serum with SkinCalm Neutralizer Oil for resurfacing care followed by post-treatment balance and comfort.',
    ingredients:
      'RenewGlow: Lactic Acid, Glycolic Acid, Salicylic Acid. SkinCalm: Mineral Oil, Isopropyl Palmitate, Tocopheryl Acetate.',
    fullIngredients:
      'RenewGlow Peeling Serum: Water, Lactic Acid, Glycolic Acid, Propylene Glycol, Denatured Alcohol, Gluconolactone, Butylene Glycol, Salicylic Acid, Citric Acid, Potassium Hydroxide, Xanthan Gum, Centella Asiatica Extract, Aloe Barbadensis Leaf Extract, Sodium PCA, Arrowroot Root Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Paeonia Suffruticosa Root Extract, Citrus Tachibana Peel Extract, Cnidium Officinale Root Extract, Disodium EDTA, 1,2-Hexanediol. SkinCalm Neutralizer Oil: Mineral Oil, Isopropyl Palmitate, Solves-30 Tetraoleate, Isostearic Acid, Sorbitan Sesquioleate, Glycerin, Tocopheryl Acetate, Water, Acetyl Hexapeptide-8 (0.05 ppm), 1,2-Hexanediol, Caprylyl Glycol, Ethylhexylglycerin.',
    keyHighlights: ['Triple Acid Complex', 'Post-treatment soothing care', 'Set price approved'],
    suitableFor: ['All skin types', 'Dark Spots / Melasma'],
    relatedConcern: 'Dark Spots / Melasma',
    priceValue: 75000,
    priceDisplay: formatKrw(75000),
    isSet: true,
    featured: true,
  },
  {
    id: 'optilight-cream',
    slug: 'optilight-cream',
    line: 'Skin Care',
    name: 'Kem nâng tông – Hancell OptiLight Cream',
    shortName: 'OptiLight Cream',
    capacity: '30ml',
    image: optilightImg,
    benefit:
      'Instantly brightens dull skin, helps even the complexion, lightly conceals imperfections, and keeps skin hydrated.',
    detailSummary:
      'A lightweight daily brightening cream that helps improve skin tone while delivering hydration and a smoother-looking finish.',
    ingredients:
      'Water, Butylene Glycol, Cyclopentasiloxane, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Niacinamide, Hyaluronic Acid.',
    fullIngredients:
      'Water, Butylene Glycol, Cyclopentasiloxane, Cyclohexasiloxane, Ethylhexyl Methoxycinnamate, Caprylic/Capric Triglyceride, Phenyl Trimethicone, Cetyl PEG/PPG-10/1 Dimethicone, Titanium Dioxide, Niacinamide, Dimethicone, Sodium Chloride, Dimethicone/Vinyl Dimethicone Crosspolymer, Hydroxyacetophenone, 1,2-Hexanediol, Xanthan Gum, Aluminum Hydroxide, Propanediol, Triethoxycaprylylsilane, Adenosine, Allantoin, Hippophae Rhamnoides Fruit Extract, Glutathione, Glycerin, Sodium Hyaluronate Crosspolymer, Hydrolyzed Glycosaminoglycans, Sodium Hyaluronate, Lactobacillus/Rice Ferment, Lactobacillus/Panax Ginseng Root Ferment Filtrate, Lactobacillus/Soybean Ferment Extract, Saccharomyces/Potato Extract Ferment Filtrate, Saccharomyces/Coix Lacryma-Jobi Ma-yuen Seed Ferment Filtrate, Benzyl Glycol, Hydrolyzed Hyaluronic Acid, Ethylhexylglycerin, Hyaluronic Acid, Raspberry Ketone.',
    keyHighlights: ['Tone-up care', 'Hydrating finish', 'Daily brightening support'],
    suitableFor: ['All skin types', 'Dull / Uneven Tone'],
    relatedConcern: 'Dull / Uneven Tone',
    priceValue: 39500,
    priceDisplay: formatKrw(39500),
  },
];

export const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

export const productCategories: Array<{ id: 'all' | ProductCategory; label: string }> = [
  { id: 'all', label: 'All Products' },
  { id: 'Cleansing', label: 'Cleansing' },
  { id: 'Skin Care', label: 'Skin Care' },
  { id: 'Sun Care', label: 'Sun Care' },
];

export const getProductBySlug = (slug?: string) => products.find((product) => product.slug === slug);

export const getRelatedProducts = (product: Product) =>
  products.filter((item) => item.slug !== product.slug && (item.line === product.line || item.relatedConcern === product.relatedConcern)).slice(0, 3);
