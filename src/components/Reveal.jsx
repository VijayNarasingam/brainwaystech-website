import { useReveal } from '../hooks/useReveal.js'

const DIRECTION_CLASS = {
  up: '',
  down: 'reveal-from-down',
  left: 'reveal-from-left',
  right: 'reveal-from-right',
  zoom: 'reveal-from-zoom',
  blur: 'reveal-from-blur',
}

export default function Reveal({ children, as: Tag = 'div', className = '', from = 'up', delay = 0, threshold = 0.15 }) {
  const [ref, inView, dir] = useReveal(threshold)
  // First reveal uses the `from` variant; re-reveals follow the scroll direction.
  const variant = dir === null ? (DIRECTION_CLASS[from] || '') : dir === 'up' ? 'reveal-from-down' : ''
  return (
    <Tag
      ref={ref}
      className={`reveal ${variant} ${inView ? 'in-view' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
