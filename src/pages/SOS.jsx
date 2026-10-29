
import { useState } from "react"
import "../App.css"
import "./SOS.css"

const solicitudesIniciales = [
  {
    id: 1,
    titulo: "No entiendo las derivadas",
    materia: "Matemáticas",
    urgencia: "Alta",
    descripcion: "¿Alguien me puede explicar cómo resolver una derivada paso a paso?",
    estado: "Pendiente",
  },
  {
    id: 2,
    titulo: "Error en mi código de Python",
    materia: "Programación",
    urgencia: "Media",
    descripcion: "Mi ciclo no termina correctamente y necesito entender por qué.",
    estado: "En atención",
  },
]

function SOS() {
  const [solicitudes, setSolicitudes] = useState(solicitudesIniciales)
  const [titulo, setTitulo] = useState("")
  const [materia, setMateria] = useState("Matemáticas")
  const [urgencia, setUrgencia] = useState("Media")
  const [descripcion, setDescripcion] = useState("")
  const [filtro, setFiltro] = useState("Todas")
  const [mensaje, setMensaje] = useState("")

  function crearSolicitud(event) {
    event.preventDefault()

    if (!titulo.trim() || !descripcion.trim()) {
      setMensaje("Completa el título y la descripción de tu duda.")
      return
    }

    const nuevaSolicitud = {
      id: Date.now(),
      titulo: titulo.trim(),
      materia,
      urgencia,
      descripcion: descripcion.trim(),
      estado: "Pendiente",
    }

    setSolicitudes((actuales) => [nuevaSolicitud, ...actuales])
    setTitulo("")
    setDescripcion("")
    setUrgencia("Media")
    setFiltro("Todas")
    setMensaje("¡Solicitud creada! Ya aparece en la lista de demostración.")
  }

  function cambiarEstado(id) {
    setSolicitudes((actuales) =>
      actuales.map((solicitud) => {
        if (solicitud.id !== id) return solicitud

        const siguienteEstado = {
          Pendiente: "En atención",
          "En atención": "Resuelta",
          Resuelta: "Pendiente",
        }

        return {
          ...solicitud,
          estado: siguienteEstado[solicitud.estado],
        }
      })
    )
  }

  const solicitudesFiltradas =
    filtro === "Todas"
      ? solicitudes
      : solicitudes.filter((solicitud) => solicitud.estado === filtro)

  const pendientes = solicitudes.filter(
    (solicitud) => solicitud.estado === "Pendiente"
  ).length

  const enAtencion = solicitudes.filter(
    (solicitud) => solicitud.estado === "En atención"
  ).length

  const resueltas = solicitudes.filter(
    (solicitud) => solicitud.estado === "Resuelta"
  ).length

  return (
    <main className="sos-page">
      <header className="sos-header">
        <div>
          <span className="sos-tag">APOYO ACADÉMICO ENTRE ESTUDIANTES</span>
          <h1>¿Necesitas ayuda urgente? 🚨</h1>
          <p>
            Comparte tu duda y encuentra compañeros dispuestos a ayudarte.
            ¡Nadie tiene que aprender por su cuenta!
          </p>
        </div>

        <div className="sos-header-icon">🆘</div>
      </header>

      <section className="sos-stats">
        <div className="sos-stat">
          <span className="sos-stat-icon">⏳</span>
          <div>
            <strong>{pendientes}</strong>
            <p>Pendientes</p>
          </div>
        </div>

        <div className="sos-stat">
          <span className="sos-stat-icon">🤝</span>
          <div>
            <strong>{enAtencion}</strong>
            <p>En atención</p>
          </div>
        </div>

        <div className="sos-stat">
          <span className="sos-stat-icon">✅</span>
          <div>
            <strong>{resueltas}</strong>
            <p>Resueltas</p>
          </div>
        </div>
      </section>

      <div className="sos-content">
        <section className="sos-form-card">
          <div className="sos-section-heading">
            <span className="sos-form-icon">✍️</span>
            <div>
              <h2>Solicitar ayuda</h2>
              <p>Cuéntanos qué necesitas resolver.</p>
            </div>
          </div>

          <form onSubmit={crearSolicitud} className="sos-form">
            <label htmlFor="sos-title">¿Cuál es tu duda?</label>
            <input
              id="sos-title"
              type="text"
              placeholder="Ej. No entiendo las integrales"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              maxLength={120}
              required
            />

            <label htmlFor="sos-subject">Materia</label>
            <select
              id="sos-subject"
              value={materia}
              onChange={(event) => setMateria(event.target.value)}
            >
              <option>Matemáticas</option>
              <option>Programación</option>
              <option>Inteligencia Artificial</option>
              <option>Bases de Datos</option>
              <option>Estadística</option>
              <option>Otra materia</option>
            </select>

            <label htmlFor="sos-urgency">Nivel de urgencia</label>
            <select
              id="sos-urgency"
              value={urgencia}
              onChange={(event) => setUrgencia(event.target.value)}
            >
              <option value="Baja">Baja: puedo esperar</option>
              <option value="Media">Media: necesito apoyo pronto</option>
              <option value="Alta">Alta: lo necesito cuanto antes</option>
            </select>

            <label htmlFor="sos-description">Describe tu problema</label>
            <textarea
              id="sos-description"
              placeholder="Explica qué estás intentando resolver y qué parte se te dificulta..."
              value={descripcion}
              onChange={(event) => setDescripcion(event.target.value)}
              rows={5}
              maxLength={1500}
              required
            />

            <p className="sos-helper">
              Consejo: incluye lo que ya intentaste para que puedan orientarte mejor.
            </p>

            {mensaje && (
              <p className="sos-message" role="status">
                {mensaje}
              </p>
            )}

            <button className="sos-submit" type="submit">
              🚀 Publicar solicitud
            </button>
          </form>
        </section>

        <section className="sos-requests">
          <div className="sos-requests-heading">
            <div>
              <h2>Solicitudes de ayuda</h2>
              <p>Revisa las dudas de otros estudiantes.</p>
            </div>

            <select
              aria-label="Filtrar solicitudes por estado"
              value={filtro}
              onChange={(event) => setFiltro(event.target.value)}
            >
              <option value="Todas">Todas</option>
              <option value="Pendiente">Pendientes</option>
              <option value="En atención">En atención</option>
              <option value="Resuelta">Resueltas</option>
            </select>
          </div>

          {solicitudesFiltradas.length > 0 ? (
            <div className="sos-request-list">
              {solicitudesFiltradas.map((solicitud) => (
                <article className="sos-request-card" key={solicitud.id}>
                  <div className="sos-request-top">
                    <span className={`sos-urgency urgency-${solicitud.urgencia.toLowerCase()}`}>
                      {solicitud.urgencia === "Alta" ? "🔴" : solicitud.urgencia === "Media" ? "🟡" : "🟢"}{" "}
                      {solicitud.urgencia}
                    </span>

                    <span className={`sos-status status-${solicitud.estado === "En atención" ? "atencion" : solicitud.estado.toLowerCase()}`}>
                      {solicitud.estado}
                    </span>
                  </div>

                  <h3>{solicitud.titulo}</h3>
                  <span className="sos-subject-label">
                    📚 {solicitud.materia}
                  </span>

                  <p className="sos-request-description">
                    {solicitud.descripcion}
                  </p>

                  <button
                    className="sos-status-button"
                    onClick={() => cambiarEstado(solicitud.id)}
                  >
                    Cambiar estado →
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="sos-empty">
              <span>✨</span>
              <h3>No hay solicitudes en este estado</h3>
              <p>Prueba con otro filtro o publica una nueva solicitud.</p>
            </div>
          )}

          <p className="sos-demo-note">
            Prototipo de demostración: las solicitudes y sus estados se
            mantienen en memoria mientras la página está abierta.
          </p>
        </section>
      </div>
    </main>
  )
}

export default SOS
