import CarPage from "../../commponent/templates/carPage";
import carsData from "../../data/carsData";
function Dtails() {
  return (
    <div>
      <CarPage data={carsData} /> 
    </div>
  );
}

export default Dtails;