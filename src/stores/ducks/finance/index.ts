import { Reducer } from "redux"
import { FinanceTypes } from "./types"

const INITIAL_STATE: any = {
    isFinanceRecordPostLoaded: false,
    isFinanceRecordPosted: false,

    isGetfinanceListLoaded: false,
    financeList: [],

    isFinanceRecordDeleteLoadedd: false,
    isFinanceRecordDeleted: false,
}

const financeReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case FinanceTypes.POST_FINANCE_RECORD_REQUEST:
            return {
                ...state,
                isFinanceRecordPostLoaded: true,
            }
        case FinanceTypes.POST_FINANCE_RECORD_SUCCESS:
            return {
                ...state,
                isFinanceRecordPostLoaded: false,
                isFinanceRecordPosted: true,
            }
        case FinanceTypes.POST_FINANCE_RECORD_FAILURE:
            return {
                ...state,
            }
        case FinanceTypes.GET_FINANCE_LIST_REQUEST:
            return {
                ...state,
                isGetfinanceListLoaded: true,
            }
        case FinanceTypes.GET_FINANCE_LIST_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isGetfinanceListLoaded: false,
                financeList: action.payload.data,
            }
        case FinanceTypes.GET_FINANCE_LIST_FAILURE:
            return {
                ...state,
            }
        case FinanceTypes.DELETE_FINANCE_RECORD_REQUEST:
            return {
                ...state,
                isFinanceRecordDeleteLoadedd: true,
            }
        case FinanceTypes.DELETE_FINANCE_RECORD_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isFinanceRecordDeleteLoadedd: false,
                isFinanceRecordDeleted: true,
            }
        case FinanceTypes.DELETE_FINANCE_RECORD_FAILURE:
            return {
                ...state,
            }
        default: return state
    }
}

export default financeReducer