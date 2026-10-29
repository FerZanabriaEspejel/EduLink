
import React from 'react';
import './PuntosYMedallas.css';

export default function PuntosYMedallas() {
  // Datos de ejemplo (puedes conectarlos luego con tu base de datos o estado global)
  const userStats = {
    totalPoints: 1250,
    currentLevel: 4,
    nextLevelPoints: 1500,
    streakDays: 5,
  };

  const medals = [
    { id: 1, title: "Primeros Pasos", description: "Completaste tu registro en EduLink", icon: "🌱", unlocked: true, date: "12 Oct 2026" },
    { id: 2, title: "Mente Maestra", description: "Resuelve 10 ejercicios del Álgebra de Baldor", icon: "📐", unlocked: true, date: "18 Oct 2026" },
    { id: 3, title: "Compañero Solidario", description: "Responde a 5 dudas de otros compañeros en la comunidad", icon: "🤝", unlocked: true, date: "22 Oct 2026" },
    { id: 4, title: "Racha de Fuego", description: "Entra a la plataforma 7 días seguidos", icon: "🔥", unlocked: false, progress: "5/7 días" },
    { id: 5, title: "Cerebro de Oro", description: "Obtén calificación perfecta en un examen de práctica", icon: "⭐", unlocked: false, progress: "0/1" },
    { id: 6, title: "Leyenda Académica", description: "Alcanza los 3,000 puntos totales en la plataforma", icon: "🏆", unlocked: false, progress: "1250/3000 pts" },
  ];

  const pointHistory = [
    { id: 1, action: "Resolución de ejercicio en Álgebra de Baldor", points: "+50", time: "Hace 2 horas" },
    { id: 2, action: "Participación en el foro de la comunidad", points: "+30", time: "Ayer" },
    { id: 3, action: "Racha diaria de inicio de sesión", points: "+15", time: "Hace 2 días" },
    { id: 4, action: "Completar la sección de temario", points: "+100", time: "Hace 3 días" },
  ];

  // Cálculo rápido para la barra de progreso
  const progressPercentage = (userStats.totalPoints / userStats.nextLevelPoints) * 100;

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Puntos y Medallas 🏅</h1>
        <p>Sigue completando actividades, resolviendo retos y ganando reconocimiento.</p>
      </header>

      {/* Tarjeta de Resumen y Rango */}
      <section className="stats-overview">
        <div className="stat-card primary-gradient">
          <div className="stat-info">
            <span>Puntos Totales</span>
            <h2>{userStats.totalPoints} XP</h2>
          </div>
          <span className="stat-icon">✨</span>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <span>Nivel Actual</span>
            <h2>Nivel {userStats.currentLevel}</h2>
          </div>
          <span className="stat-icon">📈</span>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <span>Racha Activa</span>
            <h2>{userStats.streakDays} Días</h2>
          </div>
          <span className="stat-icon">🔥</span>
        </div>
      </section>

      {/* Barra de progreso al siguiente nivel */}
      <section className="level-progress-section">
        <div className="progress-header">
          <span>Progreso al Nivel {userStats.currentLevel + 1}</span>
          <span>{userStats.totalPoints} / {userStats.nextLevelPoints} XP</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </section>

      {/* Sección de Medallas */}
      <section className="section-block">
        <h3>Tus Medallas</h3>
        <div className="medals-grid">
          {medals.map((medal) => (
            <div key={medal.id} className={`medal-card ${medal.unlocked ? 'unlocked' : 'locked'}`}>
              <div className="medal-icon-wrapper">
                <span className="medal-emoji">{medal.icon}</span>
                {!medal.unlocked && <span className="lock-badge">🔒</span>}
              </div>
              <div className="medal-details">
                <h4>{medal.title}</h4>
                <p>{medal.description}</p>
                {medal.unlocked ? (
                  <span className="medal-date">Desbloqueada el {medal.date}</span>
                ) : (
                  <span className="medal-progress">Progreso: {medal.progress}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Historial de Puntos Recientes */}
      <section className="section-block">
        <h3>Historial de Actividad</h3>
        <div className="history-list">
          {pointHistory.map((item) => (
            <div key={item.id} className="history-item">
              <div className="history-text">
                <strong>{item.action}</strong>
                <span>{item.time}</span>
              </div>
              <span className="history-points">{item.points}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}