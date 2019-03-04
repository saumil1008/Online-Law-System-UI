import {
  COURT_SRCH_FULFILLED,
  COURT_SRCH_REJECTED
} from "../actions/actionTypes";
import { court } from "./initState";

const courtReducer = (state = court, action) => {
  switch (action.type) {
    case COURT_SRCH_FULFILLED:
      state.data = action.payload.data;
      return { ...state };

    case COURT_SRCH_REJECTED:
      return { state };

    default:
      return state;
  }
};

export default courtReducer;
