// actions/auth.js

import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT } from "./constants";



export const authRequest = (username, password) => ({
  type:AUTH_REQUEST,
  payload: { username, password },
});

export const authSuccess = (user) => ({
  type:AUTH_SUCCESS,
  payload: user,
});

export const authFailure = (error) => ({
  type:AUTH_FAILURE,
  payload: error,
});

export const logout = () => ({
  type:LOGOUT,
});
