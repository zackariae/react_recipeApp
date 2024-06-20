import { useEffect } from "react";
import { useState } from "react";
import style from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6513011a169f4f91bf940a89ba9ef010";

export default function Search({ foodData, setFoodData, setFoodID }) {
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      setFoodID(data.results[0].id);
    }

    fetchFood();
  }, [query]);

  return (
    <div className={style.searchContainer}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        className={style.input}
      />
    </div>
  );
}
