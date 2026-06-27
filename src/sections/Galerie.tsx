import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { ImageSlot } from '../components/ImageSlot'

const tiles = [
  { sketch: 'four', tone: 'braise', alt: 'Four à pizza : braises, chaleur, pizza qui dore.', caption: 'Four à bois', col: 'md:col-span-2', row: 'md:row-span-2', ratio: '1/1' },
  { sketch: 'pizza', tone: 'tomate', alt: 'Pizza sortie du four, gros plan croustillant.', caption: 'Sortie du four', col: '', row: '', ratio: '4/5' },
  { sketch: 'devanture', tone: 'farine', alt: 'Devanture 3 Grande Rue, Orchamps-Vennes.', caption: '3 Grande Rue', col: '', row: '', ratio: '4/5' },
  { sketch: 'pate', tone: 'farine', alt: 'Pâte façonnée à la main.', caption: 'Pâte maison', col: 'md:col-span-2', row: '', ratio: '16/9' },
  { sketch: 'ingredients', tone: 'basilic', alt: 'Ingrédients frais — tomate, basilic.', caption: 'Frais du jour', col: '', row: '', ratio: '4/5' },
  { sketch: 'pizza', tone: 'croute', alt: 'Pizza régionale Morteau cancoillotte.', caption: 'Oricampienne', col: '', row: '', ratio: '4/5' },
  { sketch: 'plat', tone: 'tomate', alt: 'Carte des pizzas à emporter, vue de dessus.', caption: 'À emporter', col: 'md:col-span-2', row: '', ratio: '16/9' },
] as const

export function Galerie() {
  return (
    <Section id="galerie" tone="farine" eyebrow="Galerie gourmande" index="06 — Reportage food">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <h2 className="font-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.92] text-encre">
          Ce qui se passe{' '}
          <span className="font-serif italic font-normal text-tomate">ici</span>
          .
        </h2>
        <p className="mt-6 max-w-[48ch] text-sm text-encre/70">
          Pour voir les vraies photos au quotidien — pizzas, four, devanture, nouveautés — la page
          Facebook <em>« Le p'tit crousti »</em> est l'endroit. Mille fans n'ont pas tort.
        </p>

        <div className="mt-12 grid auto-rows-[260px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, scale: 1.005 }}
              className={`${t.col} ${t.row} h-full overflow-hidden`}
            >
              <ImageSlot
                sketch={t.sketch}
                tone={t.tone}
                alt={t.alt}
                caption={t.caption}
                ratio={t.ratio}
                className="h-full"
                parallax
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
