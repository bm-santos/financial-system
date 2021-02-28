import { Reducer } from "redux"
import { CurrenciesTypes } from "./types"

const INITIAL_STATE: any = {
    currenciesObject: {},
    currenciesList: [],
    selectedCurrencyDetails: [],
    selectedDetails: {
        central_bank: '',
        country_code: '',
    },
    loadingCurrency: false
}

const currencyReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    const cObject = state.currenciesObject
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
                //currenciesObject: action.payload,
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
            //console.log(Object.keys(action.payload.data))
            //console.log(action.payload.data.central_bank)
            console.log(action.payload.data)
            //console.log(action.payload)
            //console.log(sCurrencyDetails)
            return {
                ...state,
                selectedCurrencyDetails: action.payload.data
            }
        case CurrenciesTypes.GET_CURRENCY_DETAILS_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

export default currencyReducer