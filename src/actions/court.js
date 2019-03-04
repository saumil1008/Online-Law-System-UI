import { COURT_SRCH, serverIp } from "./actionTypes";
import axios from "axios";

export const findCourt = search_key => {
  return dispatch => {
    dispatch({
      type: COURT_SRCH,
      payload: axios.get(serverIp + "/api/court/search?term=" + search_key, {
        headers: {
          "Content-Type": "application/json"
        }
      })
    });
  };
};
