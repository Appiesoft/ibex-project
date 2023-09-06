import { put, takeLatest, all, call } from "redux-saga/effects";
import { DELETE_STUDENT, SUBMIT_STUDENT_FORM } from "./constantsStudentForm";
import { deleteStudentFormFailure, deleteStudentFormSuccess, submitStudentFormFailure, submitStudentFormSuccess } from "./actionStudentForm";
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
  
  function* deleteStudentFormSaga(action) {
    try {
      // Construct the URL for deleting a student based on the student ID
      const url = `${endpoints.students}/${action.payload.studentId}`;
  
      // Make a DELETE request to the student endpoint
      const deletedStudentData = yield call(api.delete, url);
  
      // If the API call is successful, dispatch the success action
      yield put(deleteStudentFormSuccess(deletedStudentData));
  
      // Optionally, you can do something with the deletedStudentData received from the API
      console.log("Deleted student data:", deletedStudentData);
    } catch (error) {
      // Handle API call failure and dispatch the failure action
      yield put(deleteStudentFormFailure(error));
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
  export function* deleteStudentSaga() {
    yield takeLatest(DELETE_STUDENT, deleteStudentFormSaga); // Use a DELETE_STUDENT constant for the action type
  }
  