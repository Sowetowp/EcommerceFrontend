import * as types from "../Types"

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case types.USER_SIGN_UP_REQUEST:
            return {loading: true}
        case types.USER_SIGN_UP_SUCCESS:
            return {loading: false, userDetail:action.payload}
        case types.USER_SIGN_UP_FAIL:
            return {loading: false, error: action.payload}
        case types.USER_SIGN_UP_RESET:
            return {}
        default:
            return state
    }
}

export const userSignInReducer = (state ={}, action) => {
    switch(action.type){
        case types.USER_SIGN_IN_REQUEST:
            return {loading: true}
        case types.USER_SIGN_IN_SUCCESS:
            return {loading: false, userDetail:action.payload}
        case types.USER_SIGN_IN_FAIL:
            return {loading: false, error: action.payload}
        case types.USER_LOGOUT:
            return {}
        default:
            return state
    }
}