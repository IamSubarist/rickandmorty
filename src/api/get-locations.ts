import { LOCATION_REQUEST_TARGET } from "./constants";
import { axiosInstance } from "./config";
import { LocationResponseProps } from "./lib/types";

export const getLocations = async (): Promise<LocationResponseProps | null> => {
  try {
    const response = await axiosInstance(LOCATION_REQUEST_TARGET);
    console.log(response.data);
    return response.data as LocationResponseProps;
  } catch (error) {
    console.error(error);
    return null;
  }
};
