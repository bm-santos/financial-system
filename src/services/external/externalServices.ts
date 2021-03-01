import api from "./api"


export const CurrenciesService = {
    getCurrenciesList: () => api.get("/currencies.json?lang=en"),
    getSelectedCurrencyDetails: (currency: any) => api.get(`/currency/${currency}.json?lang=en`),
}