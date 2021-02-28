import { action } from "typesafe-actions";
import { CurrenciesTypes } from "./types";

export const getCurrenciesRequest = () => action(CurrenciesTypes.GET_CURRENCIES_REQUEST)
export const getCurrenciesSuccess = (currencyList: any) => action(CurrenciesTypes.GET_CURRENCIES_SUCCESS, currencyList)
export const getCurrenciesFailure = () => action(CurrenciesTypes.GET_CURRENCIES_FAILURE)

export const getCurrencyDetailsRequest = (currency: any) => action(CurrenciesTypes.GET_CURRENCY_DETAILS_REQUEST, currency)
export const getCurrencyDetailsSuccess = (currencyDetails: any) => action(CurrenciesTypes.GET_CURRENCY_DETAILS_SUCCESS, currencyDetails)
export const getCurrencyDetailsFailure = () => action(CurrenciesTypes.GET_CURRENCY_DETAILS_FAILURE)