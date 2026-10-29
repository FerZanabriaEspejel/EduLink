import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Botón flotante para abrir/cerrar el menú en celulares */}
      <button className="mobile-menu-toggle" onClick={toggleSidebar} aria-label="Abrir menú">
        {isOpen ? "✕ Cerrar" : "☰ Menú"}
      </button>

      {/* Fondo oscuro traslúcido cuando el menú se abre en móvil */}
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Sidebar original con la clase condicional is-open */}
      <aside className={`sidebar ${isOpen ? "is-open" : ""}`}>

        {/* LOGO */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            E
          </div>

          <div>
            <h2>EduLink</h2>
            <span>Conexión Educativa</span>
          </div>
        </div>

        {/* MENÚ PRINCIPAL */}
        <nav className="sidebar-menu">

          <p className="menu-title">
            PRINCIPAL
          </p>

          <NavLink to="/" onClick={closeSidebar} className="menu-item">
            <span>🏠</span>
            Inicio
          </NavLink>

          <NavLink to="/temario" onClick={closeSidebar} className="menu-item">
            <span>📚</span>
            Temario
          </NavLink>

          {/* Enlace directo a Baldor por si lo usas */}
          <NavLink to="/baldor" onClick={closeSidebar} className="menu-item">
            <span>📐</span>
            Álgebra de Baldor
          </NavLink>

          <NavLink to="/comunidad" onClick={closeSidebar} className="menu-item">
            <span>👥</span>
            Comunidad
          </NavLink>

          <NavLink to="/sos" onClick={closeSidebar} className="menu-item sos-item">
            <span>🚨</span>
            SOS Académico
          </NavLink>

          <p className="menu-title second-title">
            MI ACTIVIDAD
          </p>

          <NavLink to="/mis-preguntas" onClick={closeSidebar} className="menu-item">
            <span>❓</span>
            Mis preguntas
          </NavLink>

          <NavLink to="/mis-respuestas" onClick={closeSidebar} className="menu-item">
            <span>💬</span>
            Mis respuestas
          </NavLink>

          <NavLink to="/puntos" onClick={closeSidebar} className="menu-item">
            <span>🏅</span>
            Puntos y medallas
          </NavLink>

          <p className="menu-title second-title">
            CUENTA
          </p>

          <NavLink to="/perfil" onClick={closeSidebar} className="menu-item">
            <span>👤</span>
            Mi perfil
          </NavLink>

          <NavLink to="/configuracion" onClick={closeSidebar} className="menu-item">
            <span>⚙️</span>
            Configuración
          </NavLink>

          <NavLink to="/como-funciona" onClick={closeSidebar} className="menu-item">
            <span>ℹ️</span>
            Cómo funciona
          </NavLink>

        </nav>

        {/* PARTE INFERIOR */}
        <div className="sidebar-bottom">

          <div className="help-card">
            <span className="help-icon">💜</span>

            <div>
              <strong>¿Necesitas ayuda?</strong>
              <p>Conoce cómo funciona EduLink</p>
            </div>
          </div>

          <div className="user-mini">

            <div className="user-avatar">
              F
            </div>

            <div className="user-info">
              <strong>Fernanda</strong>
              <span>Estudiante</span>
            </div>

            <button className="more-button">
              ⋮
            </button>

          </div>

        </div>

      </aside>
    </>
  )
}

export default Sidebar