import { DELETE_STUDENT, DELETE_STUDENT_FAILURE, DELETE_STUDENT_SUCCESS, SUBMIT_STUDENT_FORM, SUBMIT_STUDENT_FORM_FAILURE, SUBMIT_STUDENT_FORM_SUCCESS } from "./constantsStudentForm";

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
        case DELETE_STUDENT:
          return {
            ...state,
            loading: true,
            success: false, // Reset success status when starting a delete operation
            error: null, // Reset error when starting a delete operation
          };
        case DELETE_STUDENT_SUCCESS:
          return {
            ...state,
            loading: false,
            success: true,
            error: null,
          };
        case DELETE_STUDENT_FAILURE:
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