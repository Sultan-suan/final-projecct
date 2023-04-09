import {AuthService} from "../../api/api";
import {Dispatch} from "redux";

type StateType = {
    email: string
    error: string,
    isAdmin: boolean;
    isAuth: boolean
    token: string
}

type RegistrationACType = {
    type: 'REGISTRATION';
    email: string;
}

type LoginACType = {
    type: 'LOGIN';
    email: string;
    isAdmin: boolean
    isAuth: boolean
    token: string
}

type ActionType = RegistrationACType | LoginACType

const initialState = {
    email: '',
    error: '',
    isAdmin: false,
    isAuth: false,
    token: ''
}

export const authReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'REGISTRATION':
            return {...state, email: action.email};
        case 'LOGIN':
            return {...state, email: action.email, isAdmin: action.isAdmin, isAuth: action.isAuth};
        default:
            return state;
    }
}


const registrationAC = (email: string) => ({
    type: 'REGISTRATION', email
})

const loginAC = (email: string, isAdmin: boolean, token: string, isAuth: boolean) => ({
    type: 'LOGIN', email, isAdmin, token, isAuth
})

export const registrationTC = (email: string, password: string, navigate: (path: string) => void) => async (dispatch: Dispatch) => {
    try {
        const {data, status} = await AuthService.registration(email, password)
        if (status === 201) {
            dispatch(registrationAC(data.email))
            navigate('/login')
        }
    } catch (e: any) {

    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, navigate: (path: string) => void) => async (dispatch: Dispatch) => {
    try {
        const response = await AuthService.login(email, password, rememberMe)
        localStorage.setItem("token", response.data.token)
        dispatch(loginAC(response.data.email, response.data.isAdmin, response.data.isAdmin, true))
        navigate('/posts')
    } catch (e: any) {

    }
}

export const authMeTC = () => async (dispatch: Dispatch) => {
    try {
        const token = localStorage.getItem("token")
        if (token) {
            const response = await AuthService.authMe(token)
            dispatch(loginAC(response.data.email, response.data.isAdmin, response.data.token, true))
            console.log('response:', response);
        }
    } catch (e) {
        console.log('error:', e);
    }
}