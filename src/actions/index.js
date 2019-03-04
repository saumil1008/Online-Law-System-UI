import {
    LOGIN,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
    FETCH_USER,
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

export const updateUser = (uid, name, emailId, passkey, role, active) => {
    let json = {
        name: name,
        emailId: emailId,
        passKey: passkey,
        role: role,
        active: active
    };
    return dispatch => {
        dispatch({
            type: UPDATE_USER,
            payload: axios
                .put(`http://localhost:8080/api/admin/${uid}`, JSON.stringify(json), {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.data)
        });
    };
};

export const fetchUser = () => {
    return dispatch => {
        dispatch({
            type: FETCH_USER,
            payload: axios.get(`http://localhost:8080/api/admin`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        });
    };
};

export const addUser = (name, emailId, passkey, role, active) => {
    let json = {
        name: name,
        emailId: emailId,
        passKey: passkey,
        role: role,
        active: active
    };
    return dispatch => {
        dispatch({
            type: ADD_USER,
            payload: axios
                .post(`http://localhost:8080/api/admin`, JSON.stringify(json), {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.data)
        });
    };
};

export const deleteUser = uid => {
    return dispatch => {
        dispatch({
            type: DELETE_USER,
            meta: uid,
            payload: axios.delete(`http://localhost:8080/api/admin/${uid}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
        });
    };
};

export const doLogout = () => {
    return dispatch => {
        dispatch({ type: "LOGOUT" });
    };
};