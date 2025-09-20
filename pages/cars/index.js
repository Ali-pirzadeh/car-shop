import Categories from "../../commponent/module/Categories";
import CarPage from "../../commponent/templates/carPage";
import carsData from "../../data/carsData";
function Dtails() {
  return (
    <div>
      <Categories />
      <CarPage data={carsData} /> 
    </div>
  );
}

export default Dtails;