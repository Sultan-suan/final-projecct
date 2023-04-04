import {AuthService} from "../../api/api";
import {Dispatch} from "redux";

type StateType = {
    email: string
    password: string
    error: string
}

type RegistrationACType = {
    type: 'REGISTRATION';
    email: string;
    password: string;
}
type LoginACType = {
    type: 'LOGIN';
    email: string;
    password: string;
}

type ActionType = RegistrationACType | LoginACType

const initialState = {
    email: '',
    password: '',
    error: ''
}

export const authReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'REGISTRATION':
           return {...state, email: action.email, password: action.password};
        case 'LOGIN':
           return {...state, email: action.email, password: action.password};
        default:
            return state;
    }
}


const registrationAC = (email: string, password: string) => ({
    type: 'REGISTRATION', email, password
})

const loginAC = (email: string, password: string) => ({
    type: 'LOGIN', email, password
})

const registrationTC = (email: string, password: string, navigate: (path: string) => void) => async (dispatch: Dispatch) => {
    try {
        const response = await AuthService.registration(email, password)
        if (response.status === 200) {
            navigate('/login')
            // dispatch(registrationAC(response.data.email, response.data.password))
        }
    } catch (e: any) {

    }
}
const loginTC = (email: string, password: string, navigate: (path: string) => void) => async (dispatch: Dispatch) => {
    try {
        const response = await AuthService.login(email, password)
        if (response.status === 200) {
            navigate('/posts')
            dispatch(loginAC(response.data.email, response.data.password))
        }
    } catch (e: any) {

    }
}
