import { motion } from 'framer-motion'
import { nouveautes, nouveautesNote } from '../data/nouveautes'
import { Section } from '../components/Section'
import { ImageSlot } from '../components/ImageSlot'

export function Nouveautes() {
  return (
    <Section
      id="nouveautes"
      tone="farine"
      eyebrow="Nouveautés du moment"
      index="04 — Ça tourne"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.92] text-encre">
            Les nouvelles —<br />
            <span className="font-serif italic font-normal text-tomate">
              à goûter tant qu'elles sont là
            </span>
            .
          </h2>
          <p className="max-w-[34ch] font-mono text-[11px] uppercase tracking-[0.22em] text-encre/55">
            {nouveautesNote}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {nouveautes.map((n, i) => (
            <motion.article
              key={n.name}
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.95, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden bg-encre text-farine"
            >
              <div className="aspect-[4/3] w-full">
                <ImageSlot
                  sketch="pizza"
                  tone={i === 0 ? 'croute' : 'basilic'}
                  alt={`${n.name} — gros plan gourmand sur la nouveauté.`}
                  caption={n.name}
                  ratio="4/3"
                />
              </div>
              <div className="relative p-7 md:p-9">
                {n.note && (
                  <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-tomate px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-farine">
                    ✦ {n.note}
                  </span>
                )}
                <h3 className="font-display text-3xl md:text-4xl text-farine">{n.name}</h3>
                <p className="mt-3 max-w-[40ch] font-serif text-lg leading-snug text-farine/80">
                  {n.tagline}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-farine/15 pt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-farine/55">
                  <span>nouveauté · {String(i + 1).padStart(2, '0')}</span>
                  <span className="transition-opacity group-hover:text-croute-soft">
                    appeler pour la dispo ↗
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
