import Burger from "../../Burger";
import "./CheckoutSummary.css";
import "../../../UI/Button/Button.css";
const checkoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>Hope Burger tastes Well!</h1>
      <div style={{ width: "100%", margin: "0" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button className="Button Danger" onClick={props.checkoutCancel}>
        Cancel
      </button>
      <button className="Button Success" onClick={props.checkoutContinue}>
        Continue
      </button>
    </div>
  );
};

export default checkoutSummary;
