import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, registerGsap } from '../lib/gsap'

type Direction = 'up' | 'down' | 'left' | 'right'

export function useReveal<T extends HTMLElement>(
  options: {
    direction?: Direction
    delay?: number
    duration?: number
    stagger?: number
    selector?: string
    distance?: number
    start?: string
  } = {},
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    registerGsap()
    const el = ref.current
    if (!el) return

    const targets = options.selector
      ? Array.from(el.querySelectorAll<HTMLElement>(options.selector))
      : [el]
    if (!targets.length) return

    const d = options.distance ?? 32
    const dir = options.direction ?? 'up'
    const from = {
      opacity: 0,
      x: dir === 'left' ? -d : dir === 'right' ? d : 0,
      y: dir === 'up' ? d : dir === 'down' ? -d : 0,
    }

    const tween = gsap.fromTo(targets, from, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: options.duration ?? 1.05,
      delay: options.delay ?? 0,
      stagger: options.stagger ?? 0.07,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: options.start ?? 'top 82%',
        once: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [
    options.direction,
    options.delay,
    options.duration,
    options.stagger,
    options.selector,
    options.distance,
    options.start,
  ])

  return ref
}
