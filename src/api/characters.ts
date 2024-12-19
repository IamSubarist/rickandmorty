import axios from "axios";

const RICK_AND_MORTY_API_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: RICK_AND_MORTY_API_URL,
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
