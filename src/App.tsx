import { BrowserRouter, Route, Routes } from "react-router"
import "./App.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Role from "./pages/Role"
import Interests from "./pages/Interests"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}>
          <Route index element={<Role />} />
          <Route path="interests" element={<Interests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
