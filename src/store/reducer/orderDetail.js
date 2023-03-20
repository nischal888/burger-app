import ActionTypes from "../actions/actionTypes";

const intialState = {
  orders: null,
};

const orderReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ORDER_SUCCEEDED: {
      const { order } = action;
      return {
        ...state.orders,
        orders: order,
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
