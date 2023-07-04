import { lazy } from "react"
import { RouteObject, createBrowserRouter } from "react-router-dom"

const CharactersList = lazy(() => import("../pages/CharactersList"))
const CharacterDetails = lazy(() => import("../pages/CharacterDetails"))
const DefaultLayout = lazy(() => import("../layouts/Default"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <CharactersList /> },
      {
        path: "personagem",
        children: [
          {
            path: "",
            element: <CharactersList />,
          },
          {
            path: ":id",
            children: [{ path: "", element: <CharacterDetails /> }],
          },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
  }))
)
