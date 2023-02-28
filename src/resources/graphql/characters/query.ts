import { gql } from "@apollo/client"

export const CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
      }
    }
  }
`
