import React from "react"
import { CharacterCardStyled } from "./styles"
import { CharacterCard } from ".."
import { CharacterListProps } from "./interfaces"

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <CharacterCardStyled>
      {characters.map(({ id, name, image }) => (
        <CharacterCard key={id} id={id} name={name} image={image} />
      ))}
    </CharacterCardStyled>
  )
}

export default CharacterList
