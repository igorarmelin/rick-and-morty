import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { CHARACTERS } from "../../resources/graphql/characters/query"
import { CharactersData } from "../../resources/graphql/characters/interfaces"
import {
  CharactersList,
  Error,
  Loading,
  NoData,
  PageCounter,
  Pagination,
} from "../../components"
import { CharactersPageStyled } from "./styles"

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
    return <Error />
  }

  if (!data || !charactersData || charactersData.length === 0) {
    return <NoData />
  }

  const totalPages = data.characters.info.pages
  const hasNextPage = !!data.characters.info.next
  const hasPrevPage = !!data.characters.info.prev

  return (
    <CharactersPageStyled>
      <CharactersList characters={charactersData} />

      <Pagination
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
        onPrevPage={() => setPage(page - 1)}
        onNextPage={() => setPage(page + 1)}
      />

      <PageCounter currentPage={page} totalPages={totalPages} />
    </CharactersPageStyled>
  )
}

export default CharactersPage
