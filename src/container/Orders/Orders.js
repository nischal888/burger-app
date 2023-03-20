import { Component } from "react";

import OrderDetail from "./OrderDetail/OrderDetail";

import { connect } from "react-redux";
import { fetchOrder } from "../../store/actions/orderDetail";

class Orders extends Component {
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  componentDidMount() {
    this.props.fetchOrder(this.props.token);
  }

  render() {
    const { orders } = this.props;
    return (
      <div>
        {orders &&
          orders.map((item) => {
            return (
              <OrderDetail
                key={item.id}
                price={item.totalPrice}
                ingredients={item.ingredients}
              />
            );
          })}
        {/* {this.state.loading && <Spinner />}
        <Modal show={this.state.modalOpen} close={this.closeModal}>
          {this.state.errorMessage}
        </Modal> */}
      </div>
    );
  }
}

const mapStateToProps = ({ orderReducer, authReducer }) => {
  return {
    orders: orderReducer.orders,
    token: authReducer.Token,
  };
};

const mapDispatchToProps = {
  fetchOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
