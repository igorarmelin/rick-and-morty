import { useQuery } from "@apollo/client"
import { CharactersData } from "../characters/interfaces"
import { LIST_CHARACTERS } from "../characters/query"

export const useListCharacters = () => {
  return useQuery<CharactersData>(LIST_CHARACTERS)
}
