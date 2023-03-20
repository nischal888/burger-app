import { all } from "redux-saga/effects";
import burgerBuilderSaga from "./burgerBuilderSaga";
import orderReducerSaga from "./orderDetailSaga";
import postOrderSaga from "./postOrderSaga";
import authSaga from "./authSaga";

function* rootSaga() {
  yield all([...burgerBuilderSaga, ...orderReducerSaga, ...postOrderSaga,...authSaga]);
}

export default rootSaga;
