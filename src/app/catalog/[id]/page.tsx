import { getCarById } from "../../../services/api";
import CarDetailsClient from "./DetailsClient";

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const car = await getCarById(id)
  return {
    title: `Car: ${car.brand}`,
    description: car.description.slice(0, 30),
  }
}

export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;     
  const car = await getCarById(id);

  return <CarDetailsClient car={car} />;
}
