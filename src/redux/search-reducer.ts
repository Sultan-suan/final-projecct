type SetSearchParamsACType = {
    type: 'SET_SEARCH_PARAMS',
    payload: SearchParamsType
}

export type SearchParamsType = {
    packName: string,
    min: number,
    max: number,
    sortPacks?: string,
    page?: number,
    pageCount?: number,
}

export type SearchReducerStateType = {
    searchParams: SearchParamsType
}

const initialSearchState: SearchParamsType = {
    packName: "",
    min: 0,
    max: 10
}

export const searchReducer = (state: SearchParamsType = initialSearchState, action: SetSearchParamsACType): SearchParamsType => {
    switch (action.type) {
        case 'SET_SEARCH_PARAMS':
            return {
                ...state,
            };
        default:
            return state;
    }
};
