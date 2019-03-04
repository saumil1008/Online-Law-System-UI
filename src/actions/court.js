import { COURT_SRCH, serverIp, ADD_COURT, GET_COURTS } from "./actionTypes";
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

export const getCourts = () => {
  return dispatch => {
    dispatch({
      type: GET_COURTS,
      payload: axios.get(serverIp + "/api/court", {
        headers: {
          "Content-Type": "application/json"
        }
      })
    });
  };
};

export const addCourt = data => {
  return dispatch => {
    dispatch({
      type: ADD_COURT,
      payload: axios.post(serverIp + "/api/court", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        }
      })
    });
  };
};