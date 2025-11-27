"use client";

import { useEffect, useState } from "react";
import { Car } from "../../types/car";
import CarList from "../../components/CarList/CarList";
import { getCars } from "../../services/api";
import css from './Catalog.module.css'

export default function CatalogClient() {
    const [cars, setCars] = useState<Car[]>([]);
    const [page, setPage] = useState();

    useEffect(() => {
        const loadMore = async () => {
            const res = await getCars();
            setCars(res.cars);
        };
        loadMore();
    }, []);

  return (
    <section className={css.catalogContainer}>
          <div className={css.listWrapper}>
              <CarList cars={cars} />
          </div>
    </section>
  );
}
