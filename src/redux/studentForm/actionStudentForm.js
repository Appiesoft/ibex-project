import { SUBMIT_STUDENT_FORM, SUBMIT_STUDENT_FORM_FAILURE, SUBMIT_STUDENT_FORM_SUCCESS } from "./constantsStudentForm";

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