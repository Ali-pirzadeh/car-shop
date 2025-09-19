import Card from "../module/Card";
import styles from "./CarPage.module.css"
function CarPage({ data }) {
    console.log(data);
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarPage;
