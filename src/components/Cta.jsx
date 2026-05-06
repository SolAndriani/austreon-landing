import { useEffect, useRef, useState } from 'react'
import '../styles/cta.css'

export default function Cta() {
  const ref = useRef(null)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add('in') },
      { threshold: 0.1 }
    )
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xykojyly', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="cta" id="cta">
      <div className="cta-inner reveal" ref={ref}>
        <div className="cta-left">
          <h2>¿Tu clínica sigue perdiendo pacientes después de horario?</h2>
          <p>Completa el formulario y te contactamos en menos de 24 horas para mostrarte el sistema en acción.</p>
        </div>
        <div className="cta-right">
          {status === 'ok' ? (
            <div className="cta-success">
              <span className="success-icon">✓</span>
              <h3>Mensaje recibido</h3>
              <p>Nos pondremos en contacto contigo en menos de 24 horas.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" name="nombre" placeholder="Dr. Carlos Muñoz" required />
              </div>
              <div className="form-group">
                <label>Clínica</label>
                <input type="text" name="clinica" placeholder="Clínica Dental Las Condes" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="carlos@clinica.cl" required />
              </div>
              <div className="form-group">
                <label>WhatsApp</label>
                <input type="tel" name="whatsapp" placeholder="+56 9 8765 4321" />
              </div>
              <button type="submit" className="cta-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Solicitar demo'}
              </button>
              {status === 'error' && <p className="form-error">Hubo un error. Inténtalo de nuevo.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}