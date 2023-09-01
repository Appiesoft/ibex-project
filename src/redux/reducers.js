// reducers.js
import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import studentFormReducer from './studentForm/reducerStudentForm';
 // Update this path

// Combine your authReducer with other reducers here
const rootReducer = combineReducers({
  auth: authReducer,
  studentForm : studentFormReducer,
  // Other reducers...
});

export default rootReducer;
