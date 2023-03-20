import actionTypes from "../actions/actionTypes";

const initialState = {
  Token: null,
  expiryDate: null,
  UserId: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.AUTHENTICATE_SUCCEEDED: {
      const { localId, expiresIn, idToken } = action.token;
      return {
        ...state,
        expiryDate: expiresIn,
        Token: idToken,
        UserId: localId,
        error: null,
        loading: false,
      };
    }
    case actionTypes.LOGOUT_SUCCEEDED: {
      return {
        ...state,
        Token: null,
        UserId: null,
      };
    }
    case actionTypes.AUTH_ERROR: {
      const { message } = action.error;
      return {
        ...state,
        error: message,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default authReducer;
