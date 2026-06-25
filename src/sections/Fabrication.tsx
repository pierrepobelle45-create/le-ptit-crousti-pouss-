import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, SplitText, registerGsap } from '../lib/gsap'
import { fabrication } from '../data/fabrication'

export function Fabrication() {
  const root = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGsap()
    const ctx = gsap.context(() => {
      const stage = stageRef.current
      if (!stage) return
      const steps = stage.querySelectorAll<HTMLElement>('[data-step]')
      const total = steps.length

      // Init : seule la première visible
      steps.forEach((s, i) => gsap.set(s, { autoAlpha: i === 0 ? 1 : 0, y: i === 0 ? 0 : 24 }))

      // Pinned scrollytelling
      const trigger = ScrollTrigger.create({
        trigger: root.current,
        start: 'top top',
        end: () => `+=${total * 90}%`,
        pin: stage,
        pinSpacing: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (total - 1),
          duration: 0.4,
          ease: 'power2.out',
        },
        onUpdate: (self) => {
          const idx = Math.min(total - 1, Math.floor(self.progress * total))
          steps.forEach((s, i) => {
            gsap.to(s, {
              autoAlpha: i === idx ? 1 : 0,
              y: i === idx ? 0 : i < idx ? -24 : 24,
              duration: 0.5,
              ease: 'power3.out',
              overwrite: true,
            })
          })
          // Barre de progression
          const bar = stage.querySelector<HTMLElement>('[data-progress-bar]')
          if (bar) gsap.set(bar, { scaleX: self.progress })
          // Index courant
          const ind = stage.querySelector<HTMLElement>('[data-indicator]')
          if (ind) ind.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`
        },
      })

      // SplitText sur les titres au montage
      steps.forEach((s) => {
        const t = s.querySelector<HTMLElement>('[data-step-title]')
        if (t) new SplitText(t, { type: 'chars,words' })
      })

      return () => {
        trigger.kill()
      }
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="fabrication"
      ref={root}
      className="relative bg-braise text-farine"
      aria-label="De la pâte au four"
    >
      <div
        ref={stageRef}
        className="relative flex h-[100svh] w-full flex-col overflow-hidden"
      >
        {/* Décor : grain matière, filet de farine */}
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 top-[14%] h-px bg-croute/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-[14%] h-px bg-croute/30" />

        {/* En-tête sticky */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-12 md:pt-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-croute-soft">
            ✦ De la pâte au four
          </span>
          <span
            data-indicator
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-croute-soft"
          >
            01 / 0{fabrication.length}
          </span>
        </div>

        {/* Étapes empilées */}
        <div className="relative z-10 flex flex-1 items-center justify-center px-6 md:px-12">
          <div className="relative w-full max-w-[1100px]">
            {fabrication.map((step) => (
              <div
                key={step.index}
                data-step
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <span className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-croute">
                  étape {step.index}
                </span>
                <h3
                  data-step-title
                  className="font-display text-[clamp(2.6rem,8vw,7rem)] leading-[0.92] text-farine"
                >
                  {step.title}
                </h3>
                <p className="mt-7 max-w-[44ch] font-serif text-xl leading-snug text-farine/85 md:text-2xl">
                  {step.body}
                </p>
                <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.28em] text-croute-soft">
                  {step.cue}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Barre de progression au sol */}
        <div className="relative z-10 px-6 pb-8 md:px-12 md:pb-12">
          <div className="relative h-px bg-croute/20">
            <div
              data-progress-bar
              className="absolute inset-y-0 left-0 origin-left bg-croute"
              style={{ width: '100%', transform: 'scaleX(0)' }}
            />
          </div>
          <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-croute-soft/85">
            {fabrication.map((s) => (
              <span key={s.index}>{s.index}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
