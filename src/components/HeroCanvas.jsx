import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = canvas?.closest('.hero')
    if (!canvas || !section) return

    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W, H, nodes = []
    const mouse = { x: null, y: null }
    let raf, interval

    function colors() {
      const s = getComputedStyle(document.documentElement)
      return {
        primary: s.getPropertyValue('--primary').trim(),
        secondary: s.getPropertyValue('--secondary').trim(),
      }
    }

    function resize() {
      const rect = section.getBoundingClientRect()
      W = rect.width
      H = rect.height
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(28, Math.min(60, Math.floor(W / 26)))
      nodes = []
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 1,
          accent: Math.random() < 0.22,
        })
      }
    }

    function step() {
      const c = colors()
      ctx.clearRect(0, 0, W, H)

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx
          n.y += n.vy
          if (mouse.x !== null) {
            const dx = n.x - mouse.x, dy = n.y - mouse.y
            const d = Math.sqrt(dx * dx + dy * dy)
            if (d < 120) {
              n.x += (dx / d) * 0.35
              n.y += (dy / d) * 0.35
            }
          }
          if (n.x < 0 || n.x > W) n.vx *= -1
          if (n.y < 0 || n.y > H) n.vy *= -1
          n.x = Math.max(0, Math.min(W, n.x))
          n.y = Math.max(0, Math.min(H, n.y))
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.strokeStyle = a.accent || b.accent ? c.secondary : c.primary
            ctx.globalAlpha = (1 - dist / 130) * 0.16
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.globalAlpha = n.accent ? 0.85 : 0.5
        ctx.fillStyle = n.accent ? c.secondary : c.primary
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      if (!reduced) raf = requestAnimationFrame(step)
    }

    function onMove(e) {
      const rect = section.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onLeave() {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('resize', resize)
    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)

    resize()
    step()
    if (reduced) interval = setInterval(step, 4000) // redraw occasionally so theme-toggle colors stay in sync

    return () => {
      window.removeEventListener('resize', resize)
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
      if (interval) clearInterval(interval)
    }
  }, [])

  return <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true"></canvas>
}
