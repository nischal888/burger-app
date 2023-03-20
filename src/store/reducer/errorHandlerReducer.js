import actionTypes from "../actions/actionTypes";

const initialState = {
  modelOpen: false,
  error: null,
};

const errorHandlerReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ERROR_OCCURED: {
      return {
        ...state,
        modelOpen: true,
        error: action.err,
      };
    }
    case actionTypes.RESET_ERROR: {
      return {
        ...state,
        modelOpen: false,
        error: null,
      };
    }
    default:
      return state;
  }
};
export default errorHandlerReducer;
