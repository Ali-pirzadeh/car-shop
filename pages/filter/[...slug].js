import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../commponent/templates/CarsList"


function FilterProduct() {
    const router = useRouter();
    const [min, max] = router.query.slug || [];

    const filterData = carsData.filter((item) => item.price > min && item.price < max)
    if (!filterData.length) return <h3>notFound</h3>
    return <CarsList data={filterData} />;
}

export default FilterProduct;
