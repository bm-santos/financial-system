import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../../components/DashboardSideBar";
import { getCurrenciesRequest, getCurrencyDetailsRequest } from "../../stores/ducks/currency/actions";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Redirect } from "react-router";

export default function CurrencyPage() {

    const { currenciesList, selectedCurrencyDetails, loadingCurrency } = useSelector((state: any) => state.currencyReducer)
    const dispatch = useDispatch();
    const [selectedCurrency, setSelectedCurrency] = useState<string>('')

    const currencyObj = selectedCurrencyDetails[selectedCurrency]

    const [value, setValue] = useState<string | null>(currenciesList[0]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        dispatch(getCurrenciesRequest())
    }, [localStorage.getItem("token")])

    const currencySelected = (currency: any) => {
        dispatch(getCurrencyDetailsRequest(currency))
        setSelectedCurrency(currency)
        setInputValue(currency)
    }

    return (
        <>
            {localStorage.getItem("token") === null && <Redirect to={"/login"} exact />}
            <h2>Currencies List</h2>
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
                    <h2>Currency details</h2>
                    <p>Currency code: {currencyObj?.currency_code}</p>
                    <p>Name: {currencyObj?.name}</p>
                    <p>Country name: {currencyObj?.country_name}</p>
                    {currencyObj?.country_code !== undefined &&
                        <img
                            src={`https://www.countryflags.io/${currencyObj?.country_code}/flat/32.png`}
                            alt={currencyObj?.country_name} />
                    }
                    <p>Symbol: {currencyObj?.symbol}</p>
                    <p>Central Bank Website: {currencyObj?.central_bank}</p>
                    {currencyObj?.using_countries[0].length !== 0 &&
                        <p>Using countries:
                {currencyObj?.using_countries?.map((country: any) => (
                            <p>{country}</p>
                        ))}</p>
                    }
                </div>
            }



            <div>
                {/* <Autocomplete
                    id="combo-box-demo"
                    options={currenciesList}
                    getOptionLabel={(option: any) => option}
                    style={{ width: 300 }}
                    renderInput={(params: any) => <TextField {...params} label="Combo box" variant="outlined" />}
                /> */}
                {currenciesList !== undefined && <p></p>
                    // currenciesList?.map((currency: any) => (
                    //     <p onClick={() => currencySelected(currency)}>{currency}</p>
                    // ))
                }
            </div>

        </>
    )
}