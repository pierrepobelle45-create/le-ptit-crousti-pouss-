import { useEffect, useRef, useState, type CSSProperties } from 'react'

type Props = {
  /** Source réelle (Facebook "Le p'tit crousti", Google Business). Laisser undefined si à compléter. */
  src?: string
  /** Description du cadrage attendu — sert d'alt et d'aide à Pierre pour brancher la vraie photo. */
  alt: string
  /** Ratio CSS (ex. "4/5", "16/9"). */
  ratio?: string
  className?: string
  /** Sketch SVG de fallback : "pizza" | "four" | "devanture" | "patte" | "ingredients" | "mosaique" | "plat" */
  sketch?:
    | 'pizza'
    | 'four'
    | 'devanture'
    | 'pate'
    | 'ingredients'
    | 'plat'
    | 'plan'
  /** Couleur dominante du fallback. */
  tone?: 'tomate' | 'basilic' | 'croute' | 'braise' | 'farine'
  /** Texte court visible dans le fallback (ex. "Façade · 3 Grande Rue"). */
  caption?: string
  /** Légende discrète sous l'image dans le rendu live. */
  credit?: string
  style?: CSSProperties
  parallax?: boolean
}

const toneMap = {
  tomate: { bg: '#A8332A', ink: '#F4ECDD', accent: '#C98A3E' },
  basilic: { bg: '#3E5E3A', ink: '#F4ECDD', accent: '#C98A3E' },
  croute: { bg: '#C98A3E', ink: '#241710', accent: '#A8332A' },
  braise: { bg: '#3A1E14', ink: '#F4ECDD', accent: '#C98A3E' },
  farine: { bg: '#E3D6BD', ink: '#241710', accent: '#A8332A' },
}

export function ImageSlot({
  src,
  alt,
  ratio = '4/5',
  className = '',
  sketch = 'pizza',
  tone = 'tomate',
  caption,
  credit,
  style,
  parallax = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [px, setPx] = useState(0)

  useEffect(() => {
    if (!parallax) return
    const el = ref.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2 - window.innerHeight / 2
        setPx(-(center * 0.06))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [parallax])

  const t = toneMap[tone]

  return (
    <figure
      ref={ref}
      className={`relative overflow-hidden bg-farine-soft ${className}`}
      style={{ aspectRatio: ratio, ...style }}
      aria-label={alt}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: `translate3d(0, ${px}px, 0)` }}
        />
      ) : (
        <Fallback sketch={sketch} t={t} caption={caption ?? alt} />
      )}
      {/* Grain matière subtil */}
      <div className="grain absolute inset-0" />
      {credit && (
        <figcaption className="absolute bottom-3 left-3 z-10 text-[10px] uppercase tracking-[0.18em] font-mono text-farine/85 mix-blend-difference">
          {credit}
        </figcaption>
      )}
      {!src && (
        <span
          className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-encre/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] font-mono text-farine"
          aria-hidden
        >
          <span className="h-1 w-1 rounded-full bg-tomate" /> à compléter
        </span>
      )}
    </figure>
  )
}

function Fallback({
  sketch,
  t,
  caption,
}: {
  sketch: NonNullable<Props['sketch']>
  t: (typeof toneMap)[keyof typeof toneMap]
  caption: string
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
      style={{ background: t.bg, color: t.ink }}
    >
      <svg
        viewBox="0 0 200 200"
        className="h-3/4 w-3/4"
        aria-hidden
        style={{ color: t.accent }}
      >
        {sketch === 'pizza' && (
          <g>
            <circle cx="100" cy="100" r="78" fill={t.accent} />
            <circle cx="100" cy="100" r="64" fill={t.bg} />
            <circle cx="78" cy="80" r="6" fill={t.ink} opacity="0.55" />
            <circle cx="118" cy="72" r="5" fill={t.ink} opacity="0.45" />
            <circle cx="120" cy="118" r="7" fill={t.ink} opacity="0.55" />
            <circle cx="76" cy="120" r="5" fill={t.ink} opacity="0.45" />
            <circle cx="100" cy="100" r="4" fill={t.ink} opacity="0.6" />
          </g>
        )}
        {sketch === 'four' && (
          <g fill="none" stroke={t.accent} strokeWidth="3" strokeLinecap="round">
            <path d="M30 150 Q100 40 170 150 Z" />
            <path d="M60 150 L60 165 L140 165 L140 150" />
            <path d="M85 140 Q100 110 115 140" />
            <circle cx="100" cy="135" r="4" fill={t.accent} />
            <path d="M80 95 q4 -10 8 0 M105 92 q4 -10 8 0 M90 70 q4 -10 8 0" />
          </g>
        )}
        {sketch === 'devanture' && (
          <g fill="none" stroke={t.accent} strokeWidth="3" strokeLinecap="round">
            <path d="M20 160 L20 80 L100 40 L180 80 L180 160 Z" />
            <path d="M70 160 L70 110 L130 110 L130 160" />
            <path d="M85 130 L115 130" />
            <text
              x="100"
              y="78"
              textAnchor="middle"
              fontFamily="serif"
              fontSize="14"
              fill={t.accent}
              stroke="none"
            >
              CROUSTI
            </text>
          </g>
        )}
        {sketch === 'pate' && (
          <g fill="none" stroke={t.accent} strokeWidth="3" strokeLinecap="round">
            <ellipse cx="100" cy="110" rx="70" ry="22" />
            <path d="M50 110 q50 -50 100 0" />
            <path d="M70 70 q-10 -10 -20 -2 M130 70 q10 -10 20 -2" />
          </g>
        )}
        {sketch === 'ingredients' && (
          <g fill={t.accent}>
            <circle cx="60" cy="60" r="14" />
            <circle cx="140" cy="55" r="12" />
            <ellipse cx="65" cy="150" rx="18" ry="8" />
            <path
              d="M120 130 q15 -25 30 -10 q-5 20 -30 10z"
              fill={t.accent}
              opacity="0.85"
            />
            <circle cx="100" cy="100" r="6" />
          </g>
        )}
        {sketch === 'plat' && (
          <g fill="none" stroke={t.accent} strokeWidth="3" strokeLinecap="round">
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="55" />
            <path d="M70 100 L130 100 M100 70 L100 130" />
          </g>
        )}
        {sketch === 'plan' && (
          <g fill="none" stroke={t.accent} strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 60 L180 60 M40 60 L40 160 M120 60 L120 160 M40 110 L180 110" />
            <circle cx="80" cy="85" r="8" fill={t.accent} />
            <path d="M80 78 L80 92 M73 85 L87 85" stroke={t.bg} strokeWidth="2" />
          </g>
        )}
      </svg>
      <p className="mt-3 max-w-[80%] font-mono text-[10px] uppercase tracking-[0.22em] opacity-90">
        {caption}
      </p>
    </div>
  )
}
