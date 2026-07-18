import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { ImageSlot } from '../components/ImageSlot'

const tiles = [
  { src: '/photos/pizza-jambon-cru.webp', alt: 'Pizza jambon cru, mozzarella crémeuse et salade, vue de dessus.', credit: 'Jambon cru', col: 'md:col-span-2', row: 'md:row-span-2', ratio: '1/1' },
  { src: '/photos/pizza-burger.webp', alt: 'Pizza Burger — viande hachée, cheddar, bacon, cornichons, tomates cerises.', credit: 'Pizza Burger', col: '', row: '', ratio: '4/5' },
  { src: '/photos/terrasse.webp', alt: "La terrasse en bois du P'tit Crousti, au soleil.", credit: 'La terrasse', col: '', row: '', ratio: '4/5' },
  { src: '/photos/pizza-jambon-cru-parmesan.webp', alt: 'Pizza jambon cru, roquette et copeaux de parmesan, croûte au feu de bois.', credit: 'Au feu de bois', col: 'md:col-span-2', row: '', ratio: '16/9' },
  { src: '/photos/pizza-coppa-chevre.webp', alt: 'Pizza coppa, chèvre, roquette et pignons de pin.', credit: 'Coppa & chèvre', col: '', row: '', ratio: '4/5' },
  { src: '/photos/salle-cosy.webp', alt: 'Le coin cosy de la salle — guirlandes lumineuses et plantes.', credit: 'Le coin cosy', col: '', row: '', ratio: '4/5' },
  { src: '/photos/salade-poulet.webp', alt: 'Salade de poulet, crudités et pain maison grillé.', credit: 'Salade de poulet', col: 'md:col-span-2', row: '', ratio: '16/9' },
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
          Les pizzas au feu de bois, la salle, la terrasse — en vrai. Et tous les jours,
          encore plus sur la page Facebook <em>« Le p'tit crousti »</em>, suivie par 1 000 gourmands.
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
                src={t.src}
                alt={t.alt}
                credit={t.credit}
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
