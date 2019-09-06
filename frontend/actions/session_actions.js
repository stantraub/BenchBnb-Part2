import * as api_util from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERROR = "RECEIVE_ERROR";


const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

// do we need this export for receiveErrors?
const receiveErrors = (error) => ({
  type: RECEIVE_ERROR,
  error
});


export const signupNewUser = (user) => dispatch => (
  api_util.signup(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);

export const loginUser = (user) => dispatch => (
  api_util.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
);

export const logoutUser = () => dispatch => (
  api_util.logout()
  .then(() => dispatch(logoutCurrentUser()))
);

