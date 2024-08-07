import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
    </Routes>
  )
}
