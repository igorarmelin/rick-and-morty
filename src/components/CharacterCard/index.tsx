import React from "react"
import { CharacterCardProps } from "./interfaces"
import { Link } from "react-router-dom"
import { CardItemStyled, ImageStyled } from "./styles"
import Typography from "../Typography"

const CharacterCard = ({ id, image, name }: CharacterCardProps) => {
  return (
    <CardItemStyled>
      <Link to={`/personagem/${id}`}>
        <ImageStyled src={image} alt={name} />
        <Typography
          marginTop="16px;"
          variant="body1"
          fontWeight="700"
          align="center"
        >
          {name}
        </Typography>
      </Link>
    </CardItemStyled>
  )
}

export default CharacterCard
