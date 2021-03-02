import api from "./api"

const myToken = localStorage.getItem("token")

export const UserService = {
    createNewAccount: (request: any[]) => api.post('/register', request),
    login: (request: any) => api.post('/login', request),
}

export const FinanceService = {

    postRecord: (request: any) => api.post('/finance', request, {
        headers: { Authorization: `Bearer ${myToken}` },
    }),

    getList: () => api.get('/finance', { headers: { Authorization: `Bearer ${myToken}` }, }),

    deleteRecord: (id: any) => api.delete(`/finance/${id}`, { headers: { Authorization: `Bearer ${myToken}` } }),
}
