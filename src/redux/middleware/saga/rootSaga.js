import { all } from 'redux-saga/effects';




// tao mới

import { watchLogin } from './login/LoginSagas';
export default function* rootSaga() {
    yield all([
        // chuc nang giao vien
        watchLogin(),
        
    ]);
}