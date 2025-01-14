import axios from "axios";

const RICK_AND_MORTY_API_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
  //   method: "GET",
  baseURL: RICK_AND_MORTY_API_URL,
});
