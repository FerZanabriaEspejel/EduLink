import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { supabase } from "../supabase"
import { baldorTopics } from "../data/baldorIndex"
import "./AlgebraBaldor.css"

function AlgebraBaldor() {
  const { topicId } = useParams() // Captura el ID de la URL si se accede desde el temario
  const navigate = useNavigate()

  // Buscar el tema activo por la URL o tomar el primero por defecto
  const initialTopic = baldorTopics.find(t => t.id === topicId) || baldorTopics[0]

  const [selectedTopic, setSelectedTopic] = useState(initialTopic)
  const [activeTab, setActiveTab] = useState("theory") // "theory" o "practice"
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  
  // Datos del perfil del usuario
  const [userProfile, setUserProfile] = useState(null)
  const [pointsEarned, setPointsEarned] = useState(0)
  const [earnedMedal, setEarnedMedal] = useState("")

  useEffect(() => {
    fetchProfile()
  }, [])

  // Sincronizar el tema seleccionado si cambia el parámetro de la URL
  useEffect(() => {
    if (topicId) {
      const found = baldorTopics.find(t => t.id === topicId)
      if (found) {
        setSelectedTopic(found)
        handleResetQuiz()
      }
    }
  }, [topicId])

  const fetchProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()
      if (data) setUserProfile(data)
    }
  }

  // Manejar selección de opción
  const handleSelectOption = (questionId, optionIndex) => {
    if (submitted) return
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    })
  }

  // Evaluar ejercicios y otorgar puntos + medallas
  const handleSubmitQuiz = async () => {
    let correctCount = 0
    selectedTopic.exercises.forEach((ex) => {
      if (selectedAnswers[ex.id] === ex.correctIndex) {
        correctCount++
      }
    })

    const pointsToAdd = correctCount * 15 // 15 puntos por cada respuesta correcta
    setScore(correctCount)
    setPointsEarned(pointsToAdd)
    setSubmitted(true)

    // Actualizar puntos en Supabase
    if (userProfile && pointsToAdd > 0) {
      const newTotalPoints = (userProfile.points || 0) + pointsToAdd
      let newMedal = userProfile.medal || "Principiante"

      // Lógica de Medallas
      if (newTotalPoints >= 300) newMedal = "🥇 Maestro del Álgebra"
      else if (newTotalPoints >= 200) newMedal = "🥈 Experto Baldor"
      else if (newTotalPoints >= 100) newMedal = "🥉 Aprendiz de Álgebra"

      const { error } = await supabase
        .from("profiles")
        .update({
          points: newTotalPoints,
          medal: newMedal
        })
        .eq("id", userProfile.id)

      if (!error) {
        setUserProfile({ ...userProfile, points: newTotalPoints, medal: newMedal })
        setEarnedMedal(newMedal)
      }
    }
  }

  const handleResetQuiz = () => {
    setSelectedAnswers({})
    setSubmitted(false)
    setScore(0)
    setPointsEarned(0)
    setEarnedMedal("")
  }

  return (
    <div className="baldor-container">
      
      {/* HEADER DE LA SECCIÓN CON PROGRESO */}
      <div className="baldor-header">
        <div>
          <h1>📘 Álgebra de Baldor</h1>
          <p>Domina los temas fundamentales, resuelve ejercicios y gana medallas para tu perfil.</p>
        </div>
        
        {userProfile && (
          <div className="user-stats-badge">
            <div className="stat-item">
              <span className="stat-icon">⭐</span>
              <div>
                <strong>{userProfile.points || 0}</strong>
                <small>Puntos acumulados</small>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🏅</span>
              <div>
                <strong>{userProfile.medal || "Sin medalla"}</strong>
                <small>Medalla actual</small>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="baldor-layout">
        
        {/* TEMARIO / SIDEBAR */}
        <aside className="baldor-sidebar">
          <h3>Temario de Baldor</h3>
          <ul className="topic-list">
            {baldorTopics.map((topic) => (
              <li key={topic.id}>
                <button
                  className={`topic-btn ${selectedTopic.id === topic.id ? "active" : ""}`}
                  onClick={() => {
                    navigate(`/baldor/${topic.id}`)
                    setActiveTab("theory")
                    handleResetQuiz()
                  }}
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* CONTENIDO PRINCIPAL (TEORÍA Y EJERCICIOS) */}
        <section className="baldor-content">
          
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === "theory" ? "active" : ""}`}
              onClick={() => setActiveTab("theory")}
            >
              📖 Teoría y Ejemplos
            </button>
            <button
              className={`tab-btn ${activeTab === "practice" ? "active" : ""}`}
              onClick={() => setActiveTab("practice")}
            >
              ✍️ Ejercicios Prácticos ({selectedTopic.exercises.length})
            </button>
          </div>

          {/* VISTA DE TEORÍA */}
          {activeTab === "theory" && (
            <div className="theory-section">
              <h2>{selectedTopic.title}</h2>
              <p className="topic-description">{selectedTopic.description}</p>
              <div className="theory-box">
                {/* Si la teoría es un elemento JSX renderiza directo, si es texto usa pre */}
                {typeof selectedTopic.theory === "object" ? (
                  selectedTopic.theory
                ) : (
                  <pre>{selectedTopic.theory}</pre>
                )}
              </div>
              <button 
                className="primary-action-btn"
                onClick={() => setActiveTab("practice")}
              >
                Comenzar Ejercicios de este Tema 🚀
              </button>
            </div>
          )}

          {/* VISTA DE EJERCICIOS */}
          {activeTab === "practice" && (
            <div className="practice-section">
              <h2>Ejercicios: {selectedTopic.title}</h2>
              <p className="quiz-info">Responde correctamente para ganar **15 puntos** por cada acierto.</p>

              {selectedTopic.exercises.map((ex, index) => (
                <div key={ex.id} className="question-card">
                  <h4>{index + 1}. {ex.question}</h4>
                  
                  <div className="options-grid">
                    {ex.options.map((opt, optIdx) => {
                      let btnClass = "option-btn"
                      if (selectedAnswers[ex.id] === optIdx) btnClass += " selected"
                      if (submitted) {
                        if (optIdx === ex.correctIndex) btnClass += " correct"
                        else if (selectedAnswers[ex.id] === optIdx) btnClass += " wrong"
                      }

                      return (
                        <button
                          key={optIdx}
                          className={btnClass}
                          onClick={() => handleSelectOption(ex.id, optIdx)}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>

                  {submitted && (
                    <div className={`explanation-box ${selectedAnswers[ex.id] === ex.correctIndex ? "correct-exp" : "wrong-exp"}`}>
                      <strong>{selectedAnswers[ex.id] === ex.correctIndex ? "¡Correcto! 🎉" : "Incorrecto ❌"}</strong>
                      <p>{ex.explanation}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* BOTONES Y RESULTADOS DE EVALUACIÓN */}
              {!submitted ? (
                <button
                  className="submit-quiz-btn"
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(selectedAnswers).length < selectedTopic.exercises.length}
                >
                  Verificar Respuestas
                </button>
              ) : (
                <div className="results-summary">
                  <h3>Resultados del Modulo</h3>
                  <p>Aciertos: <strong>{score} / {selectedTopic.exercises.length}</strong></p>
                  <p>Puntos Obtenidos: <strong>+{pointsEarned} PTS</strong></p>
                  
                  {earnedMedal && (
                    <div className="medal-alert">
                      ¡Felicidades! Has alcanzado el rango de: <strong>{earnedMedal}</strong>
                    </div>
                  )}

                  <button className="reset-quiz-btn" onClick={handleResetQuiz}>
                    Reintentar Ejercicios
                  </button>
                </div>
              )}

            </div>
          )}

        </section>

      </div>
    </div>
  )
}

export default AlgebraBaldor