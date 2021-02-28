export enum FinanceTypes {
    POST_FINANCE_RECORD_REQUEST = "@finance/POST_FINANCE_RECORD_REQUEST",
    POST_FINANCE_RECORD_SUCCESS = "@finance/POST_FINANCE_RECORD_SUCCESS",
    POST_FINANCE_RECORD_FAILURE = "@finance/POST_FINANCE_RECORD_FAILURE",

    GET_FINANCE_LIST_REQUEST = "@finance/GET_FINANCE_LIST_REQUEST",
    GET_FINANCE_LIST_SUCCESS = "@finance/GET_FINANCE_LIST_SUCCESS",
    GET_FINANCE_LIST_FAILURE = "@finance/GET_FINANCE_LIST_FAILURE",

    DELETE_FINANCE_RECORD_REQUEST = "@finance/DELETE_FINANCE_RECORD_REQUEST",
    DELETE_FINANCE_RECORD_SUCCESS = "@finance/DELETE_FINANCE_RECORD_SUCCESS",
    DELETE_FINANCE_RECORD_FAILURE = "@finance/DELETE_FINANCE_RECORD_FAILURE",
}

export interface Finance {
    id: number,
    type: string,
    amount: string
}