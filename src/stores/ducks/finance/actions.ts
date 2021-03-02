import { action } from "typesafe-actions";
import { FinanceTypes } from "./types";

export const postRecordRequest = (request: any) => action(FinanceTypes.POST_RECORD_REQUEST, request)
export const postRecordSuccess = (response: any) => action(FinanceTypes.POST_RECORD_SUCCESS, response)
export const postRecordFailure = () => action(FinanceTypes.POST_RECORD_FAILURE)

export const getListRequest = () => action(FinanceTypes.GET_LIST_REQUEST)
export const getListSuccess = (financeList: any) => action(FinanceTypes.GET_LIST_SUCCESS, financeList)
export const getListFailure = () => action(FinanceTypes.GET_LIST_FAILURE)

export const deleteRecordRequest = (request: any) => action(FinanceTypes.DELETE_RECORD_REQUEST, request)
export const deleteRecordSuccess = (response: any) => action(FinanceTypes.DELETE_RECORD_SUCCESS, response)
export const deleteRecordFailure = () => action(FinanceTypes.DELETE_RECORD_FAILURE)
