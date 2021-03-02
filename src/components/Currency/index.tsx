import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCurrenciesRequest, getCurrencyDetailsRequest } from "../../stores/ducks/currency/actions";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Redirect } from "react-router";
import { Toaster } from "react-hot-toast";

export default function CurrencyPage(): JSX.Element {

    const { currenciesList, selectedCurrencyDetails, failedGetList } = useSelector((state: any) => state.currencyReducer)
    const dispatch = useDispatch();
    const [selectedCurrency, setSelectedCurrency] = useState<string>('')

    const currencyObj = selectedCurrencyDetails[selectedCurrency]

    const [value, setValue] = useState<string | null>(currenciesList[0]);
    const [inputValue, setInputValue] = useState('');

    console.log('currenciesList', currenciesList)
    console.log('selectedCurrencyDetails', selectedCurrencyDetails)

    useEffect(() => {
        dispatch(getCurrenciesRequest())
        setInputValue('')
        setSelectedCurrency('')
    }, [])

    const currencySelected = (currency: any) => {
        console.log(currency.length)
        if (currency.length !== null) {
            dispatch(getCurrencyDetailsRequest(currency))
            setSelectedCurrency(currency)
            setInputValue(currency)
        }
    }

    return (
        <>
            {failedGetList && <Toaster />}
            {localStorage.getItem("token") === null && <Redirect to={"/login"} exact />}
            <h1>Currencies List</h1>
            <div>
                <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        currencySelected(newInputValue)
                    }}
                    id="controllable-states-demo"
                    options={currenciesList}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select a currency" variant="outlined" />}
                />
            </div>

            {currencyObj?.country_code !== undefined &&
                <div>
                    <h1>Currency details</h1>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" ><strong> </strong></TableCell>
                                <TableCell align="center" ><strong>Currency code</strong></TableCell>
                                <TableCell align="center" ><strong>Currency name</strong></TableCell>
                                <TableCell align="center" ><strong>Country name</strong></TableCell>
                                <TableCell align="center" ><strong>Currency symbol</strong></TableCell>
                                {(currencyObj?.using_countries[0].length !== 0) &&
                                    <TableCell><strong>Other Countries using</strong></TableCell>
                                }
                                <TableCell align="center" ><strong>Central Bank Website</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" >
                                    {currencyObj?.country_code !== undefined && <img
                                        src={`https://www.countryflags.io/${currencyObj?.country_code}/flat/32.png`}
                                        alt={currencyObj?.country_name} />}
                                </TableCell>
                                <TableCell align="center" >{currencyObj?.currency_code}</TableCell>
                                <TableCell align="center">{currencyObj?.name}</TableCell>
                                <TableCell align="center">{currencyObj?.country_name}</TableCell>
                                <TableCell align="center" >{currencyObj?.symbol}</TableCell>

                                {(currencyObj?.using_countries[0].length !== 0) &&
                                    <>
                                        <TableCell>
                                            {currencyObj?.using_countries?.map((country: any) => (
                                                <li>{country}</li>
                                            ))}
                                        </TableCell>
                                    </>
                                }
                                <TableCell align="center" >
                                    <a href={currencyObj?.central_bank} target="_blank" rel="noreferrer"><LanguageIcon /></a>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            }
        </>
    )
}