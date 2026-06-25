import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, registerGsap } from '../lib/gsap'

type Props = {
  value: number
  decimals?: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function Counter({
  value,
  decimals = 0,
  suffix = '',
  prefix = '',
  duration = 1.8,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    registerGsap()
    const el = ref.current
    if (!el) return
    const obj = { v: 0 }
    const tween = gsap.to(obj, {
      v: value,
      duration,
      ease: 'power2.out',
      onUpdate: () => setDisplay(obj.v),
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [value, duration])

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
