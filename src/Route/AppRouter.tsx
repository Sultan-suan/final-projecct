import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";
import {Login} from "../components/Login/Login";

export const AppRouter = () => {

    const isAuth = true;
    // const token = localStorage.getItem("token")
    // Все перенести в Апп

    return (
        <Routes>
            {isAuth && privateRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {/*<Route path='/*' element={<Login/> }/>*/}
        </Routes>
    )
};

