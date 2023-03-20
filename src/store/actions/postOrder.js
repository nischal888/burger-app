import ActionTypes from "./actionTypes";

export const postOrder = (payload, token) => {
  return {
    type: ActionTypes.POST_ORDER,
    payload,
    token,
  };
};
export const postOrderSucceeded = (payload) => {
  return {
    type: ActionTypes.POST_ORDER_SUCCEEDED,
    payload,
  };
};

export const handleSpinner = () => {
  return {
    type: ActionTypes.HANDLE_SPINNER,
  };
};
