import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import "./Burger.css";
const Burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKeys) => {
      return [...Array(props.ingredients[igKeys])].map((_, i) => {
        return <BurgerIngredients key={`${igKeys}_${i}`} type={igKeys} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please Add Ingredients</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};
export default Burger;
