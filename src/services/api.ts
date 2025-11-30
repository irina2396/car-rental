import { api } from "../lib/api";
import { Car, CarFilters, CarsResponse } from "../types/car";

export const getCars = async (
  page: number = 1,
  filters?: CarFilters
): Promise<CarsResponse> => {
  const params: Record<string, string> = {
    page: String(page),
    limit: "12",
  };

  if (filters?.brand) params.brand = filters.brand;
  if (filters?.rentalPrice) params.rentalPrice = filters.rentalPrice;
  if (filters?.minMileage) params.minMileage = filters.minMileage;
  if (filters?.maxMileage) params.maxMileage = filters.maxMileage;

  const res = await api.get<CarsResponse>("/cars", { params });

  return res.data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const res = await api.get<Car>(`/cars/${id}`);
  return res.data;
};

export const getBrand = async (): Promise<string[]> => {
  const res = await api.get<string[]>("/brands");
  return res.data;
};
