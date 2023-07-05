import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { CHARACTER_DETAILS } from "../../resources/graphql/characterDetails/query"
import { CharacterDetailsData } from "../../resources/graphql/characterDetails/interfaces"
import { Error, GoBack, Loading, NoData, Typography } from "../../components"

const CharacterDetailsPage = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery<CharacterDetailsData>(
    CHARACTER_DETAILS,
    {
      variables: { id },
    }
  )

  if (loading) return <Loading />
  if (error) return <Error />
  if (!data) return <NoData />

  const { episode, gender, image, location, name, species, status } =
    data.character ?? {}

  return (
    <div>
      <div>
        <img src={image} alt={`${name} image`} />

        <Typography variant="h4">{name}</Typography>

        <Typography variant="body1">Status:</Typography>
        <Typography variant="body2">{status}</Typography>

        <Typography variant="body1">Espécie</Typography>
        <Typography variant="body2">{species}</Typography>

        <Typography variant="body1">Gênero:</Typography>
        <Typography variant="body2"> {gender}</Typography>

        <Typography variant="body1">Localização: {location?.name}</Typography>
        <Typography variant="body2">{location?.type}</Typography>

        <Typography variant="body1">Episódios:</Typography>
        {episode.map((ep) => (
          <Typography variant="body2" key={ep.id}>
            {ep.name} ({ep.episode})
          </Typography>
        ))}
      </div>
      <GoBack />
    </div>
  )
}

export default CharacterDetailsPage
