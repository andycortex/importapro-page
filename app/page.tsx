'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  Heart,
  PackageSearch,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  TrendingDown,
  X,
  Zap,
} from 'lucide-react'

const stores = [
  { name: 'Todas las tiendas', count: 128 },
  { name: 'Amazon', count: 42, color: '#ff9900' },
  { name: 'AliExpress', count: 38, color: '#ff4747' },
  { name: 'Alibaba', count: 27, color: '#ff6a00' },
  { name: 'Made-in-China', count: 21, color: '#1e78d7' },
]

const products = [
  { store: 'Amazon', storeColor: '#ff9900', title: 'Auriculares inalámbricos con cancelación de ruido', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85', price: 29.99, oldPrice: 49.99, shipping: 'Envío gratis', rating: 4.8, reviews: '2.4k', tag: 'Mejor precio', delivery: 'Entrega 2–4 días' },
  { store: 'AliExpress', storeColor: '#ff4747', title: 'Audífonos Bluetooth Hi-Fi, batería 40 horas', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=85', price: 16.49, oldPrice: 32.00, shipping: '+ 2,99 € envío', rating: 4.7, reviews: '8.1k', tag: 'Más vendido', delivery: 'Entrega 7–12 días' },
  { store: 'Alibaba', storeColor: '#ff6a00', title: 'Auriculares ANC Pro para compra al por mayor', image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=700&q=85', price: 11.20, oldPrice: 18.50, shipping: 'Desde 50 unidades', rating: 4.6, reviews: '326', tag: 'Mayorista', delivery: 'Entrega 15–25 días' },
  { store: 'Made-in-China', storeColor: '#1e78d7', title: 'Wireless Headphones con micrófono integrado', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=85', price: 21.90, oldPrice: 28.00, shipping: 'Envío calculado', rating: 4.5, reviews: '184', tag: 'Verificado', delivery: 'Entrega 10–18 días' },
]

export default function Page() {
  const [query, setQuery] = useState('auriculares inalámbricos')
  const [submittedQuery, setSubmittedQuery] = useState('auriculares inalámbricos')
  const [selectedStore, setSelectedStore] = useState('Todas las tiendas')
  const [sort, setSort] = useState('Recomendados')
  const [favorites, setFavorites] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const visibleProducts = useMemo(() => {
    let results = selectedStore === 'Todas las tiendas' ? products : products.filter((product) => product.store === selectedStore)
    if (sort === 'Precio más bajo') results = [...results].sort((a, b) => a.price - b.price)
    if (sort === 'Mejor valorados') results = [...results].sort((a, b) => b.rating - a.rating)
    return results
  }, [selectedStore, sort])

  function submitSearch(event: React.FormEvent) {
    event.preventDefault()
    if (query.trim()) setSubmittedQuery(query.trim())
  }

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#17202a]">
      <div className="bg-[#132b3f] px-5 py-2 text-center text-[11px] font-medium tracking-wide text-white/85">
        Comparamos precios de más de 10.000 tiendas para que tú no tengas que hacerlo
      </div>
      <header className="border-b border-[#e7eaee] bg-white">
        <div className="mx-auto flex max-w-[1320px] items-center gap-8 px-5 py-5 lg:px-8">
          <a href="#" className="flex shrink-0 items-center gap-2.5" aria-label="comprazo inicio">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#ff6b35] text-white shadow-sm shadow-orange-200"><PackageSearch className="size-5" strokeWidth={2.3} /></span>
            <span className="text-[21px] font-extrabold tracking-[-0.06em] text-[#132b3f]">comprazo<span className="text-[#ff6b35]">.</span></span>
          </a>
          <form onSubmit={submitSearch} className="relative hidden min-w-0 flex-1 md:block">
            <Search className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#8b96a3]" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Buscar productos" className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-[#f8fafb] pl-11 pr-28 text-sm outline-none transition focus:border-[#ff6b35] focus:ring-4 focus:ring-orange-100" />
            <button className="absolute right-1.5 top-1.5 h-9 rounded-lg bg-[#ff6b35] px-5 text-xs font-bold text-white transition hover:bg-[#e95b29]">Buscar</button>
          </form>
          <nav className="ml-auto flex items-center gap-5 text-sm font-semibold text-[#627080]">
            <a href="#como-funciona" className="hidden hover:text-[#17202a] lg:block">¿Cómo funciona?</a>
            <button className="flex items-center gap-2 hover:text-[#17202a]" aria-label="Favoritos"><Heart className="size-[18px]" /> <span className="hidden sm:inline">Favoritos</span></button>
            <button className="hidden rounded-lg border border-[#dfe4ea] px-4 py-2 text-xs font-bold text-[#26394b] transition hover:bg-[#f7f8fa] sm:block">Iniciar sesión</button>
          </nav>
        </div>
        <form onSubmit={submitSearch} className="relative mx-5 mb-4 md:hidden">
          <Search className="absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#8b96a3]" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Buscar productos" className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#f8fafb] pl-11 pr-20 text-sm outline-none focus:border-[#ff6b35]" />
          <button className="absolute right-1 top-1 h-9 rounded-lg bg-[#ff6b35] px-3 text-xs font-bold text-white">Buscar</button>
        </form>
      </header>

      <section className="mx-auto max-w-[1320px] px-5 pb-12 pt-10 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#ff6b35]"><Sparkles className="size-3.5" /> Comparador inteligente</div>
            <h1 className="text-3xl font-extrabold tracking-[-0.045em] text-[#132b3f] sm:text-[40px]">Resultados para <span className="text-[#ff6b35]">“{submittedQuery}”</span></h1>
            <p className="mt-3 text-sm text-[#73808d]">128 resultados encontrados · Actualizado hace 2 minutos</p>
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="flex w-fit items-center gap-2 rounded-lg border border-[#dfe4ea] bg-white px-4 py-2.5 text-sm font-bold text-[#32485b] shadow-sm md:hidden"><SlidersHorizontal className="size-4" /> Filtros</button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[230px_1fr]">
          <aside className={`${showFilters ? 'block' : 'hidden'} rounded-2xl border border-[#e5e9ee] bg-white p-5 md:block lg:h-fit`}>
            <div className="mb-5 flex items-center justify-between"><h2 className="text-sm font-extrabold">Filtrar resultados</h2><button className="text-xs font-semibold text-[#ff6b35]">Limpiar</button></div>
            <div className="mb-6 border-b border-[#edf0f3] pb-5"><p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#8a96a2]">Tiendas</p><div className="space-y-3">{stores.map((store, index) => <button key={store.name} onClick={() => setSelectedStore(store.name)} className="flex w-full items-center justify-between text-left text-sm"><span className="flex items-center gap-2.5"><span className={`flex size-4 items-center justify-center rounded border ${selectedStore === store.name ? 'border-[#ff6b35] bg-[#ff6b35]' : 'border-[#cdd4db]'}`}>{selectedStore === store.name && <Check className="size-3 text-white" />}</span>{index > 0 && <span className="size-2 rounded-full" style={{ backgroundColor: store.color }} />}{store.name}</span><span className="text-xs text-[#9aa4ae]">{store.count}</span></button>)}</div></div>
            <div className="mb-6 border-b border-[#edf0f3] pb-5"><p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#8a96a2]">Precio</p><div className="flex items-center gap-2"><input aria-label="Precio mínimo" placeholder="Mínimo" className="h-9 w-full rounded-md border border-[#dfe4ea] px-2 text-xs" /><span className="text-[#adb5bd]">—</span><input aria-label="Precio máximo" placeholder="Máximo" className="h-9 w-full rounded-md border border-[#dfe4ea] px-2 text-xs" /></div></div>
            <div><p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#8a96a2]">Entrega</p>{['Envío gratis', 'Entrega rápida', 'Compra mayorista'].map((label) => <label key={label} className="mb-3 flex items-center gap-2.5 text-sm"><input type="checkbox" className="size-4 accent-[#ff6b35]" />{label}</label>)}</div>
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between"><p className="text-sm text-[#7b8792]">Mostrando <strong className="text-[#17202a]">{visibleProducts.length * 32}</strong> de 128 productos</p><div className="relative flex items-center gap-2 text-sm"><span className="hidden text-[#8a96a2] sm:inline">Ordenar por</span><select value={sort} onChange={(event) => setSort(event.target.value)} className="appearance-none rounded-lg border border-[#dfe4ea] bg-white py-2 pl-3 pr-8 text-xs font-bold outline-none"><option>Recomendados</option><option>Precio más bajo</option><option>Mejor valorados</option></select><ChevronDown className="pointer-events-none absolute right-2 size-3.5 text-[#657482]" /></div></div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{visibleProducts.map((product, index) => <article key={product.store} className="group overflow-hidden rounded-2xl border border-[#e5e9ee] bg-white transition hover:-translate-y-0.5 hover:border-[#ffb59a] hover:shadow-[0_10px_30px_-15px_rgba(28,47,63,.3)]"><div className="relative aspect-[1.12] overflow-hidden bg-[#f3f5f6]"><img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-extrabold text-[#344a5c] shadow-sm">{product.tag}</span><button onClick={() => setFavorites((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])} aria-label="Añadir a favoritos" className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#7d8994] shadow-sm transition hover:text-[#ff6b35]"><Heart className={`size-4 ${favorites.includes(index) ? 'fill-[#ff6b35] text-[#ff6b35]' : ''}`} /></button></div><div className="p-4"><div className="mb-2 flex items-center justify-between"><span className="flex items-center gap-1.5 text-xs font-bold"><span className="size-2 rounded-full" style={{ backgroundColor: product.storeColor }} />{product.store}</span><span className="flex items-center gap-1 text-xs font-semibold text-[#e3a51a]"><Star className="size-3.5 fill-current" /> {product.rating} <span className="font-normal text-[#9aa4ae]">({product.reviews})</span></span></div><h3 className="mb-4 min-h-[42px] text-sm font-bold leading-5 text-[#263b4d]">{product.title}</h3><div className="flex items-end justify-between"><div><div className="flex items-center gap-2"><span className="text-[21px] font-extrabold tracking-tight text-[#132b3f]">{product.price.toFixed(2).replace('.', ',')} €</span><span className="text-xs text-[#a1aab3] line-through">{product.oldPrice.toFixed(2).replace('.', ',')} €</span></div><p className="mt-1 text-[11px] font-medium text-[#23a06b]">{product.shipping}</p></div><a href="#" aria-label={`Ver producto en ${product.store}`} className="flex size-9 items-center justify-center rounded-lg bg-[#fff1ec] text-[#ff6b35] transition hover:bg-[#ff6b35] hover:text-white"><ArrowUpRight className="size-4" /></a></div><div className="mt-4 flex items-center gap-1.5 border-t border-[#f0f2f4] pt-3 text-[11px] text-[#8a96a2]"><Clock3 className="size-3.5" /> {product.delivery}</div></div></article>)}</div>
            {visibleProducts.length === 0 && <div className="rounded-2xl border border-dashed border-[#dfe4ea] bg-white p-12 text-center"><X className="mx-auto mb-3 size-8 text-[#ff6b35]" /><p className="font-bold">No hay productos de esta tienda</p></div>}
            <div className="mt-10 rounded-2xl bg-[#132b3f] p-6 text-white sm:flex sm:items-center sm:justify-between"><div><div className="mb-2 flex items-center gap-2 text-sm font-bold"><TrendingDown className="size-4 text-[#ff9a73]" /> Alertas de precio</div><p className="text-xs text-white/65">Te avisamos cuando {submittedQuery} baje de precio.</p></div><button className="mt-4 rounded-lg bg-[#ff6b35] px-4 py-2.5 text-xs font-bold transition hover:bg-[#e95b29] sm:mt-0">Crear alerta gratis</button></div>
          </div>
        </div>
      </section>
      <footer id="como-funciona" className="border-t border-[#e7eaee] bg-white px-5 py-8"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-4 text-xs text-[#8a96a2] sm:flex-row"><p>© 2025 comprazo. Compara. Decide. Ahorra.</p><div className="flex gap-5"><span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-[#23a06b]" /> Enlaces verificados</span><span className="flex items-center gap-1.5"><Zap className="size-3.5 text-[#ff6b35]" /> Precios actualizados</span><span className="hidden items-center gap-1.5 sm:flex"><ExternalLink className="size-3.5" /> Cómo funciona</span></div></div></footer>
    </main>
  )
}
