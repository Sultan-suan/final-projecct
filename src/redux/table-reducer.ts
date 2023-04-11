
type StateType = {

}

const initialState = {
    cardPacks: [
        {
            _id: "5eb6cef840b7bf1cf0d8122d",
            user_id: "5eb543f6bea3ad21480f1ee7",
            name: "no Name",
            cardsCount: 25,
            created: "2020-05-09T15:40:40.339Z",
            updated: "2020-05-09T15:40:40.339Z",
        },
    ],
    cardPacksTotalCount: 14, // количество колод
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1, // выбранная страница
    pageCount: 4, // количество элементов на странице

}

type ActionType = {
    type: 'GET_TABLE'
}

export const tableReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'GET_TABLE':
            return {...state}
        default:
            return state;
    }
}