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
