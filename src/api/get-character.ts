import { CHARACTER_REQUEST_TARGET } from "./constans";
import { axiosInstance } from "./config";

export const getCharacters = async () => {
  try {
    const response = await axiosInstance(CHARACTER_REQUEST_TARGET);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
