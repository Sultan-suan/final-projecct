import {Dispatch} from "redux";
import {PacksService} from "../api/api";
import {AppRootStateType} from "./store";

type ActionType = GetTableACType | AddTableACType | RemoveTableACType;

type GetTableACType = {
    type: 'GET_TABLE',
    data: any
}

type AddTableACType = {
    type: 'ADD_TABLE',
    cardPack: CardPacks
}

type RemoveTableACType = {
    type: 'REMOVE_TABLE',
    data: any
}

type CardPacks = {
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
        case 'ADD_TABLE':
            return {...state, cardPacks: action.cardPack}
        case 'REMOVE_TABLE':
            return {...state, cardPacks: state.cardPacks.map(() => {})}
        default:
            return state;
    }
}

const getTableAC = (data: GetTableACType) => ({
    type: 'GET_TABLE', data: data
})

const addTableAC = (data: AddTableACType) => ({
    type: 'ADD_TABLE', data: data
})

const removeTableAC = (data: RemoveTableACType) => ({
    type: 'REMOVE_TABLE', data: data
})


export const getTableTC = () => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState();
    try {
        const response = await PacksService.getTable(state.searchReducer)
        dispatch(getTableAC(response.data))
    } catch (e) {
        console.log('error:', e);
    }
}

export const addTableTC = (name: string) => async (dispatch: Dispatch) => {
    try {
        const response = await PacksService.addTable(name)
        // const res = await PacksService.getTable()
        // dispatch(getTableAC(res.data))
    } catch (e) {
        console.log('error:', e);
    }
}

export const removeTableTC = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await PacksService.removeTable(id)
        dispatch(removeTableAC(response.data))
    } catch (e) {
        console.log('error', e)
    }
}


