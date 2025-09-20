import CarsList from "../../commponent/templates/CarsList";
import carsData from "../../data/carsData";

function Suv() {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return <CarsList data={suvCars} />;
}

export default Suv;
