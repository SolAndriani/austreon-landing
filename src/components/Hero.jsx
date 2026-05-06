import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/hero-img.jpg" alt="" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">Recepción dental con inteligencia artificial</div>
          <h1>
            Tu clínica nunca<br />
            deja de<br />
            <span>responder.</span>
          </h1>
          <p>
            Austreon gestiona tu recepción con IA. Clasifica urgencias,
            responde pacientes y organiza tu agenda antes de que
            llegues al consultorio.
          </p>
          <a className="hero-btn-main" href="#cta">
            Agendar demo
          </a>
        </div>
      </div>
    </section>
  )
}