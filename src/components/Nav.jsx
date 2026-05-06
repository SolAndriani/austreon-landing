import { useEffect, useState } from 'react'
import '../styles/nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-brand">
        <img src="/austreon-logo.png" alt="Austreon" className="nav-logo" />
        <span className="nav-name">AUSTREON</span>
      </a>
      <a href="#cta" className="nav-btn">Agendar demo</a>
    </nav>
  )
}