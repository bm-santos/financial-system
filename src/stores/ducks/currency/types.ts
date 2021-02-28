export enum CurrenciesTypes {
    GET_CURRENCIES_REQUEST = '@currency/GET_CURRENCIES_REQUEST',
    GET_CURRENCIES_SUCCESS = '@currency/GET_CURRENCIES_SUCCESS',
    GET_CURRENCIES_FAILURE = '@currency/GET_CURRENCIES_FAILURE',
    
    GET_CURRENCY_DETAILS_REQUEST = '@currency/GET_CURRENCY_DETAILS_REQUEST',
    GET_CURRENCY_DETAILS_SUCCESS = '@currency/GET_CURRENCY_DETAILS_SUCCESS',
    GET_CURRENCY_DETAILS_FAILURE = '@currency/GET_CURRENCY_DETAILS_FAILURE',
}

export interface CurrencyDetails {
    currency_code: string,
    name:string,
    symbol: string,
    country_code: string,
    country_name: string
}

export interface CurrenciesObject {
    currency: CurrencyDetails[]
}