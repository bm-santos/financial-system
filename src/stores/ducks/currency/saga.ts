import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { CurrenciesService } from "../../../services/external/externalServices";
import { getCurrenciesFailure, getCurrenciesSuccess, getCurrencyDetailsFailure, getCurrencyDetailsSuccess } from "./actions";

export function* currenciesList() {
    try {
        const response: AxiosResponse = yield call(CurrenciesService.getCurrenciesList)
        yield put(getCurrenciesSuccess(response.data))
    } catch (err) {
        yield put(getCurrenciesFailure())
    }
}

export function* currencyDetails(currency: any) {
    try {
        const response: AxiosResponse = yield call(CurrenciesService.getSelectedCurrencyDetails, currency.payload)
        yield put(getCurrencyDetailsSuccess(response.data))
    } catch (err) {
        yield put(getCurrencyDetailsFailure())
    }
}