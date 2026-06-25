/**
 * Pictos terroir sur-mesure, animés via GSAP DrawSVG.
 * Chaque path porte la classe `draw-path` pour être ciblé.
 */
import type { TerroirProduit } from '../data/terroir'

export function TerroirPicto({
  id,
  size = 120,
}: {
  id: TerroirProduit['id']
  size?: number
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 120 120',
    'aria-hidden': true,
  } as const
  const strokeProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (id) {
    case 'morteau':
      return (
        <svg {...common}>
          <g {...strokeProps}>
            <path
              className="draw-path"
              d="M22 60 Q22 44 60 44 Q98 44 98 60 Q98 76 60 76 Q22 76 22 60 Z"
            />
            <path
              className="draw-path"
              d="M30 56 Q60 50 90 56 M30 64 Q60 70 90 64"
              opacity="0.55"
            />
            <circle className="draw-path" cx="14" cy="60" r="4" />
            <circle className="draw-path" cx="106" cy="60" r="4" />
            <path
              className="draw-path"
              d="M30 30 Q40 22 50 30 M65 24 Q72 30 78 26 M80 32 Q88 28 94 32"
              opacity="0.7"
            />
          </g>
        </svg>
      )
    case 'cancoillotte':
      return (
        <svg {...common}>
          <g {...strokeProps}>
            <path
              className="draw-path"
              d="M28 40 Q28 32 36 32 L84 32 Q92 32 92 40 L92 78 Q92 86 84 86 L36 86 Q28 86 28 78 Z"
            />
            <path
              className="draw-path"
              d="M34 50 Q50 44 60 50 Q70 56 86 50"
              opacity="0.7"
            />
            <path
              className="draw-path"
              d="M34 62 Q50 56 60 62 Q70 68 86 62"
              opacity="0.55"
            />
            <path
              className="draw-path"
              d="M34 74 Q50 68 60 74 Q70 80 86 74"
              opacity="0.4"
            />
          </g>
        </svg>
      )
    case 'morbier':
      return (
        <svg {...common}>
          <g {...strokeProps}>
            <path className="draw-path" d="M16 50 L104 50 L104 78 L16 78 Z" />
            <line
              className="draw-path"
              x1="16"
              y1="64"
              x2="104"
              y2="64"
              strokeWidth="3"
            />
            <circle className="draw-path" cx="30" cy="72" r="1.5" />
            <circle className="draw-path" cx="50" cy="74" r="1.2" />
            <circle className="draw-path" cx="76" cy="71" r="1.5" />
            <circle className="draw-path" cx="92" cy="73" r="1" />
            <circle className="draw-path" cx="40" cy="56" r="1.2" />
            <circle className="draw-path" cx="68" cy="58" r="1.5" />
            <text
              x="60"
              y="44"
              textAnchor="middle"
              fontSize="9"
              fontFamily="monospace"
              fill="currentColor"
              stroke="none"
              opacity="0.5"
            >
              AOP
            </text>
          </g>
        </svg>
      )
    case 'montdor':
      return (
        <svg {...common}>
          <g {...strokeProps}>
            <ellipse className="draw-path" cx="60" cy="70" rx="42" ry="18" />
            <ellipse
              className="draw-path"
              cx="60"
              cy="64"
              rx="42"
              ry="18"
              opacity="0.8"
            />
            <path
              className="draw-path"
              d="M20 64 Q20 56 60 56 Q100 56 100 64"
              opacity="0.7"
            />
            <path
              className="draw-path"
              d="M32 60 Q40 50 48 60 M58 58 Q66 50 74 58 M80 60 Q88 50 96 60"
              opacity="0.8"
            />
            <path
              className="draw-path"
              d="M24 38 Q60 34 96 38"
              opacity="0.5"
            />
          </g>
        </svg>
      )
    case 'reblochon':
      return (
        <svg {...common}>
          <g {...strokeProps}>
            <circle className="draw-path" cx="60" cy="60" r="36" />
            <circle
              className="draw-path"
              cx="60"
              cy="60"
              r="28"
              opacity="0.7"
            />
            <path
              className="draw-path"
              d="M40 56 Q50 48 60 56 Q70 64 80 56"
              opacity="0.6"
            />
            <circle className="draw-path" cx="48" cy="68" r="1" />
            <circle className="draw-path" cx="68" cy="66" r="1.2" />
            <circle className="draw-path" cx="74" cy="72" r="1" />
          </g>
        </svg>
      )
    case 'jambonfume':
      return (
        <svg {...common}>
          <g {...strokeProps}>
            <path
              className="draw-path"
              d="M22 60 Q22 44 38 36 Q60 26 84 30 Q102 32 102 50 Q102 76 80 84 Q56 92 38 86 Q22 80 22 60 Z"
            />
            <path
              className="draw-path"
              d="M30 50 Q60 40 92 50"
              opacity="0.55"
            />
            <path
              className="draw-path"
              d="M30 70 Q60 80 92 64"
              opacity="0.4"
            />
            <path
              className="draw-path"
              d="M40 14 Q50 22 44 30 M60 12 Q68 20 62 28 M80 14 Q88 22 82 30"
              opacity="0.6"
            />
          </g>
        </svg>
      )
  }
}
