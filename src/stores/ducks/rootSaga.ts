import { takeLatest, all } from "redux-saga/effects"
import { currenciesListRequest, currencyDetailsRequest } from "./currency/saga"
import { CurrenciesTypes } from "./currency/types"
import { userLoginRequest, userRegisterRequest } from "./user/saga"
import { UserTypes } from "./user/types"
import { FinanceTypes } from "./finance/types"
import { deleteRecordSaga, getListSaga, postRecordSaga } from "./finance/saga"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(CurrenciesTypes.GET_CURRENCIES_REQUEST, currenciesListRequest),
    takeLatest(CurrenciesTypes.GET_CURRENCY_DETAILS_REQUEST, currencyDetailsRequest),

    takeLatest(UserTypes.GET_REGISTER_REQUEST, userRegisterRequest),
    takeLatest(UserTypes.GET_LOGIN_REQUEST, userLoginRequest),

    takeLatest(FinanceTypes.POST_RECORD_REQUEST, postRecordSaga),
    takeLatest(FinanceTypes.GET_LIST_REQUEST, getListSaga),
    takeLatest(FinanceTypes.DELETE_RECORD_REQUEST, deleteRecordSaga),
  ])
}
