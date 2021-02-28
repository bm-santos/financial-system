import axios from "axios"
import api from "./api"

export const UserService = {
    createNewAccount: (request: any[]) => api.post('/register', request),
    login: (request: any) => api.post('/login', request),
}

const myToken = `Bearer ${localStorage.getItem("token")}`

export const FinanceService = {
    createRecord: (request: any) => api.post('/finance', request),

    getList: () => api.get('/finance', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),

    deleteRecord: (id: any) => api.delete(`/finance/${id}`),
}
