import api from "./api"


export const CurrenciesService = {
    getCurrenciesList: () => api.get("/currencies.json?lang=pt"),
    getSelectedCurrencyDetails: (currency: any) => api.get(`/currency/${currency}.json?lang=pt`),
}