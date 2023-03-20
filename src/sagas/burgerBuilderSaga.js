import { put, takeEvery } from "redux-saga/effects";
import * as action from "../store/actions/index";
import actionTypes from "../store/actions/actionTypes";
import axios from "../axios-order";
function* fetchIngredientsSaga() {
  try {
    const response = yield axios.get("/ingredients.json");
    yield put(action.initIngredientSuccedded(response.data));
  } catch {}
}
export default [takeEvery(actionTypes.INIT_INGREDIENTS, fetchIngredientsSaga)];
