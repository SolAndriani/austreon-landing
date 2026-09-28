import { useEffect, useRef } from 'react'
import '../styles/how.css'

export default function How() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) entry.target.classList.add('is-visible') 
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="how-section" id="como">
      <div className="how-container reveal-on-scroll" ref={ref}>
        <span className="how-eyebrow">Eficiencia absoluta</span>
        <h2 className="how-title">
          Tu atención,<br />
          en modo experto.
        </h2>
        <p className="how-description">
          Austreon resuelve las consultas y gestiona tu agenda de manera autónoma. 
          Para que tu única prioridad sea la salud de tus pacientes, sin interrupciones.
        </p>
        <div className="how-cta-wrapper">
          <a href="#cta" className="how-button-primary">Agendar demo</a>
        </div>
      </div>
    </section>
  )
}