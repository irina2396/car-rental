
import { getCars } from '../../lib/api'

export default async function CatalogPage() {
    const cars = await getCars();
    console.log("cars", cars);
    

  return (
      <>
      CatalogPage
      </>
  );
}
