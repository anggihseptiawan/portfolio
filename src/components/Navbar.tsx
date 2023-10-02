import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { setDarkMode } from "../utils/setDarkMode"

type ThemeOption = "system" | "light" | "dark"

export const Navbar = () => {
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>("system")

  const setTheme = (theme: "light" | "dark" | "system") => {
    setIsThemeOpen(false)
    localStorage.setItem("theme", theme)
    setDarkMode()
  }

  function getActiveClass(theme: ThemeOption) {
    return `${selectedTheme === theme ? "bg-green-100 dark:bg-slate-800" : ""}`
  }

  useEffect(() => {
    if ("theme" in localStorage) {
      setSelectedTheme(localStorage.getItem("theme") as ThemeOption)
    }
  }, [localStorage.theme])

  return (
    <div className="flex justify-between py-5">
      <nav className="flex gap-4 sm:gap-10">
        <Link to="/" className="font-semibold tracking-tight">
          Home
        </Link>
        <Link to="/about" className="font-semibold tracking-tight">
          About
        </Link>
        <Link to="/projects" className="font-semibold tracking-tight">
          Projects
        </Link>
        <Link to="/posts" className="font-semibold tracking-tight">
          Posts
        </Link>
      </nav>
      <div className="relative">
        <button onClick={() => setIsThemeOpen(!isThemeOpen)}>
          <img src="/sun.svg" alt="sun-icon" />
        </button>
        {isThemeOpen && (
          <div className="absolute w-52 overflow-hidden rounded-md border-2 border-emerald-400 right-0">
            <button
              className={`${getActiveClass(
                "light"
              )} flex w-full px-4 py-2 gap-2 hover:bg-green-100 dark:hover:bg-slate-800`}
              onClick={() => setTheme("light")}
            >
              <img src="/sun.svg" alt="light-mode-icon" />
              <p>Light</p>
            </button>
            <button
              className={`${getActiveClass(
                "dark"
              )} flex w-full px-4 py-2 gap-2 hover:bg-green-100 dark:hover:bg-slate-800`}
              onClick={() => setTheme("dark")}
            >
              <img src="/moon.svg" alt="dark-mode-icon" />
              <p>Dark</p>
            </button>
            <button
              className={`${getActiveClass(
                "system"
              )} flex w-full px-4 py-2 gap-2 hover:bg-green-100 dark:hover:bg-slate-800`}
              onClick={() => setTheme("system")}
            >
              <img src="/monitor.svg" alt="system-mode-icon" />
              <p>System</p>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
