import {  takeLatest, all } from "redux-saga/effects"
import { currenciesList, currencyDetails } from "./currency/saga"
import { CurrenciesTypes } from "./currency/types"
import { userLogin, userRegister } from "./user/saga"
import { UserTypes } from "./user/types"

export default function* rootSaga():any {
  return yield all ([
    takeLatest(CurrenciesTypes.GET_CURRENCIES_REQUEST, currenciesList),
    takeLatest(CurrenciesTypes.GET_CURRENCY_DETAILS_REQUEST, currencyDetails),
    
    takeLatest(UserTypes.GET_REGISTER_REQUEST, userRegister),
    takeLatest(UserTypes.GET_LOGIN_REQUEST, userLogin),
  ])
}
