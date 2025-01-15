export interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  image: string;
}

export interface CharacterResponseProps {
  results: Character[];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export interface LocationResponseProps {
  results: Location[];
}
