// src/redux/rootSaga.js

import { all } from 'redux-saga/effects';
import { authSaga } from './auth/authSaga';
import { deleteStudentSaga, submitStudentSaga } from './studentForm/sagaStudentForm';
import { watchFormSubmission } from './stepsSlice/stepsSliceSaga';


export default function* rootSaga() {
  yield all([
    authSaga(),
    submitStudentSaga(),
    deleteStudentSaga(),
    watchFormSubmission(),
    // Add other sagas here
  ]);
}
