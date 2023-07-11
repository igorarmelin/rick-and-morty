import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { CHARACTER_DETAILS } from "../../resources/graphql/characterDetails/query"
import { CharacterDetailsData } from "../../resources/graphql/characterDetails/interfaces"
import { Error, GoBack, Loading, Typography } from "../../components"
import { CharacterDetailsPageStyled, CharacterStyled } from "./styles"

const CharacterDetailsPage = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery<CharacterDetailsData>(
    CHARACTER_DETAILS,
    {
      variables: { id },
    }
  )

  if (loading) return <Loading />
  if (error) return <Error message="Ocorreu um erro" />
  if (!data) return <Error message="Nenhum dado encontrado" />

  const { episode, gender, image, location, name, species, status } =
    data.character ?? {}

  return (
    <CharacterDetailsPageStyled>
      <CharacterStyled>
        <div>
          <Typography fontWeight="900" fontSize="2rem">
            {name}
          </Typography>

          <Typography fontWeight="700" fontSize="1rem" variant="body1">
            Status:
          </Typography>
          <Typography marginBottom={"8px"} fontWeight="500" variant="body2">
            {status}
          </Typography>

          <Typography fontWeight="700" fontSize="1rem" variant="body1">
            Espécie
          </Typography>
          <Typography marginBottom={"8px"} fontWeight="500" variant="body2">
            {species}
          </Typography>

          <Typography fontWeight="700" fontSize="1rem" variant="body1">
            Gênero:
          </Typography>
          <Typography marginBottom={"8px"} fontWeight="500" variant="body2">
            {gender}
          </Typography>

          <Typography fontWeight="700" fontSize="1rem" variant="body1">
            Localização:
          </Typography>
          <Typography marginBottom={"8px"} fontWeight="500" variant="body2">
            {location?.name}
          </Typography>

          <Typography fontWeight="700" fontSize="1rem" variant="body1">
            Episódios:
          </Typography>
          {episode.map((ep) => (
            <Typography
              marginBottom={"8px"}
              fontWeight="500"
              variant="body2"
              key={ep.id}
            >
              {ep.name} ({ep.episode})
            </Typography>
          ))}
        </div>
        <img style={{ maxHeight: "300px" }} src={image} alt={`${name} image`} />
      </CharacterStyled>
      <GoBack />
    </CharacterDetailsPageStyled>
  )
}

export default CharacterDetailsPage
