import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../supabase"
import "./Auth.css"

function Login() {
  const navigate = useNavigate()

  // Estados del formulario
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Manejador del inicio de sesión con Supabase
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Por favor, ingresa tu correo y contraseña.")
      return
    }

    setLoading(true)

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (loginError) {
        if (loginError.message.includes("Invalid login credentials")) {
          throw new Error("Correo o contraseña incorrectos.")
        }
        throw loginError
      }

      if (data?.user) {
        // Redirigir al panel / dashboard principal
        navigate("/")
      }
    } catch (err) {
      setError(err.message || "Ocurrió un error al iniciar sesión.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">

      {/* PANEL IZQUIERDO */}
      <section className="auth-info">

        <div className="auth-brand">
          <div className="auth-logo">E</div>

          <div>
            <h2>EduLink</h2>
            <span>Red de Conexión Educativa</span>
          </div>
        </div>

        <div className="auth-message">

          <span className="auth-tag">
            ✨ Aprende en comunidad
          </span>

          <h1>
            Tu conocimiento
            <br />
            puede ayudar a alguien.
          </h1>

          <p>
            Resuelve tus dudas, comparte lo que sabes
            y forma parte de una comunidad de estudiantes
            que aprende junta.
          </p>

          <div className="auth-benefits">

            <div>
              <span>✓</span>
              Apoyo académico entre estudiantes
            </div>

            <div>
              <span>✓</span>
              Recursos y temarios
            </div>

            <div>
              <span>✓</span>
              Puntos y reconocimientos
            </div>

          </div>

        </div>

        <div className="auth-footer">
          EduLink Network · Aprender juntos nos hace crecer.
        </div>

      </section>


      {/* PANEL DERECHO */}
      <section className="auth-form-container">

        <div className="auth-form">

          <div className="mobile-logo">
            <div className="auth-logo">E</div>
            <strong>EduLink</strong>
          </div>

          <span className="form-welcome">
            Bienvenido de nuevo 👋
          </span>

          <h1>Iniciar sesión</h1>

          <p className="form-description">
            Ingresa a tu cuenta para continuar aprendiendo.
          </p>

          {/* Mensaje de error dinámico */}
          {error && (
            <div className="auth-error-message" style={{ color: "#ef4444", marginBottom: "1rem", fontSize: "0.9rem" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            <div className="input-group">

              <div className="password-label">

                <label>
                  Contraseña
                </label>

                <button type="button" onClick={() => alert("Función de recuperación en desarrollo.")}>
                  ¿La olvidaste?
                </button>

              </div>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>


            <label className="remember">

              <input type="checkbox" />

              <span>
                Recordar mi sesión
              </span>

            </label>


            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>

          </form>


          <div className="auth-divider">
            <span>o</span>
          </div>


          <p className="register-text">

            ¿Todavía no tienes una cuenta?{" "}

            <Link to="/registro">
              Crear cuenta
            </Link>

          </p>

        </div>

      </section>

    </div>
  )
}

export default Login