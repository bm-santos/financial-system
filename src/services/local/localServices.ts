import api from "./api"

export const RegisterService = {
    createNewAccount: (request: any[]) => api.post('/register', request)
}

export const LoginService = {
    login: (request: any) => api.post('/login', request),
}

export const FinanceService = {
    newFinanceRecord: (request: any) => api.post('/finance', request),
    financeList: () => api.get('/finance'),
    deleteFinanceRecord: (id: number) => api.delete(`/finance/${id}`),
}

