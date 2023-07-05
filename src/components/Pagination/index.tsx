import React from "react"
import { PaginationProps } from "./interfaces"

const Pagination = ({
  hasPrevPage,
  hasNextPage,
  onPrevPage,
  onNextPage,
}: PaginationProps) => {
  return (
    <div>
      {hasPrevPage && <button onClick={onPrevPage}>Anterior</button>}
      {hasNextPage && <button onClick={onNextPage}>Próxima</button>}
    </div>
  )
}

export default Pagination
