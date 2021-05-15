import { combineReducers } from "redux";
import userReducer from "./user";
import authenticateReducer from "./authenticate";

const allReducers = combineReducers({
	user: userReducer,
	isAuthenticated: authenticateReducer,
});

export default allReducers;
