import React from "react"
import { ErrorProps } from "./interfaces"
import { ErrorStyled } from "./styles"

const Error = ({ message }: ErrorProps) => {
  return (
    <ErrorStyled color="#fff" fontWeight="900" fontSize="1rem">
      {message}
    </ErrorStyled>
  )
}

export default Error
