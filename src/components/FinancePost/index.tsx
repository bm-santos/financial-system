import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setConstantValue } from "typescript";
import { postFinanceRecordRequest } from "../../stores/ducks/finance/actions";

export default function FinancePost() {
    const inputFinanceRecord = useRef<HTMLInputElement>(null)
    const inputSpendRadio = useRef<HTMLInputElement>(null)
    const inputIncomeRadio = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const { financeList } = useSelector((state: any) => state.financeReducer)
    const [financeType, setFinanceType] = useState<string>('')

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFinanceType((event.target as HTMLInputElement).value);
    };

    const send = () => {
        const request = {
            data: {
                type: financeType,
                amount: inputFinanceRecord?.current?.value
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        console.log(request)
        dispatch(postFinanceRecordRequest(request))
    }

    console.log(inputIncomeRadio?.current?.value)
    return (
        <>
            <h1>Finance Post Section </h1>
            <RadioGroup aria-label="finance" name="finance" value={financeType} onChange={handleRadioChange}>
                <FormControlLabel value="despesa" control={<Radio />} label="Spend" />
                <FormControlLabel value="recebimento" control={<Radio />} label="Income" />
            </RadioGroup>
            <input defaultValue="R$ " ref={inputFinanceRecord}></input>
            <button onClick={send}>Send</button>

        </>
    )
}