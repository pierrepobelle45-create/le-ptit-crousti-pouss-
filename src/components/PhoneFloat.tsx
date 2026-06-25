import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { business } from '../data/business'

export function PhoneFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={business.phoneHref}
          initial={{ y: 32, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 32, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-tomate px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-farine shadow-[0_8px_30px_-12px_rgba(58,30,20,0.45)] md:bottom-8 md:right-8"
          aria-label="Commander par téléphone"
        >
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
          Commander · <span className="font-display tracking-normal text-[14px]">{business.phone}</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
