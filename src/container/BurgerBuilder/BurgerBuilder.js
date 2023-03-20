import { Component } from "react";
import Burger from "../../component/Burger/Burger";
import BuildControl from "../../component/Burger/BuildControl/BuildControl";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";
import Spinner from "../../component/UI/Spinner/Spinner";

import { connect } from "react-redux";
import {
  addIngredients,
  removeIngredients,
  initIngredients,
  purchasedRedirect,
} from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    orderFlag: false,
    modalOpen: false,
    loading: false,
    errorFlag: false,
    errorMessage: null,
  };

  componentDidMount() {
    if (this.props.hasFetched) this.props.initIngredients();
    // console.log(this.props);
    // axios
    //   .get("/ingredients.json")
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    function simpleArraySum(ar) {
      let total = 0;

      ar.forEach((arr, i) => (total += arr[i]));
      return total;
    }
    console.log(simpleArraySum([1, 2, 3]));
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.hasFetch) {
  //     return false;
  //   }
  //   return true;
  // }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  burgerPurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((keys) => {
        return ingredients[keys];
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);
    return sum > 0;
  };

  // addIngredients = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   let updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedCount;
  //   const oldPrice = this.state.basePrice;
  //   const newPrice = oldPrice + INGREDIENTS_PRICE[type];
  //   this.setState({ ingredients: updatedIngredients, basePrice: newPrice });
  //   this.burgerPurchasable(updatedIngredients);
  // };

  // deleteIngredients = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) return;
  //   const updatedCount = oldCount - 1;
  //   let updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedCount;
  //   const oldPrice = this.state.basePrice;
  //   const newPrice = oldPrice - INGREDIENTS_PRICE[type];
  //   this.setState({ ingredients: updatedIngredients, basePrice: newPrice });
  //   this.burgerPurchasable(updatedIngredients);
  // };
  orderIngredients = () => {
    if (this.props.isAuthenticated) {
      this.setState({ modalOpen: true });
    } else {
      this.props.history.push("/authenticate");
    }
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  continueOrder = () => {
    // const queryParam = [];
    // for (let i in this.state.ingredients) {
    //   queryParam.push([i] + "=" + this.state.ingredients[i]);
    // }
    // const queryPrice = this.state.basePrice;
    // queryParam.push("price=" + queryPrice);
    // const queryString = queryParam.join("&");
    this.props.purchasedRedirect();
    this.props.history.push({
      pathname: "/checkout",
      // search: "?" + queryString,
    });
  };

  render() {
    const disableInfo = { ...this.props.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary;

    orderSummary = (
      <OrderSummary
        ingredients={this.props.ingredients}
        cancel={this.closeModal}
        continue={this.continueOrder}
        totalPrice={this.props.price}
      />
    );

    return (
      <div>
        {this.state.modalOpen ? (
          <Modal show={this.state.modalOpen} close={this.closeModal}>
            {orderSummary}
          </Modal>
        ) : null}
        {this.props.ingredients ? (
          <div>
            <Burger ingredients={this.props.ingredients} />
            <BuildControl
              delete={this.props.removeIngredients}
              add={this.props.addIngredients}
              price={this.props.price}
              disabled={disableInfo}
              orderpurchasable={this.burgerPurchasable(this.props.ingredients)}
              open={this.orderIngredients}
              authenticate={this.props.isAuthenticated}
            />
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ ingredientReducer, authReducer }) => {
  return {
    ingredients: ingredientReducer.ingredients,
    price: ingredientReducer.totalPrice,
    hasFetched: ingredientReducer.hasFetch,
    isAuthenticated: authReducer.Token != null,
  };
};
const mapDispatchToProps = {
  addIngredients,
  removeIngredients,
  initIngredients,
  purchasedRedirect,
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addIngredients: (ingName) =>
//       dispatch(BurgerBuilderActions.addIngredients(ingName)),
//     removeIngredient: (ingName) =>
//       dispatch(BurgerBuilderActions.removeIngredients(ingName)),
//   };
// };
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
