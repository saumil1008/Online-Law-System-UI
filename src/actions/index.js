import {
    LOGIN,
    ADD_USER,
    serverIp
} from "./actionTypes";
import axios from "axios";

export const doLogin = (uid, passkey) => {
    return dispatch => {
        dispatch({
            type: LOGIN,
            payload: axios.get( serverIp + "/api/user/login?username=" + uid + "&password=" + passkey, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        });
    };
};

export const addUser = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({
          type: ADD_USER,
          payload: axios
            .post(
              serverIp + "/api/user",
              JSON.stringify(data),
              {
                headers: {
                  "Content-Type": "application/json"
                }
              }
            )
        });
    };
};

export const doLogout = () => {
    return dispatch => {
        dispatch({ type: "LOGOUT" });
    };
};

export const setIsCreate = (flag) => {
    return dispatch => {
        dispatch({ type: "SET_IS_CREATE", payload: flag });
    };
};