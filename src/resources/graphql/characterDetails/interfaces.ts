interface Episode {
  id: string
  name: string
  episode: string
}

export interface CharacterDetailsData {
  character: {
    name: string
    image: string
    status: string
    species: string
    gender: string
    location: {
      name: string
      type: string
      dimension: string
    }
    episode: Episode[]
  }
}
