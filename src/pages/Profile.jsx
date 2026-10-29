import { useEffect, useState } from "react"
import { supabase } from "../supabase"
import "./Profile.css"

function Profile() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()

        if (error) throw error
        setProfile(data)
      }
    } catch (err) {
      console.error("Error cargando perfil:", err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="profile-loading">Cargando perfil...</div>
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {profile?.full_name ? profile.full_name.charAt(0).toUpperCase() : "U"}
          </div>
          <div>
            <h2>{profile?.full_name || "Estudiante EduLink"}</h2>
            <span className="profile-username">@{profile?.username}</span>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-box">
            <span className="stat-value">⭐ {profile?.points || 100}</span>
            <span className="stat-label">Puntos</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">🏅 Nivel {profile?.level || 1}</span>
            <span className="stat-label">Rango</span>
          </div>
        </div>

        <div className="profile-details">
          <h3>Información Académica</h3>
          <p><strong>Institución:</strong> {profile?.institution || "No especificada"}</p>
          <p><strong>Nivel Educativo:</strong> {profile?.educational_level || "No especificado"}</p>
          
          <h3>Materias de Interés</h3>
          <div className="subjects-tags">
            {profile?.subjects && profile.subjects.length > 0 ? (
              profile.subjects.map((sub, index) => (
                <span key={index} className="subject-tag">{sub}</span>
              ))
            ) : (
              <p>No se han seleccionado materias.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile