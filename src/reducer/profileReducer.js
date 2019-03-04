import {
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  ADD_USER_REJECTED,
  ADD_USER_FULFILLED
} from "../actions/actionTypes";
import { ProfileReducerInit } from "./initState";

const profileReducer = (state = ProfileReducerInit, action) => {
  switch (action.type) {
    case LOGIN_FULFILLED:
      state.isLoggedIn = true;
      return { ...state, ...action.payload.data };

    case LOGIN_REJECTED:
      state.isLoggedIn = false;
      return { ...state };

    case ADD_USER_FULFILLED:
          state.isCreate = false;
      return { ...state };

    case ADD_USER_REJECTED:
      return { ...state };

    case "LOGOUT":
      state.isLoggedIn = false;
      return { ...state };

    case "SET_IS_CREATE":
      state.isCreate = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default profileReducer;
