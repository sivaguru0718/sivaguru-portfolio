import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.body.style.overflow = ''
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container">
          <a href="#hero" className="nav__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <span className="nav__brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="8" height="8" rx="2" fill="#d4622a"/>
                <rect x="14" y="2" width="8" height="8" rx="2" fill="#d4622a" opacity="0.5"/>
                <rect x="2" y="14" width="8" height="8" rx="2" fill="#d4622a" opacity="0.5"/>
                <rect x="14" y="14" width="8" height="8" rx="2" fill="#d4622a" opacity="0.3"/>
              </svg>
            </span>
            Sivaguru<span className="accent">.</span>
          </a>

          <nav className="nav__links">
            {NAV_LINKS.map(link => (
              <button key={link.href} className="nav__link" onClick={() => scrollTo(link.href)}>
                {link.label}
              </button>
            ))}
          </nav>

          <button className="nav__cta btn btn--small" onClick={() => scrollTo('projects')}>View My Work</button>

          <button className={`nav__toggle ${mobileOpen ? 'active' : ''}`} onClick={toggleMobile} aria-label="Toggle navigation menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileOpen ? 'active' : ''}`}>
        <div className="mobile-nav__inner">
          {NAV_LINKS.map(link => (
            <button key={link.href} className="mobile-nav__link" onClick={() => scrollTo(link.href)}>
              {link.label}
            </button>
          ))}
          <button className="btn btn--primary mobile-nav__cta" onClick={() => scrollTo('contact')}>
            Let's Connect
          </button>
        </div>
      </div>
    </>
  )
}
