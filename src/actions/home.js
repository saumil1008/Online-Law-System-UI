import { LAW_SRCH, serverIp, GET_LAWS } from "./actionTypes";
import axios from "axios";

export const findLaw = search_key => {
  return dispatch => {
    dispatch({
      type: LAW_SRCH,
      payload: axios.get(serverIp + "/api/law/search?term=" + search_key, {
        headers: {
          "Content-Type": "application/json"
        }
      })
    });
  };
};

export const getLaws = () => {
  return dispatch => {
    dispatch({
      type: GET_LAWS,
      payload: axios.get(serverIp + "/api/law", {
        headers: {
          "Content-Type": "application/json"
        }
      })
    });
  };
};
