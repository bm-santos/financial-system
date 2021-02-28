import { Reducer } from "redux"
import { CurrenciesTypes } from "./types"

const INITIAL_STATE: any = {
    currenciesObject: {},
    currenciesList: [],
    selectedCurrencyDetails: [],
    loadingCurrency: false
}

const currencyReducer: Reducer = (state=INITIAL_STATE, action:any) => {
    const cObject = state.currenciesObject
    const cList = state.currenciesList
    const sCurrencyDetails = state.selectedCurrencyDetails
    switch (action.type) {
        case CurrenciesTypes.GET_CURRENCIES_REQUEST:
            return{
                ...state,
                loadingCurrency: true
            }
        case CurrenciesTypes.GET_CURRENCIES_SUCCESS:
            cList.push(Object.keys(action.payload))
            return{
                ...state,
                currenciesObject: action.payload,
                currenciesList: cList[0],
                loadingCurrency: false
            }
        case CurrenciesTypes.GET_CURRENCIES_FAILURE:
            return{
                ...state,
                loadingCurrency: false
            }
        case CurrenciesTypes.GET_CURRENCY_DETAILS_REQUEST:
            return{
                ...state
            }
        case CurrenciesTypes.GET_CURRENCY_DETAILS_SUCCESS:
            sCurrencyDetails.push(Object.keys(action.payload))
            console.log(action.payload.central_bank)
            return{
                ...state,
                selectedCurrencyDetails: sCurrencyDetails[0]
            }
        case CurrenciesTypes.GET_CURRENCY_DETAILS_FAILURE:
            return{
                ...state
            }
        default:
            return state
    }
}

export default currencyReducer