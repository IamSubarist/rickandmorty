import { CHARACTER_REQUEST_TARGET } from "./constans";
import { axiosInstance } from "./config";

// axiosInstance({
//   method: 'GET',
//   params: {
//     pagination: '1'
//   }
// })
// '..../api/characters?pagination=1'

export const getCharacters = async () => {
  try {
    const response = await axiosInstance.get(CHARACTER_REQUEST_TARGET);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
