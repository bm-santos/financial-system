import api from "./api"

export const UserService = {
    createNewAccount: (request: any[]) => api.post('/register', request),
    login: (request: any) => api.post('/login', request),
}

export const FinanceService = {
    createRecord: (request: any) => api.post('/finance', request, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),

    getList: () => { api.get('/finance', { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, }); },

    deleteRecord: (id: any) => api.delete(`/finance/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }),
}
