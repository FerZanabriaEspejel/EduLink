
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register.jsx"

import Sidebar from "./components/Sidebar"
import Header from "./components/Header.jsx"

import Temario from "./pages/Temario.jsx"
import Community from "./pages/Community.jsx"
import SOS from "./pages/SOS.jsx"
import MyQuestions from "./pages/MyQuestions.jsx"
import MyAnswers from "./pages/MyAnswers.jsx"

import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import HowItWorksPage from "./pages/HowItWorksPage"

import AlgebraBaldor from "./pages/AlgebraBaldor"


function AppLayout() {
  const location = useLocation()

  // Rutas donde debe aparecer el Sidebar.
  const rutasConSidebar = [
    "/",
    "/temario",
    "/comunidad",
    "/mis-respuestas",
    "/sos"
  ]

  // Determina si se muestra el Sidebar.
  const mostrarSidebar = rutasConSidebar.includes(location.pathname)

  return (
    <div
      className={`app-layout ${
        mostrarSidebar ? "con-sidebar" : "sin-sidebar"
      }`}
    >
      {/* El Sidebar solo se renderiza en las rutas permitidas. */}
      {mostrarSidebar && <Sidebar />}

      <main className="main-content">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temario" element={<Temario />} />
          <Route path="/comunidad" element={<Community />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/mis-preguntas" element={<MyQuestions />} />
          <Route path="/mis-respuestas" element={<MyAnswers />} />

          <Route path="/perfil" element={<Profile />} />
          <Route path="/configuracion" element={<Settings />} />
          <Route path="/como-funciona" element={<HowItWorksPage />} />

          <Route path="/baldor" element={<AlgebraBaldor />} />
        </Routes>
      </main>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login y registro sin Sidebar ni Header. */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />

        {/* Las demás páginas utilizan AppLayout. */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
