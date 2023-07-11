import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { CHARACTERS } from "../../resources/graphql/characters/query"
import { CharactersData } from "../../resources/graphql/characters/interfaces"
import {
  CharactersList,
  Error,
  Loading,
  PageCounter,
  Pagination,
} from "../../components"
import { CharactersPageStyled, PaginationInfoStyled } from "./styles"

const CharactersPage = () => {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS, {
    variables: { page },
  })
  const charactersData = data?.characters?.results

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message="Ocorreu um erro" />
  }

  if (!data || !charactersData || charactersData.length === 0) {
    return <Error message="Nenhum dado encontrado" />
  }

  const totalPages = data.characters.info.pages
  const hasNextPage = !!data.characters.info.next
  const hasPrevPage = !!data.characters.info.prev

  return (
    <CharactersPageStyled>
      <CharactersList characters={charactersData} />

      <PaginationInfoStyled>
        <div style={{ marginBottom: "16px" }}>
          <Pagination
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
            onPrevPage={() => setPage(page - 1)}
            onNextPage={() => setPage(page + 1)}
          />
        </div>

        <PageCounter currentPage={page} totalPages={totalPages} />
      </PaginationInfoStyled>
    </CharactersPageStyled>
  )
}

export default CharactersPage
