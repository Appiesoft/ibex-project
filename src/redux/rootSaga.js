// src/redux/rootSaga.js

import { all } from 'redux-saga/effects';
import { authSaga } from './sagas';


export default function* rootSaga() {
  yield all([
    authSaga(),
    // Add other sagas here
  ]);
}
