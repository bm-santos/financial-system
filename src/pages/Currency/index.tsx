import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../../components/Sidebar";
import { getCurrenciesRequest, getCurrencyDetailsRequest } from "../../stores/ducks/currency/actions";

export default function CurrencyPage() {

    const { currenciesList, selectedCurrencyDetails, loadingCurrency } = useSelector((state: any) => state.currencyReducer)
    const dispatch = useDispatch();
    const [selectedCurrency, setSelectedCurrency] = useState<string>('')

    useEffect(() => {
        dispatch(getCurrenciesRequest())
    }, [])

    const currencySelected = (currency: any) => {
        dispatch(getCurrencyDetailsRequest(currency))
        setSelectedCurrency(currency)
    }

    console.log(selectedCurrencyDetails[selectedCurrency])

    return (
        <>
            <h2>Currency details</h2>
            <Sidebar />
            <div>
                <p>Currency code: {selectedCurrencyDetails[selectedCurrency]?.central_code}</p>
                <img
                    src={`https://www.countryflags.io/${selectedCurrencyDetails[selectedCurrency]?.central_code}/flat/32.png`}
                    alt={selectedCurrencyDetails[selectedCurrency]?.country_name} />
                <p>Name: {selectedCurrencyDetails[selectedCurrency]?.name}</p>
                <p>Symbol: {selectedCurrencyDetails[selectedCurrency]?.symbol}</p>
                <p>Central Bank Website: {selectedCurrencyDetails[selectedCurrency]?.central_bank}</p>
                <p>Country name: {selectedCurrencyDetails[selectedCurrency]?.country_name}</p>
                <p>Using countries: {selectedCurrencyDetails[selectedCurrency]?.using_countries?.map((country: any) => (
                    <p>{country}</p>
                ))}</p>
            </div>

            <h2>Currencies List</h2>
            <div>
                {currenciesList?.map((currency: any) => (
                    <p onClick={() => currencySelected(currency)}>{currency}</p>
                ))}
            </div>

        </>
    )
}