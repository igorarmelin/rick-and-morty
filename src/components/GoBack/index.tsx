import React from "react"
import { useNavigate } from "react-router-dom"

const GoBackButton = () => {
  const history = useNavigate()

  const goBack = () => {
    history(-1)
  }

  return <button onClick={goBack}>Voltar</button>
}

export default GoBackButton
