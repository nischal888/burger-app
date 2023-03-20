import "../../UI/Button/Button.css";
const orderSummary = (props) => {
  const orderSummaryList = Object.keys(props.ingredients).map((keys, i) => {
    return (
      <li key={`${i}_`}>
        <span style={{ textTransform: "capitalize" }}>{keys}</span>:
        {props.ingredients[keys]}
      </li>
    );
  });

  return (
    <div>
      <h3>Order Details</h3>
      <p>Your Delicious Burger Order</p>
      <ul>{orderSummaryList}</ul>
      <p>Do you want to checkout?</p>
      <p>
        <b>Total Price:</b> {props.totalPrice}
      </p>
      <button className="Button Danger" onClick={props.cancel}>
        Cancel
      </button>
      <button className="Button Success" onClick={props.continue}>
        Continue
      </button>
    </div>
  );
};
export default orderSummary;
