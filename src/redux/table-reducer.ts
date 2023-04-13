import {Dispatch} from "redux";
import {AuthService, PacksService} from "../api/api";

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

type ActionType = GetTableACType

type GetTableACType = {
    type: 'GET_TABLE',
    data: any
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
    maxCardsCount: 9,
    minCardsCount: 3,
    page: 0, // выбранная страница
    pageCount: 0, // количество элементов на странице
}

export const tableReducer = (state: any = initialState, action: ActionType) => {
    switch (action.type) {
        case 'GET_TABLE':
            return {...state}
        default:
            return state;
    }
}


const getTableAC = (data: any) => ({
    type: 'GET_TABLE', data: data
})


export const getTableTC = () => async (dispatch: Dispatch) => {
    try {
        const response = await PacksService.getTable()
        dispatch(getTableAC(response.data))
    } catch (e) {
        console.log('error:', e);
    }
}