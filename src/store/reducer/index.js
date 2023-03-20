import { combineReducers } from "redux";
import ingredientReducer from "./burgerBuilder";
import orderReducer from "./orderDetail";
import postOrderReducer from "./postOrderReducer";
import authReducer from "./authReducer";
import errorHandlerReducer from "./errorHandlerReducer";

export default combineReducers({
  ingredientReducer,
  orderReducer,
  postOrderReducer,
  authReducer,
  errorHandlerReducer,
});
//export default ingredientReducer;
