import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../App.css"
import "./Temario.css"

const materias = [
  {
    id: 1,
    nombre: "Preliminares de Álgebra",
    categoria: "Fundamentos",
    icono: "📐",
    descripcion: "Álgebra, ecuaciones y razonamiento matemático.",
    temas: [
      { id: "baldor-preliminares", nombre: "Concepto a Punto 4", esInteractivo: true },
      { id: "baldor-signos-y-coeficientes", nombre: "Puntos 5 al 9", esInteractivo: true },
      { id: "baldor-cantidades-positivas-negativas", nombre: "Puntos 10 al 13", esInteractivo: true }, // <-- Nuevo tema
      { id: "ecuaciones", nombre: "Ecuaciones y Desigualdades", esInteractivo: false },
      { id: "funciones", nombre: "Funciones y Gráficas", esInteractivo: false },
    ],
  },
  {
    id: 2,
    nombre: "Capitulo 1 Suma",
    categoria: "Fundamentos",
    icono: "💻",
    descripcion: "Fundamentos de programación y resolución de problemas.",
    temas: [
      { id: "variables", nombre: "Variables y tipos de datos", esInteractivo: false },
      { id: "condicionales", nombre: "Condicionales", esInteractivo: false },
      { id: "ciclos", nombre: "Ciclos y Bucles", esInteractivo: false },
      { id: "funciones-prog", nombre: "Funciones", esInteractivo: false },
    ],
  },
  {
    id: 3,
    nombre: "Capitulo 2 Resta",
    categoria: "Fundamentos",
    icono: "🧠",
    descripcion: "Explora los fundamentos de la inteligencia artificial.",
    temas: [
      { id: "intro-ia", nombre: "Introducción a la IA", esInteractivo: false },
      { id: "ml", nombre: "Aprendizaje automático", esInteractivo: false },
      { id: "redes", nombre: "Redes neuronales", esInteractivo: false },
      { id: "evaluacion", nombre: "Evaluación de modelos", esInteractivo: false },
    ],
  },
  {
    id: 4,
    nombre: "Capitulo 3 Signos de agrupación",
    categoria: "Fundamentos",
    icono: "🗄️",
    descripcion: "Organización, consulta y administración de información.",
    temas: [
      { id: "relacional", nombre: "Modelo relacional", esInteractivo: false },
      { id: "sql", nombre: "Consultas SQL", esInteractivo: false },
      { id: "relaciones", nombre: "Relaciones y Llaves", esInteractivo: false },
      { id: "normalizacion", nombre: "Normalización", esInteractivo: false },
    ],
  },
  {
    id: 5,
    nombre: "Capitulo 4 Multiplicación",
    categoria: "Fundamentos",
    icono: "📊",
    descripcion: "Analiza datos y comprende conceptos estadísticos.",
    temas: [
      { id: "descriptiva", nombre: "Estadística descriptiva", esInteractivo: false },
      { id: "probabilidad", nombre: "Probabilidad", esInteractivo: false },
      { id: "distribuciones", nombre: "Distribuciones", esInteractivo: false },
      { id: "muestreo", nombre: "Muestreo", esInteractivo: false },
    ],
  },
  {
    id: 6,
    nombre: "Capitulo 5 División",
    categoria: "Fundamentos",
    icono: "🌐",
    descripcion: "Aprende a construir páginas y aplicaciones web.",
    temas: [
      { id: "html-css", nombre: "HTML y CSS", esInteractivo: false },
      { id: "js", nombre: "JavaScript", esInteractivo: false },
      { id: "react", nombre: "React", esInteractivo: false },
      { id: "responsive", nombre: "Diseño adaptable", esInteractivo: false },
    ],
  },
]

