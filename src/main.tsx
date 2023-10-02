import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/index"
import { setDarkMode } from "./utils/setDarkMode"

const preferDarkMode = window.matchMedia("(prefers-color-scheme: dark)")

setDarkMode()
preferDarkMode.addEventListener("change", () => setDarkMode())

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
