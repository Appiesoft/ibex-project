import { SUBMIT_STUDENT_FORM, SUBMIT_STUDENT_FORM_FAILURE, SUBMIT_STUDENT_FORM_SUCCESS } from "./constantsStudentForm";

const initialState = {
    loading: false,
    success: false,
    error: null,
  };
  
  const studentFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_STUDENT_FORM:
        return {
          ...state,
          loading: true,
        };
      case SUBMIT_STUDENT_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
        };
      case SUBMIT_STUDENT_FORM_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default studentFormReducer;