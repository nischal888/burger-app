import "./OrderDetail.css";

const orderDetail = (props) => {
  const getIngredients = Object.keys(props.ingredients).map((item) => {
    return (
      <span
        className="ingredientStyle"
        key={item + 1}
      >{`${item} ${props.ingredients[item]}`}</span>
    );
  });

  return (
    <div className="OrderDetails">
      <p>Ingredients:{getIngredients} </p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default orderDetail;
