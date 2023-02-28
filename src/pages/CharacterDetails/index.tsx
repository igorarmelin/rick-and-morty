import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { CHARACTER_DETAILS } from "../../resources/graphql/characterDetails/query"
import { CharacterDetailsData } from "../../resources/graphql/characterDetails/interfaces"

export const CharacterDetails = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery<CharacterDetailsData>(
    CHARACTER_DETAILS,
    {
      variables: { id },
    }
  )

  // @TODO: Criar componente de loading
  if (loading) return <p>Carregando...</p>

  // @TODO: Criar componente de erro
  if (error) return <p>Erro</p>

  // @TODO: Criar componente informando nenhum dado carregado
  if (!data) return <p>Nenhum dado foi carregado</p>

  const { episode, gender, image, location, name, species, status } =
    data?.character

  return (
    // @TODO: Criar componente "Typography"
    <div>
      <img src={image} alt={`${name} image`} />
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Espécie: {species}</p>
      <p>Genêro: {gender}</p>
      <p>Localização: {location.name}</p>
      <p>Tipo de localização: {location.type}</p>
      <p>Episódios:</p>
      <ul>
        {episode.map((ep) => (
          <li key={ep.id}>
            {ep.name} ({ep.episode})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CharacterDetails
