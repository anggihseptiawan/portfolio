import { createBrowserRouter } from "react-router-dom"
import { Root } from "./Root"
import Home from "../pages/home"
import About from "../pages/about"
import Projects from "../pages/projects"
import Post from "../pages/post"
import PostDetail from "../pages/post/index"
import { GET_DETAIL_POST, GET_POST } from "../constants/query"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { PostDetailLoaderData, PostLoaderData } from "../types/post"

export const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_CMS,
  cache: new InMemoryCache(),
})

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
        path: "/post",
        element: <Post />,
        loader: async () => {
          const posts = await client.query<PostLoaderData>({
            query: GET_POST,
          })
          if (posts) {
            return { data: posts.data, error: false }
          }
          return { data: null, error: true }
        },
      },
      {
        path: "/post/:slug",
        element: <PostDetail />,
        loader: async ({ params }) => {
          const post = await client.query<PostDetailLoaderData>({
            query: GET_DETAIL_POST,
            variables: {
              slug: params.slug,
              locales: ["en", "id"],
              includeCurrent: true,
            },
          })

          if (post) {
            return { data: post.data, error: false }
          }
          return { data: null, error: true }
        },
      },
    ],
  },
])
