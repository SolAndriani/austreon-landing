import '../styles/modal.css'

export default function Modal({ type, onClose }) {
  const content = {
    privacy: {
      title: 'Política de Privacidad',
      body: (
        <>
          <p><strong>Última actualización:</strong> Mayo 2026</p>
          <p>Austreon opera bajo la legislación chilena, en particular la Ley N° 19.628 sobre Protección de la Vida Privada. Esta política describe cómo recopilamos, usamos y protegemos la información personal de quienes interactúan con nuestra plataforma.</p>
          <h3>1. Información que recopilamos</h3>
          <p>Al agendar una consulta podemos recopilar nombre completo, número de teléfono, correo electrónico, motivo de consulta y cualquier información adicional que el paciente proporcione voluntariamente.</p>
          <h3>2. Finalidad del tratamiento</h3>
          <p>Los datos se utilizan exclusivamente para gestionar el agendamiento de citas, enviar confirmaciones y recordatorios, y mejorar la atención del servicio. No los compartimos con terceros no vinculados al servicio.</p>
          <h3>3. Almacenamiento y seguridad</h3>
          <p>La información se almacena en servidores seguros con acceso restringido e implementamos medidas técnicas para proteger los datos contra accesos no autorizados.</p>
          <h3>4. Derechos del titular</h3>
          <p>Conforme a la Ley 19.628, toda persona tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos. Para ejercer estos derechos escríbenos a <a href="mailto:soporte@austreon.cl">soporte@austreon.cl</a>.</p>
        </>
      )
    },
    terms: {
      title: 'Condiciones de Uso',
      body: (
        <>
          <p>Al utilizar Dent-OS by Austreon, aceptas los siguientes términos y condiciones de uso.</p>
          <h3>Uso permitido</h3>
          <p>La plataforma está destinada exclusivamente para uso profesional en clínicas dentales autorizadas. Queda prohibido el uso no autorizado, la reproducción o distribución del software.</p>
          <h3>Responsabilidades</h3>
          <p>Dent-OS by Austreon no se hace responsable por el uso indebido de la plataforma ni por decisiones clínicas tomadas en base a la información proporcionada por el sistema.</p>
          <h3>Propiedad intelectual</h3>
          <p>Todo el software, diseño y contenido de Dent-OS by Austreon es propiedad exclusiva de Austreon y está protegido por las leyes de propiedad intelectual.</p>
          <h3>Modificaciones</h3>
          <p>Nos reservamos el derecho de modificar estas condiciones en cualquier momento. Los cambios serán notificados a través de la plataforma.</p>
        </>
      )
    },
    support: {
      title: 'Soporte',
      body: (
        <>
          <h3>Canales de contacto</h3>
          <p>Email: <a href="mailto:soporte@austreon.cl">soporte@austreon.cl</a></p>
          <h3>Horario de atención</h3>
          <p>Lunes a viernes de 9:00 a 18:00 hrs (hora de Chile).</p>
          <h3>Tiempo de respuesta</h3>
          <p>Nos comprometemos a responder todas las consultas dentro de las 24 horas hábiles.</p>
          <h3>Reportar un problema</h3>
          <p>Si encontraste un error o tienes una sugerencia, escríbenos a <a href="mailto:soporte@austreon.cl">soporte@austreon.cl</a> y te respondemos a la brevedad.</p>
        </>
      )
    }
  }

  const { title, body } = content[type]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>
        <div className="modal-body">{body}</div>
      </div>
    </div>
  )
}