import { delay } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";
import * as action from "../store/actions";
import actionTypes from "../store/actions/actionTypes";
import axios from "axios";

function* authSaga({ payload, isSignUp }) {
  let urlLocation =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtGyADUlg2pfBRzmrCQX2a_nTtlmT5xg4";
  if (!isSignUp) {
    urlLocation =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCtGyADUlg2pfBRzmrCQX2a_nTtlmT5xg4 ";
  }
  try {
    const response = yield axios.post(urlLocation, payload);
    yield put(action.authenticateUserSucceeded(response.data));
    yield put(action.logoutExpiryInitiated(response.data.expiresIn));
  } catch (err) {
    const error = err.response.data;
    yield put(action.authenticateError(error));
  }
}

function* logInExpired({ expiryTime }) {
  yield delay(expiryTime * 660);
  yield put(action.logoutInitiateSucceeded());
}

function* logoutSaga() {
  yield put(action.logoutInitiateSucceeded());
}

export default [
  takeLatest(actionTypes.AUTHENTICATE, authSaga),
  takeLatest(actionTypes.LOGOUT_INITIATE, logoutSaga),
  takeLatest(actionTypes.LOGOUT_EXPIRY_INITIATED, logInExpired),
];
