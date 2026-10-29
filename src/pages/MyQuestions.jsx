
import { useState } from "react"
import "../App.css"
import "./MyQuestions.css"

const preguntasIniciales = [
  {
    id: 1,
    titulo: "¿Cómo se resuelve una ecuación cuadrática?",
    materia: "Matemáticas",
    fecha: "12 oct 2026",
    respuestas: 3,
    estado: "Respondida",
    descripcion:
      "Estoy estudiando ecuaciones de segundo grado y quiero entender cuándo utilizar la fórmula general.",
  },
  {
    id: 2,
    titulo: "¿Cómo funcionan las listas en Python?",
    materia: "Programación",
    fecha: "11 oct 2026",
    respuestas: 0,
    estado: "Sin respuestas",
    descripcion:
      "Necesito entender cómo agregar, eliminar y modificar elementos de una lista.",
  },
  {
    id: 3,
    titulo: "Diferencia entre IA y machine learning",
    materia: "Inteligencia Artificial",
    fecha: "10 oct 2026",
    respuestas: 1,
    estado: "Respondida",
    descripcion:
      "¿Podrían explicarme la diferencia con un ejemplo sencillo?",
  },
]

function MyQuestions() {
  const [preguntas] = useState(preguntasIniciales)
  const [busqueda, setBusqueda] = useState("")
  const [filtro, setFiltro] = useState("Todas")
  const [preguntaSeleccionada, setPreguntaSeleccionada] =
    useState(null)

  const preguntasFiltradas = preguntas.filter((pregunta) => {
    const coincideBusqueda =
      pregunta.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      pregunta.materia.toLowerCase().includes(busqueda.toLowerCase())

    const coincideFiltro =
      filtro === "Todas" ||
      (filtro === "Respondidas" &&
        pregunta.estado === "Respondida") ||
      (filtro === "Sin respuestas" &&
        pregunta.estado === "Sin respuestas")

    return coincideBusqueda && coincideFiltro
  })

  return (
    <section className="my-questions-page">
      <header className="my-questions-header">
        <div>
          <span className="section-label">MI ESPACIO ACADÉMICO</span>
          <h1>Mis preguntas</h1>
          <p>
            Consulta tus dudas, revisa las respuestas y continúa
            aprendiendo con la comunidad.
          </p>
        </div>

        <div className="my-questions-icon">💬</div>
      </header>

      <div className="questions-summary">
        <article className="question-summary-card">
          <span className="summary-icon">📝</span>
          <div>
            <p>Total de preguntas</p>
            <h2>{preguntas.length}</h2>
          </div>
        </article>

        <article className="question-summary-card">
          <span className="summary-icon">✅</span>
          <div>
            <p>Con respuestas</p>
            <h2>
              {preguntas.filter(
                (pregunta) => pregunta.respuestas > 0,
              ).length}
            </h2>
          </div>
        </article>

        <article className="question-summary-card">
          <span className="summary-icon">⏳</span>
          <div>
            <p>Pendientes</p>
            <h2>
              {preguntas.filter(
                (pregunta) => pregunta.respuestas === 0,
              ).length}
            </h2>
          </div>
        </article>
      </div>

      <div className="my-questions-toolbar">
        <div className="question-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Buscar por pregunta o materia..."
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
          />
        </div>

        <select
          value={filtro}
          onChange={(event) => setFiltro(event.target.value)}
          aria-label="Filtrar preguntas"
        >
          <option value="Todas">Todas las preguntas</option>
          <option value="Respondidas">Con respuestas</option>
          <option value="Sin respuestas">Sin respuestas</option>
        </select>
      </div>

      <div className="my-questions-list">
        {preguntasFiltradas.length > 0 ? (
          preguntasFiltradas.map((pregunta) => (
            <article className="my-question-card" key={pregunta.id}>
              <div className="my-question-main">
                <div className="my-question-top">
                  <span className="subject-tag">
                    {pregunta.materia}
                  </span>

                  <span
                    className={`question-status ${
                      pregunta.estado === "Respondida"
                        ? "status-answered"
                        : "status-pending"
                    }`}
                  >
                    {pregunta.estado}
                  </span>
                </div>

                <h3>{pregunta.titulo}</h3>

                <p className="my-question-description">
                  {pregunta.descripcion}
                </p>

                <div className="my-question-meta">
                  <span>📅 {pregunta.fecha}</span>
                  <span>💬 {pregunta.respuestas} respuestas</span>
                </div>
              </div>

              <button
                className="view-question-button"
                onClick={() =>
                  setPreguntaSeleccionada(
                    preguntaSeleccionada === pregunta.id
                      ? null
                      : pregunta.id,
                  )
                }
              >
                {preguntaSeleccionada === pregunta.id
                  ? "Cerrar"
                  : "Ver pregunta"}
                <span>
                  {preguntaSeleccionada === pregunta.id ? " ↑" : " →"}
                </span>
              </button>

              {preguntaSeleccionada === pregunta.id && (
                <div className="question-detail">
                  <h4>Detalle de tu pregunta</h4>
                  <p>{pregunta.descripcion}</p>
                  <p>
                    <strong>Materia:</strong> {pregunta.materia}
                  </p>
                  <p>
                    <strong>Respuestas recibidas:</strong>{" "}
                    {pregunta.respuestas}
                  </p>
                  <p className="question-detail-note">
                    Las respuestas completas estarán disponibles
                    cuando conectemos EduLink a la base de datos.
                  </p>
                </div>
              )}
            </article>
          ))
        ) : (
          <div className="questions-empty">
            <span>🔎</span>
            <h3>No encontramos preguntas</h3>
            <p>
              Prueba con otra búsqueda o selecciona un filtro diferente.
            </p>
            <button
              className="clear-question-filters"
              onClick={() => {
                setBusqueda("")
                setFiltro("Todas")
              }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      <p className="questions-demo-note">
        💡 Estas preguntas son ejemplos de demostración. Más adelante
        mostraremos las preguntas reales de cada estudiante.
      </p>
    </section>
  )
}

export default MyQuestions