function Temario() {
  const navigate = useNavigate()
  const [busqueda, setBusqueda] = useState("")
  const [categoria, setCategoria] = useState("Todas")
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null)

  const resultados = materias.filter((materia) => {
    const coincideNombre = materia.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    const coincideCategoria =
      categoria === "Todas" || materia.categoria === categoria

    return coincideNombre && coincideCategoria
  })

  // Función para manejar el clic en un tema individual
  const handleTemaClick = (tema) => {
    if (tema.esInteractivo) {
      // Redirige al módulo interactivo de Baldor pasando el ID del tema específico
      navigate(`/baldor/${tema.id}`)
    }
  }

  return (
    <main className="temario-page">
      <header className="temario-header">
        <div>
          <span className="temario-tag">TU ESPACIO DE APRENDIZAJE</span>
          <h1>Explora el temario 📚</h1>
          <p>
            Encuentra materias, repasa conceptos y descubre nuevos temas
            para seguir aprendiendo en comunidad.
          </p>
        </div>

        <div className="temario-header-icon">📖</div>
      </header>

      <section className="temario-summary">
        <div>
          <span className="summary-icon">📚</span>
          <div>
            <strong>{materias.length} materias</strong>
            <p>Disponibles para explorar</p>
          </div>
        </div>

        <div>
          <span className="summary-icon">📝</span>
          <div>
            <strong>
              {materias.reduce((total, materia) => total + materia.temas.length, 0)} temas
            </strong>
            <p>Organizados por materia</p>
          </div>
        </div>
      </section>

      <section className="temario-controls">
        <input
          type="search"
          placeholder="🔎 Buscar una materia..."
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          aria-label="Buscar materias"
        />

        <select
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
          aria-label="Filtrar por categoría"
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Fundamentos">Fundamentos</option>
          <option value="Medio">Medio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
      </section>

      {materiaSeleccionada ? (
        <section className="materia-detail">
          <button
            className="volver-button"
            onClick={() => setMateriaSeleccionada(null)}
          >
            ← Volver a las materias
          </button>

          <div className="materia-detail-icon">
            {materiaSeleccionada.icono}
          </div>

          <span className="materia-category">
            {materiaSeleccionada.categoria}
          </span>

          <h2>{materiaSeleccionada.nombre}</h2>
          <p>{materiaSeleccionada.descripcion}</p>

          <h3>Temas de estudio</h3>

          <div className="topic-list">
            {materiaSeleccionada.temas.map((tema, index) => (
              <div 
                className={`topic-item ${tema.esInteractivo ? "interactive-topic" : ""}`}
                key={tema.id}
                onClick={() => handleTemaClick(tema)}
                style={{ cursor: tema.esInteractivo ? "pointer" : "default" }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{tema.nombre}</strong>
                <span>{tema.esInteractivo ? "🚀 Estudiar" : "📘"}</span>
              </div>
            ))}
          </div>

          <p className="demo-note">
            Contenido de demostración: los temas con el ícono 🚀 contienen teoría y ejercicios interactivos por puntos.
          </p>
        </section>
      ) : (
        <section className="materias-section">
          <div className="section-heading">
            <div>
              <h2>Materias disponibles</h2>
              <p>Selecciona una materia para consultar sus temas.</p>
            </div>

            <span>{resultados.length} resultados</span>
          </div>

          {resultados.length > 0 ? (
            <div className="materias-grid">
              {resultados.map((materia) => (
                <article className="materia-card" key={materia.id}>
                  <div className="materia-card-top">
                    <div className="materia-icon">{materia.icono}</div>
                    <span className="materia-category">
                      {materia.categoria}
                    </span>
                  </div>

                  <h3>{materia.nombre}</h3>
                  <p>{materia.descripcion}</p>

                  <div className="materia-card-bottom">
                    <span>📑 {materia.temas.length} temas</span>

                    <button
                      onClick={() => setMateriaSeleccionada(materia)}
                    >
                      Explorar →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="temario-empty">
              <span>🔎</span>
              <h3>No encontramos esa materia</h3>
              <p>Prueba con otro nombre o cambia la categoría.</p>
              <button
                onClick={() => {
                  setBusqueda("")
                  setCategoria("Todas")
                }}
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </section>
      )}
    </main>
  )
}

export default Temario
