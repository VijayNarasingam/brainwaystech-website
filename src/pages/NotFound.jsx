import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function NotFound() {
  return (
    <section className="section-light" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <Reveal from="zoom">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>404</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', marginBottom: '14px' }}>Page not found</h1>
          <p style={{ color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 32px' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">Back to home</Link>
        </div>
      </Reveal>
    </section>
  )
}
