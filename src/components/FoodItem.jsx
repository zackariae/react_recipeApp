import style from "./foodItem.module.css";

export function FoodItem({ food, setFoodID }) {
  return (
    <div className={style.itemContainer}>
      <img className={style.itemImage} src={food.image} alt="" />
      <div className={style.itemContent}>
        <h1 className={style.itemTitle}>{food.title}</h1>
      </div>
      <button onClick={() => setFoodID(food.id)} className={style.itemBtn}>
        View Recipe
      </button>
    </div>
  );
}
