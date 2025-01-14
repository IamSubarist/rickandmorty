export interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CardProps {
  character: CharacterProps;
}
