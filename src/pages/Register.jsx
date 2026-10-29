import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../supabase"
import "./Auth.css"

const SUBJECTS_LIST = [
  "Matemáticas",
  "Física",
  "Química",
  "Programación",
  "Inglés",
  "Historia",
  "Inteligencia Artificial",
  "Administración"
]

function Register() {
  const navigate = useNavigate()

  // Estados para controlar los campos
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    institution: "",
    educationalLevel: "Universidad",
    gradeSemester: "1er Semestre",
    termsAccepted: false
  })

  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Manejar cambios en los campos de texto y selects
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  // Manejar selección múltiple de materias
  const handleSubjectToggle = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject))
    } else {
      setSelectedSubjects([...selectedSubjects, subject])
    }
  }

  // Manejar el registro en Supabase
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validaciones básicas
    if (!formData.fullName || !formData.email || !formData.password || !formData.username) {
      setError("Por favor completa los campos obligatorios.")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.")
      return
    }

    if (!formData.termsAccepted) {
      setError("Debes aceptar los términos y condiciones.")
      return
    }

    setLoading(true)

    try {
      // 1. Crear usuario en Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })

      if (authError) throw authError

      if (authData.user) {
        // 2. Guardar el perfil extendido en la tabla 'profiles'
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: authData.user.id,
            full_name: formData.fullName,
            username: formData.username,
            institution: formData.institution,
            educational_level: formData.educationalLevel,
            grade_semester: formData.gradeSemester,
            subjects: selectedSubjects,
            points: 100, // Puntos iniciales de bienvenida
            level: 1
          }
        ])

        if (profileError) throw profileError

        // Redirigir al inicio o dashboard tras éxito
        navigate("/")
      }
    } catch (err) {
      setError(err.message || "Ocurrió un error al crear la cuenta.")
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
          <span className="auth-tag">🎓 Únete a EduLink</span>
          <h1>Aprende,<br />comparte y crece.</h1>
          <p>
            Crea tu cuenta y forma parte de una comunidad donde los estudiantes pueden ayudarse entre sí.
          </p>

          <div className="auth-benefits">
            <div><span>✓</span> Resuelve tus dudas</div>
            <div><span>✓</span> Comparte tus conocimientos</div>
            <div><span>✓</span> Obtén puntos y medallas</div>
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

          <span className="form-welcome">Comienza tu experiencia ✨</span>
          <h1>Crear cuenta</h1>
          <p className="form-description">
            Regístrate para comenzar a aprender en comunidad.
          </p>

          {error && <div className="auth-error-message" style={{ color: "red", marginBottom: "1rem" }}>{error}</div>}

          <form onSubmit={handleSubmit}>

            {/* NOMBRE COMPLETO */}
            <div className="input-group">
              <label>Nombre completo *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Tu nombre completo"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* USERNAME */}
            <div className="input-group">
              <label>Nombre de usuario público *</label>
              <input
                type="text"
                name="username"
                placeholder="@ejemplo_estudiante"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* CORREO */}
            <div className="input-group">
              <label>Correo electrónico *</label>
              <input
                type="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* DATOS ACADÉMICOS */}
            <div className="input-group">
              <label>Institución educativa</label>
              <input
                type="text"
                name="institution"
                placeholder="Ej. UPMH"
                value={formData.institution}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="input-group" style={{ flex: 1 }}>
                <label>Nivel educativo</label>
                <select name="educationalLevel" value={formData.educationalLevel} onChange={handleChange}>
                  <option value="Secundaria">Secundaria</option>
                  <option value="Bachillerato">Bachillerato</option>
                  <option value="Universidad">Universidad</option>
                </select>
              </div>

              <div className="input-group" style={{ flex: 1 }}>
                <label>Semestre / Grado</label>
                <input
                  type="text"
                  name="gradeSemester"
                  placeholder="Ej. 3er Semestre"
                  value={formData.gradeSemester}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* SELECCIÓN DE MATERIAS */}
            <div className="input-group">
              <label>Materias que te interesan o estudias</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                {SUBJECTS_LIST.map((subject) => {
                  const isSelected = selectedSubjects.includes(subject)
                  return (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => handleSubjectToggle(subject)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        border: isSelected ? "1px solid #4F46E5" : "1px solid #ccc",
                        backgroundColor: isSelected ? "#4F46E5" : "#f3f4f6",
                        color: isSelected ? "#ffffff" : "#374151",
                        cursor: "pointer",
                        fontSize: "0.85rem"
                      }}
                    >
                      {subject} {isSelected ? "✓" : "+"}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* CONTRASEÑA */}
            <div className="input-group">
              <label>Contraseña *</label>
              <input
                type="password"
                name="password"
                placeholder="Crea una contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* CONFIRMAR CONTRASEÑA */}
            <div className="input-group">
              <label>Confirmar contraseña *</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repite tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* TÉRMINOS */}
            <label className="remember">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <span>Acepto los términos y condiciones</span>
            </label>

            <button
              type="submit"
              className="auth-button"
              disabled={loading}
            >
              {loading ? "Creando cuenta..." : "Crear mi cuenta"}
            </button>

          </form>

          <div className="auth-divider">
            <span>o</span>
          </div>

          <p className="register-text">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login">Iniciar sesión</Link>
          </p>

        </div>
      </section>

    </div>
  )
}

export default Register