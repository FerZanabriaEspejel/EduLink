import { NavLink } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  return (
    <aside className="sidebar">

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

        <NavLink to="/" className="menu-item">
          <span>🏠</span>
          Inicio
        </NavLink>

        <NavLink to="/temario" className="menu-item">
          <span>📚</span>
          Temario
        </NavLink>

        <NavLink to="/comunidad" className="menu-item">
          <span>👥</span>
          Comunidad
        </NavLink>

        <NavLink to="/sos" className="menu-item sos-item">
          <span>🚨</span>
          SOS Académico
        </NavLink>

        <p className="menu-title second-title">
          MI ACTIVIDAD
        </p>

        <NavLink to="/mis-preguntas" className="menu-item">
          <span>❓</span>
          Mis preguntas
        </NavLink>

        <NavLink to="/mis-respuestas" className="menu-item">
          <span>💬</span>
          Mis respuestas
        </NavLink>

        <NavLink to="/puntos" className="menu-item">
          <span>🏅</span>
          Puntos y medallas
        </NavLink>

        <p className="menu-title second-title">
          CUENTA
        </p>

        <NavLink to="/perfil" className="menu-item">
          <span>👤</span>
          Mi perfil
        </NavLink>

        <NavLink to="/configuracion" className="menu-item">
          <span>⚙️</span>
          Configuración
        </NavLink>

        <NavLink to="/como-funciona" className="menu-item">
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
  )
}

export default Sidebar