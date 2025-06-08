import { Route, Routes, Navigate } from "react-router-dom"
import { useAuthStore } from "./store/useAuthStore"
import Homepage from "./pages/Homepage"
import Signup from './pages/Signup'
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  const { authUser } = useAuthStore()

  return (
    <div>
      <Navbar />
      <Homepage />
      {/*<Routes>
        <Route path="/" element={ authUser ? <Homepage /> : <Navigate to='/login' /> } />
        <Route path="/signup" element={ !authUser ? <Signup /> : <Homepage /> } />
        <Route path="/login" element={ !authUser ? <Login /> : <Homepage /> } />
      </Routes>*/}
      <Footer />
    </div>
  )
}

export default App
