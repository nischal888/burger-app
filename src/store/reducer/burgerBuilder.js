import ActionTypes from "../actions/actionTypes";

const INGREDIENTS_PRICE = {
  salad: 0.5,
  meat: 2,
  cheese: 1.5,
  bacon: 2,
};
const initialState = {
  ingredients: null,
  totalPrice: 4,
  loading: false,
  hasFetch: true,
  building: false,
  redirectPath: "/",
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_INGREDIENTS_SUCCEEDED: {
      return {
        ...state,
        ingredients: action.ingredients,
      };
    }
    case ActionTypes.ADD_INGREDIENT: {
      return {
        ...state,
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],
        building: true,
        redirectPath: "/checkout",
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
      };
    }
    case ActionTypes.REMOVE_INGREDIENT: {
      return {
        ...state,
        totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName],
        building: true,
        redirectPath: "/checkout",
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
      };
    }
    case ActionTypes.HAS_FETCHED: {
      return {
        ...state,
        hasFetch: false,
      };
    }
    case ActionTypes.AUTH_REDIRECT_METHOD: {
      return {
        ...state,
        building: false,
        redirectPath: "/",
      };
    }
    case ActionTypes.RESET_INGREDIENTS: {
      return {
        ...state,
        ingredients: null,
        totalPrice: 4,
      };
    }

    default:
      return state;
  }
};

export default ingredientsReducer;
