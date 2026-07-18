import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import {
  categories,
  desserts,
  menu,
  menuNote,
  salades,
  type Extra,
  type Pizza,
  type PizzaCategory,
} from '../data/menu'
import { Section } from '../components/Section'

type Filter = PizzaCategory | 'tout'

export function Carte() {
  const [filter, setFilter] = useState<Filter>('tout')

  const filtered = useMemo(
    () => (filter === 'tout' ? menu : menu.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <Section id="carte" tone="farine" eyebrow="La carte" index={`02 — ${menu.length} pizzas`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.92] text-encre">
            La carte —<br />
            <span className="font-serif italic font-normal text-tomate">vraie, complète, fidèle</span>
            .
          </h2>
          <p className="max-w-[36ch] text-sm text-encre/70 md:text-right">
            {menuNote}
          </p>
        </div>

        {/* Filtres animés */}
        <LayoutGroup>
          <div
            role="tablist"
            aria-label="Filtres carte"
            className="no-scrollbar mt-12 flex gap-2 overflow-x-auto pb-2"
          >
            {categories.map((c) => {
              const active = filter === c.id
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(c.id as Filter)}
                  className={`relative shrink-0 rounded-full border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    active
                      ? 'border-transparent text-farine'
                      : 'border-encre/20 text-encre/75 hover:border-encre/40 hover:text-encre'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-bg"
                      className="absolute inset-0 rounded-full bg-encre"
                      transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-baseline gap-2">
                    <span>{c.label}</span>
                    {c.hint && (
                      <span className={`text-[9px] tracking-normal opacity-70 ${active ? 'text-croute-soft' : ''}`}>
                        · {c.hint}
                      </span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </LayoutGroup>

        {/* Grille de pizzas */}
        <motion.div
          layout
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-encre/15 bg-encre/15 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((p) => (
              <PizzaCard key={p.name} pizza={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Desserts & salades */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-encre/15 bg-encre/15 sm:grid-cols-2">
          <ExtrasList title="Desserts" hint="fait maison" items={desserts} />
          <ExtrasList title="Salades" hint="nos suggestions" items={salades} />
        </div>

        {/* Indication crème */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-encre/15 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-encre/70">
            ★ aussi possible avec crème fraîche
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-encre/55">
            Commande par téléphone · à emporter
          </p>
        </div>
      </div>
    </Section>
  )
}

function PizzaCard({ pizza }: { pizza: Pizza }) {
  const isRegional = pizza.category === 'regionales'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`group relative bg-farine p-6 md:p-7 ${
        isRegional ? 'ring-1 ring-inset ring-tomate/30' : ''
      }`}
    >
      {isRegional && (
        <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-tomate px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.25em] text-farine">
          ✦ Haut-Doubs
        </span>
      )}

      <header className="flex items-baseline justify-between gap-4 border-b border-encre/15 pb-4">
        <h3 className="font-display text-2xl text-encre md:text-3xl">{pizza.name}</h3>
        <span className="font-mono text-base text-tomate md:text-lg">
          {pizza.price.toFixed(2).replace('.', ',')} €
        </span>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-encre/75">
        <IngredientsLine text={pizza.ingredients} highlight={pizza.highlight} />
      </p>

      <footer className="mt-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.24em] text-encre/45">
        <span>
          base ·{' '}
          <span className={pizza.base === 'creme' ? 'text-basilic' : 'text-tomate'}>
            {pizza.base === 'creme' ? 'crème' : 'tomate'}
          </span>
        </span>
        <span className="opacity-60 group-hover:opacity-100 transition-opacity">
          appeler ↗
        </span>
      </footer>
    </motion.article>
  )
}

function ExtrasList({
  title,
  hint,
  items,
}: {
  title: string
  hint?: string
  items: Extra[]
}) {
  return (
    <div className="bg-farine p-6 md:p-8">
      <header className="flex items-baseline justify-between gap-4 border-b border-encre/15 pb-4">
        <h3 className="font-display text-2xl text-encre md:text-3xl">{title}</h3>
        {hint && (
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-encre/45">
            {hint}
          </span>
        )}
      </header>
      <ul className="mt-2 flex flex-col">
        {items.map((it) => (
          <li
            key={it.name}
            className="flex items-baseline gap-3 py-2.5 text-encre/80"
          >
            <span className="font-serif text-base md:text-lg">{it.name}</span>
            <span aria-hidden className="flex-1 translate-y-[-2px] border-b border-dotted border-encre/25" />
            <span className="font-mono text-sm text-tomate md:text-base">
              {it.price.toFixed(2).replace('.', ',')} €
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function IngredientsLine({
  text,
  highlight = [],
}: {
  text: string
  highlight?: string[]
}) {
  if (!highlight.length) return <>{text}</>
  // Split en gardant le séparateur ", "
  const parts = text.split(/, /)
  return (
    <>
      {parts.map((part, i) => {
        const isHi = highlight.some((h) => part.toLowerCase().includes(h.toLowerCase()))
        return (
          <span key={i}>
            {isHi ? (
              <span className="font-medium text-tomate">{part}</span>
            ) : (
              part
            )}
            {i < parts.length - 1 ? ', ' : ''}
          </span>
        )
      })}
    </>
  )
}
