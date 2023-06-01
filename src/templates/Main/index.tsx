import React from "react"
import { ContentStyled } from "./styles"
import { MainProps } from "./interfaces"

export const Main: React.FC<MainProps> = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>
}

export default Main
