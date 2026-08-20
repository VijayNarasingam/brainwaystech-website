import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import { useTheme } from '../context/ThemeContext.jsx'

function TechCard({ item, index }) {
  const { theme } = useTheme()
  const [ref, inView, dir] = useReveal()
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(false)
    requestAnimationFrame(() => setClicked(true))
  }

  return (
    <div
      ref={ref}
      className={`tech-card reveal ${dir === 'up' ? 'reveal-from-down' : ''} ${inView ? 'in-view' : ''} ${clicked ? 'clicked' : ''}`}
      style={{ '--reveal-delay': `${(index % 9) * 60}ms` }}
      onClick={handleClick}
      onAnimationEnd={() => setClicked(false)}
    >
      <div className="tech-badge"><img src={theme === 'dark' && item.iconDark ? item.iconDark : item.icon} alt={item.name} className="tech-icon" /></div>
      <h5>{item.name}</h5>
      <span className="cat">{item.cat}</span>
    </div>
  )
}

export default function TechGrid({ items }) {
  return (
    <div className="tech-grid">
      {items.map((item, i) => (
        <TechCard key={item.name} item={item} index={i} />
      ))}
    </div>
  )
}
