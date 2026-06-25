import { useEffect, useRef } from 'react'
import { gsap, SplitText, registerGsap } from '../lib/gsap'
import { business } from '../data/business'
import { ImageSlot } from '../components/ImageSlot'
import { Counter } from '../components/Counter'
import { Section } from '../components/Section'

export function Maison() {
  const root = useRef<HTMLDivElement>(null)
  const sigRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    registerGsap()
    const ctx = gsap.context(() => {
      if (sigRef.current) {
        const split = new SplitText(sigRef.current, { type: 'words,chars' })
        gsap.from(split.chars, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.012,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: sigRef.current, start: 'top 78%', once: true },
        })
      }

      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 28,
        stagger: 0.08,
        duration: 1.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%', once: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <Section id="maison" tone="farine" eyebrow="La maison" index="01 — Tradition">
      <div ref={root} className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              data-reveal
              className="font-display text-[clamp(2.4rem,6vw,5.4rem)] text-encre"
            >
              La pâte
              <br />
              <span className="text-tomate italic font-serif font-normal">faite ici</span>
              , tous les jours.
            </h2>

            <p
              ref={sigRef}
              className="mt-10 max-w-[44ch] font-serif text-2xl leading-snug text-encre/85 md:text-3xl"
            >
              « {business.signature}. »
            </p>

            <div data-reveal className="mt-10 max-w-[55ch] text-encre/75 leading-relaxed">
              <p>
                Pâte maison, façonnée selon la <em>tradition italienne</em>. 100 % mozzarella,
                légumes frais, et des produits du Haut-Doubs qui font la différence — la <strong>Morteau</strong>, le{' '}
                <strong>morbier</strong>, le <strong>reblochon</strong>, le <strong>Mont d'Or</strong> de
                saison.
              </p>
              <p className="mt-4">
                Et si vous voulez la jouer plus douce : la plupart des pizzas se font aussi avec
                une base <strong>crème fraîche</strong>. Il suffit de demander.
              </p>
            </div>

            {/* Compteurs */}
            <div data-reveal className="mt-12 grid grid-cols-3 gap-6 border-t border-encre/15 pt-8">
              <Stat
                value={<Counter value={4.5} decimals={1} suffix="/5" />}
                label="Note Google · 66 avis"
              />
              <Stat
                value={<Counter value={66} suffix="" />}
                label="avis vérifiés"
              />
              <Stat
                value={<>
                  <Counter value={1} />
                  <span className="font-mono text-tomate">k+</span>
                </>}
                label="fans Facebook"
              />
            </div>

            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              {business.plus.map((p, i) => (
                <span
                  key={i}
                  className="rounded-full border border-encre/20 bg-farine-soft px-4 py-2 text-sm text-encre/85"
                >
                  ✦ {p}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div data-reveal>
                <ImageSlot
                  sketch="pate"
                  tone="farine"
                  alt="Gros plan sur la pâte en train d'être façonnée — mains, farine, geste."
                  caption="Pâte maison · façonnée"
                  ratio="3/4"
                  className="rounded-sm"
                />
              </div>
              <div data-reveal className="mt-12">
                <ImageSlot
                  sketch="four"
                  tone="braise"
                  alt="Four à pizza, braises, chaleur."
                  caption="Four · 300°C"
                  ratio="3/4"
                  className="rounded-sm"
                />
              </div>
              <div data-reveal className="-mt-4">
                <ImageSlot
                  sketch="ingredients"
                  tone="basilic"
                  alt="Ingrédients frais : tomate, basilic, fromage."
                  caption="Ingrédients frais"
                  ratio="3/4"
                  className="rounded-sm"
                />
              </div>
              <div data-reveal className="mt-8">
                <ImageSlot
                  sketch="pizza"
                  tone="tomate"
                  alt="Pizza sortie du four, gros plan croustillant."
                  caption="Croûte dorée"
                  ratio="3/4"
                  className="rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-encre md:text-4xl">{value}</div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-encre/55">
        {label}
      </div>
    </div>
  )
}
