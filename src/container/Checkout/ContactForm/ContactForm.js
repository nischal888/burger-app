import { Component } from "react";

import Spinner from "../../../component/UI/Spinner/Spinner";

import { connect } from "react-redux";
import { postOrder, resetIngredients } from "../../../store/actions/";
import { Redirect } from "react-router-dom";

import "./ContactForm.css";
class ContactForm extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      street: "",
      postal: "",
      deliveryMethod: "Fastest",
    },
  };

  componentWillUnmount() {
    this.props.resetIngredients();
  }

  orderHandler = () => {
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.price,
      address: this.state.formData,
    };
    this.props.postOrder(order, this.props.token);
    //this.props.history.push("/");
    // axios.post("/orders.json", order).then((response) => {
    //   console.log(response);
    //   this.setState({ loading: false });
    //   this.props.history.push("/");
    //   // this.props.resetState();
    // });
    //   .catch((error) => {
    //     this.setState({
    //       loading: false,
    //       errorFlag: true,
    //       errorMessage: error.message,
    //     });
    //   });
  };
  onchangeHandler = (event) => {
    let formName = event.target.name;
    const addValues = { ...this.state.formData };
    addValues[formName] = event.target.value;
    this.setState({ formData: addValues });
  };

  render() {
    const { formData } = this.state;
    let formField;

    if (!this.props.loading) {
      formField = (
        <div className="ContactForm">
          <h4>Please fill your contact Information</h4>
          <input
            className="Input"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={this.onchangeHandler}
          />
          <input
            className="Input"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Mail"
            onChange={this.onchangeHandler}
          />
          <input
            className="Input"
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={this.onchangeHandler}
          />
          <input
            className="Input"
            type="text"
            name="postal"
            placeholder="Postal Code"
            value={formData.postal}
            onChange={this.onchangeHandler}
          />
          <select
            value={formData.deliveryMethod}
            className="Input"
            name="deliveryMethod"
            onChange={this.onchangeHandler}
          >
            <option>Fastest</option>
            <option>Moderate</option>
          </select>
          <option></option>
          <button
            style={{ width: "25%", margin: "0 auto" }}
            className="Success"
            onClick={this.orderHandler}
          >
            ORDER
          </button>
        </div>
      );
    } else {
      formField = (
        <>
          <Spinner />
        </>
      );
    }

    return (
      <div>
        {this.props.purachased ? <Redirect to="/" /> : null}
        {formField}
      </div>
    );
  }
}
const mapStateToProps = ({ postOrderReducer, authReducer }) => {
  return {
    loading: postOrderReducer.loading,
    purachased: postOrderReducer.purachased,
    token: authReducer.Token,
  };
};
const mapDispatchToProps = {
  postOrder,
  resetIngredients,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
