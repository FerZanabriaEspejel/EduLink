import "./HowItWorks.css"

function HowItWorksPage() {
  return (
    <div className="how-it-works-page" style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <h1>📘 Cómo funciona EduLink</h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Descubre cómo conectamos a estudiantes para aprender y ayudarse mutuamente.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h3>🚀 1. Registra tus materias</h3>
        <p>Al unirte, seleccionas las materias en las que necesitas ayuda o en las que tienes buen dominio.</p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>💬 2. Haz preguntas o responde</h3>
        <p>Publica tus dudas en el foro de la comunidad. Si sabes la respuesta a la duda de un compañero, compártela.</p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>🆘 3. Sistema de SOS Académico</h3>
        <p>¿Tienes un examen o entrega urgente? Envía una alerta SOS para recibir apoyo prioritario de otros estudiantes.</p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3>⭐ 4. Puntos y Niveles</h3>
        <p>Cada vez que ayudas a alguien y tu respuesta es marcada como útil, ganas puntos para subir de nivel y destacar en la red.</p>
      </section>
    </div>
  )
}

export default HowItWorksPage