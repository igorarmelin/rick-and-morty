interface Character {
  id: string
  image: string
  name: string
}

export interface CharactersData {
  characters: {
    info: {
      count: number
      pages: number
      prev: number
      next: number
    }
    results: Character[]
  }
}
