"use client";

import { Car } from "../../types/car";
import CardCar from "../CarCard/CarCard";
import css from './CarList.module.css'

type Props = {
  cars: Car[];
};

export default function CarList({ cars }: Props) {
  return (
      <ul className={css.list}>
        {cars.map((car) => <CardCar key={car.id} car={car} />)}
      </ul>
    
  );
}
