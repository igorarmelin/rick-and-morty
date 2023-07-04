import { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"
import { MainStyled, PaperStyled, SectionStyled } from "./styles"
import { Header } from "../../components"

export default ({ children }: PropsWithChildren) => {
  return (
    <MainStyled>
      <Header />
      <SectionStyled>
        <PaperStyled style={{ padding: "16px 24px" }}>
          {children || <Outlet />}
        </PaperStyled>
      </SectionStyled>
    </MainStyled>
  )
}
