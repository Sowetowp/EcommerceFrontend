import { combineReducers } from "redux";
import { userRegisterReducer, userSignInReducer } from "./Userreducer";

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userAuth: userSignInReducer
})
export {rootReducer}