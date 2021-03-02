import { takeLatest, all } from "redux-saga/effects"
import { currenciesListSaga, currencyDetailsSaga } from "./currency/saga"
import { CurrenciesTypes } from "./currency/types"
import { userLoginSaga, userRegisterSaga } from "./user/saga"
import { UserTypes } from "./user/types"
import { FinanceTypes } from "./finance/types"
import { deleteRecordSaga, getListSaga, postRecordSaga } from "./finance/saga"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(CurrenciesTypes.GET_CURRENCIES_REQUEST, currenciesListSaga),
    takeLatest(CurrenciesTypes.GET_CURRENCY_DETAILS_REQUEST, currencyDetailsSaga),

    takeLatest(UserTypes.GET_REGISTER_REQUEST, userRegisterSaga),
    takeLatest(UserTypes.GET_LOGIN_REQUEST, userLoginSaga),

    takeLatest(FinanceTypes.POST_RECORD_REQUEST, postRecordSaga),
    takeLatest(FinanceTypes.GET_LIST_REQUEST, getListSaga),
    takeLatest(FinanceTypes.DELETE_RECORD_REQUEST, deleteRecordSaga),
  ])
}
