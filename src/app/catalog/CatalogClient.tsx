"use client";

import { useEffect, useState, startTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import CarList from "../../components/CarList/CarList";
import { getCars } from "../../services/api";
import { useCarStore } from "../../lib/stores/carsStore";
import css from "./Catalog.module.css";
import { Car } from "../../types/car";

export default function CatalogClient() {
  const { filters } = useCarStore();

  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const query = useQuery({
    queryKey: ["cars", filters],
    queryFn: async () => await getCars(1, filters),
  });

  useEffect(() => {
    if (query.data) {
      startTransition(() => {
        setCars(query.data.cars);
        setPage(query.data.page);
        setTotalPages(query.data.totalPages);
      });
    }
  }, [query.data]);

  useEffect(() => {
    if (query.error) {
      toast.error("Failed to load cars");

      startTransition(() => {
        setCars([]);
      });
    }
  }, [query.error]);

  const loadMore = async () => {
    try {
      const nextPage = page + 1;
      const data = await getCars(nextPage, filters);

      startTransition(() => {
        setCars((prev) => [...prev, ...data.cars]);
        setPage(nextPage);
      });
    } catch {
      toast.error("Failed to load more cars");
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
