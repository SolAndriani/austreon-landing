import { useState } from 'react'
import Modal from './Modal'
import '../styles/footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      <footer className="footer-viewport">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-copy">
              © {year} Austreon. Todos los derechos reservados.
            </div>
            <nav className="footer-nav">
              <button onClick={() => setActiveModal('privacy')}>Privacidad</button>
              <button onClick={() => setActiveModal('terms')}>Condiciones</button>
              <button onClick={() => setActiveModal('support')}>Soporte</button>
            </nav>
          </div>
        </div>
      </footer>

      {activeModal && (
        <Modal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}