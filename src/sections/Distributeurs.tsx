import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { ImageSlot } from '../components/ImageSlot'
import {
  distributeurs,
  distributeursIntro,
  distributeursHowItWorks,
} from '../data/distributeurs'

export function Distributeurs() {
  return (
    <Section
      id="distributeurs"
      tone="braise"
      eyebrow="Distributeurs 24/7"
      index="05 — Libre-service"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.92] text-farine">
              La pizza,
              <br />
              <span className="font-serif italic font-normal text-croute-soft">
                même la nuit
              </span>
              .
            </h2>
            <p className="mt-8 max-w-[46ch] font-serif text-xl leading-snug text-farine/85 md:text-2xl">
              {distributeursIntro}
            </p>
          </div>

          <div className="lg:col-span-5">
            <ul className="grid grid-cols-2 gap-4 sm:gap-6">
              {distributeursHowItWorks.map((s) => (
                <li
                  key={s.step}
                  className="rounded-sm border border-farine/15 bg-farine/[0.04] p-4 md:p-5"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-croute-soft">
                    {s.step}
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-farine">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-farine/70">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Les deux distributeurs */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:mt-24 md:grid-cols-2 md:gap-8">
          {distributeurs.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.95, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-sm border border-farine/15 bg-farine/[0.03]"
            >
              <div className="aspect-[4/3] w-full">
                <ImageSlot
                  src={d.image}
                  sketch="devanture"
                  tone={i === 0 ? 'croute' : 'tomate'}
                  alt={`Distributeur automatique de pizzas Le P'tit Crousti — ${d.ville}.`}
                  caption={`Distributeur · ${d.ville}`}
                  ratio="4/3"
                />
              </div>

              <div className="relative p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-tomate px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-farine">
                    ✦ Libre-service
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-croute-soft">
                    {String(i + 1).padStart(2, '0')} / 02
                  </span>
                </div>

                <h3 className="mt-5 font-display text-3xl text-farine md:text-4xl">
                  {d.ville}
                </h3>

                <div className="mt-5 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                  <DetailBlock label="Adresse">
                    <p>{d.adresse}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-farine/55">
                      {d.postal} · {d.reperage}
                    </p>
                  </DetailBlock>
                  <DetailBlock label="Horaires">
                    <p>{d.horaires}</p>
                  </DetailBlock>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-croute-soft">
            ✦ Paiement par carte bancaire, sans contact
          </p>
          <a
            href="/distributeurs"
            className="inline-flex items-center gap-2 rounded-full border border-croute-soft/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-farine transition-colors hover:border-croute-soft hover:bg-croute-soft hover:text-braise"
          >
            Détails des deux distributeurs ↗
          </a>
        </div>
      </div>
    </Section>
  )
}

function DetailBlock({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-croute-soft">
        {label}
      </span>
      <div className="mt-2 font-serif text-base leading-snug text-farine">{children}</div>
    </div>
  )
}
