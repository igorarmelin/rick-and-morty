import React from "react"
import { PageCounterProps } from "./interfaces"
import Typography from "../Typography"

const PageCounter = ({ currentPage, totalPages }: PageCounterProps) => {
  return (
    <Typography fontWeight="900" fontSize="1rem">
      Página {currentPage} de {totalPages}
    </Typography>
  )
}

export default PageCounter
