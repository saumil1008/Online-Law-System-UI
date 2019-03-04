import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import homeReducer from "./homeReducer";
import lawyerReducer from "./lawyerReducer";
import courtReducer from "./courtReducer";
import criminalReducer from "./criminalReducer";

export default combineReducers({
    profile: profileReducer,
    homeReducer: homeReducer,
    lawyerReducer: lawyerReducer,
    courtReducer: courtReducer,
    criminalReducer: criminalReducer
});