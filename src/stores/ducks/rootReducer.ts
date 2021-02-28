import { combineReducers } from "redux"

import currencyReducer from './currency'
import userReducer from './user'

const createRootReducer = () => combineReducers({
    currencyReducer,
    userReducer,
})

export default createRootReducer
