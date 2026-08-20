import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, suffix }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const num = parseInt(value, 10)
    if (isNaN(num)) { setDisplay(value); return }

    let observed = false
    let frameId

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed) {
          observed = true
          const dur = Math.min(Math.max(num * 20, 1200), 3500)
          const step = (ts) => {
            const t = Math.min((ts - startTime) / dur, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(Math.round(eased * num).toString())
            if (t < 1) frameId = requestAnimationFrame(step)
          }
          const startTime = performance.now()
          frameId = requestAnimationFrame(step)
          obs.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    obs.observe(el)
    return () => { obs.disconnect(); if (frameId) cancelAnimationFrame(frameId) }
  }, [value])

  return <span ref={ref}>{display}{suffix || ''}</span>
}
