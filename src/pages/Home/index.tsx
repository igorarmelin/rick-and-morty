import React from "react"
import { CharactersList } from "../../components"
import { useListCharacters } from "../../resources/graphql/hooks"

const Home = () => {
  const { data: characters, loading: isLoadingCharacters } = useListCharacters()

  return (
    <>
      <h1>Home - Rick and Morty</h1>
      <div>
        <CharactersList data={characters} loading={isLoadingCharacters} />
      </div>
    </>
  )
}

export default Home
