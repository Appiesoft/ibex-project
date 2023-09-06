// reducers.js
import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import studentFormReducer from './studentForm/reducerStudentForm';
import { watchFormSubmission } from './stepsSlice/stepsSliceSaga';
 // Update this path

// Combine your authReducer with other reducers here
const rootReducer = combineReducers({
  auth: authReducer,
  studentForm : studentFormReducer,
  submitForm : watchFormSubmission,
  // Other reducers...
});

export default rootReducer;
