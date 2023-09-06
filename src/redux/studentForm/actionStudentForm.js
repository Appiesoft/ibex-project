import { DELETE_STUDENT, DELETE_STUDENT_FAILURE, DELETE_STUDENT_SUCCESS, SUBMIT_STUDENT_FORM, SUBMIT_STUDENT_FORM_FAILURE, SUBMIT_STUDENT_FORM_SUCCESS } from "./constantsStudentForm";

export const submitStudentForm = (formData) => ({
    type: SUBMIT_STUDENT_FORM,
    payload: formData,
  });
  
  export const submitStudentFormSuccess = () => ({
    type: SUBMIT_STUDENT_FORM_SUCCESS,
  });
  
  export const submitStudentFormFailure = (error) => ({
    type: SUBMIT_STUDENT_FORM_FAILURE,
    payload: error,
  })


  // Action creator for the DELETE_STUDENT action
export const deleteStudentForm = (studentId) => ({
  type: DELETE_STUDENT,
  payload: { studentId },
});

// Action creator for successful deletion
export const deleteStudentFormSuccess = (deletedStudentData) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: deletedStudentData,
});

// Action creator for deletion failure
export const deleteStudentFormFailure = (error) => ({
  type: DELETE_STUDENT_FAILURE,
  payload: error,
});