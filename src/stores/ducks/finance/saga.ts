import { call, put } from "@redux-saga/core/effects"
import { AxiosResponse } from "axios"
import toast from "react-hot-toast"
import { FinanceService } from "../../../services/local/localServices"
import {
    deleteRecordFailure, deleteRecordSuccess, getListFailure,
    getListSuccess, postRecordFailure, postRecordSuccess
} from "./actions"
import { Finance } from "./types"

export function* postRecordSaga(request: any) {
    try {
        const response: AxiosResponse = yield call(FinanceService.postRecord, request.payload)
        yield put(postRecordSuccess(response))
        toast.success('New finance saved.')
    } catch (err) {
        yield put(postRecordFailure())
        toast.error('Finance not saved. Try again.')
    }
}

export function* getListSaga() {
    try {
        const response: Finance[] = yield call(FinanceService.getList)
        yield put(getListSuccess(response))
        toast.success('Record list updated.')
    } catch (err) {
        yield put(getListFailure())
        toast.error('The request has failed. The record list was not loaded.')
    }
}

export function* deleteRecordSaga(id: any) {
    try {
        const response: AxiosResponse = yield call(FinanceService.deleteRecord, id.payload)
        yield put(deleteRecordSuccess(response))
        toast.success('The record was deleted.')
    } catch (err) {
        yield put(deleteRecordFailure())
        toast.error('The request has failed. The record was not deleted.')
    }
}
