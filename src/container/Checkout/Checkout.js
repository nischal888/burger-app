import { useEffect } from "react";
import ContactForm from "../Checkout/ContactForm/ContactForm";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../component/Burger/Order/CheckoutSummary/CheckoutSummary";
import { hasFetched, authRedirectMethod } from "../../store/actions/";
const Checkout = (props) => {
  // componentDidMount() {
  //   // const query = new URLSearchParams(this.props.location.search);
  //   // const ingredients = {};
  //   // let price = 0;
  //   // for (let key of query.entries()) {
  //   //   if (key[0] === "price") {
  //   //     price = key[1];
  //   //   } else {
  //   //     ingredients[key[0]] = +key[1];
  //   //   }
  //   // }
  //   // this.setState({ ingredients: ingredients, totalPrice: price });
  // }
  useEffect(() => {
    props.authRedirectMethod();
  }, []);
  const checkoutCancel = () => {
    props.hasFetched();
    props.history.goBack();
  };
  const checkoutContinue = () => {
    props.history.replace("/checkout/contact-form");
  };

  return (
    <div>
      {props.ingredients && (
        <CheckoutSummary
          ingredients={props.ingredients}
          checkoutCancel={checkoutCancel}
          checkoutContinue={checkoutContinue}
        />
      )}
      <Route
        path={props.match.path + "/contact-form"}
        render={() => (
          <ContactForm
            ingredients={props.ingredients}
            price={props.totalPrice}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = ({ ingredientReducer }) => {
  return {
    ingredients: ingredientReducer.ingredients,
    totalPrice: ingredientReducer.totalPrice,
  };
};
const mapDispatchToProps = {
  hasFetched,
  authRedirectMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
