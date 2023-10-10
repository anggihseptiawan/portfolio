import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/index"
import { setDarkMode } from "./utils/setDarkMode"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

setDarkMode(true)

const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_CMS,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
