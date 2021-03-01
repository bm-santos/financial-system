import { call, put } from "@redux-saga/core/effects"
import { AxiosResponse } from "axios"
import toast from "react-hot-toast"
import { FinanceService } from "../../../services/local/localServices"
import {
    deleteFinanceRecordFailure, deleteFinanceRecordSuccess, getFinanceListFailure,
    getFinanceListSuccess, postFinanceRecordFailure, postFinanceRecordSuccess
} from "./actions"

export function* financePostRequest(request: any) {
    try {
        const response: AxiosResponse = yield call(FinanceService.createRecord, request.payload)
        yield put(postFinanceRecordSuccess(response))
        toast.error('New finance saved.')
    } catch (err) {
        yield put(postFinanceRecordFailure())
        toast.error('Finance not saved. Try again.')
    }
}

export function* getFinanceListRequest() {
    try {
        const response: AxiosResponse = yield call(FinanceService.getList)
        yield put(getFinanceListSuccess(response))
        toast.error('Record list updated.')
    } catch (err) {
        yield put(getFinanceListFailure())
        toast.error('The request has failed. The record list was not loaded.')
    }
}

export function* delFinanceRecordRequest(id: any) {
    try {
        const response: AxiosResponse = yield call(FinanceService.deleteRecord, id.payload)
        yield put(deleteFinanceRecordSuccess(response))
        toast.error('The record was deleted.')
    } catch (err) {
        yield put(deleteFinanceRecordFailure())
        toast.error('The request has failed. The record was not deleted.')
    }
}
