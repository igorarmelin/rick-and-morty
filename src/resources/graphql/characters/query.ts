import { gql } from "@apollo/client"

export const LIST_CHARACTERS = gql`
  query listCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`
