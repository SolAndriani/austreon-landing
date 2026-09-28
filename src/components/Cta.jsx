import { useEffect, useRef, useState } from 'react'
import "../styles/cta.css";

export default function Cta() {
  const [status, setStatus] = useState('')
  const revealRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('in')
      },
      { threshold: 0.15 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xykojyly', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' }
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="cta-viewport" id="cta">
      <div className="cta-container reveal" ref={revealRef}>
        <header className="cta-header">
          <h2 className="cta-headline">Empieza hoy.</h2>
          <p className="cta-subheadline">
            Únete a las clínicas que ya transformaron su atención con Austreon.
          </p>
        </header>

        <div className="cta-card">
          {status === 'ok' ? (
            <div className="cta-success">
              <span className="success-icon">✓</span>
              <h3>Solicitud recibida.</h3>
              <p>Te contactaremos pronto para coordinar tu demo.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" name="nombre" placeholder="Nombre completo" required />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Correo profesional" required />
              </div>
              
              <button 
                type="submit" 
                className={`cta-button ${status === 'sending' ? 'loading' : ''}`}
                disabled={status === 'sending'}
              >
                <span className="btn-text">Agendar demo</span>
              </button>

              {status === 'error' && (
                <p className="cta-error">Ocurrió un error. Inténtalo de nuevo.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}