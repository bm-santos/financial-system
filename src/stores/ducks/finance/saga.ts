import { call, put } from "@redux-saga/core/effects"
import { AxiosResponse } from "axios"
import { FinanceService } from "../../../services/local/localServices"
import {
    deleteFinanceRecordFailure, deleteFinanceRecordSuccess, getFinanceListFailure,
    getFinanceListSuccess, postFinanceRecordFailure, postFinanceRecordSuccess
} from "./actions"

export function* financePostRequest(request: any) {
    const bodyRequest = request.payload
    console.log(bodyRequest)
    console.log(request.payload)
    try {
        const response: AxiosResponse = yield call(FinanceService.createRecord, bodyRequest)
        yield put(postFinanceRecordSuccess(response))
        console.log(response)
    } catch (err) {
        yield put(postFinanceRecordFailure())
    }
}

export function* getFinanceListRequest() {
    try {
        const response: AxiosResponse = yield call(FinanceService.getList)
        yield put(getFinanceListSuccess(response))
        console.log("sucesso ", response)
    } catch (err) {
        yield put(getFinanceListFailure())
    }
}

export function* delFinanceRecordRequest(id: number) {
    try {
        const response: AxiosResponse = yield call(FinanceService.deleteRecord, id)
        yield put(deleteFinanceRecordSuccess(response))
    } catch (err) {
        yield put(deleteFinanceRecordFailure())
    }
}
