import '../styles/ticker.css'

const items = [
  { n: '24/7', l: 'Tu clínica responde sin parar' },
  { n: '48hs', l: 'Implementación completa' },
  { n: '0', l: 'Llamadas sin respuesta' },
  { n: '24/7', l: 'Tu clínica responde sin parar' },
  { n: '48hs', l: 'Implementación completa' },
  { n: '0', l: 'Llamadas sin respuesta' },
  { n: '24/7', l: 'Tu clínica responde sin parar' },
  { n: '48hs', l: 'Implementación completa' },
  { n: '0', l: 'Llamadas sin respuesta' },
  { n: '24/7', l: 'Tu clínica responde sin parar' },
  { n: '48hs', l: 'Implementación completa' },
  { n: '0', l: 'Llamadas sin respuesta' },
]

export default function Ticker() {
  return (
    <div className="ticker-outer">
      <div className="ticker-track">
        {items.map((m, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-n">{m.n}</span>
            <span className="ticker-l">{m.l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}