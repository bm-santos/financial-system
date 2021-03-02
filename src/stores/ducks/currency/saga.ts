import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { CurrenciesService } from "../../../services/external/externalServices";
import { getCurrenciesFailure, getCurrenciesSuccess, getCurrencyDetailsFailure, getCurrencyDetailsSuccess } from "./actions";

export function* currenciesListSaga() {
    try {
        const response: AxiosResponse = yield call(CurrenciesService.getCurrenciesList)
        yield put(getCurrenciesSuccess(response.data))
        toast.success('Currencies loaded with success!')
    } catch (err) {
        yield put(getCurrenciesFailure())
        toast.error('CORS error! Validate your browser: https://cors-anywhere.herokuapp.com/corsdemo')
    }
}

export function* currencyDetailsSaga(currency: any) {
    try {
        const response: AxiosResponse = yield call(CurrenciesService.getSelectedCurrencyDetails, currency.payload)
        yield put(getCurrencyDetailsSuccess(response))
        toast.success('The currency information was loaded with success!')
    } catch (err) {
        yield put(getCurrencyDetailsFailure())
        toast.error('CORS error! Validate your browser: https://cors-anywhere.herokuapp.com/corsdemo')
    }
}