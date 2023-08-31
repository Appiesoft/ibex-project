// store.js

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

import logger from 'redux-logger';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const configureStore = (initialState = {}) => {
    const composeEnhancers = composeWithDevTools({
        // Specify options if needed
    });

    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;

