import axios from "axios";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFinanceListRequest } from "../../stores/ducks/finance/actions";

export default function FinanceList() {
    const { financeList } = useSelector((state: any) => state.financeReducer)

    const dispatch = useDispatch();

    const buscar = () => {
        return dispatch(getFinanceListRequest())
    }
    console.log(financeList)
    return (
        <>
            <h1>Finance List Section </h1>
            <button onClick={buscar}>Get finance list</button>
        </>
    )
}