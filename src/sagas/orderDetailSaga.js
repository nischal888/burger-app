import { put, takeLatest } from "redux-saga/effects";
import axios from "../axios-order";
import * as action from "../store/actions/orderDetail";
import actionTypes from "../store/actions/actionTypes";
import * as GlobalAction from "../store/actions/errorHandler";

function* orderReducerSaga({ token }) {
  try {
    const response = yield axios.get(`/orders.json?auth=${token}`);
    const filterOrder = Object.keys(response.data).map((key) => {
      return { ...response.data[key], id: key };
    });
    yield put(action.fetchOrderSucceeded(filterOrder));
  } catch (err) {
    yield put(GlobalAction.errorHandler(err.response.data));
  }
}

export default [takeLatest(actionTypes.FETCH_ORDER, orderReducerSaga)];
