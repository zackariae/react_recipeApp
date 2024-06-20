import { FoodItem } from "./FoodItem";

export function FoodList({ foodData, setFoodData, setFoodID }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodID={setFoodID} />
      ))}
    </div>
  );
}
