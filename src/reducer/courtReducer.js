import {
  COURT_SRCH_FULFILLED,
  COURT_SRCH_REJECTED,
  ADD_COURT_FULFILLED,
  ADD_COURT_REJECTED,
  GET_COURTS_FULFILLED,
  GET_COURTS_REJECTED
} from "../actions/actionTypes";
import { court } from "./initState";

const courtReducer = (state = court, action) => {
  switch (action.type) {
    case COURT_SRCH_FULFILLED:
      state.data = action.payload.data;
      return { ...state };

    case COURT_SRCH_REJECTED:
      return { ...state };

    case ADD_COURT_FULFILLED:
      return { ...state };

    case ADD_COURT_REJECTED:
      return { ...state };

    case GET_COURTS_FULFILLED:
      state.allCourts = action.payload.data;
      return { ...state };

    case GET_COURTS_REJECTED:
      return { ...state };
    
    default:
      return state;
  }
};

export default courtReducer;
