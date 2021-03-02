import axios from "axios"

// const baseApiURL = "https://v2.api.forex/infos"
const baseApiURL = "https://cors-anywhere.herokuapp.com/https://v2.api.forex/infos"
// Alternativa para erro CORS: https://cors-anywhere.herokuapp.com/ 
//          Colocar a URL antes da baseApiURL
//          Validar com -> https://cors-anywhere.herokuapp.com/corsdemo

// Segunda alternativa: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc

const api = axios.create({
    baseURL: baseApiURL
})

export default api