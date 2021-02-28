import { action } from "typesafe-actions";
import { FinanceTypes } from "./types";

export const postFinanceRecordRequest = (request: any) => action(FinanceTypes.POST_FINANCE_RECORD_REQUEST, request)
export const postFinanceRecordSuccess = (response: any) => action(FinanceTypes.POST_FINANCE_RECORD_SUCCESS, response)
export const postFinanceRecordFailure = () => action(FinanceTypes.POST_FINANCE_RECORD_FAILURE)

export const getFinanceListRequest = () => action(FinanceTypes.GET_FINANCE_LIST_REQUEST)
export const getFinanceListSuccess = (financeList: any) => action(FinanceTypes.GET_FINANCE_LIST_SUCCESS, financeList)
export const getFinanceListFailure = () => action(FinanceTypes.GET_FINANCE_LIST_FAILURE)

export const deleteFinanceRecordRequest = (request: any) => action(FinanceTypes.DELETE_FINANCE_RECORD_REQUEST, request)
export const deleteFinanceRecordSuccess = (response: any) => action(FinanceTypes.DELETE_FINANCE_RECORD_SUCCESS, response)
export const deleteFinanceRecordFailure = () => action(FinanceTypes.DELETE_FINANCE_RECORD_FAILURE)
