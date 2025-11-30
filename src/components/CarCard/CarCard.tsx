'use client'

import Image from "next/image";
import Link from "next/link";
import { Car } from "../../types/car"
import { useCarStore } from "../../lib/stores/carsStore";
import css from './CarCard.module.css'
import { formatMileage } from "../../utils/formatMileage";

type Props = {
    car: Car;
};

const CardCar = ({ car }: Props) => {
    const { toggleFavorite, isFavorite } = useCarStore();
    const favorite = isFavorite(car.id);

    const handleFavorite = () => {
        toggleFavorite(car);
    }

    const location = car.address.split(", ").slice(-2).join(" | ");

    return (
        <li className={css.card}>
            <div className={css.imageWrapper}>
                <Image
                    src={car.img}
                    alt={car.brand}
                    className={css.image}
                    width={276}
                    height={268}
                    priority
                />

                <button
                    className={`${css.heartBtn} ${favorite ? css.heartActive : ""}`}
                    onClick={handleFavorite}
                >
                    <svg className={css.heartIcon}>
                        <use
                            href={`/icons/symbol-defs.svg#${favorite ? "icon-heart-active" : "icon-heart-vector"}`}
                        />
                    </svg>
                </button>
            </div>

            <div className={css.title}>
                <span>
                    {car.brand} <span style={{ color: "#3470ff" }}>{car.model}</span>, {car.year}
                </span>
                <span>${car.rentalPrice}</span>
            </div>

            <div className={css.details}>
                <span className={css.detailsItem}>{location}</span>
                <span className={css.detailsItem}>{car.rentalCompany}</span>
                <span className={css.detailsItem}>{car.type}</span>
                <span className={css.detailsItem}>{formatMileage(car.mileage)}</span>
            </div>

            <Link className={css.button} href={`/catalog/${car.id}`}>
                Read more
            </Link>
        </li>
    );
};

export default CardCar;
