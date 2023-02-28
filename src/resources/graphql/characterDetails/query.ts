import { gql } from "@apollo/client"

export const CHARACTER_DETAILS = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      image
      status
      species
      gender
      location {
        name
        type
        dimension
      }
      episode {
        id
        name
        episode
      }
    }
  }
`
