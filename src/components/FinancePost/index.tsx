import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postFinanceRecordRequest } from "../../stores/ducks/finance/actions";

export default function FinancePost() {
    const inputFinanceRecord = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const [financeType, setFinanceType] = useState<string>('')

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFinanceType((event.target as HTMLInputElement).value);
    };

    const send = () => {
        const request = {
            type: financeType,
            amount: inputFinanceRecord?.current?.value
        }
        dispatch(postFinanceRecordRequest(request))
    }

    return (
        <>
            <h1>Save new finance</h1>
            <RadioGroup aria-label="finance" name="finance" value={financeType} onChange={handleRadioChange}>
                <FormControlLabel value="despesa" control={<Radio />} label="Spend" />
                <FormControlLabel value="recebimento" control={<Radio />} label="Income" />
            </RadioGroup>
            <TextField defaultValue="R$ " inputRef={inputFinanceRecord}>Teste</TextField>
            <Button

                variant="contained"
                color="primary"
                onClick={send}>Send</Button>
        </>
    )
}