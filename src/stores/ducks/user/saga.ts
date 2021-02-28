import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { UserService } from "../../../services/local/localServices";
import { getUserLoginFailure, getUserLoginSuccess, getUserRegisterFailure, getUserRegisterSuccess } from "./actions";

export function* userRegisterRequest(request: any) {

    const bodyRequest = request.payload
    try {
        const response: AxiosResponse = yield call(UserService.createNewAccount, bodyRequest)
        yield put(getUserRegisterSuccess(response))
        toast.success('Account created with success')
    } catch (err) {
        yield put(getUserRegisterFailure())
    }
}

export function* userLoginRequest(request: any) {

    const bodyRequest = request.payload
    try {
        const response: AxiosResponse = yield call(UserService.login, bodyRequest)
        yield put(getUserLoginSuccess(response))
        toast.success('Logged with success')
    } catch (err) {
        yield put(getUserLoginFailure())
    }
}