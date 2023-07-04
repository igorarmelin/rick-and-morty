import React from "react"
import { HeaderStyled } from "./styles"
import Typography from "../Typography"

const Header = () => {
  return (
    <HeaderStyled>
      <Typography fontWeight="900" fontSize="2rem" color="#c200ff">
        Rick and Morty
      </Typography>
    </HeaderStyled>
  )
}

export default Header
