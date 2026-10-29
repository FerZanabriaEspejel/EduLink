
import { useState } from "react"
import "../App.css"
import "./Community.css"

const preguntasIniciales = [
  {
    id: 1,
    titulo: "¿Cómo funciona una red neuronal?",
    descripcion:
      "Estoy estudiando inteligencia artificial y quiero entender cómo aprende una red neuronal desde cero.",
    materia: "Inteligencia Artificial",
    autor: "Sofía M.",
    iniciales: "SM",
    respuestas: 4,
    tiempo: "Hace 15 min",
    etiquetas: ["IA", "Redes neuronales"],
  },
  {
    id: 2,
    titulo: "¿Alguien me explica las ecuaciones cuadráticas?",
    descripcion:
      "Me cuesta trabajo identificar qué método usar para resolverlas. ¿Tienen algún ejemplo?",
    materia: "Matemáticas",
    autor: "Diego R.",
    iniciales: "DR",
    respuestas: 7,
    tiempo: "Hace 32 min",
    etiquetas: ["Álgebra", "Ecuaciones"],
  },
  {
    id: 3,
    titulo: "Diferencia entre INNER JOIN y LEFT JOIN",
    descripcion:
      "Estoy practicando SQL y quisiera entender cuándo conviene utilizar cada uno.",
    materia: "Bases de Datos",
    autor: "Valeria G.",
    iniciales: "VG",
    respuestas: 2,
    tiempo: "Hace 1 h",
    etiquetas: ["SQL", "Consultas"],
  },
]

