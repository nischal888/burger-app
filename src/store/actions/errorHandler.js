import actionTypes from "./actionTypes";

export const errorHandler = (err) => {
  console.log(err);
  return {
    type: actionTypes.ERROR_OCCURED,
    err,
  };
};

export const resetError = () => {
  return {
    type: actionTypes.RESET_ERROR,
  };
};
