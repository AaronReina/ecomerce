import { combineReducers } from "redux";
import authReducers from "./authReducer";
import infoReducer from "./infoReducer";

const reducers = {
  auth: authReducers,
  info: infoReducer
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
