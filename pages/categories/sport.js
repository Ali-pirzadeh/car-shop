import CarsList from "../../commponent/templates/CarsList";
import carsData from "../../data/carsData";

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");

  return <CarsList data={sportCars} />;
}

export default Sport;
