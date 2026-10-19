'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BadgeDollarSign,
  Camera,
  Check,
  Globe2,
  Menu,
  PackageSearch,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SearchResults } from '@/components/search-results'
import { sampleAlibabaUrl } from '@/lib/mock-search-data'

const plans = [
  {
    name: 'Plan básico',
    price: '$0',
    description: 'Ideal para comenzar a cotizar y validar tus primeras compras.',
    accent: 'slate',
    features: ['3 cotizaciones al mes', 'Calculadora de importación', 'Soporte por correo'],
  },
  {
    name: 'Plan comercial',
    price: '$19',
    description: 'Para emprendedores que compran con frecuencia y buscan margen.',
    accent: 'gold',
    features: ['Cotizaciones ilimitadas', 'Comparación de proveedores', 'Costos y aranceles detallados'],
  },
  {
    name: 'Plan profesional',
    price: '$49',
    description: 'Potencia real para hacer crecer tu operación internacional.',
    accent: 'blue',
    features: ['Todo lo del plan comercial', 'Historial de importaciones', 'Asesoría prioritaria'],
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productUrl, setProductUrl] = useState('')
  const [searched, setSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  function triggerSearchSimulation(urlToUse?: string) {
    const url = (urlToUse ?? productUrl).trim() || sampleAlibabaUrl
    setProductUrl(url)
    setIsLoading(true)
    setShowResults(false)
    setSearched(false)

    setTimeout(() => {
      setIsLoading(false)
      setShowResults(true)
      setSearched(true)
      // Scroll to results
      setTimeout(() => {
        const el = document.getElementById('resultados-busqueda')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }, 1200)
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    triggerSearchSimulation()
  }

  function handleCameraClick() {
    triggerSearchSimulation(sampleAlibabaUrl)
  }

  function handleReset() {
    setShowResults(false)
    setSearched(false)
    setProductUrl('')
    const el = document.getElementById('inicio')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="site-shell" suppressHydrationWarning>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="ImportaPro inicio">
          <span className="brand-mark"><Globe2 size={22} strokeWidth={2.5} /></span>
          <span>IMPORTA<span className="brand-accent">PRO</span></span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>Beneficios</a>
          <a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a>
          <a href="#ayuda" onClick={() => setMenuOpen(false)}>Ayuda</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="#login">Iniciar sesión</a>
          <a className="header-cta" href="#planes">Empezar gratis <ArrowRight size={15} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-layout">
          <div className="hero-intro">
            <div className="eyebrow"><Sparkles size={14} /> TU COMPRA, MÁS INTELIGENTE</div>
            <h1>Compra global.<br /><span>Decide localmente.</span></h1>
            <p className="hero-copy">Una forma más clara de saber cuánto cuesta realmente traer un producto hasta tu puerta.</p>
            <div className="hero-proof"><span className="proof-dot" /> Más de 12,000 cotizaciones calculadas</div>
          </div>
          <div className="search-card">
          <div className="search-heading"><PackageSearch size={19} /><span>Analiza cualquier producto en segundos</span></div>
          <form onSubmit={handleSearch} className="search-form">
            <div className="input-wrap">
              <Search size={18} aria-hidden="true" />
              <input
                aria-label="Link del producto"
                value={productUrl}
                onChange={(event) => { setProductUrl(event.target.value); setSearched(false) }}
                placeholder="Pega aquí el link de Alibaba o AliExpress"
                type="url"
              />
              <button
                type="button"
                onClick={handleCameraClick}
                className="camera-button"
                aria-label="Buscar por imagen o enlace demo"
                title="Simular búsqueda con Alibaba"
              >
                <Camera size={18} />
              </button>
            </div>
            <Button
              className="search-button h-[58px] w-full sm:w-[290px] bg-[#E16B4F] hover:bg-[#cf5d42] text-white"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'ANALIZANDO...' : 'BUSCAR PRODUCTO'} <ArrowRight size={17} />
            </Button>
          </form>

          {isLoading && (
            <div className="mt-4 p-4 rounded-2xl bg-[#050b14] border border-[#E16B4F]/40 text-white flex items-center gap-4 shadow-xl">
              <div className="size-6 border-2 border-white/20 border-t-[#E16B4F] rounded-full animate-spin shrink-0" />
              <div>
                <strong className="block text-sm font-bold text-white">Analizando producto en Alibaba...</strong>
                <small className="block text-xs text-[#9cb1ad] mt-0.5">Consultando especificaciones y buscando proveedores alternativos en 1688, Chinagoods y Made-in-China</small>
              </div>
            </div>
          )}

          {!isLoading && !showResults && (
            <button
              type="button"
              onClick={() => triggerSearchSimulation(sampleAlibabaUrl)}
              className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E16B4F]/10 border border-dashed border-[#E16B4F]/40 text-[#ff9e87] hover:bg-[#E16B4F]/20 hover:text-white text-xs transition-colors cursor-pointer text-left"
            >
              <Sparkles size={13} className="text-[#E16B4F] shrink-0" /> <span>💡 Simular búsqueda demo: <u className="underline-offset-2">Secador Infrarrojo 360° en Alibaba (Ver alternativas)</u></span>
            </button>
          )}

          {searched && !isLoading && (
            <div className="search-success">
              <Check size={16} /> Cotización y alternativas generadas con éxito. Revisa el análisis a continuación.
            </div>
          )}

          <p className="search-note">Compatible con Alibaba, AliExpress, 1688 y más plataformas</p>
          </div>
        </div>
        <div className="trust-row"><span><ShieldCheck size={16} /> Datos protegidos</span><span><Truck size={16} /> Cálculo de envío incluido</span><span><BadgeDollarSign size={16} /> Sin costos ocultos</span></div>
      </section>

      {/* Resultados de búsqueda y alternativas */}
      {showResults && <SearchResults onReset={handleReset} />}

      <section className="steps-section" id="como-funciona">
        <div className="section-kicker">ASÍ DE FÁCIL</div>
        <h2>Del link a tu decisión de compra.</h2>
        <p className="section-intro">Toda la información que necesitas para comprar internacionalmente sin sorpresas.</p>
        <div className="steps-grid">
          {[['01', 'Pega tu producto', 'Comparte el enlace del producto que quieres importar.'], ['02', 'Comparamos costos', 'Calculamos producto, envío, impuestos y margen estimado.'], ['03', 'Toma el control', 'Decide con números claros y compra con seguridad.']].map(([number, title, copy]) => (
            <article className="step-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{copy}</p><ArrowRight size={18} /></article>
          ))}
        </div>
      </section>

      <section className="benefits-section" id="beneficios">
        <div><div className="section-kicker">TODO EN UN SOLO LUGAR</div><h2>Tu ventaja empieza<br /><span>antes de comprar.</span></h2></div>
        <div className="benefit-list"><div><Globe2 /><span><strong>Mercado global</strong><small>Explora proveedores de todo el mundo.</small></span></div><div><BadgeDollarSign /><span><strong>Costos transparentes</strong><small>Visualiza el costo total, sin adivinanzas.</small></span></div><div><ShieldCheck /><span><strong>Decisiones seguras</strong><small>Compra con la información de un experto.</small></span></div></div>
      </section>

      <section className="plans-section" id="planes">
        <div className="section-kicker">ELIGE TU RITMO</div><h2>Crece a tu manera.</h2><p className="section-intro">Comienza gratis y desbloquea más herramientas cuando las necesites.</p>
        <div className="plans-grid">{plans.map((plan) => <article className={`plan-card ${plan.accent}`} key={plan.name}>{plan.accent === 'gold' && <div className="popular-tag">MÁS ELEGIDO</div>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="plan-price">{plan.price}<small>/mes</small></div><ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><button>{plan.price === '$0' ? 'Comenzar gratis' : 'Elegir plan'} <ArrowRight size={15} /></button></article>)}</div>
      </section>

      <footer id="ayuda"><div className="brand"><span className="brand-mark"><Globe2 size={18} /></span><span>IMPORTA<span className="brand-accent">PRO</span></span></div><p>Importar bien empieza por cotizar mejor.</p><div><a href="#ayuda">Centro de ayuda</a><a href="#legal">Privacidad</a><a href="#legal">Términos</a></div></footer>
    </main>
  )
}
