export enum UserTypes {
    GET_REGISTER_REQUEST = '@user/GET_REGISTER_REQUEST',
    GET_REGISTER_SUCCESS = '@user/GET_REGISTER_SUCCESS',
    GET_REGISTER_FAILURE = '@user/GET_REGISTER_FAILURE',

    GET_LOGIN_REQUEST = '@user/GET_LOGIN_REQUEST',
    GET_LOGIN_SUCCESS = '@user/GET_LOGIN_SUCCESS',
    GET_LOGIN_FAILURE = '@user/GET_LOGIN_FAILURE',
}

export interface User {
    email: string,
    password: string
}
