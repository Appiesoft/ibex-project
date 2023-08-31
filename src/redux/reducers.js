// reducers.js
import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
 // Update this path

// Combine your authReducer with other reducers here
const rootReducer = combineReducers({
  auth: authReducer,
  // Other reducers...
});

export default rootReducer;
