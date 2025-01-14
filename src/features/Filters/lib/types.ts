export interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

export interface SelectProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export interface FiltersProps {
  name: string;
  species: string;
  gender: string;
  status: string;
}
