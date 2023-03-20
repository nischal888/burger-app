import { takeEvery, put } from "redux-saga/effects";
import Actiontypes from "../store/actions/actionTypes";
import * as action from "../store/actions/";
import * as GlobalAction from "../store/actions/errorHandler";
import axios from "../axios-order";

function* postOrderSaga({ payload, token }) {
  try {
    const response = yield axios.post(`/orders.json?auth=${token}`, payload);
    yield put(action.postOrderSucceeded(response.data));
  } catch (err) {
    yield put(action.handleSpinner());
    yield put(GlobalAction.errorHandler(err.message));
  }
}

export default [takeEvery(Actiontypes.POST_ORDER, postOrderSaga)];
