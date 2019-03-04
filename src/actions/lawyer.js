import { LAWYER_SRCH, serverIp } from "./actionTypes";
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
