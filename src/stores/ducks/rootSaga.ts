import { takeLatest, all } from "redux-saga/effects"
import { currenciesListRequest, currencyDetailsRequest } from "./currency/saga"
import { CurrenciesTypes } from "./currency/types"
import { userLoginRequest, userRegisterRequest } from "./user/saga"
import { UserTypes } from "./user/types"
import { FinanceTypes } from "./finance/types"
import { } from "./finance/saga"
import { getFinanceListRequest, postFinanceRecordRequest, deleteFinanceRecordRequest } from "./finance/actions"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(CurrenciesTypes.GET_CURRENCIES_REQUEST, currenciesListRequest),
    takeLatest(CurrenciesTypes.GET_CURRENCY_DETAILS_REQUEST, currencyDetailsRequest),

    takeLatest(UserTypes.GET_REGISTER_REQUEST, userRegisterRequest),
    takeLatest(UserTypes.GET_LOGIN_REQUEST, userLoginRequest),

    takeLatest(FinanceTypes.POST_FINANCE_RECORD_REQUEST, postFinanceRecordRequest),
    takeLatest(FinanceTypes.GET_FINANCE_LIST_REQUEST, getFinanceListRequest),
    takeLatest(FinanceTypes.DELETE_FINANCE_RECORD_REQUEST, deleteFinanceRecordRequest),
  ])
}
