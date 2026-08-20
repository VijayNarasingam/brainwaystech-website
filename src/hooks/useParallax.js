import { useEffect, useRef } from 'react'

/**
 * Subtle scroll parallax — translates the element vertically as it moves
 * through the viewport. Positive strength makes the element lag behind the
 * page (background-like); negative strength makes it drift faster.
 * Automatically disabled when prefers-reduced-motion is set.
 */
export function useParallax(strength = 0.06) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = null
    const update = () => {
      raf = null
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.bottom < -100 || rect.top > vh + 100) return
      const mid = rect.top + rect.height / 2 - vh / 2
      el.style.transform = `translate3d(0, ${(-mid * strength).toFixed(1)}px, 0)`
    }
    const request = () => {
      if (raf === null) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])

  return ref
}
