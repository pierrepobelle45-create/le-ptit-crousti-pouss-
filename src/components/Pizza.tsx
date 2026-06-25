/**
 * Pizza SVG vectorielle — fallback élégant à la 3D R3F.
 * Tourne lentement, parallaxe douce, ingrédients fidèles, JAMAIS de glow.
 */
import { useEffect, useRef } from 'react'
import { gsap, registerGsap } from '../lib/gsap'

export function Pizza({ size = 560 }: { size?: number }) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    registerGsap()
    const el = ref.current
    if (!el) return
    const rotor = el.querySelector('[data-rotor]')
    if (!rotor) return
    const tween = gsap.to(rotor, {
      rotate: 360,
      duration: 80,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
    })
    return () => {
      tween.kill()
    }
  }, [])

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 600"
      width={size}
      height={size}
      className="block max-w-full"
      aria-label="Pizza artisanale du P'tit Crousti"
      role="img"
    >
      <defs>
        <radialGradient id="pizza-crust" cx="50%" cy="50%" r="50%">
          <stop offset="78%" stopColor="#C98A3E" />
          <stop offset="92%" stopColor="#A86028" />
          <stop offset="100%" stopColor="#7C3F1A" />
        </radialGradient>
        <radialGradient id="pizza-sauce" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C13D33" />
          <stop offset="100%" stopColor="#87271F" />
        </radialGradient>
        <filter id="paperTexture" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.6"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix values="0 0 0 0 0.14 0 0 0 0 0.09 0 0 0 0 0.06 0 0 0 0.18 0" />
          <feComposite in="SourceGraphic" in2="" operator="over" />
        </filter>
      </defs>

      <g data-rotor>
        {/* Croûte */}
        <circle cx="300" cy="300" r="270" fill="url(#pizza-crust)" />
        {/* Texture pâte */}
        <circle cx="300" cy="300" r="270" fill="#000" opacity="0.04" filter="url(#paperTexture)" />
        {/* Sauce */}
        <circle cx="300" cy="300" r="232" fill="url(#pizza-sauce)" />

        {/* Mozzarella — taches blanches irrégulières */}
        <g fill="#F4ECDD" opacity="0.92">
          <ellipse cx="220" cy="220" rx="36" ry="28" />
          <ellipse cx="360" cy="240" rx="42" ry="32" transform="rotate(-12 360 240)" />
          <ellipse cx="400" cy="350" rx="34" ry="26" transform="rotate(18 400 350)" />
          <ellipse cx="280" cy="380" rx="38" ry="30" transform="rotate(-8 280 380)" />
          <ellipse cx="195" cy="340" rx="30" ry="24" />
          <ellipse cx="320" cy="305" rx="28" ry="22" />
        </g>
        <g fill="#241710" opacity="0.1">
          <ellipse cx="232" cy="228" rx="14" ry="8" />
          <ellipse cx="368" cy="248" rx="16" ry="10" />
          <ellipse cx="284" cy="388" rx="14" ry="9" />
        </g>

        {/* Basilic */}
        <g fill="#3E5E3A">
          <path d="M180 200 q-10 -16 -22 -8 q4 16 22 8" />
          <path d="M170 200 l4 14" stroke="#2D4429" strokeWidth="1.5" fill="none" />

          <path d="M410 270 q12 -14 22 -2 q-6 14 -22 2" />
          <path d="M422 268 l-4 14" stroke="#2D4429" strokeWidth="1.5" fill="none" />

          <path d="M250 410 q-12 -14 -22 -2 q6 14 22 2" />
          <path d="M238 408 l4 14" stroke="#2D4429" strokeWidth="1.5" fill="none" />

          <path d="M385 415 q12 -14 22 -2 q-6 14 -22 2" />
          <path d="M397 413 l-4 14" stroke="#2D4429" strokeWidth="1.5" fill="none" />

          <path d="M150 290 q-12 -14 -22 -2 q6 14 22 2" />
        </g>

        {/* Olives noires */}
        <g fill="#2A1410">
          <ellipse cx="265" cy="270" rx="9" ry="11" />
          <ellipse cx="350" cy="180" rx="9" ry="11" />
          <ellipse cx="190" cy="395" rx="9" ry="11" />
          <ellipse cx="430" cy="290" rx="9" ry="11" />
          <ellipse cx="345" cy="430" rx="9" ry="11" />
        </g>
        <g fill="#A8332A">
          <ellipse cx="265" cy="270" rx="2.5" ry="3" />
          <ellipse cx="350" cy="180" rx="2.5" ry="3" />
          <ellipse cx="190" cy="395" rx="2.5" ry="3" />
          <ellipse cx="430" cy="290" rx="2.5" ry="3" />
          <ellipse cx="345" cy="430" rx="2.5" ry="3" />
        </g>

        {/* Tomates cerises */}
        <g fill="#C13D33">
          <circle cx="240" cy="330" r="12" />
          <circle cx="370" cy="320" r="11" />
          <circle cx="300" cy="220" r="10" />
        </g>
        <g fill="#F4ECDD" opacity="0.45">
          <ellipse cx="237" cy="325" rx="3" ry="2" />
          <ellipse cx="367" cy="315" rx="3" ry="2" />
          <ellipse cx="297" cy="216" rx="3" ry="2" />
        </g>

        {/* Bulles croûte */}
        <g fill="#7C3F1A" opacity="0.8">
          <circle cx="120" cy="270" r="6" />
          <circle cx="490" cy="320" r="5" />
          <circle cx="300" cy="80" r="6" />
          <circle cx="180" cy="500" r="5" />
          <circle cx="450" cy="170" r="4" />
        </g>
      </g>

      {/* Vapeur subtile (sans glow — opacité légère, blanc cassé) */}
      <g opacity="0.32">
        <path
          d="M260 60 q8 -16 0 -32 q-12 -10 -4 -26"
          stroke="#F4ECDD"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M320 60 q-8 -16 0 -32 q12 -10 4 -26"
          stroke="#F4ECDD"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M300 50 q8 -16 0 -32 q-12 -10 -4 -26"
          stroke="#F4ECDD"
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  )
}
