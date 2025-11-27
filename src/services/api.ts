import { api } from "../lib/api";
import { Car, CarsResponse } from "../types/car";

export const getCars = async () => {
  const res = await api.get<CarsResponse>("/cars");
  return res.data;
};

export const getCarById = async (id: string) => {
  const res = await api.get<Car>(`/cars/${id}`);
  return res.data;
};
