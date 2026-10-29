import "./HowItWorks.css"

function HowItWorksPage() {
  return (
    <div className="how-it-page">
      
      {/* ENCABEZADO CON DEGRADADO */}
      <div className="how-it-hero">
        <span className="how-it-tag">📘 Guía de la Comunidad</span>
        <h1>¿Cómo funciona <span>EduLink</span>?</h1>
        <p>
          Descubre el espacio donde los estudiantes se conectan, comparten conocimientos
          y se apoyan para llegar más lejos en su educación.
        </p>
      </div>

      {/* CUADRÍCULA DE TARJETAS */}
      <div className="how-it-grid">

        <div className="how-card">
          <div className="how-icon-box gradient-1">
            🚀
          </div>
          <h3>1. Registra tus materias</h3>
          <p>
            Al unirte, configura tu perfil seleccionando tu nivel educativo, escuela y las 
            materias en las que quieres destacar o necesitas apoyo.
          </p>
        </div>

        <div className="how-card">
          <div className="how-icon-box gradient-2">
            💬
          </div>
          <h3>2. Pregunta o ayuda</h3>
          <p>
            Publica tus dudas académicas en la comunidad. Si ves la pregunta de un 
            compañero que domines, compártela y aporta tu conocimiento.
          </p>
        </div>

        <div className="how-card">
          <div className="how-icon-box gradient-3">
            🆘
          </div>
          <h3>3. Sistema SOS Académico</h3>
          <p>
            ¿Examen sorpresa o entrega de último minuto? Envía una alerta SOS para 
            obtener apoyo urgente y prioritario de otros estudiantes.
          </p>
        </div>

        <div className="how-card">
          <div className="how-icon-box gradient-4">
            ⭐
          </div>
          <h3>4. Puntos y Niveles</h3>
          <p>
            Cada aportación útil te otorga puntos. Sube de rango en la comunidad, 
            desbloquea logros y demuestra tu compromiso académico.
          </p>
        </div>

      </div>

    </div>
  )
}

export default HowItWorksPage