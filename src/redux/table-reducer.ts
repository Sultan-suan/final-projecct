import {Dispatch} from "redux";
import {PacksService} from "../api/api";
import {AppRootStateType} from "./store";

type ActionType = GetTableACType | RemoveTableACType;

type GetTableACType = {
    type: 'GET_TABLE',
    data: any
}

type RemoveTableACType = {
    type: 'REMOVE_TABLE',
    data: any
}

export type CardPacks = {
    _id: string,
    user_id: string,
    name: string,
    cardsCount: number,
    created: string,
    updated: string,
}

type StateType = {
    cardPacks: CardPacks[],
    cardPacksTotalCount: number,
    maxCardsCount: number,
    minCardsCount: number,
    page: number,
    pageCount: number,
}

const initialState = {
    cardPacks: [
        {
            _id: "",
            user_id: "",
            name: "",
            cardsCount: 0,
            created: "",
            updated: "",
        },
    ],
    cardPacksTotalCount: 0, // количество колод
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0, // выбранная страница
    pageCount: 0, // количество элементов на странице
}

export const tableReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'GET_TABLE':
            return {...state, ...action.data}
        case 'REMOVE_TABLE':
            return {...state, cardPacks: state.cardPacks.map(() => {})}
        default:
            return state;
    }
}

const getTableAC = (data: GetTableACType) => ({
    type: 'GET_TABLE', data: data
})

export const getTableTC = () => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState();
    try {
        const response = await PacksService.getTable(state.searchReducer)
        dispatch(getTableAC(response.data))
        console.log(response.data)
    } catch (e) {
        console.error('error:', e);
    }
}

export const addTableTC = (name: string) => async (dispatch: Dispatch) => {
    try {
        const response = await PacksService.addTable(name)
        const res = await PacksService.getTable()
        dispatch(getTableAC(res.data))
    } catch (e) {
        console.error('error:', e);
    }
}

export const removeTableTC = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await PacksService.removeTable(id)
        const res = await PacksService.getTable()
        const token = localStorage.getItem("token")
        dispatch(getTableAC(res.data))
        console.log("delete: ", response);
    } catch (e) {
        console.error('error', e)
    }
}

export const changeTableTC = (id: string, newName: any) => async (dispatch: Dispatch) => {
    try {
        const response = await PacksService.changeTable(id, newName)
        const res = await PacksService.getTable()
        dispatch(getTableAC(res.data))
    } catch (e) {
        console.log('error', e)
    }
}


