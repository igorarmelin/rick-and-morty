import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from ".."

const GoBackButton = () => {
  const history = useNavigate()

  const goBack = () => {
    history(-1)
  }

  return (
    <Button
      style={{ marginTop: "32px", maxWidth: "200px" }}
      variant="contained"
      color="secondary"
      onClick={goBack}
    >
      Voltar
    </Button>
  )
}

export default GoBackButton
