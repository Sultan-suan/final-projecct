type SetSearchParamsACType = {
    type: 'SET_SEARCH_PARAMS',
    payload: SearchParamsType
}

type SearchParamsType = {
    packName?: string,
    min?: number,
    max?: number,
    sortPacks?: string,
    page?: number,
    pageCount?: number,
}

export const setSearchParamsAC = (payload: SearchParamsType): SetSearchParamsACType => ({
    type: 'SET_SEARCH_PARAMS', payload
})

type SearchReducerStateType = {
    searchParams: SearchParamsType
}

const initialSearchState: SearchReducerStateType = {
    searchParams: {}
}

export const searchReducer = (state: SearchReducerStateType = initialSearchState, action: SetSearchParamsACType): SearchReducerStateType => {
    switch (action.type) {
        case 'SET_SEARCH_PARAMS':
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};
