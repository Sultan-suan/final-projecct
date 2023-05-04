import {Dispatch} from "redux";
import {CardService} from "../api/api";
import {setLoadingAC} from "./table-reducer";

type GetCardAT = {
    type: 'GET_CARD',
    data: CardsType[]
}

type AddCardAT = {
    type: 'ADD_CARD',
    newCard: CardsType
}

type RemoveCardAT = {
    type: 'REMOVE_CARD',
    cardId: string
}

type ChangeCardAT = {
    type: 'CHANGE_CARD',
    changeCard: CardsType
}

type ActionType = GetCardAT | AddCardAT | RemoveCardAT | ChangeCardAT

export type CardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    more_id: string
    comments: string
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
};

export type CardsStateType = {
    cards: CardsType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: number
}

const initialState = {
    cards: [
        {
            answer: '',
            question: '',
            cardsPack_id: '',
            grade: 0,
            rating: 0,
            shots: 0,
            more_id: '',
            comments: '',
            type: '',
            user_id: '',
            created: '',
            updated: '',
            __v: 0,
            _id: '',
        },
    ],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: 0,
}

export const cardReducer = (state: CardsStateType = initialState, action: ActionType): CardsStateType => {
    switch (action.type) {
        case 'GET_CARD':
            return {...state, cards: action.data}
        case 'ADD_CARD':
            return {...state, cards: [action.newCard, ...state.cards]}
        case 'REMOVE_CARD':
            return {...state, cards: state.cards.filter(c => c._id !== action.cardId)}
        case 'CHANGE_CARD':
            return {...state, cards: state.cards.map(card => card._id === action.changeCard._id ? action.changeCard : card)}
        default:
            return state;
    }
}

const getCardAC = (data: CardsType[]): GetCardAT => ({type: 'GET_CARD', data});
const addCardAC = (newCard: CardsType): AddCardAT  => ({type: 'ADD_CARD', newCard})
const removeCardAC = (cardId: string): RemoveCardAT => ({type: 'REMOVE_CARD', cardId})
const changeCardAC = (changeCard: CardsType): ChangeCardAT => ({type: 'CHANGE_CARD', changeCard})

export const getCardTC = (id?: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoadingAC(true))
        const response = await CardService.getCard(id)
        dispatch(getCardAC(response.data.cards))
    } catch (e) {
        console.error('error:', e);
    } finally {
        dispatch(setLoadingAC(false))
    }
}

export const addCardTC = (question: string, answer: string, cardsPackId?: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoadingAC(true))
        const response = await CardService.addCard(question, answer, cardsPackId)
        dispatch(addCardAC(response.data.newCard))
    } catch (e) {
        console.log('error:', e)
    } finally {
        dispatch(setLoadingAC(false))
    }
}

export const removeCardTC = (cardId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoadingAC(true))
        const response = await CardService.removeCard(cardId)
        dispatch(removeCardAC(cardId))
    } catch (e) {
        console.log('error:', e)
    } finally {
        setLoadingAC(false)
    }
}

export const changeCardTC = (cardId: string, question: string, answer: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoadingAC(true))
        const response = await CardService.changeCard(cardId, question, answer)
        dispatch(changeCardAC(response.data.updatedCard))
    } catch (e) {
        console.log('error:', e)
    } finally {
        dispatch(setLoadingAC(false))
    }
}

