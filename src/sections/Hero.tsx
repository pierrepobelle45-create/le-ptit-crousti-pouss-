import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, SplitText, MotionPathPlugin, registerGsap } from '../lib/gsap'
import { business } from '../data/business'
import { Pizza } from '../components/Pizza'
import { IngredientSvg, type IngredientKey } from '../components/IngredientSvg'

const orbit: Array<{ key: IngredientKey; offset: number; radius: number; size: number; speed: number }> = [
  { key: 'basilic', offset: 0, radius: 1.05, size: 44, speed: 22 },
  { key: 'tomate', offset: 0.18, radius: 1.18, size: 56, speed: 26 },
  { key: 'morbier', offset: 0.34, radius: 1.0, size: 50, speed: 24 },
  { key: 'olive', offset: 0.5, radius: 1.22, size: 32, speed: 28 },
  { key: 'morteau', offset: 0.62, radius: 1.08, size: 60, speed: 23 },
  { key: 'cancoillotte', offset: 0.76, radius: 1.16, size: 48, speed: 25 },
  { key: 'champignon', offset: 0.88, radius: 0.98, size: 42, speed: 21 },
  { key: 'farine', offset: 0.94, radius: 1.26, size: 38, speed: 30 },
]

export function Hero() {
  const root = useRef<HTMLDivElement>(null)
  const pizzaWrap = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const baselineRef = useRef<HTMLParagraphElement>(null)
  const ingredientsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGsap()
    const ctx = gsap.context(() => {
      // Titre — SplitText à l'assemblage
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, { type: 'chars,words' })
        gsap.from(split.chars, {
          yPercent: 110,
          rotate: 4,
          opacity: 0,
          stagger: 0.025,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.15,
        })
      }

      // Baseline
      if (baselineRef.current) {
        const sb = new SplitText(baselineRef.current, { type: 'lines,words' })
        gsap.from(sb.words, {
          yPercent: 80,
          opacity: 0,
          stagger: 0.018,
          duration: 1,
          delay: 0.95,
          ease: 'power3.out',
        })
      }

      // Pizza : rentrée + parallaxe scroll
      gsap.from(pizzaWrap.current, {
        scale: 0.86,
        opacity: 0,
        duration: 1.6,
        ease: 'power3.out',
      })
      gsap.to(pizzaWrap.current, {
        yPercent: -8,
        rotate: 18,
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      })

      // Ingrédients en orbite via MotionPath circulaire
      const items = ingredientsRef.current?.querySelectorAll<HTMLElement>('[data-orbit]')
      if (items && items.length) {
        items.forEach((el, i) => {
          const cfg = orbit[i % orbit.length]
          const r = 240 * cfg.radius
          gsap.set(el, { xPercent: -50, yPercent: -50 })
          // Path circulaire
          const path = makeCirclePath(r)
          gsap.to(el, {
            motionPath: {
              path,
              alignOrigin: [0.5, 0.5],
              start: cfg.offset,
              end: cfg.offset + 1,
            },
            duration: cfg.speed,
            ease: 'none',
            repeat: -1,
          })
          // Pulse subtil
          gsap.to(el, {
            scale: 1.08,
            duration: 2.4 + (i % 3) * 0.3,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          })
        })

        // Entrée des ingrédients : chute douce
        gsap.from(items, {
          yPercent: -120,
          opacity: 0,
          stagger: 0.05,
          duration: 1.2,
          delay: 0.3,
          ease: 'power3.out',
        })
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={root}
      className="paper relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* Pizza centrale — décalée sous le header sticky */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pt-28 md:pt-36">
        <div
          ref={pizzaWrap}
          className="relative aspect-square w-[min(70vw,640px)]"
          aria-hidden
        >
          <Pizza size={640} />
        </div>
      </div>

      {/* Ingrédients en orbite */}
      <div
        ref={ingredientsRef}
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center pt-28 md:pt-36"
        aria-hidden
      >
        <div className="relative h-[min(70vw,640px)] w-[min(70vw,640px)]">
          {orbit.map((o, i) => (
            <div
              key={i}
              data-orbit
              className="absolute left-1/2 top-1/2 drop-shadow-[0_2px_0_rgba(36,23,16,0.18)]"
            >
              <IngredientSvg ingredient={o.key} size={o.size} />
            </div>
          ))}
        </div>
      </div>

      {/* Texte hero — décalé sous le header sticky */}
      <div className="relative z-30 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 pt-40 pb-10 md:px-12 md:pt-44 md:pb-14">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-encre/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-farine backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-tomate" />
            La pizza maison · tradition italienne
          </span>
          <h1
            ref={titleRef}
            className="font-display text-[clamp(3.5rem,12vw,11rem)] leading-[0.88] text-encre"
          >
            <span className="block">Le P'tit</span>
            <span
              className="block text-farine"
              style={{
                WebkitTextStroke: '1.5px #241710',
                textShadow: '0 2px 0 rgba(36,23,16,0.18)',
              }}
            >
              Crousti
            </span>
          </h1>
          <p
            ref={baselineRef}
            className="mt-6 max-w-[42ch] font-serif text-lg leading-snug text-encre/85 md:text-2xl"
          >
            {business.baseline}.
          </p>
        </div>

        {/* CTA bas */}
        <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-5">
          <a
            href={business.phoneHref}
            className="group inline-flex items-center gap-3 rounded-full bg-tomate px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.22em] text-farine transition-colors hover:bg-tomate-deep"
          >
            <PhoneIcon />
            <span>
              Commander · <span className="font-display tracking-normal text-[15px]">{business.phone}</span>
            </span>
          </a>
          <a
            href="#carte"
            className="inline-flex items-center gap-3 rounded-full border border-encre/30 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.22em] text-encre transition-colors hover:border-encre hover:bg-encre hover:text-farine"
          >
            Voir la carte
            <span aria-hidden>↓</span>
          </a>
        </div>

        {/* Filet d'indication scroll */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.4em] text-encre/55">
          scroll
          <span className="h-10 w-px bg-encre/35" />
        </div>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function makeCirclePath(r: number) {
  // Path SVG circulaire approx via 4 courbes de Bézier
  const k = 0.5522847498
  const a = r * k
  return `M${-r},0 C${-r},${-a} ${-a},${-r} 0,${-r} C${a},${-r} ${r},${-a} ${r},0 C${r},${a} ${a},${r} 0,${r} C${-a},${r} ${-r},${a} ${-r},0 Z`
}
