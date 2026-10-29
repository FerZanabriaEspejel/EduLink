import { useNavigate } from "react-router-dom"
import "../App.css"

function Home() {
  const navigate = useNavigate()

  return (
    <main className="home">
      
      {/* SECCIÓN DE BIENVENIDA (HERO) */}
      <section className="welcome">
        <div>
          <span className="welcome-tag">
            ✨ Red de Conexión Educativa
          </span>

          <h1>
            Aprende, pregunta
            <br />
            y comparte conocimiento.
          </h1>

          <p>
            EduLink conecta estudiantes para resolver dudas,
            compartir recursos y aprender juntos.
          </p>

          <div className="welcome-buttons">
            <button 
              className="primary-button"
              onClick={() => navigate("/registro")}
            >
              🚀 Comenzar
            </button>

            {/* Redirige directamente a la página dedicada */}
            <button 
              className="secondary-button"
              onClick={() => navigate("/como-funciona")}
            >
              ℹ️ Cómo funciona
            </button>
          </div>
        </div>

        <div className="welcome-card">
          <div className="card-icon">
            🎓
          </div>

          <h3>
            Tu aprendizaje,
            <br />
            nuestra comunidad.
          </h3>

          <p>
            Encuentra respuestas, ayuda a otros
            y gana puntos por compartir lo que sabes.
          </p>
        </div>
      </section>

    </main>
  )
}

export default Home