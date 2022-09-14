import React from "react"
import { CharactersListProps } from "./interfaces"

const CharactersList = ({ data, loading }: CharactersListProps) => {
  if (loading) {
    return <h4>Carregando lista de personagens...</h4>
  }

  return (
    <>
      {data?.results?.map((item, index) => (
        <div key={index}>
          <h6>Nome: {item.name}</h6>
          <img src={item.image} alt={`${item.name} image`} />
        </div>
      ))}
      {!data?.results?.length && <h4>Não há dados disponíveis</h4>}
    </>
  )
}

export default CharactersList
