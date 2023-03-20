import actionTypes from "./actionTypes";

export const fetchOrder = (token) => {
  return {
    type: actionTypes.FETCH_ORDER,
    token,
  };
};

export const fetchOrderSucceeded = (order) => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCEEDED,
    order,
  };
};
