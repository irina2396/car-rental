import { Car } from "../../types/car"

type Props = {
    car: Car;
};

const CardCar = ({ car }: Props) => {
    return (
        <article>
            <img src={car.img} alt="car" />
            <p>{ car.brand } {car.model},{car.year}</p>
            <p>${car.rentalPrice}</p>
            <p>{car.address} {car.rentalCompany}</p>
            <p>{car.type} {car.mileage }km</p>
        </article>
    );
}

export default CardCar;