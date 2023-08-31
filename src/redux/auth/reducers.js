// reducers/auth.js

import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT } from "./constants";



const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, error: null };
    case AUTH_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case AUTH_FAILURE:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
