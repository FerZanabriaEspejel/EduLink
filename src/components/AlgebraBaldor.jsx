import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { baldorTopics } from "../data/baldorIndex";
import { evaluarYRegistrarEjercicio } from "../utils/gamification"; // 1. Importamos la función de Supabase
import "./AlgebraBaldor.css";

export default function AlgebraBaldor() {
  const [selectedTopicId, setSelectedTopicId] = useState(baldorTopics[0].id);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});
  const [feedbackMessages, setFeedbackMessages] = useState({}); // Estado para guardar los mensajes de Supabase
  const [puntosTotales, setPuntosTotales] = useState(0); // Opcional: para mostrar los puntos en pantalla

  // Buscar el tema activo actual
  const currentTopic = baldorTopics.find((t) => t.id === selectedTopicId) || baldorTopics[0];

  const handleOptionSelect = (exerciseId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [exerciseId]: optionIndex,
    });
  };

  // 2. Modificamos la función para que sea asíncrona y hable con Supabase
  const checkAnswer = async (exerciseId, correctIndex) => {
    const userSelected = selectedAnswers[exerciseId];
    const isCorrect = userSelected === correctIndex;

    // Llamamos a nuestra función blindada en Supabase
    const resultado = await evaluarYRegistrarEjercicio(currentTopic.id, exerciseId, isCorrect);

    // Guardamos si se mostró el resultado
    setShowResults({
      ...showResults,
      [exerciseId]: true,
    });

    // Guardamos el mensaje personalizado que viene de Supabase (ej: "+10 puntos" o "Ya resuelto antes")
    setFeedbackMessages({
      ...feedbackMessages,
      [exerciseId]: resultado,
    });

    // Si la función devolvió puntos totales actualizados, los reflejamos
    if (resultado.puntosTotales !== undefined) {
      setPuntosTotales(resultado.puntosTotales);
    }
  };

  return (
    <div className="baldor-container" style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      
      {/* Barra lateral de Capítulos / Temas */}
      <aside style={{ width: "300px", backgroundColor: "#ffffff", borderRight: "1px solid #e5e7eb", padding: "1.5rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#111827", marginBottom: "1rem" }}>
          Álgebra de Baldor
        </h2>
        <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1.5rem" }}>
          Capítulos y Temas de Estudio
        </p>

        {/* Indicador rápido de puntos acumulados */}
        <div style={{ backgroundColor: "#eff6ff", padding: "0.75rem", borderRadius: "0.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#1e40af" }}>
            ⭐ Puntos de Cuenta: {puntosTotales} XP
          </span>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {baldorTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                fontWeight: selectedTopicId === topic.id ? "bold" : "normal",
                backgroundColor: selectedTopicId === topic.id ? "#eff6ff" : "transparent",
                color: selectedTopicId === topic.id ? "#2563eb" : "#374151",
                transition: "background-color 0.2s",
              }}
            >
              {topic.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Contenido Principal (Teoría y Ejercicios) */}
      <main style={{ flex: 1, padding: "2.5rem", overflowY: "auto" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#ffffff", padding: "2rem", borderRadius: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#111827", marginBottom: "0.5rem" }}>
            {currentTopic.title}
          </h1>
          <p style={{ color: "#4b5563", marginBottom: "2rem", fontSize: "1.1rem" }}>
            {currentTopic.description}
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: "2rem" }} />

          {/* Renderizado de la teoría */}
          <div className="theory-content">
            <ReactMarkdown>{currentTopic.theory}</ReactMarkdown>
          </div>

          <hr style={{ border: "none", borderTop: "2px solid #e5e7eb", margin: "3rem 0 2rem 0" }} />

          {/* Sección de Ejercicios Prácticos */}
          <section>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827", marginBottom: "1.5rem" }}>
              Ejercicios Prácticos
            </h3>

            {currentTopic.exercises && currentTopic.exercises.map((ex) => {
              const userSelected = selectedAnswers[ex.id];
              const isChecked = showResults[ex.id];
              const feedback = feedbackMessages[ex.id];
              const isCorrect = userSelected === ex.correctIndex;

              return (
                <div key={ex.id} style={{ marginBottom: "2rem", padding: "1.5rem", backgroundColor: "#f9fafb", borderRadius: "0.75rem", border: "1px solid #e5e7eb" }}>
                  <p style={{ fontWeight: "600", color: "#1f2937", marginBottom: "1rem" }}>
                    {ex.id}. {ex.question}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                    {ex.options.map((option, optIdx) => {
                      let optionBg = "#ffffff";
                      if (userSelected === optIdx) optionBg = "#eff6ff";
                      
                      return (
                        <label
                          key={optIdx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "0.75rem",
                            borderRadius: "0.5rem",
                            backgroundColor: optionBg,
                            border: "1px solid #d1d5db",
                            cursor: "pointer"
                          }}
                        >
                          <input
                            type="radio"
                            name={`exercise-${ex.id}`}
                            checked={userSelected === optIdx}
                            onChange={() => handleOptionSelect(ex.id, optIdx)}
                          />
                          <span style={{ color: "#374151" }}>{option}</span>
                        </label>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => checkAnswer(ex.id, ex.correctIndex)}
                    disabled={userSelected === undefined}
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: userSelected === undefined ? "#9ca3af" : "#2563eb",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "0.375rem",
                      cursor: userSelected === undefined ? "not-allowed" : "pointer",
                      fontWeight: "600"
                    }}
                  >
                    Comprobar respuesta
                  </button>

                  {isChecked && (
                    <div style={{
                      marginTop: "1rem",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      backgroundColor: isCorrect ? "#ecfdf5" : "#fef2f2",
                      border: `1px solid ${isCorrect ? "#10b981" : "#ef4444"}`,
                      color: isCorrect ? "#065f46" : "#991b1b"
                    }}>
                      <p style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
                        {/* Mostramos el mensaje exacto que nos devolvió Supabase (si ganó puntos o si ya estaba resuelto) */}
                        {feedback ? feedback.mensaje : (isCorrect ? "¡Correcto! 🎉" : "Incorrecto. Inténtalo de nuevo.")}
                      </p>
                      <p style={{ fontSize: "0.95rem" }}>{ex.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </section>

        </div>
      </main>

    </div>
  );
}