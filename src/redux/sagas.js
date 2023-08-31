// src/redux/auth/authSaga.js

import { takeLatest, put } from 'redux-saga/effects';
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './auth/constants';


function* loginSaga(action) {
  try {
    // Simulate API call for login
    const { username, password } = action.payload;
    if (username === 'yourUsername' && password === 'yourPassword') {
      yield put({ type: AUTH_SUCCESS , payload: username });
    } else {
      yield put({ type: AUTH_FAILURE, payload: 'Invalid credentials' });
    }
  } catch (error) {
    yield put({ type: AUTH_FAILURE, payload: 'An error occurred' });
  }
}

export function* authSaga() {
  yield takeLatest(AUTH_REQUEST, loginSaga);
}
