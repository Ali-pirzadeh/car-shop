import AllButton from "../commponent/module/AllButton";
import Categories from "../commponent/module/Categories";
import SearchBar from "../commponent/module/SearchBar";
import CarPage from "../commponent/templates/carPage";
import carsData from "../data/carsData";

export default function Home() {
  const car = carsData.slice(0 , 3)
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarPage data={car} />
    </div>
  );
}
