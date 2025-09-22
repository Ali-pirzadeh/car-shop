import Categories from "../../commponent/module/Categories";
import SearchBar from "../../commponent/module/SearchBar";
import CarPage from "../../commponent/templates/carPage";
import carsData from "../../data/carsData";
function Dtails() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarPage data={carsData} /> 
    </div>
  );
}

export default Dtails;