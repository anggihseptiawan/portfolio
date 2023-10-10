import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { setDarkMode } from "../utils/setDarkMode"

type ThemeOption = "system" | "light" | "dark"

export const Navbar = () => {
  const [isSwitchThemeOpen, setIsSwitchThemeOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>("system")

  const setTheme = (theme: ThemeOption) => {
    setIsSwitchThemeOpen(false)
    localStorage.setItem("theme", theme)
    setDarkMode()
  }

  function getActiveClass(theme: ThemeOption) {
    return `${
      selectedTheme === theme ? "bg-green-100 dark:bg-slate-800" : ""
    } flex w-full px-4 py-2 gap-2 hover:bg-green-100 dark:hover:bg-slate-800`
  }

  function getActiveClassNav(isActive: boolean) {
    return `font-semibold tracking-tight ${
      isActive ? "text-emerald-500 dark:text-emerald-300 " : ""
    }`
  }

  useEffect(() => {
    if ("theme" in localStorage) {
      setSelectedTheme(localStorage.getItem("theme") as ThemeOption)
    }
  }, [localStorage.theme])

  return (
    <div className="flex justify-between py-5">
      <nav className="flex gap-4 sm:gap-10">
        <NavLink
          to="/"
          className={({ isActive }) => getActiveClassNav(isActive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => getActiveClassNav(isActive)}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => getActiveClassNav(isActive)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => getActiveClassNav(isActive)}
        >
          Posts
        </NavLink>
      </nav>
      <div className="relative">
        <button onClick={() => setIsSwitchThemeOpen(!isSwitchThemeOpen)}>
          <img src="/sun.svg" alt="sun-icon" />
        </button>
        {isSwitchThemeOpen && (
          <div className="absolute w-52 overflow-hidden rounded-md border-2 border-emerald-400 right-0 bg-white dark:bg-slate-900">
            <button
              className={getActiveClass("light")}
              onClick={() => setTheme("light")}
            >
              <img src="/sun.svg" alt="light-mode-icon" />
              <p>Light</p>
            </button>
            <button
              className={getActiveClass("dark")}
              onClick={() => setTheme("dark")}
            >
              <img src="/moon.svg" alt="dark-mode-icon" />
              <p>Dark</p>
            </button>
            <button
              className={getActiveClass("system")}
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
