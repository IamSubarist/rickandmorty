import { CHARACTER_REQUEST_TARGET } from "./constants";
import { axiosInstance } from "./config";
import { CharacterResponseProps } from "./lib/types";

export const getCharacters =
  async (): Promise<CharacterResponseProps | null> => {
    try {
      const response = await axiosInstance(CHARACTER_REQUEST_TARGET);
      return response.data as CharacterResponseProps;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

// const GET_CHARACTERS_PRIMARY_KEY = ["results"];

// const useGetCharactersQuery = () =>
//   useQuery<any, any>({
//     queryKey: GET_CHARACTERS_PRIMARY_KEY,
//     queryFn: getCharacters,
//   });

//   const {} = getCharactersQuery()
