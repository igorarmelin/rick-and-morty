import { lazy } from "react"
import { RouteObject, createBrowserRouter } from "react-router-dom"

const CharactersPage = lazy(() => import("../pages/CharactersPage"))
const CharacterDetailsPage = lazy(() => import("../pages/CharacterDetailsPage"))
const DefaultLayout = lazy(() => import("../layouts/Default"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <CharactersPage /> },
      {
        path: "personagem",
        children: [
          {
            path: "",
            element: <CharactersPage />,
          },
          {
            path: ":id",
            children: [{ path: "", element: <CharacterDetailsPage /> }],
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
