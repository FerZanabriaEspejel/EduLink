import { useState } from "react"
import "../App.css"
import "./MyAnswers.css"

const respuestasIniciales = [
  {
    id: 1,
    pregunta: "¿Cómo se resuelve una ecuación cuadrática?",
    materia: "Matemáticas",
    respuesta:
      "Puedes utilizar la fórmula general: x = (-b ± √(b² - 4ac)) / 2a. Primero identifica los coeficientes a, b y c; después sustituye sus valores y realiza las operaciones.",
    fecha: "12 oct 2026",
    utilidad: 8,
    estado: "Útil",
  },
  {
    id: 2,
    pregunta: "¿Cómo funcionan las listas en Python?",
    materia: "Programación",
    respuesta:
      "Las listas almacenan varios elementos en una misma variable. Puedes agregar elementos con append(), eliminar con remove() y acceder a ellos mediante su índice.",
    fecha: "11 oct 2026",
    utilidad: 5,
    estado: "Útil",
  },
  {
    id: 3,
    pregunta: "¿Qué diferencia hay entre IA y machine learning?",
    materia: "Inteligencia Artificial",
    respuesta:
      "La inteligencia artificial es el campo general que busca desarrollar sistemas capaces de realizar tareas inteligentes. El machine learning es una rama de la IA que permite aprender patrones a partir de datos.",
    fecha: "10 oct 2026",
    utilidad: 0,
    estado: "Sin valoración",
  },
]

function MyAnswers() {
  const [respuestas] = useState(respuestasIniciales)
  const [busqueda, setBusqueda] = useState("")
  const [filtro, setFiltro] = useState("Todas")
  const [respuestaAbierta, setRespuestaAbierta] = useState(null)

  const respuestasFiltradas = respuestas.filter((item) => {
    const texto = `${item.pregunta} ${item.materia} ${item.respuesta}`
      .toLowerCase()

    const coincideBusqueda = texto.includes(busqueda.toLowerCase())

    const coincideFiltro =
      filtro === "Todas" ||
      (filtro === "Útiles" && item.estado === "Útil") ||
      (filtro === "Sin valoración" &&
        item.estado === "Sin valoración")

    return coincideBusqueda && coincideFiltro
  })

  return (
    <section className="my-answers-page">
      <header className="my-answers-header">
        <div>
          <span className="answers-eyebrow">MI CONTRIBUCIÓN</span>
          <h1>Mis respuestas</h1>
          <p>
            Comparte lo que sabes, consulta tus aportaciones y
            ayuda a que otros estudiantes sigan aprendiendo.
          </p>
        </div>

        <div className="answers-header-icon">💡</div>
      </header>

      <div className="answers-stats">
        <article className="answers-stat-card">
          <div className="answers-stat-icon">💬</div>
          <div>
            <p>Respuestas publicadas</p>
            <h2>{respuestas.length}</h2>
          </div>
        </article>

        <article className="answers-stat-card">
          <div className="answers-stat-icon">👍</div>
          <div>
            <p>Valoraciones útiles</p>
            <h2>
              {respuestas.reduce(
                (total, item) => total + item.utilidad,
                0,
              )}
            </h2>
          </div>
        </article>

        <article className="answers-stat-card">
          <div className="answers-stat-icon">📚</div>
          <div>
            <p>Materias atendidas</p>
            <h2>
              {new Set(respuestas.map((item) => item.materia)).size}
            </h2>
          </div>
        </article>
      </div>

      <div className="answers-toolbar">
        <div className="answers-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Buscar pregunta, materia o respuesta..."
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
          />
        </div>

        <select
          value={filtro}
          onChange={(event) => setFiltro(event.target.value)}
          aria-label="Filtrar respuestas"
        >
          <option value="Todas">Todas las respuestas</option>
          <option value="Útiles">Marcadas como útiles</option>
          <option value="Sin valoración">Sin valoración</option>
        </select>
      </div>

      <div className="answers-list">
        {respuestasFiltradas.length > 0 ? (
          respuestasFiltradas.map((item) => (
            <article className="answer-card" key={item.id}>
              <div className="answer-card-top">
                <span className="answer-subject">{item.materia}</span>

                <span
                  className={`answer-rating ${
                    item.estado === "Útil"
                      ? "answer-rating-useful"
                      : "answer-rating-neutral"
                  }`}
                >
                  {item.estado === "Útil" ? "✓ Útil" : item.estado}
                </span>
              </div>

              <span className="answer-question-label">
                RESPUESTA A LA PREGUNTA
              </span>

              <h3>{item.pregunta}</h3>

              <p className="answer-content">
                {respuestaAbierta === item.id
                  ? item.respuesta
                  : `${item.respuesta.slice(0, 145)}${
                      item.respuesta.length > 145 ? "..." : ""
                    }`}
              </p>

              <div className="answer-card-footer">
                <span>📅 {item.fecha}</span>
                <span>👍 {item.utilidad} valoraciones útiles</span>

                <button
                  className="answer-expand-button"
                  onClick={() =>
                    setRespuestaAbierta(
                      respuestaAbierta === item.id ? null : item.id,
                    )
                  }
                >
                  {respuestaAbierta === item.id
                    ? "Ver menos ↑"
                    : "Ver completa →"}
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="answers-empty">
            <span>🔎</span>
            <h3>No encontramos respuestas</h3>
            <p>Prueba otra búsqueda o cambia el filtro.</p>
            <button
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

      <p className="answers-demo-note">
        💡 Datos de demostración. Las respuestas reales y sus valoraciones
        se mostrarán cuando conectemos EduLink a la base de datos.
      </p>
    </section>
  )
}

export default MyAnswers