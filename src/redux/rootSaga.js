// src/redux/rootSaga.js

import { all } from 'redux-saga/effects';
import { authSaga } from './auth/authSaga';
import { submitStudentSaga } from './studentForm/sagaStudentForm';


export default function* rootSaga() {
  yield all([
    authSaga(),
    submitStudentSaga(),
    // Add other sagas here
  ]);
}
