export enum FinanceTypes {
    POST_RECORD_REQUEST = "@finance/POST_RECORD_REQUEST",
    POST_RECORD_SUCCESS = "@finance/POST_RECORD_SUCCESS",
    POST_RECORD_FAILURE = "@finance/POST_RECORD_FAILURE",

    GET_LIST_REQUEST = "@finance/GET_LIST_REQUEST",
    GET_LIST_SUCCESS = "@finance/GET_LIST_SUCCESS",
    GET_LIST_FAILURE = "@finance/GET_LIST_FAILURE",

    DELETE_RECORD_REQUEST = "@finance/DELETE_RECORD_REQUEST",
    DELETE_RECORD_SUCCESS = "@finance/DELETE_RECORD_SUCCESS",
    DELETE_RECORD_FAILURE = "@finance/DELETE_RECORD_FAILURE",
}

export interface Finance {
    id: number,
    type: string | undefined,
    amount: string
}