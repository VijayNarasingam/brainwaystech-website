import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, .service-card, .quote-card, .chip, .tech-card, .client-badge'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0, raf

    function onMove(e) {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    function loop() {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(loop)
    }

    // Event delegation so newly-mounted elements (route changes) are covered automatically
    function onOver(e) {
      if (e.target.closest && e.target.closest(HOVER_SELECTOR)) {
        document.body.classList.add('cursor-hover')
      }
    }
    function onOut(e) {
      if (e.target.closest && e.target.closest(HOVER_SELECTOR)) {
        document.body.classList.remove('cursor-hover')
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    loop()

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  )
}
