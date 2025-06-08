import { Route, Routes, Navigate } from "react-router-dom"
import { useAuthStore } from "./store/useAuthStore"
import Homepage from "./pages/Homepage"
import Signup from './pages/Signup'
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Roadmap from "./pages/Roadmap"
import FrontendRoadmap from "./roadmaps/FrontendRoadmap"

function App() {

  const { authUser } = useAuthStore()

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/signup" element={ !authUser ? <Signup /> : <Homepage /> } />
        <Route path="/login" element={ !authUser ? <Login /> : <Homepage /> } />
        <Route path="/roadmaps" element={<Roadmap /> } />
        <Route path="/roadmaps/frontend" element={ <FrontendRoadmap /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
