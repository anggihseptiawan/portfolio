import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Root = () => (
  <div className="container max-w-6xl mx-auto px-4">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)
