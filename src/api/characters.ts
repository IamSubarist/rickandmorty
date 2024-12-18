import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getCharacters = async () => {
  try {
    const response = await axiosInstance.get("/character");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
