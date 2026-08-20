import { useReveal } from '../hooks/useReveal.js'

function QuoteCard({ item, index }) {
  const [ref, inView, dir] = useReveal()
  return (
    <div
      ref={ref}
      className={`quote-card reveal ${dir === 'up' ? 'reveal-from-down' : ''} ${inView ? 'in-view' : ''}`}
      style={{ '--reveal-delay': `${(index % 4) * 80}ms` }}
    >
      <p className="q">&ldquo;{item.quote}&rdquo;</p>
      <div className="who">{item.who}</div>
    </div>
  )
}

export default function Testimonials({ items }) {
  return (
    <div className="cards-2">
      {items.map((item, i) => (
        <QuoteCard key={i} item={item} index={i} />
      ))}
    </div>
  )
}