function Community() {
  const [preguntas, setPreguntas] = useState(preguntasIniciales)
  const [busqueda, setBusqueda] = useState("")
  const [materia, setMateria] = useState("Todas")
  const [preguntaAbierta, setPreguntaAbierta] = useState(null)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [nuevaMateria, setNuevaMateria] = useState("Programación")
  const [mensaje, setMensaje] = useState("")

  const preguntasFiltradas = preguntas.filter((pregunta) => {
    const texto = `${pregunta.titulo} ${pregunta.descripcion} ${pregunta.materia} ${pregunta.etiquetas.join(" ")}`
      .toLowerCase()

    return (
      texto.includes(busqueda.toLowerCase()) &&
      (materia === "Todas" || pregunta.materia === materia)
    )
  })

  function publicarPregunta(event) {
    event.preventDefault()

    if (!titulo.trim() || !descripcion.trim()) {
      setMensaje("Completa el título y la descripción.")
      return
    }

    const nuevaPregunta = {
      id: Date.now(),
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      materia: nuevaMateria,
      autor: "Tú",
      iniciales: "TÚ",
      respuestas: 0,
      tiempo: "Ahora",
      etiquetas: [],
    }

    setPreguntas((actuales) => [nuevaPregunta, ...actuales])
    setTitulo("")
    setDescripcion("")
    setMostrarFormulario(false)
    setMensaje("¡Pregunta publicada en esta sesión!")
  }

  return (
    <main className="community-page">
      <header className="community-header">
        <div>
          <span className="community-tag">APRENDEMOS EN COMUNIDAD</span>
          <h1>Comunidad 💜</h1>
          <p>
            Comparte tus dudas, encuentra respuestas y ayuda a otros
            estudiantes a seguir aprendiendo.
          </p>
        </div>

        <div className="community-illustration">💬</div>
      </header>

      <section className="community-stats">
        <div>
          <span>🗨️</span>
          <div>
            <strong>{preguntas.length}</strong>
            <p>Preguntas de ejemplo y nuevas</p>
          </div>
        </div>

        <div>
          <span>🤝</span>
          <div>
            <strong>Entre estudiantes</strong>
            <p>Compartimos conocimiento</p>
          </div>
        </div>
      </section>

      <div className="community-toolbar">
        <input
          type="search"
          placeholder="Buscar una pregunta o materia..."
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          aria-label="Buscar preguntas"
        />

        <select
          value={materia}
          onChange={(event) => setMateria(event.target.value)}
          aria-label="Filtrar por materia"
        >
          <option value="Todas">Todas las materias</option>
          <option value="Inteligencia Artificial">Inteligencia Artificial</option>
          <option value="Matemáticas">Matemáticas</option>
          <option value="Bases de Datos">Bases de Datos</option>
          <option value="Programación">Programación</option>
        </select>

        <button
          className="community-primary"
          onClick={() => {
            setMostrarFormulario(!mostrarFormulario)
            setMensaje("")
          }}
        >
          + Hacer una pregunta
        </button>
      </div>

      {mensaje && <p className="community-message">{mensaje}</p>}

      {mostrarFormulario && (
        <form className="question-form" onSubmit={publicarPregunta}>
          <h2>Comparte tu duda</h2>
          <p>Describe tu pregunta para que otros estudiantes puedan ayudarte.</p>

          <label htmlFor="question-title">Título de la pregunta</label>
          <input
            id="question-title"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            placeholder="Ej. ¿Cómo funciona un ciclo for?"
            maxLength={120}
            required
          />

          <label htmlFor="question-subject">Materia</label>
          <select
            id="question-subject"
            value={nuevaMateria}
            onChange={(event) => setNuevaMateria(event.target.value)}
          >
            <option>Programación</option>
            <option>Matemáticas</option>
            <option>Inteligencia Artificial</option>
            <option>Bases de Datos</option>
          </select>

          <label htmlFor="question-description">Descripción</label>
          <textarea
            id="question-description"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
            placeholder="Explica qué has intentado y dónde tienes la duda..."
            rows={4}
            maxLength={1500}
            required
          />

          <div className="question-form-actions">
            <button
              type="button"
              className="community-secondary"
              onClick={() => setMostrarFormulario(false)}
            >
              Cancelar
            </button>

            <button type="submit" className="community-primary">
              Publicar pregunta
            </button>
          </div>
        </form>
      )}

      <section className="community-list">
        <div className="community-section-heading">
          <div>
            <h2>Preguntas recientes</h2>
            <p>Explora las dudas de la comunidad.</p>
          </div>

          <span>{preguntasFiltradas.length} preguntas</span>
        </div>

        {preguntasFiltradas.length > 0 ? (
          preguntasFiltradas.map((pregunta) => (
            <article className="question-card" key={pregunta.id}>
              <div className="question-author">
                <div className="question-avatar">
                  {pregunta.iniciales}
                </div>

                <div>
                  <strong>{pregunta.autor}</strong>
                  <span>{pregunta.tiempo}</span>
                </div>

                <span className="question-subject">
                  {pregunta.materia}
                </span>
              </div>

              <h3>{pregunta.titulo}</h3>
              <p className="question-description">
                {pregunta.descripcion}
              </p>

              <div className="question-tags">
                {pregunta.etiquetas.map((etiqueta) => (
                  <span key={etiqueta}>#{etiqueta}</span>
                ))}
              </div>

              <div className="question-card-footer">
                <span>💬 {pregunta.respuestas} respuestas</span>

                <button
                  onClick={() =>
                    setPreguntaAbierta(
                      preguntaAbierta === pregunta.id ? null : pregunta.id
                    )
                  }
                >
                  {preguntaAbierta === pregunta.id
                    ? "Ocultar detalle ↑"
                    : "Ver detalle →"}
                </button>
              </div>

              {preguntaAbierta === pregunta.id && (
                <div className="question-detail">
                  <strong>¿Quieres ayudar a resolver esta duda?</strong>
                  <p>
                    Esta versión es una demostración de la comunidad.
                    La publicación y las respuestas reales se habilitarán
                    al conectar la plataforma con una base de datos.
                  </p>
                </div>
              )}
            </article>
          ))
        ) : (
          <div className="community-empty">
            <span>🔎</span>
            <h3>No encontramos preguntas</h3>
            <p>Prueba con otro término o cambia el filtro.</p>
            <button
              className="community-secondary"
              onClick={() => {
                setBusqueda("")
                setMateria("Todas")
              }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default Community
