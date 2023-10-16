import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { setTheme } from "../utils/setTheme"

type ThemeOption = "system" | "light" | "dark"

export const Navbar = () => {
  const [isSwitchThemeOpen, setIsSwitchThemeOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>("system")

  const switchTheme = (theme: ThemeOption) => {
    setIsSwitchThemeOpen(false)
    localStorage.setItem("theme", theme)
    setTheme()
  }

  function getActiveClass(theme: ThemeOption) {
    return `${
      selectedTheme === theme ? "bg-green-100 dark:bg-slate-800" : ""
    } flex w-full px-4 py-2 gap-2 hover:bg-green-100 dark:hover:bg-slate-800`
  }

  function getActiveClassNav(isActive: boolean) {
    return `${
      isActive ? "text-emerald-500 dark:text-emerald-300 " : ""
    } font-semibold tracking-tight`
  }

  function renderSwitchThemeIcon() {
    function renderImage() {
      if (
        selectedTheme === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        return (
          <img
            src={import.meta.env.VITE_HYGRAPH_ASSETS + "UM7V3qPkRTCe2syEWJw3"}
            alt="moon-icon"
          />
        )
      return (
        <img
          src={import.meta.env.VITE_HYGRAPH_ASSETS + "plemDTYZRAyqQ42d7G1F"}
          alt="sun-icon"
        />
      )
    }

    return (
      <button onClick={() => setIsSwitchThemeOpen(!isSwitchThemeOpen)}>
        {renderImage()}
      </button>
    )
  }

  useEffect(() => {
    if ("theme" in localStorage) {
      setSelectedTheme(localStorage.getItem("theme") as ThemeOption)
    }
  }, [localStorage.theme])

  return (
    <div className="flex justify-between py-5">
      <nav className="flex gap-4 sm:gap-10 items-center">
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
        {renderSwitchThemeIcon()}
        {isSwitchThemeOpen && (
          <div className="absolute w-52 overflow-hidden rounded-md border-2 border-emerald-400 right-0 bg-white dark:bg-slate-900">
            <button
              className={getActiveClass("light")}
              onClick={() => switchTheme("light")}
            >
              <img
                src={
                  import.meta.env.VITE_HYGRAPH_ASSETS + "plemDTYZRAyqQ42d7G1F"
                }
                alt="light-mode-icon"
              />
              <p>Light</p>
            </button>
            <button
              className={getActiveClass("dark")}
              onClick={() => switchTheme("dark")}
            >
              <img
                src={
                  import.meta.env.VITE_HYGRAPH_ASSETS + "UM7V3qPkRTCe2syEWJw3"
                }
                alt="dark-mode-icon"
              />
              <p>Dark</p>
            </button>
            <button
              className={getActiveClass("system")}
              onClick={() => switchTheme("system")}
            >
              <img
                src={
                  import.meta.env.VITE_HYGRAPH_ASSETS + "tnzfdPWvSsai15vIULWQ"
                }
                alt="system-mode-icon"
              />
              <p>System</p>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
