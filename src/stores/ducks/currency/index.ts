import { Reducer } from "redux"
import { CurrenciesTypes } from "./types"

const INITIAL_STATE: any = {
    currenciesObject: {},
    currenciesList: [],
    selectedCurrencyDetails: [],
    loadingCurrency: false
}

const currencyReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    const cList = state.currenciesList
    const sCurrencyDetails = state.selectedCurrencyDetails
    switch (action.type) {
        case CurrenciesTypes.GET_CURRENCIES_REQUEST:
            return {
                ...state,
                loadingCurrency: true
            }
        case CurrenciesTypes.GET_CURRENCIES_SUCCESS:
            cList.push(Object.keys(action.payload))
            return {
                ...state,
                currenciesList: cList[0],
                loadingCurrency: false
            }
        case CurrenciesTypes.GET_CURRENCIES_FAILURE:
            return {
                ...state,
                loadingCurrency: false
            }
        case CurrenciesTypes.GET_CURRENCY_DETAILS_REQUEST:
            return {
                ...state,
                selectedCurrencyDetails: []
            }
        case CurrenciesTypes.GET_CURRENCY_DETAILS_SUCCESS:
            sCurrencyDetails.push(Object.keys(action.payload.data))
            return {
                ...state,
                selectedCurrencyDetails: action.payload.data
            }
        case CurrenciesTypes.GET_CURRENCY_DETAILS_FAILURE:
            return state

        default:
            return state
    }
}

export default currencyReducer