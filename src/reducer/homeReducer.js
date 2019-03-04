import { LAW_SRCH_FULFILLED, LAW_SRCH_REJECTED, GET_LAWS_FULFILLED, GET_LAWS_REJECTED } from "../actions/actionTypes";
import { home } from "./initState";

const homeReducer = (state = home, action) => {
  switch (action.type) {
    case LAW_SRCH_FULFILLED:
      state.data = action.payload.data ;
      return { ...state };

    case LAW_SRCH_REJECTED:
      return { state };

    case GET_LAWS_FULFILLED:
      state.data = action.payload.data;
      return { ...state };

    case GET_LAWS_REJECTED:
      return { state };
    
    default:
      return state;
  }
};

export default homeReducer;
