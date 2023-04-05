import {AuthService} from "../../api/api";
import {Dispatch} from "redux";

type StateType = {
    email: string
    error: string,
    isAdmin: boolean
}

type RegistrationACType = {
    type: 'REGISTRATION';
    email: string;
}

type LoginACType = {
    type: 'LOGIN';
    email: string;
    isAdmin: boolean
}

type ActionType = RegistrationACType | LoginACType

const initialState = {
    email: '',
    error: '',
    isAdmin: false
}

export const authReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'REGISTRATION':
            return {...state, email: action.email};
        case 'LOGIN':
            return {...state, email: action.email, isAdmin: action.isAdmin};
        default:
            return state;
    }
}


const registrationAC = (email: string) => ({
    type: 'REGISTRATION', email
})

const loginAC = (email: string, isAdmin: boolean) => ({
    type: 'LOGIN', email, isAdmin
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
        const {data, status} = await AuthService.login(email, password, rememberMe)
        if (status === 200) {
            navigate('/posts')
            dispatch(loginAC(data.email, data.isAdmin))
        }
    } catch (e: any) {

    }
}
