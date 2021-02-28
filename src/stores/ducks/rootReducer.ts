import { combineReducers } from "redux"

import currencyReducer from './currency'
import userReducer from './user'
import financeReducer from './finance'

const createRootReducer = () => combineReducers({
    currencyReducer,
    userReducer,
    financeReducer,
})

export default createRootReducer
