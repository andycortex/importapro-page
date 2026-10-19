'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  BadgeCheck,
  ExternalLink,
  Flame,
  Package,
  RotateCcw,
  Ruler,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Truck,
} from 'lucide-react'
import {
  alibabaProductData,
  alternativeProductsData,
  type AlternativeProduct,
  type ProductDetail,
} from '@/lib/mock-search-data'

interface SearchResultsProps {
  onReset?: () => void
}

export function SearchResults({ onReset }: SearchResultsProps) {
  const [product] = useState<ProductDetail>(alibabaProductData)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariation, setSelectedVariation] = useState(0)
  const [alternatives] = useState<AlternativeProduct[]>(alternativeProductsData)

  const bestAlternative = alternatives[0]

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10" id="resultados-busqueda">
      {/* 1. Banner Superior de Oportunidad de Ahorro */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#102a2a] via-[#163f3c] to-[#0a1b1b] p-6 sm:p-8 text-white border border-[#E16B4F]/40 shadow-2xl mb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E16B4F]/20 border border-[#E16B4F] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#ff9d85] mb-3">
              <Sparkles className="size-3.5 text-[#E16B4F]" /> ¡Oportunidad de Ahorro Detectada!
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Encontramos alternativas idénticas con hasta un{' '}
              <span className="text-emerald-400 font-extrabold underline decoration-[#E16B4F] decoration-wavy underline-offset-4">
                {bestAlternative.savingsPercent}% de ahorro
              </span>
            </h3>
            <p className="mt-2 text-sm text-[#c8d7d4] leading-relaxed">
              El producto cotizado en Alibaba cuesta <strong>${product.price.toFixed(2)} USD</strong>. Encontramos el mismo modelo directo de fábrica en plataformas mayoristas desde <strong className="text-white">${bestAlternative.price.toFixed(2)} USD</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="flex-1 lg:flex-initial rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-md">
              <span className="block text-[10.5px] uppercase font-bold tracking-wider text-[#9cb5af]">Precio Alibaba</span>
              <span className="block text-xl font-black text-[#ff8f78] line-through">${product.price.toFixed(2)}</span>
            </div>
            <div className="flex-1 lg:flex-initial rounded-2xl bg-teal-500/15 border border-teal-400/40 px-4 py-3 backdrop-blur-md">
              <span className="block text-[10.5px] uppercase font-bold tracking-wider text-teal-200">Mejor alternativa</span>
              <span className="block text-xl font-black text-white">${bestAlternative.price.toFixed(2)}</span>
            </div>
            <div className="w-full sm:w-auto flex-1 lg:flex-initial rounded-2xl bg-emerald-500/20 border border-emerald-400/50 px-4 py-3 backdrop-blur-md">
              <span className="block text-[10.5px] uppercase font-bold tracking-wider text-emerald-200">Ahorro por unidad</span>
              <span className="block text-xl font-black text-emerald-300">-${bestAlternative.savings.toFixed(2)} USD</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Tarjeta Principal: Producto Analizado en Alibaba */}
      <div className="bg-white rounded-3xl border border-[#d8e5e1] p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Columna Izquierda: Galería */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="relative aspect-square w-full rounded-2xl bg-[#f7faf9] border border-[#d8e5e1] overflow-hidden flex items-center justify-center p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-3.5 left-3.5 bg-[#ff6a00] text-white text-[11px] font-black px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
              Alibaba Verificado
            </span>
          </div>

          {/* Miniaturas */}
          <div className="flex gap-2.5 overflow-x-auto pb-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(idx)}
                className={`relative size-16 sm:size-20 shrink-0 rounded-xl border-2 overflow-hidden bg-white p-1 transition-all ${
                  selectedImage === idx
                    ? 'border-[#E16B4F] ring-2 ring-[#E16B4F]/30 scale-105 shadow-md'
                    : 'border-[#d8e5e1] hover:border-slate-400 opacity-70 hover:opacity-100'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
              </button>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Información y Especificaciones */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#ff6a00] mb-2">
              <span className="size-2 rounded-full bg-[#ff6a00]" /> Producto Analizado en Alibaba
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102a2a] leading-tight">
              {product.shortTitle}
            </h2>
            <p className="mt-1.5 text-xs text-[#667c79] line-clamp-2 leading-relaxed">
              {product.title}
            </p>
          </div>

          {/* Caja de Precio */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f8f6] border border-[#d8e5e1] flex flex-wrap items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-[#102a2a]">$</span>
              <span className="text-3xl sm:text-4xl font-black text-[#102a2a] tracking-tight">
                {product.price.toFixed(2)}
              </span>
              <span className="text-xs font-semibold text-[#667c79] ml-1">USD / {product.moq}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-amber-500 font-bold tracking-wider">★★★★★</span>
              <span className="font-extrabold text-[#102a2a]">{product.rating}</span>
              <span className="text-[#667c79]">({product.reviewsCount} pedidos verificados)</span>
            </div>
          </div>

          {/* Variantes de Color */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-[#102a2a]">Variante disponible:</span>
            <div className="flex gap-2">
              {product.variations.map((v, i) => (
                <button
                  key={v.name}
                  type="button"
                  onClick={() => setSelectedVariation(i)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedVariation === i
                      ? 'border border-[#E16B4F] bg-[#fff6f4] text-[#E16B4F] shadow-sm'
                      : 'border border-[#d8e5e1] bg-white text-[#526360] hover:border-slate-400'
                  }`}
                >
                  <span className="size-3 rounded-full border border-black/20" style={{ backgroundColor: v.color }} />
                  <span>{v.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Especificaciones Clave */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7faf9] border border-[#d8e5e1]">
              <Ruler className="size-4 text-[#E16B4F] shrink-0" />
              <div>
                <span className="block text-[11px] text-[#667c79]">Dimensiones empaque</span>
                <strong className="text-xs text-[#102a2a] font-bold">{product.dimensions}</strong>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7faf9] border border-[#d8e5e1]">
              <Scale className="size-4 text-[#E16B4F] shrink-0" />
              <div>
                <span className="block text-[11px] text-[#667c79]">Peso unitario</span>
                <strong className="text-xs text-[#102a2a] font-bold">{product.weight}</strong>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7faf9] border border-[#d8e5e1]">
              <Package className="size-4 text-[#E16B4F] shrink-0" />
              <div>
                <span className="block text-[11px] text-[#667c79]">Marca y Modelo</span>
                <strong className="text-xs text-[#102a2a] font-bold">{product.brand} {product.model}</strong>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7faf9] border border-[#d8e5e1]">
              <ShieldCheck className="size-4 text-[#E16B4F] shrink-0" />
              <div>
                <span className="block text-[11px] text-[#667c79]">Garantía fábrica</span>
                <strong className="text-xs text-[#102a2a] font-bold">{product.warranty}</strong>
              </div>
            </div>
          </div>

          {/* Desglose de Costo de Importación (Landed Cost) */}
          <div className="rounded-2xl bg-[#eff7f4] border border-[#c3dfd6] p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#173d3b] mb-3">
              <Truck className="size-4 text-[#18a999]" /> Estimación de Costo Puesto en Destino (Landed Cost)
            </div>
            <div className="space-y-1.5 text-xs text-[#4b635f]">
              <div className="flex justify-between">
                <span>Costo Producto (FOB)</span>
                <strong className="text-[#102a2a]">${product.importCostEstimate.productCost.toFixed(2)} USD</strong>
              </div>
              <div className="flex justify-between">
                <span>Flete internacional estimado</span>
                <strong className="text-[#102a2a]">+${product.importCostEstimate.shippingEstimate.toFixed(2)} USD</strong>
              </div>
              <div className="flex justify-between">
                <span>Aranceles e impuestos estimados</span>
                <strong className="text-[#102a2a]">+${product.importCostEstimate.customsDuty.toFixed(2)} USD</strong>
              </div>
              <div className="pt-2 border-t border-[#c3dfd6] flex justify-between items-baseline font-bold text-[#102a2a]">
                <span className="text-xs">Costo Final Estimado en Puerta:</span>
                <span className="text-base text-teal-800 font-black">
                  ${product.importCostEstimate.totalLanded.toFixed(2)} USD
                </span>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#102a2a] hover:bg-[#1a4441] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md"
            >
              Ver publicación original en Alibaba <ExternalLink className="size-3.5" />
            </a>
            {onReset && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-2 border border-[#d8e5e1] hover:bg-slate-50 text-[#526360] text-xs font-bold px-4 py-3 rounded-xl transition-all"
              >
                <RotateCcw className="size-3.5" /> Probar otro producto
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Sección de Alternativas con Menor Precio */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#E16B4F]">
          <TrendingDown className="size-4" /> MEJORES ALTERNATIVAS ENCONTRADAS
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102a2a] tracking-tight mt-2">
          Proveedores alternativos al mismo producto con menor precio
        </h2>
        <p className="mt-2 text-sm text-[#667c79]">
          Localizamos el mismo secador infrarrojo y fabricantes OEM directos en <strong>1688</strong>, <strong>Chinagoods</strong> y <strong>Made-in-China</strong> con costos sustancialmente menores.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {alternatives.map((alt) => (
          <article
            key={alt.id}
            className="group bg-white rounded-2xl border border-[#d8e5e1] hover:border-[#E16B4F] p-4 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#E16B4F]/10 transition-all duration-300"
          >
            <div>
              {/* Badges superiores */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className="text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-md"
                  style={{ backgroundColor: alt.platformColor }}
                >
                  {alt.platform}
                </span>
                <span className="inline-flex items-center gap-1 bg-[#fff2ef] text-[#E16B4F] text-[10.5px] font-extrabold px-2 py-0.5 rounded-md">
                  <Flame className="size-3 text-[#E16B4F]" /> {alt.badge}
                </span>
              </div>

              {/* Imagen del Producto */}
              <div className="relative aspect-square w-full rounded-xl bg-[#f7faf9] border border-[#eef2f0] overflow-hidden mb-3.5 flex items-center justify-center p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={alt.image}
                  alt={alt.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Título en español y título original */}
              <h4 className="text-sm font-extrabold text-[#102a2a] line-clamp-2 min-h-[40px] leading-snug" title={alt.spanishTitle}>
                {alt.spanishTitle}
              </h4>
              <p className="text-[11px] text-[#859995] line-clamp-1 mt-1">
                {alt.title}
              </p>

              {/* Fila de Precios */}
              <div className="mt-3.5 p-3 rounded-xl bg-[#f7faf9] border border-[#eef2f0] flex items-center justify-between">
                <div>
                  <div className="text-xl font-black text-[#E16B4F]">
                    ${alt.price.toFixed(2)} <span className="text-[11px] font-semibold text-[#667c79]">USD</span>
                  </div>
                  <div className="text-[11px] text-[#859995]">
                    Alibaba: <span className="line-through">${alt.originalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-black text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
                    -${alt.savings.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Información del Fabricante */}
              <div className="mt-3 pt-3 border-t border-[#edf2f0] text-xs text-[#667c79]">
                <div className="flex items-center gap-1.5 truncate">
                  <BadgeCheck className="size-3.5 text-emerald-600 shrink-0" />
                  <strong className="text-[#102a2a] truncate">{alt.supplier}</strong>
                </div>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-[#859995]">
                  <span>MOQ: {alt.moq}</span>
                  <span>•</span>
                  <span>{alt.location}</span>
                </div>
              </div>
            </div>

            {/* Botón CTA */}
            <a
              href={alt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2.5 rounded-xl bg-[#E16B4F] hover:bg-[#cf5d42] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-[#E16B4F]/20"
            >
              Ver proveedor en {alt.platform} <ArrowUpRight className="size-3.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
