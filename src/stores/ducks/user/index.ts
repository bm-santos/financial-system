import { Reducer } from "redux"
import { UserTypes } from "./types"

const INITIAL_STATE: any = {
    loadingRegister: false,
    isRegistered: false,
    registerStatusCode: 0,

    loadingLogin: false,
    isLogged: false,
    loginStatusCode: 0,
}

const userReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case UserTypes.GET_REGISTER_REQUEST:
            return {
                ...state,
                loadingRegister: true
            }
        case UserTypes.GET_REGISTER_SUCCESS:
            return {
                ...state,
                loadingRegister: false,
                isRegistered: true,
                registerStatusCode: action.payload.status
            }
        case UserTypes.GET_REGISTER_FAILURE:
            return {
                ...state,
            }
        case UserTypes.GET_LOGIN_REQUEST:
            localStorage.clear()
            return {
                ...state,
                loadingLogin: true,
            }
        case UserTypes.GET_LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.data.accessToken)
            return {
                ...state,
                loadingLogin: false,
                isLogged: true,
                loginStatusCode: action.payload.status
            }
        case UserTypes.GET_LOGIN_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default userReducer;