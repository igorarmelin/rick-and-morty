import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { Loading } from "../components"

export default () => (
  <Suspense fallback={<Loading full />}>
    <RouterProvider router={router} />
  </Suspense>
)
