import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Car, CarFilters } from "../../types/car";
import { getCars } from "../../services/api";

interface CarStore {
  filters: CarFilters;
  favorites: Record<string, Car>;

  cars: Car[];
  page: number;

  setFilters: (filters: Partial<CarFilters>) => void;
  resetFilters: () => void;

  resetCars: () => void;
  fetchCars: (filters: CarFilters) => Promise<void>;

  toggleFavorite: (car: Car) => void;
  isFavorite: (id: string) => boolean;
}

const initialFilters: CarFilters = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

export const useCarStore = create<CarStore>()(
  persist(
    (set, get) => ({
      filters: initialFilters,

      favorites: {},

      cars: [],
      page: 1,

      setFilters: (patch) =>
        set((state) => ({
          filters: { ...state.filters, ...patch },
        })),

      resetFilters: () =>
        set({
          filters: initialFilters,
        }),

      resetCars: () =>
        set({
          cars: [],
          page: 1,
        }),

      fetchCars: async (filters) => {
        try {
          const response = await getCars(1, filters);
          set({
            cars: response.cars,
            page: 1,
          });
        } catch (err) {
          console.error("Failed to fetch cars:", err);
        }
      },

      toggleFavorite: (car) =>
        set((state) => {
          const exists = state.favorites[car.id];
          if (exists) {
            const updated = { ...state.favorites };
            delete updated[car.id];
            return { favorites: updated };
          }
          return { favorites: { ...state.favorites, [car.id]: car } };
        }),

      isFavorite: (id) => Boolean(get().favorites[id]),
    }),
    {
      name: "car-rental-store",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
