import { useEffect, useState } from "react"
import { supabase } from "../supabase"
import "./Settings.css"

function Settings() {
  // Estados para los datos del formulario
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [institution, setInstitution] = useState("")
  const [educationalLevel, setEducationalLevel] = useState("")
  const [email, setEmail] = useState("")
  
  // Estados de control
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })
  const [activeTab, setActiveTab] = useState("general") // general, security, danger

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    try {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        setEmail(user.email || "")
        
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()

        if (data) {
          setFullName(data.full_name || "")
          setUsername(data.username || "")
          setInstitution(data.institution || "")
          setEducationalLevel(data.educational_level || "")
        }
        if (error) console.error(error)
      }
    } catch (err) {
      console.error("Error al cargar datos:", err.message)
    } finally {
      setLoading(false)
    }
  }

  // Guardar cambios generales
  const handleSaveChanges = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ text: "", type: "" })

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error("No hay usuario autenticado.")

      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          username: username,
          institution: institution,
          educational_level: educationalLevel,
          updated_at: new Date()
        })
        .eq("id", user.id)

      if (error) throw error

      setMessage({ text: "¡Cambios guardados con éxito!", type: "success" })
    } catch (err) {
      setMessage({ text: "Error al actualizar: " + err.message, type: "error" })
    } finally {
      setSaving(false)
    }
  }

  // Simulación de eliminar cuenta
  const handleDeleteAccount = async () => {
    const confirmation = window.prompt("¿Estás seguro de que deseas eliminar tu cuenta? Escribe 'ELIMINAR' para confirmar:")
    if (confirmation === "ELIMINAR") {
      alert("Función de eliminación segura vinculada a Supabase Auth en proceso. Contacta a soporte temporalmente.")
    }
  }

  if (loading) {
    return <div className="settings-loading">Cargando configuración...</div>
  }

  return (
    <div className="settings-page">
      
      {/* ENCABEZADO */}
      <div className="settings-header">
        <h1>⚙️ Configuración de la Cuenta</h1>
        <p>Administra tu información personal, seguridad y preferencias de EduLink.</p>
      </div>

      <div className="settings-layout">
        
        {/* MENÚ LATERAL DE PESTAÑAS */}
        <aside className="settings-sidebar">
          <button 
            className={`sidebar-btn ${activeTab === "general" ? "active" : ""}`}
            onClick={() => setActiveTab("general")}
          >
            👤 Perfil e Información
          </button>
          
          <button 
            className={`sidebar-btn ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            🔒 Seguridad y Contraseña
          </button>

          <button 
            className={`sidebar-btn ${activeTab === "danger" ? "active" : ""}`}
            onClick={() => setActiveTab("danger")}
          >
            ⚠️ Zona de Peligro
          </button>
        </aside>

        {/* CONTENIDO PRINCIPAL SEGÚN LA PESTAÑA */}
        <main className="settings-content">

          {/* MENSAJE FLOTANTE DE ÉXITO / ERROR */}
          {message.text && (
            <div className={`settings-alert ${message.type}`}>
              {message.text}
            </div>
          )}

          {/* PESTAÑA 1: GENERAL */}
          {activeTab === "general" && (
            <form onSubmit={handleSaveChanges} className="settings-form-section">
              <h2>Información Personal</h2>
              <p className="section-desc">Actualiza tus datos públicos y académicos visibles en la comunidad.</p>

              <div className="input-grid">
                <div className="input-group">
                  <label>Nombre Completo</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Nombre de Usuario (Apodo)</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Correo Electrónico (No modificable)</label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="input-disabled"
                />
              </div>

              <div className="input-grid">
                <div className="input-group">
                  <label>Institución / Escuela</label>
                  <input
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Ej. UPMH / Preparatoria No. 1"
                  />
                </div>

                <div className="input-group">
                  <label>Nivel Educativo</label>
                  <select
                    value={educationalLevel}
                    onChange={(e) => setEducationalLevel(e.target.value)}
                  >
                    <option value="">Selecciona tu nivel</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Preparatoria / Bachillerato">Preparatoria / Bachillerato</option>
                    <option value="Universidad">Universidad</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="save-btn" disabled={saving}>
                {saving ? "Guardando cambios..." : "Guardar Cambios"}
              </button>
            </form>
          )}

          {/* PESTAÑA 2: SEGURIDAD */}
          {activeTab === "security" && (
            <div className="settings-form-section">
              <h2>Seguridad y Contraseña</h2>
              <p className="section-desc">Asegura tu cuenta actualizando tu contraseña regularmente.</p>

              <div className="input-group">
                <label>Contraseña Actual</label>
                <input type="password" placeholder="••••••••" />
              </div>

              <div className="input-grid">
                <div className="input-group">
                  <label>Nueva Contraseña</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="input-group">
                  <label>Confirmar Nueva Contraseña</label>
                  <input type="password" placeholder="••••••••" />
                </div>
              </div>

              <button 
                type="button" 
                className="save-btn"
                onClick={() => alert("Función de cambio de contraseña conectada próximamente.")}
              >
                Actualizar Contraseña
              </button>
            </div>
          )}

          {/* PESTAÑA 3: ZONA DE PELIGRO */}
          {activeTab === "danger" && (
            <div className="settings-form-section danger-zone">
              <h2>Zona de Peligro</h2>
              <p className="section-desc">Acciones irreversibles relacionadas con el estado de tu cuenta.</p>

              <div className="danger-action-box">
                <div>
                  <h4>Eliminar cuenta permanentemente</h4>
                  <p>Se borrarán tus datos, puntos, preguntas y acceso a la plataforma de forma definitiva.</p>
                </div>
                <button type="button" className="delete-btn" onClick={handleDeleteAccount}>
                  Eliminar Cuenta
                </button>
              </div>
            </div>
          )}

        </main>

      </div>
    </div>
  )
}

export default Settings