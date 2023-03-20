import Actiontypes from "../actions/actionTypes";
const initialState = {
  postOrder: null,
  loading: false,
  purachased: false,
};

const postOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actiontypes.PURCHASED_REDIRECT: {
      return {
        ...state,
        purachased: false,
      };
    }
    case Actiontypes.POST_ORDER: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actiontypes.POST_ORDER_SUCCEEDED: {
      return {
        ...state,
        postOrder: action.payload,
        loading: false,
        purachased: true,
      };
    }
    case Actiontypes.HANDLE_SPINNER: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default postOrderReducer;
