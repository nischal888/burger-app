import actionTypes from "./actionTypes";

export const authenticateUser = (payload, isSignUp) => {
  return {
    type: actionTypes.AUTHENTICATE,
    payload,
    isSignUp,
  };
};
export const authenticateUserSucceeded = (token) => {
  return {
    type: actionTypes.AUTHENTICATE_SUCCEEDED,
    token,
  };
};
export const authenticateError = ({ error }) => {
  return {
    type: actionTypes.AUTH_ERROR,
    error,
  };
};
export const logoutInitiate = () => {
  return {
    type: actionTypes.LOGOUT_INITIATE,
  };
};
export const logoutInitiateSucceeded = () => {
  return {
    type: actionTypes.LOGOUT_SUCCEEDED,
  };
};
export const logoutExpiryInitiated = (expiryTime) => {
  return {
    type: actionTypes.LOGOUT_EXPIRY_INITIATED,
    expiryTime,
  };
};
