"use client";

import { Car } from "../../../types/car";
import css from "./Details.module.css";
import { formatMileage } from "../../../utils/formatMileage";
import Image from "next/image";
import  BookingForm  from '../../../components/BookingForm/BookingForm';

type Props = {
  car: Car;
};

export default function CarDetailsClient({ car }: Props) {
  const location = car.address.split(", ").slice(1).join(", ");

  const imageFileName = car.img.split("/").pop() ?? "";
  const imageId = imageFileName.split("-")[0];

  return (
    <section className={css.details}>
      <div className="container">
        <div className={css.columns}>
          <div className={css.left}>
              <Image
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                className={css.image}
                width={640}
                height={512}
              />
          
            <BookingForm
              onSubmit={(data) => data}
/>
          </div>

          <div className={css.right}>
            <div className={css.headerRow}>
              <h1 className={css.title}>
                {car.brand} {car.model}, {car.year}
              </h1>
              <span className={css.carId}>Id: {imageId}</span>
            </div>

            <div className={css.metaRow}>
              <span className={css.metaText}>
                <svg className={css.bulletIcon}>
                <use href="/icons/symbol-defs.svg#icon-Location" />
              </svg>
                {location}</span>
              <span className={css.metaText}>
                Mileage: {formatMileage(car.mileage)}
              </span>
            </div>

            <p className={css.price}>${car.rentalPrice}</p>

            <p className={css.description}>{car.description}</p>

            <div className={css.blockList}>
              <div className={css.block}>
                <h2 className={css.blockTitle}>Rental Conditions:</h2>
                <ul className={css.list}>
                  {car.rentalConditions.map((cond) => (
                    <li key={cond} className={css.listItem}>
                      <svg className={css.bulletIcon}>
                        <use href="/icons/symbol-defs.svg#icon-check-circle" />
                      </svg>
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className={css.block}>
                <h2 className={css.blockTitle}>Car Specifications:</h2>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <svg className={css.bulletIcon}>
                      <use href="/icons/symbol-defs.svg#icon-calendar"/>
                    </svg>
                    Year: {car.year}
                  </li>
                  <li className={css.listItem}>
                    <svg className={css.bulletIcon}>
                      <use href="/icons/symbol-defs.svg#icon-car"/>
                    </svg>
                    Type: {car.type}
                  </li>
                  <li className={css.listItem}>
                    <svg className={css.bulletIcon}>
                      <use href="/icons/symbol-defs.svg#icon-fuel-pump"/>
                    </svg>
                    Fuel Consumption: {car.fuelConsumption}
                  </li>
                  <li className={css.listItem}>
                    <svg className={css.bulletIcon}>
                      <use href="/icons/symbol-defs.svg#icon-gear"/>
                    </svg>
                    Engine Size: {car.engineSize}
                  </li>
                </ul>
              </div>
  
              <div className={css.block}>
                <h2 className={css.blockTitle}>
                  Accessories and functionalities:
                </h2>
                <ul className={css.list}>
                  {car.accessories.map((item) => (
                    <li key={`acc-${item}`} className={css.listItem}>
                      <svg className={css.bulletIcon}>
                        <use href="/icons/symbol-defs.svg#icon-check-circle" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                  {car.functionalities.map((item) => (
                    <li key={`func-${item}`} className={css.listItem}>
                      <svg className={css.bulletIcon}>
                        <use href="/icons/symbol-defs.svg#icon-check-circle" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
