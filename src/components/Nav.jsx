import { useEffect, useState } from 'react'
import '../styles/nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav-viewport ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <a href="#" className="nav-brand">
            <img src="/austreon-logo.png" alt="Dent-OS" className="nav-logo" />
            <span className="nav-name">Dent-OS</span>
          </a>
        </div>
        <div className="nav-right">
          <a href="#cta" className="nav-cta-btn">Agendar demo</a>
        </div>
      </div>
    </nav>
  )
}