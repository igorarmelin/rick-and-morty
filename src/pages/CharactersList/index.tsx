import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { CHARACTERS } from "../../resources/graphql/characters/query"
import { CharactersData } from "../../resources/graphql/characters/interfaces"
import { Link } from "react-router-dom"
import { Error, Loading, NoData } from "../../components"

const CharactersList = () => {
  const [page, setPage] = useState(1)

  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS, {
    variables: { page },
  })

  if (loading) return <Loading />
  if (error) return <Error />
  if (!data || !data.characters.results) return <NoData />

  const totalPages = data.characters.info.pages
  const hasNextPage = !!data.characters.info.next
  const hasPrevPage = !!data.characters.info.prev

  return (
    <>
      <ul>
        {data.characters.results.map((character) => (
          <li key={character.id}>
            <Link to={`/personagem/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>

      <div>
        {hasPrevPage && (
          <button onClick={() => setPage(page - 1)}>Anterior</button>
        )}

        {hasNextPage && (
          <button onClick={() => setPage(page + 1)}>Próxima</button>
        )}
      </div>

      <p>
        Página {page} de {totalPages}
      </p>
    </>
  )
}

export default CharactersList
