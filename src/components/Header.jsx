import { NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header className="top-header">
      <NavLink to="/" className="header-logo">
        <span className="header-logo-icon">E</span>
        <span>Edu<span className="header-logo-highlight">Link</span></span>
      </NavLink>

      <nav className="header-navigation">
        <NavLink to="/" end>
          Inicio
        </NavLink>

        <NavLink to="/temario">
          Temario
        </NavLink>

        <NavLink to="/comunidad">
          Comunidad
        </NavLink>

        <NavLink to="/mis-respuestas">
        Mis respuestas
        </NavLink>

        <NavLink to="/sos">
          SOS Académico
        </NavLink>
      </nav>

      <NavLink
        to="/perfil"
        className="header-profile"
        aria-label="Ir a mi perfil"
      >
        <span>👤</span>
        <span>Mi perfil</span>
      </NavLink>
    </header>
  )
}

export default Header