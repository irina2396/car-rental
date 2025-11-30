"use client";

import { useEffect, useState } from "react";
import css from "./FiltersForm.module.css";
import { useCarStore } from "../../lib/stores/carsStore";
import { getBrand } from "../../services/api";
import toast from "react-hot-toast";

export default function FiltersForm() {
  const { filters, setFilters, resetCars, fetchCars, resetFilters } = useCarStore();
  const [brands, setBrands] = useState<string[]>([]);
  const [activeSelect, setActiveSelect] = useState<string | null>(null);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await getBrand();
        setBrands(data);
      } catch {
        toast.error("Failed to load brands");
      }
    };
    loadBrands();
  }, []);

  const toggleSelect = (name: string) =>
    setActiveSelect((prev) => (prev === name ? null : name));

    const handleSearch = async () => {
        resetFilters();
    resetCars();        
    await fetchCars(filters);
  };

  return (
    <form className={css.formFilter} onSubmit={(e) => e.preventDefault()}>
      <div className={css.inner}>

        <div className={css.field}>
          <label className={css.label}>Car brand</label>
          <div className={css.selectWrapper}>
            <select
              value={filters.brand}
              onChange={(e) => setFilters({ brand: e.target.value })}
              className={css.select}
              onClick={() => toggleSelect("brand")}
              onBlur={() => setActiveSelect(null)}
            >
              <option value="">Choose a brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <svg
              className={`${css.arrow} ${
                activeSelect === "brand" ? css.arrowUp : ""
              }`}
            >
              <use href="/icons/symbol-defs.svg#icon-chevron-down" />
            </svg>
          </div>
        </div>

        <div className={css.field}>
          <label className={css.label}>Price/ 1 hour</label>
          <div className={css.selectWrapper}>
            <select
              value={filters.rentalPrice}
              onChange={(e) => setFilters({ rentalPrice: e.target.value })}
              className={css.select}
              onClick={() => toggleSelect("price")}
              onBlur={() => setActiveSelect(null)}
            >
              <option value="">Choose a price</option>
              {[30, 40, 50, 60, 70, 80].map((price) => (
                <option key={price} value={String(price)}>
                  To ${price}
                </option>
              ))}
            </select>

            <svg
              className={`${css.arrow} ${
                activeSelect === "price" ? css.arrowUp : ""
              }`}
            >
              <use href="/icons/symbol-defs.svg#icon-chevron-down" />
            </svg>
          </div>
        </div>

        <div className={css.fieldGroup}>
          <label className={css.label}>Сar mileage / km</label>

          <div className={css.mileageRow}>
            <input
              type="number"
              placeholder="From"
              value={filters.minMileage}
              onChange={(e) => setFilters({ minMileage: e.target.value })}
              className={css.input}
            />

            <span className={css.mileageDivider} />

            <input
              type="number"
              placeholder="To"
              value={filters.maxMileage}
              onChange={(e) => setFilters({ maxMileage: e.target.value })}
              className={css.input}
            />
          </div>
        </div>

        <button type="button" className={css.searchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>
    </form>
  );
}
