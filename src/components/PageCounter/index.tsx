import React from "react"
import { PageCounterProps } from "./interfaces"

const PageCounter = ({ currentPage, totalPages }: PageCounterProps) => {
  return (
    <p>
      Página {currentPage} de {totalPages}
    </p>
  )
}

export default PageCounter
