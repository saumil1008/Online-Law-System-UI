import {
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    ADD_USER_REJECTED,
    UPDATE_USER_FULFILLED,
    UPDATE_USER_REJECTED,
    DELETE_USER_REJECTED,
    FETCH_USER_FULFILLED,
    FETCH_USER_REJECTED,
    ADD_USER_FULFILLED,
    DELETE_USER_FULFILLED
} from "../actions/actionTypes";
import { ProfileReducerInit } from "./initState";
import toastr from "react-toastr";

const profileReducer = (state = ProfileReducerInit, action) => {
    switch (action.type) {
        case LOGIN_FULFILLED:
            state.isLoggedIn = true;
            return { ...state, ...action.payload.data };

        case LOGIN_REJECTED:
            state.isLoggedIn = false;
            return { ...state };

        case ADD_USER_FULFILLED:
            toastr.success("yay!!!", "User Added Successfully");
            state.isUpdated = true;
            return { ...state };

        case ADD_USER_REJECTED:
            if (action.payload.response) {
                toastr.error(action.payload.response.data.message, "Add User Failed");
            } else {
                toastr.warning("Empty Server Response", "No Data Fetched");
            }

            return { ...state };

        case UPDATE_USER_FULFILLED:
            toastr.success("yay!!!", "User Updated Successfully");
            state.isUpdated = true;
            return { ...state };

        case UPDATE_USER_REJECTED:
            if (action.payload.response) {
                toastr.error(
                    action.payload.response.data.message,
                    "Update User Failed"
                );
            } else {
                toastr.warning("Empty Server Response", "No Data Fetched");
            }

            return { ...state };

        case DELETE_USER_FULFILLED:
            toastr.success("yay!!!", "User Deleted Successfully");
            state.isDeleted = true;
            state.user_item = [...state.user_item.filter((obj) => obj.id !== action.meta)];
            return { ...state }

        case DELETE_USER_REJECTED:
            if (action.payload.response) {
                toastr.error(
                    action.payload.response.data.message,
                    "Delete User Failed"
                );
            } else {
                toastr.warning("Empty Server Response", "No Data Fetched");
            }

            return { ...state };

        case FETCH_USER_FULFILLED:
            state.isUpdated = false;
            state.user_item = [...action.payload.data.data];
            return { ...state };

        case FETCH_USER_REJECTED:
            if (action.payload.response) {
                toastr.error(action.payload.response.data.message);
            } else {
                toastr.warning("Empty Server Response", "No Data Fetched");
            }
            return { ...state };

        case "LOGOUT":
            state.isLoggedIn = false;
            return { ...state };

        default:
            return state;
    }
};

export default profileReducer;
