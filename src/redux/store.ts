import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import {authReducer} from "./auth-reducer";
import {tableReducer} from "./table-reducer";
import {searchReducer} from "./search-reducer";
import {cardReducer} from "./card-reducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
    tableReducer: tableReducer,
    searchReducer: searchReducer,
    cardReducer: cardReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk)); // для того чтобы писать асинхронный код,
// таким образом мы очищаем компоненты и не пишем запросы внутри компоненты

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;