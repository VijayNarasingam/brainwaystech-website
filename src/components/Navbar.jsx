import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import logoIcon from '../assets/logo(1)removebg.png'

export default function Navbar() {
  const { toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) => (isActive ? 'active' : '')

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="wrap">
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-mark"><img src={logoIcon} alt="BrainwaysTech Logo" /></div>
          BrainwaysTech
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" className={linkClass} onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
          <Link to="/contact" className="nav-cta mobile-cta" onClick={closeMenu}>Get In Touch</Link>
        </div>

        <div className="nav-right">
          <Link to="/contact" className="nav-cta">Get In Touch</Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" type="button">
            <svg className="icon-sun" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24">
              <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z" />
            </svg>
          </button>
        </div>

        {menuOpen && <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />}
      </nav>
    </header>
  )
}
