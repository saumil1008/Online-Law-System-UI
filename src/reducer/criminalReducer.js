import {
    GET_CRIMINAL_FULFILLED,
    GET_CRIMINAL_REJECTED
} from "../actions/actionTypes";
import { criminal } from "./initState";

const criminalReducer = (state = criminal, action) => {
    switch (action.type) {
        case GET_CRIMINAL_FULFILLED:
            state.data = action.payload.data;
            return { ...state };

        case GET_CRIMINAL_REJECTED:
            return { state };

        default:
            return state;
    }
};

export default criminalReducer;
