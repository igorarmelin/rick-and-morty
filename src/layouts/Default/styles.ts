import styled from "styled-components"
import Paper from "../../components/Paper"

export const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SectionStyled = styled.section`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 48px 24px;
  background-color: #00bfff;
`

export const PaperStyled = styled(Paper)`
  width: 100%;
  max-width: 1200px;
`
