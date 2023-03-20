import actionTypes from "./actionTypes";

export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS,
  };
};
export const initIngredientSuccedded = (ing) => {
  return {
    type: actionTypes.INIT_INGREDIENTS_SUCCEEDED,
    ingredients: ing,
  };
};

export const addIngredients = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredients = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};
export const hasFetched = () => {
  return {
    type: actionTypes.HAS_FETCHED,
  };
};
export const purchasedRedirect = () => {
  return {
    type: actionTypes.PURCHASED_REDIRECT,
  };
};
export const authRedirectMethod = () => {
  return {
    type: actionTypes.AUTH_REDIRECT_METHOD,
  };
};

export const resetIngredients = () => {
  return { type: actionTypes.RESET_INGREDIENTS };
};
