import axios from "axios"

const baseApiURL = "https://cors-anywhere.herokuapp.com/https://v2.api.forex/infos"

const api = axios.create({
    baseURL: baseApiURL
})

export default api