import CatalogClient from "./CatalogClient";
import CarFiltersForm from "../../components/FiltersForm/FiltersForm"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Catalog RentalCar',
  description: 'Find your perfect rental car',
};

export default function CatalogPage() {
  return (
    <main>
      <CarFiltersForm />
      <CatalogClient />
    </main>
  );
}
