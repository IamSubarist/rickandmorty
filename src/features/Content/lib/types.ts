export interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  dimension: string;
}

export interface CardProps {
  cardItems: CharacterProps;
}
