import { action } from "typesafe-actions";
import { UserTypes } from "./types";

export const getUserRegisterRequest = (request: any) => action(UserTypes.GET_REGISTER_REQUEST, request)
export const getUserRegisterSuccess = (response: any) => action(UserTypes.GET_REGISTER_SUCCESS, response)
export const getUserRegisterFailure = () => action(UserTypes.GET_REGISTER_FAILURE)

export const getUserLoginRequest = (request: any) => action(UserTypes.GET_LOGIN_REQUEST, request)
export const getUserLoginSuccess = (response: any) => action(UserTypes.GET_LOGIN_SUCCESS, response)
export const getUserLoginFailure = () => action(UserTypes.GET_LOGIN_FAILURE)