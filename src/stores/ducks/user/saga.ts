import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { LoginService, RegisterService } from "../../../services/local/localServices";
import { getUserLoginFailure, getUserLoginSuccess, getUserRegisterFailure, getUserRegisterSuccess } from "./actions";

export function* userRegister(request: any) {

    const bodyRequest = request.payload
    try {
        const response: AxiosResponse = yield call(RegisterService.createNewAccount, bodyRequest)
        yield put(getUserRegisterSuccess(response))
    } catch (err) {
        yield put(getUserRegisterFailure())
    }
}

export function* userLogin(request: any) {

    const bodyRequest = request.payload
    try {
        const response: AxiosResponse = yield call(LoginService.login, bodyRequest)
        yield put(getUserLoginSuccess(response))
    } catch (err) {
        yield put(getUserLoginFailure())
    }
}