import React from "react"
import { PaginationProps } from "./interfaces"
import { Button } from ".."

const Pagination = ({
  hasPrevPage,
  hasNextPage,
  onPrevPage,
  onNextPage,
}: PaginationProps) => {
  return (
    <div>
      {hasPrevPage && (
        <Button
          style={{ marginRight: "8px" }}
          variant="contained"
          color="secondary"
          onClick={onPrevPage}
        >
          Anterior
        </Button>
      )}
      {hasNextPage && (
        <Button variant="contained" color="secondary" onClick={onNextPage}>
          Próxima
        </Button>
      )}
    </div>
  )
}

export default Pagination
