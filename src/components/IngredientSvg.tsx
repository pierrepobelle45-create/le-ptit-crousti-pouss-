/**
 * Ingrédients pour le hero — gravés simple, matière, jamais "icône lucide".
 * Réutilisés en orbite autour de la pizza (MotionPath).
 */

type IngredientKey =
  | 'basilic'
  | 'tomate'
  | 'morbier'
  | 'morteau'
  | 'olive'
  | 'cancoillotte'
  | 'champignon'
  | 'farine'

export function IngredientSvg({
  ingredient,
  size = 56,
}: {
  ingredient: IngredientKey
  size?: number
}) {
  switch (ingredient) {
    case 'basilic':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g fill="none" stroke="#3E5E3A" strokeWidth="1.6" strokeLinejoin="round">
            <path
              d="M32 8 Q12 22 16 44 Q26 52 32 50 Q38 52 48 44 Q52 22 32 8 Z"
              fill="#3E5E3A"
            />
            <path d="M32 12 L32 50" stroke="#F4ECDD" />
            <path
              d="M32 22 Q22 26 22 36 M32 22 Q42 26 42 36 M32 34 Q24 38 24 44 M32 34 Q40 38 40 44"
              stroke="#F4ECDD"
            />
          </g>
        </svg>
      )
    case 'tomate':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g>
            <circle cx="32" cy="36" r="22" fill="#A8332A" />
            <path
              d="M22 16 L32 26 L42 16 L36 12 L32 18 L28 12 Z"
              fill="#3E5E3A"
            />
            <ellipse
              cx="24"
              cy="30"
              rx="3"
              ry="5"
              fill="#F4ECDD"
              opacity="0.35"
            />
          </g>
        </svg>
      )
    case 'morbier':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g>
            <path
              d="M8 26 L8 44 L56 44 L56 26 Z"
              fill="#F4ECDD"
              stroke="#241710"
              strokeWidth="1.4"
            />
            <line
              x1="8"
              y1="35"
              x2="56"
              y2="35"
              stroke="#241710"
              strokeWidth="2"
            />
            <circle cx="20" cy="40" r="1.2" fill="#241710" />
            <circle cx="36" cy="40" r="1" fill="#241710" />
            <circle cx="46" cy="30" r="1" fill="#241710" />
          </g>
        </svg>
      )
    case 'morteau':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g>
            <ellipse
              cx="32"
              cy="32"
              rx="24"
              ry="11"
              fill="#3A1E14"
              stroke="#241710"
              strokeWidth="1.2"
            />
            <path
              d="M14 28 Q22 24 32 28 Q42 32 50 28"
              fill="none"
              stroke="#C98A3E"
              strokeWidth="1"
              opacity="0.7"
            />
            <circle cx="9" cy="32" r="1.5" fill="#C98A3E" />
            <circle cx="55" cy="32" r="1.5" fill="#C98A3E" />
          </g>
        </svg>
      )
    case 'olive':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g>
            <ellipse cx="32" cy="32" rx="12" ry="16" fill="#2D4429" />
            <ellipse cx="32" cy="32" rx="3" ry="6" fill="#A8332A" />
          </g>
        </svg>
      )
    case 'cancoillotte':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g>
            <path
              d="M14 22 Q14 18 18 18 L46 18 Q50 18 50 22 L50 40 Q50 44 46 44 L18 44 Q14 44 14 40 Z"
              fill="#C98A3E"
              opacity="0.85"
            />
            <path
              d="M18 30 Q26 26 32 30 Q38 34 46 30"
              fill="none"
              stroke="#F4ECDD"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M18 38 Q26 34 32 38 Q38 42 46 38"
              fill="none"
              stroke="#F4ECDD"
              strokeWidth="1.5"
              opacity="0.45"
            />
          </g>
        </svg>
      )
    case 'champignon':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g>
            <path
              d="M16 32 Q16 16 32 16 Q48 16 48 32 Z"
              fill="#3A1E14"
            />
            <rect x="26" y="32" width="12" height="18" rx="3" fill="#F4ECDD" />
            <circle cx="26" cy="24" r="1.5" fill="#F4ECDD" opacity="0.5" />
            <circle cx="38" cy="22" r="1.2" fill="#F4ECDD" opacity="0.4" />
          </g>
        </svg>
      )
    case 'farine':
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g>
            <circle cx="32" cy="32" r="10" fill="#F4ECDD" />
            <circle cx="20" cy="24" r="2" fill="#F4ECDD" opacity="0.7" />
            <circle cx="46" cy="22" r="2.5" fill="#F4ECDD" opacity="0.6" />
            <circle cx="48" cy="44" r="1.5" fill="#F4ECDD" opacity="0.7" />
            <circle cx="18" cy="46" r="2" fill="#F4ECDD" opacity="0.5" />
          </g>
        </svg>
      )
  }
}

export type { IngredientKey }
