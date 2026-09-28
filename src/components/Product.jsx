import { useEffect, useRef } from 'react'
import '../styles/product.css'

export default function Product() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
        }
      },
      { threshold: 0.2 } // Un poco más de margen para el efecto visual
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="product-viewport" id="como">
      <div className="product-container reveal" ref={ref}>
        
        {/* Lado Izquierdo: Narrativa de Marketing */}
        <div className="product-content">
          <header className="product-header">
            <p className="product-eyebrow">Gestión Inteligente</p>
            <h2 className="product-headline">Tu agenda lista antes de llegar.</h2>
            <p className="product-body">
              Austreon clasifica urgencias y organiza tus turnos de forma autónoma. 
              Llegas a la clínica sabiendo exactamente qué te espera, sin interrupciones.
            </p>
          </header>
        </div>

        {/* Lado Derecho: Interfaz de Producto (The Proof) */}
        <div className="product-visual">
          <div className="iphone-frame">
            <div className="chat-ui">
              <div className="chat-header">
                <span className="chat-avatar">A</span>
                <div className="chat-info">
<span className="chat-target">Dent-OS</span>                  <span className="chat-status">En línea</span>
                </div>
              </div>
              
              <div className="chat-window">
                <div className="bubble out">Tengo mucho dolor en una muela...</div>
                <div className="bubble in">Entiendo, Martín. ¿El dolor es constante?</div>
                <div className="bubble out">Sí, no me deja dormir.</div>
                <div className="bubble in-accent">Priorizando caso urgente...</div>
                <div className="bubble in-confirm">Te agendé hoy a las 16:30. ¿Confirmamos?</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}