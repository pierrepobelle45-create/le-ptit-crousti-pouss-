import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLElement> & {
  id?: string
  eyebrow?: string
  index?: string
  children: ReactNode
  tone?: 'farine' | 'encre' | 'braise' | 'tomate'
  bleed?: boolean
}

const toneClasses = {
  farine: 'bg-farine text-encre',
  encre: 'bg-encre text-farine',
  braise: 'bg-braise text-farine',
  tomate: 'bg-tomate text-farine',
} as const

export function Section({
  id,
  eyebrow,
  index,
  children,
  className = '',
  tone = 'farine',
  bleed = false,
  ...rest
}: Props) {
  return (
    <section
      id={id}
      className={`relative ${toneClasses[tone]} ${bleed ? '' : 'py-20 md:py-32'} ${className}`}
      {...rest}
    >
      {(eyebrow || index) && (
        <div className="mx-auto mb-12 flex max-w-[1400px] items-baseline justify-between px-6 md:mb-20 md:px-12">
          {eyebrow && (
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-70">
              ✦ {eyebrow}
            </span>
          )}
          {index && (
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-70">
              {index}
            </span>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
