import { takeLatest, call, put, select, fork } from "@redux-saga/core/effects"
import ActionTypes from "../Constant/ActionType";
import { loginSuccessful, loginFailed } from "../Action/authAction";
import ApiAuth from "../Service/auth";

export default function* sagaLogin(action) {
    try {
      const token = yield call(ApiAuth.Auth, action.payload);
      yield put(loginSuccessful(token.data));
    } catch (error) {
      yield put(loginFailed(error));
    }
}

export{
    sagaLogin
}