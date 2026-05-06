import { useEffect, useRef } from 'react'
import '../styles/how.css'

export default function How() {
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
    <section className="how" id="como">
      <div className="how-inner reveal" ref={ref}>
        <h2>Tu clínica<br />nunca duerme.</h2>
        <p>Austreon gestiona tu recepción mientras tú descansas.</p>
        <a href="#cta" className="how-btn">Agendar demo</a>
      </div>
    </section>
  )
}