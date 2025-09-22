import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./searchBar.module.css"

function SearchBar() {
  const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const router = useRouter()
    

    const searchHandeler = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`)
        } else {
            alert("Enter Minimum & maximum price")
        }
    }

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Inter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Inter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandeler}>search</button>
    </div>
  );
}

export default SearchBar;
