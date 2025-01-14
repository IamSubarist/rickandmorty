import axios from "axios";

const RICK_AND_MORTY_API_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
  method: "GET",
  params: { pagination: 1 },
  baseURL: RICK_AND_MORTY_API_URL,
});
