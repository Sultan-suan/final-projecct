import {Dispatch} from "redux";
import {PacksService} from "../api/api";
import {AppRootStateType} from "./store";

type ActionType = GetTableAType | RemoveTableAType | AddPackAT;

type GetTableAType = {
    type: 'GET_TABLE',
    data: any
}

type RemoveTableAType = {
    type: 'REMOVE_TABLE',
    id: string
}

type AddPackAT = {
    type: "ADD_PACK",
    newPack: CardPacks
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

export const tableReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'GET_TABLE':
            return {...state, ...action.data}
        case 'REMOVE_TABLE':
            return {...state, cardPacks: state.cardPacks.filter((e) => e._id !== action.id)}
        case "ADD_PACK":
            return {...state, cardPacks: [action.newPack, ...state.cardPacks]}
        default:
            return state;
    }
}

const getTableAC = (data: GetTableAType) => ({type: 'GET_TABLE', data: data})
const removePackAC = (id: string) => ({type: "REMOVE_TABLE", id})
const addPackAC = (newPack: CardPacks) => ({type: "ADD_PACK", newPack})


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
        dispatch(addPackAC(response.data.newCardsPack))
    } catch (e) {
        console.error('error:', e);
    }
}

export const removePackTC = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await PacksService.removeTable(id)
        dispatch(removePackAC(id))
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


