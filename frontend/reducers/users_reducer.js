import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const userReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({}, state);
      // debugger
      newState[action.user.id] = action.user;
      // debugger
      return newState;
    default:
      return state;
  }
};

export default userReducer;