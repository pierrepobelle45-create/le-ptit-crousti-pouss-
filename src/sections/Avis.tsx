import { Section } from '../components/Section'
import { Counter } from '../components/Counter'
import { reviewsSummary } from '../data/reviews'
import { business } from '../data/business'

export function Avis() {
  return (
    <Section id="avis" tone="tomate" eyebrow="Avis & confiance" index="07 — 1k+ fans">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.92]">
            On nous fait{' '}
            <span className="font-serif italic font-normal">confiance</span>
            .
          </h2>
          <p className="mt-8 max-w-[44ch] font-serif text-xl leading-snug text-farine/90">
            La note Google parle. Les fans Facebook aussi. Et le téléphone qui sonne le vendredi
            soir, encore plus.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={business.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-farine px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-tomate transition-colors hover:bg-encre hover:text-farine"
            >
              <FbIcon /> Page Facebook · {business.facebook.followers} fans
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-farine/50 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-farine transition-colors hover:border-farine hover:bg-farine hover:text-tomate"
            >
              {business.phone}
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative">
            <Stars score={reviewsSummary.score} />
            <div className="mt-6 flex items-baseline gap-4">
              <span className="font-display text-[clamp(4rem,12vw,8rem)] leading-none text-farine">
                <Counter value={reviewsSummary.score} decimals={1} />
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.22em] text-farine/70">
                /5
              </span>
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-farine/75">
              <Counter value={reviewsSummary.count} /> avis ·{' '}
              {reviewsSummary.source}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-farine/25 pt-8">
              <div>
                <div className="font-display text-3xl text-farine">
                  <Counter value={1} />
                  <span className="text-farine/80">k+</span>
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-farine/70">
                  fans Facebook
                </p>
              </div>
              <div>
                <div className="font-display text-3xl text-farine">
                  <Counter value={29} suffix=" " /> <span className="text-farine/80">pizzas</span>
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-farine/70">
                  à la carte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Stars({ score }: { score: number }) {
  const full = Math.floor(score)
  const half = score - full >= 0.4 && score - full < 0.9
  return (
    <div className="flex gap-1.5" aria-label={`${score} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const state = i < full ? 'full' : half && i === full ? 'half' : 'empty'
        return (
          <svg key={i} viewBox="0 0 24 24" width="28" height="28" aria-hidden>
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#F4ECDD" />
                <stop offset="50%" stopColor="#F4ECDD" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              d="M12 2.5l2.95 6 6.6.95-4.78 4.66 1.13 6.58L12 17.6l-5.9 3.1 1.13-6.58L2.45 9.45l6.6-.95L12 2.5z"
              fill={state === 'full' ? '#F4ECDD' : state === 'half' ? `url(#half-${i})` : 'transparent'}
              stroke="#F4ECDD"
              strokeWidth="1.4"
            />
          </svg>
        )
      })}
    </div>
  )
}

function FbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15h-2.4v-3H10V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  )
}
