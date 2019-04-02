import { combineReducers } from "redux";
import { discographies, concerts, compositions, showModal } from "./reducers";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	discographies,
	concerts,
	compositions,
	showModal,
	form: formReducer
});