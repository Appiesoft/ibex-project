// saga.js
import { put, call, takeLatest } from 'redux-saga/effects';
import { setCurrentStep, setCompleteStatus } from './stepsSlice';
import { submitStudentForm } from '../studentForm/actionStudentForm';

// Replace with your API call function


function* submitForm(action) {
  try {
    yield call(submitStudentForm, action.payload.formData);
    yield put(setCompleteStatus(true)); // Mark the step as complete
    yield put(setCurrentStep(action.payload.currentStep + 1)); // Proceed to the next step
  } catch (error) {
    // Handle error
  }
}

export function* watchFormSubmission() {
  yield takeLatest('SUBMIT_FORM', submitForm);
}
