import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { CHARACTERS } from "../../resources/graphql/characters/query"
import { CharactersData } from "../../resources/graphql/characters/interfaces"
import { Link } from "react-router-dom"

export const CharactersList = () => {
  const [page, setPage] = useState(1)

  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS, {
    variables: { page },
  })

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro</p>
  if (!data) return <p>Nenhum dado foi carregado</p>

  const totalPages = data.characters.info.pages
  const hasNextPage = !!data.characters.info.next
  const hasPrevPage = !!data.characters.info.prev

  return (
    // @TODO: Criar card de listagem dos personagens
    // @TODO: Criar componente de botão
    <>
      <ul>
        {data?.characters.results.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
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
