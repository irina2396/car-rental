"use client";

import { useEffect, useState, startTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import CarList from "../../components/CarList/CarList";
import { getCars } from "../../services/api";
import { useCarStore } from "../../lib/stores/carsStore";
import css from "./Catalog.module.css";
import { Car, CarsResponse } from "../../types/car";

export default function CatalogClient() {
  const { filters } = useCarStore();

  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // --- MAIN QUERY ---
  const query = useQuery<CarsResponse, Error>({
    queryKey: ["cars", filters, page],
    queryFn: () => getCars(page, filters),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
  });

  // Load first or next page
  useEffect(() => {
    if (query.data) {
      startTransition(() => {
        if (page === 1) {
          setCars(query.data.cars);
        } else {
          setCars((prev) => [...prev, ...query.data.cars]);
        }
        setTotalPages(query.data.totalPages);
      });
    }
  }, [query.data]);

  // Reset when filters change
  useEffect(() => {
    startTransition(() => {
      setPage(1);
      setCars([]);
    });
  }, [filters]);

  // --- LOAD MORE ---
  const loadMore = () => {
    if (page < totalPages) {
      setPage((p) => p + 1);
    }
  };

  return (
    <section className={css.catalogContainer}>
      {query.isLoading && cars.length === 0 && (
        <div className={css.loader}>Loading...</div>
      )}

      <CarList cars={cars} />

      {!query.isLoading && page < totalPages && (
        <div className={css.btnWrapper}>
          <button
            className={css.loadMoreBtn}
            onClick={loadMore}
            disabled={query.isFetching}
          >
            {query.isFetching ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </section>
  );
}
