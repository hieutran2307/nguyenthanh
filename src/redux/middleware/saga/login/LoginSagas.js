import { POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_ERROR } from '../../../actions/login/LoginActions';


import { call, takeEvery, put } from 'redux-saga/effects';

import { postLoginApi } from "../../api/login/LoginApi"



function* signInFlow(action) {

  try {
    const response = yield postLoginApi(action.input)
    console.log('responseLoginSagas: ', response)
    if (response !== undefined) {
      if (response.statusCode ==="200" ) {
        yield put({ type: POST_LOGIN_SUCCESS, response })
      } else {
        const error = response.message;
        yield put({ type: POST_LOGIN_ERROR, error });
      }
    } else {
      const errorStr = "Lỗi không lấy được kết quả!";
      yield put({ type: POST_LOGIN_ERROR, error:errorStr });
    }

  } catch (error) {
    if (error === undefined) {
      const errorStr = "Lỗi không lấy được kết quả!";
      yield put({ type: POST_LOGIN_ERROR, error:errorStr });
    } else {
      yield put({ type: POST_LOGIN_ERROR, error });
    }
  }
}

export function* watchLogin() {
  yield takeEvery(POST_LOGIN, signInFlow);
}