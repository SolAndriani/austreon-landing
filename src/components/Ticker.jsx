import '../styles/ticker.css'

const items = [
  { n: '24/7', l: 'Atención continua' },
  { n: '48hs', l: 'Configuración lista' },
  { n: '0', l: 'Consultas perdidas' },
  { n: '100%', l: 'Privacidad médica' },
]

export default function Ticker() {
  const doubleItems = [...items, ...items, ...items];

  return (
    <div className="ticker-viewport">
      <div className="ticker-track">
        {doubleItems.map((m, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-n">{m.n}</span>
            <span className="ticker-l">{m.l}</span>
          </div>
        ))}
      </div>
      <div className="ticker-fade-left" />
      <div className="ticker-fade-right" />
    </div>
  )
}