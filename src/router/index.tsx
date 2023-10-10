import { createBrowserRouter } from "react-router-dom"
import { Root } from "./Root"
import Home from "../pages/home"
import About from "../pages/about"
import Projects from "../pages/projects"
import Posts from "../pages/posts"
import Post from "../pages/post"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
])
