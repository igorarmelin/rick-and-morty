import styled from "styled-components"

export const CharactersPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const PaginationInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`
