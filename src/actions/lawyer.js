import { LAWYER_SRCH, serverIp, ADD_LAWYER } from "./actionTypes";
import axios from "axios";

export const findLawyer = search_key => {
    return dispatch => {
        dispatch({
            type: LAWYER_SRCH,
            payload: axios.get(serverIp + "/api/lawyer/search?term=" + search_key, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        });
    };
};

export const addLawyer = data => {
    return dispatch => {
        dispatch({
            type: ADD_LAWYER,
            payload: axios.post(serverIp + "/api/lawyer", JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        });
    };
};