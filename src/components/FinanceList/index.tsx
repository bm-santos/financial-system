import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListRequest, deleteRecordRequest } from "../../stores/ducks/finance/actions";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function FinanceList() {
    const { financeList } = useSelector((state: any) => state.financeReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListRequest())
    }, [])

    const deleteItem = (id: number) => {
        dispatch(deleteRecordRequest(id))
        dispatch(getListRequest())
    }

    return (
        <>
            <h1>Finance records</h1>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {financeList?.map((row: any) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell align="right">
                                <DeleteForeverIcon
                                    onClick={() => deleteItem(row.id)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}