import { useEffect, useRef } from 'react'
import '../styles/problem.css'

export default function Problem() {
  const ref = useRef(null)
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add('in') },
      { threshold: 0.1 }
    )
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])

  return (
    <section className="problem" id="problema">
      <div className="problem-inner reveal" ref={ref}>
        <div className="problem-left">
          <span className="tag">El problema</span>
          <h2>Tu clínica pierde pacientes cada día que no tiene esto.</h2>
          <p>Mientras no hay nadie atendiendo el teléfono, tus pacientes buscan otra clínica. Es así de simple.</p>
        </div>
        <div className="problem-cards">
          <div className="prob-card">
            <div className="prob-icon red">✕</div>
            <div>
              <h3>Pacientes sin respuesta</h3>
              <p>Llaman a las 10pm con dolor. Nadie contesta. Al día siguiente tienen turno en otra clínica.</p>
            </div>
          </div>
          <div className="prob-card">
            <div className="prob-icon red">✕</div>
            <div>
              <h3>Urgencias tratadas como rutina</h3>
              <p>Un absceso espera tres días por turno. El doctor no sabía que era urgente hasta que llegó.</p>
            </div>
          </div>
          <div className="prob-card">
            <div className="prob-icon red">✕</div>
            <div>
              <h3>Agenda armada en el momento</h3>
              <p>El doctor llega y reorganiza todo desde cero. Tiempo que debería dedicarse a pacientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}