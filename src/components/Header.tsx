import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { business } from '../data/business'

const links = [
  { href: '#maison', label: 'La maison' },
  { href: '#carte', label: 'Carte' },
  { href: '#terroir', label: 'Terroir' },
  { href: '#distributeurs', label: '24/7' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80))

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-farine/85 backdrop-blur-md border-b border-encre/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-2.5 md:px-12 md:py-3">
        <a
          href="#"
          aria-label="Le P'tit Crousti — accueil"
          className="group inline-flex items-center"
        >
          <img
            src="/logo.png"
            alt="Le P'tit Crousti"
            width={48}
            height={62}
            className="h-12 w-auto transition-transform duration-500 group-hover:rotate-[-2deg] md:h-14"
          />
        </a>

        <nav className="hidden gap-7 md:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-encre/65 transition-colors hover:text-tomate"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-tomate px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-farine transition-colors hover:bg-tomate-deep"
        >
          <span className="hidden sm:inline">Commander</span>
          <span className="font-display tracking-normal text-[12px]">{business.phone}</span>
        </a>
      </div>
    </motion.header>
  )
}

