import { serverIp, GET_CRIMINAL } from "./actionTypes";
import axios from "axios";

export const getCriminal = () => {
    return dispatch => {
        dispatch({
            type: GET_CRIMINAL,
            payload: axios.get(serverIp + "/api/criminal", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        });
    };
};
