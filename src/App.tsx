import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Route/Routes";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";

export function App() {

    const {email, isAdmin, isAuth} = useSelector<AppRootStateType, any>((state) => state.auth)


    // const token = localStorage.getItem("token")

    return (
        <div className="App">
            <Routes>
                {isAuth && privateRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
                {/*<Route path='/*' element={<Login/> }/>*/}
            </Routes>
        </div>
    );
}

