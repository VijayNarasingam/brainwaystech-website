import { Link } from 'react-router-dom'
import logoIcon from '../assets/logo(1)removebg.png'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ color: 'var(--color-text)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={logoIcon} alt="BrainwaysTech Logo" style={{ height: '36px', width: 'auto' }} /> BrainwaysTech
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', maxWidth: '320px' }}>
              Your one-stop destination for AI, web, app, and digital marketing solutions - built
              with integrity, delivered with care.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <div className="flinks">
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="flinks">
              <a href="mailto:info@brainwaystechllp.com">info@brainwaystechllp.com</a>
              <a href="tel:+917667924881">+91 76679 24881</a>
              <a href="tel:+919361061592">+91 93610 61592</a>
              <Link to="/contact">Krishnagiri, Tamil Nadu, IN</Link>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 BrainwaysTech LLP. All rights reserved.</span>
          <span>Privacy Policy · Terms &amp; Conditions</span>
        </div>
      </div>
    </footer>
  )
}
