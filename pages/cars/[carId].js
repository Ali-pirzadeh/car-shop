import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetail from "../../commponent/templates/CarDetail";

function carDetail() {
    const router = useRouter()
    const { carId } = router.query
    const carDetails = carsData [carId - 1]
    return <CarDetail {...carDetails} />;
}

export default carDetail;