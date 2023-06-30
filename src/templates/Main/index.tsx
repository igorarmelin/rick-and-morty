import React from "react"
import { ContentWrapper } from "./styles"
import { MainProps } from "./interfaces"
import { Header } from ".."

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  )
}

export default Main
