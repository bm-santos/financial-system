import axios from "axios"

const baseApiURL = "https://v2.api.forex/infos"
// Alternative para erro CORS: https://cors-anywhere.herokuapp.com/
// Segunda alternativa: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc

const api = axios.create({
    baseURL: baseApiURL
})

export default api