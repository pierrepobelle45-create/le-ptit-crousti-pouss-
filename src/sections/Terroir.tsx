import { useEffect, useRef } from 'react'
import { gsap, DrawSVGPlugin, ScrollTrigger, registerGsap } from '../lib/gsap'
import { terroir, terroirIntro } from '../data/terroir'
import { TerroirPicto } from '../components/TerroirPicto'
import { Section } from '../components/Section'

export function Terroir() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGsap()
    const ctx = gsap.context(() => {
      // Animation DrawSVG : tous les paths se dessinent
      const cards = root.current?.querySelectorAll<HTMLElement>('[data-terroir-card]')
      if (!cards) return
      cards.forEach((card, i) => {
        const paths = card.querySelectorAll('.draw-path')
        gsap.set(paths, { drawSVG: '0%' })
        gsap.to(paths, {
          drawSVG: '100%',
          duration: 1.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 82%', once: true },
          delay: (i % 3) * 0.08,
        })
        gsap.from(card, {
          y: 28,
          opacity: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <Section
      id="terroir"
      tone="encre"
      eyebrow="Le terroir du Haut-Doubs"
      index="03 — Produits régionaux"
    >
      <div ref={root} className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.92]">
              Le goût{' '}
              <span className="font-serif italic font-normal text-croute-soft">
                d'ici
              </span>
              .
            </h2>
            <p className="mt-8 max-w-[40ch] font-serif text-xl leading-snug text-farine/80">
              {terroirIntro}
            </p>
            <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-farine/65">
              Morteau, cancoillotte, morbier, Mont d'Or de saison, reblochon, jambon fumé — ce sont
              eux qui font la différence sur une <em>Oricampienne</em>, une <em>Morbiflette</em>,
              une <em>Royale</em>. La pâte est faite ici. Le reste vient d'à côté.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
              {terroir.map((t) => (
                <div key={t.id} data-terroir-card className="flex flex-col items-start text-farine">
                  <div className="mb-4 flex h-32 w-full items-center justify-start text-croute-soft">
                    <TerroirPicto id={t.id} size={132} />
                  </div>
                  <h3 className="font-serif text-xl leading-tight text-farine">
                    {t.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-croute-soft">
                    {t.origin}
                  </p>
                  <p className="mt-3 text-sm text-farine/65">
                    sur la <span className="text-tomate">{t.pairing}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
