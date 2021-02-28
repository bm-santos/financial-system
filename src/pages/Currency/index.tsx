import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../../components/DashboardSideBar";
import { getCurrenciesRequest, getCurrencyDetailsRequest } from "../../stores/ducks/currency/actions";

export default function CurrencyPage() {

    const { currenciesList, selectedCurrencyDetails, loadingCurrency } = useSelector((state: any) => state.currencyReducer)
    const dispatch = useDispatch();
    const [selectedCurrency, setSelectedCurrency] = useState<string>('')

    const currencyObj = selectedCurrencyDetails[selectedCurrency]

    useEffect(() => {
        dispatch(getCurrenciesRequest())
    }, [])

    const currencySelected = (currency: any) => {
        dispatch(getCurrencyDetailsRequest(currency))
        setSelectedCurrency(currency)
    }

    return (
        <>

            <Sidebar />
            <h2>Currency details</h2>
            {currencyObj?.country_code !== undefined &&
                <div>
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


            <h2>Currencies List</h2>
            <div>
                {currenciesList !== undefined &&
                    currenciesList?.map((currency: any) => (
                        <p onClick={() => currencySelected(currency)}>{currency}</p>
                    ))}
            </div>

        </>
    )
}