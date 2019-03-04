import {
  LAWYER_SRCH_FULFILLED,
  LAWYER_SRCH_REJECTED,
  ADD_LAWYER_FULFILLED,
  ADD_LAWYER_REJECTED
} from "../actions/actionTypes";
import { lawyer } from "./initState";

const lawyerReducer = (state = lawyer, action) => {
  switch (action.type) {
    case LAWYER_SRCH_FULFILLED:
      state.data = action.payload.data;
      return { ...state };

    case LAWYER_SRCH_REJECTED:
      return { state };

    case ADD_LAWYER_FULFILLED:
      return { state };

    case ADD_LAWYER_REJECTED:
      return { state };

    default:
      return state;
  }
};

export default lawyerReducer;
