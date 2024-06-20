import { useEffect, useState } from "react";
import style from "./foodDetails.module.css";
export default function FoodDetails({ foodID }) {
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "6513011a169f4f91bf940a89ba9ef010";
  const [food, setFood] = useState({});
  useEffect(() => {
    if (foodID != "") {
      async function fetchFoodDetails() {
        let res = await fetch(`${URL}?apiKey=${API_KEY}`);
        let data = await res.json();
        setFood(data);
      }
      fetchFoodDetails();
    }
    console.log(food);
  }, [foodID]);

  return (
    <div className={style.food}>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>

      <div>
        <span>
          <strong>
            <strong>{food.readyInMinutes} Minutes</strong>
          </strong>
        </span>

        <span>
          <strong>Serves {food.servings}</strong>
        </span>

        <span>{food.vegetarian ? " Vegetarian" : " Not Vegetarian"}</span>
        <span>{food.vegan ? " Vegan" : " Not Vegan"}</span>
      </div>

      <div>
        $<span>{food.pricePerServing / 100} Per serving</span>
      </div>

      <div>
        <h2>Instructions</h2>
        {food && food.analyzedInstructions
          ? food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          : ""}
      </div>
    </div>
  );
}
