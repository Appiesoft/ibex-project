import { put, takeLatest, all, call } from "redux-saga/effects";
import { SUBMIT_STUDENT_FORM } from "./constantsStudentForm";
import { submitStudentFormFailure, submitStudentFormSuccess } from "./actionStudentForm";
import { api, endpoints } from "../../api/apiStudentsForm";

function* submitStudentFormSaga(action) {
    try {
      // Make a POST request to the students endpoint
      const studentData = yield call(api.post, endpoints.students, action.payload);
  
      // If the API call is successful, dispatch the success action
      yield put(submitStudentFormSuccess());
  
      // Optionally, you can do something with the studentData received from the API
      console.log("Student data:", studentData);
    } catch (error) {
      // Handle API call failure and dispatch the failure action
      yield put(submitStudentFormFailure(error));
    }
  }
  
  // function* watchSubmitStudentForm() {
  //   yield takeLatest(SUBMIT_STUDENT_FORM, submitStudentFormSaga);
  // }
  
  // export default function* rootSaga() {
  //   yield all([watchSubmitStudentForm()]);
  // }
  export function* submitStudentSaga() {
    yield takeLatest(SUBMIT_STUDENT_FORM, submitStudentFormSaga);
  }
  