import axios from "axios";
import { Car } from "../types/car";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const getCars = async (): Promise<Car[]> => {
  const res = await axios.get<Car[]>("/cars");
  return res.data;
};
