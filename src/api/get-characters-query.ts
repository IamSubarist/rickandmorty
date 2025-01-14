import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/characters";
export const { data } = useQuery({
  queryKey: ["results"],
  queryFn: getCharacters,
});
