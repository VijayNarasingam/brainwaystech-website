import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, inView, dir].
 * - inView: whether the element is currently intersecting the viewport
 *   (toggled both when scrolling down AND scrolling up).
 * - dir: null before the first exit (the first reveal uses the `from`
 *   variant); afterwards 'up' when the element exits through the top (its
 *   next re-reveal will come from above) or 'down' when it exits through the
 *   bottom — so re-reveals animate in the direction of the scroll.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [dir, setDir] = useState(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        } else {
          // Pre-position the hidden offset to the side the element will next
          // enter from, so re-reveals animate in the correct direction.
          setDir(entry.boundingClientRect.top < 0 ? 'up' : 'down')
          setInView(false)
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView, dir]
}
