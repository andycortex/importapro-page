export interface ProductDetail {
  source: string
  url: string
  title: string
  shortTitle: string
  brand: string
  model: string
  price: number
  currency: string
  moq: string
  dimensions: string
  weight: string
  material: string
  warranty: string
  rating: number
  reviewsCount: number
  images: string[]
  ladderPrices: { range: string; price: string }[]
  variations: { name: string; color: string }[]
  importCostEstimate: {
    productCost: number
    shippingEstimate: number
    customsDuty: number
    totalLanded: number
  }
}

export interface AlternativeProduct {
  id: string
  platform: 'Made-in-China' | 'Chinagoods' | 'Taobao / 1688'
  platformColor: string
  badge: string
  title: string
  spanishTitle: string
  price: number
  originalPrice: number
  savings: number
  savingsPercent: number
  moq: string
  supplier: string
  location: string
  rating: number
  image: string
  url: string
}

export const sampleAlibabaUrl = 'https://www.alibaba.com/product-detail/Factory-Quick-Heating-Rotating-360-Degrees_1601566880657.html'

export const alibabaProductData: ProductDetail = {
  source: 'Alibaba',
  url: 'https://www.alibaba.com/product-detail/Factory-Quick-Heating-Rotating-360-Degrees_1601566880657.html?locale=en_US&language=en&currency=USD',
  title: 'Factory Quick Heating Rotating 360 Degrees Height Adjustable Infrared Hair Dryer Processor Color Standing Hair Dryer Machine',
  shortTitle: 'Secador Infrarrojo de Pie Giratorio 360° para Salón / Barbería',
  brand: 'CONRIS',
  model: 'SU-245',
  price: 106.0,
  currency: 'USD',
  moq: '1 Pieza',
  dimensions: '83 x 58 x 35 cm',
  weight: '9.35 kg',
  material: 'Acero Inoxidable + ABS Técnico',
  warranty: '2 Años de Garantía',
  rating: 4.8,
  reviewsCount: 142,
  images: [
    'https://sc04.alicdn.com/kf/H390c1bb391644100b357c6b8ba500a2fg.png',
    'https://sc04.alicdn.com/kf/Hc0251b5bfa3c4587ad6caf53a165f32dy.png',
    'https://sc04.alicdn.com/kf/H9a477f326d5743c2af30435f9b31948c3.png',
    'https://sc04.alicdn.com/kf/H4e45a484db114408bf367e3f121231d9W.png',
  ],
  ladderPrices: [
    { range: '1 - 19 piezas', price: '$106.00' },
    { range: '20 - 499 piezas', price: '$99.50' },
    { range: '500+ piezas', price: '$89.00' },
  ],
  variations: [
    { name: 'Blanco', color: '#f3f4f6' },
    { name: 'Negro', color: '#1f2937' },
    { name: 'Plateado', color: '#9ca3af' },
  ],
  importCostEstimate: {
    productCost: 106.0,
    shippingEstimate: 38.5,
    customsDuty: 12.8,
    totalLanded: 157.3,
  },
}

export const alternativeProductsData: AlternativeProduct[] = [
  {
    id: 'mic-1',
    platform: 'Made-in-China',
    platformColor: '#e02b20',
    badge: 'Máximo Ahorro -63%',
    title: 'Salon Hair Heating Dryer Machine Professional Hair Drying Styling Equipment for Hair Setting',
    spanishTitle: 'Secador Térmico Profesional con Base Rodante para Salón',
    price: 39.5,
    originalPrice: 106.0,
    savings: 66.5,
    savingsPercent: 63,
    moq: '1 Pieza',
    supplier: 'Guangzhou Ivey Beauty Equipment Co., Ltd.',
    location: 'Guangdong, China',
    rating: 4.9,
    image: 'https://image.made-in-china.com/201f0j00yuEvswthHlpf/Salon-Hair-Heating-Dryer-Machine-Professional-Hair-Drying-Styling-Equipment-for-Hair-Setting.jpg',
    url: 'https://gzivey.en.made-in-china.com/product/yAJpeFfcAsRw/China-Salon-Hair-Heating-Dryer-Machine-Professional-Hair-Drying-Styling-Equipment-for-Hair-Setting.html',
  },
  {
    id: 'cg-1',
    platform: 'Chinagoods',
    platformColor: '#0a68ff',
    badge: 'Directo de Fábrica -53%',
    title: '豪华落地式恤发烘发机（外贸专供）厂家直销美发产品.',
    spanishTitle: 'Secador de Pie Capilar con Temporizador (Mercado Yiwu)',
    price: 49.5,
    originalPrice: 106.0,
    savings: 56.5,
    savingsPercent: 53,
    moq: '1 Pieza',
    supplier: 'Yiwu Beauty Tech Manufacturing',
    location: 'Zhejiang, China',
    rating: 4.8,
    image: 'https://cdnimg.chinagoods.com/jpeg/2021/10/14/75a41adea6529ec6af82c59a117458ed.jpeg',
    url: 'https://www.chinagoods.com/store/goodsdetail/1981886496331112450',
  },
  {
    id: 'mic-2',
    platform: 'Made-in-China',
    platformColor: '#e02b20',
    badge: 'Ahorro -25%',
    title: 'Beauty Salon equipment Professional Hairdryer Standing Rolling Base with Wheels Height Adjustable',
    spanishTitle: 'Secador de Campana con Ruedas y Altura Regulable',
    price: 80.0,
    originalPrice: 106.0,
    savings: 26.0,
    savingsPercent: 25,
    moq: '1 Pieza',
    supplier: 'Henan Eminent Equipment Co.',
    location: 'Henan, China',
    rating: 4.8,
    image: 'https://image.made-in-china.com/201f0j00HnqlFmAzwirc/Beauty-Salon-equipment-Professional-Hairdryer-Standing-Rolling-Base-with-Wheels-Height-Adjustable-Hooded-Stand-up-Hair-Dryer.jpg',
    url: 'https://henaneminent.en.made-in-china.com/product/FZITMDVzMopd/China-Beauty-Salon-equipment-Professional-Hairdryer-Standing-Rolling-Base-with-Wheels-Height-Adjustable-Hooded-Stand-up-Hair-Dryer.html',
  },
  {
    id: 'tb-1',
    platform: 'Taobao / 1688',
    platformColor: '#ff5000',
    badge: 'Mayorista 1688 -20%',
    title: '美发干发机 落地式多功能红外理发加热仪器 沙龙专用',
    spanishTitle: 'Secador Infrarrojo de Pie Multifunción Salón Spa',
    price: 85.0,
    originalPrice: 106.0,
    savings: 21.0,
    savingsPercent: 20,
    moq: '2 Piezas',
    supplier: 'Guangdong Beauty Equipment Direct',
    location: 'Guangdong, China',
    rating: 4.7,
    image: 'https://cdnimg.chinagoods.com/jpg/2020/11/25/0074e86cd2f987519051e42227d7d900.jpg',
    url: 'https://www.chinagoods.com/store/goodsdetail/3626238',
  },
]
