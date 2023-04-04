import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";
import {Login} from "../components/Login/Login";


export const AppRouter = () => {

    const [isAuth, setIsAuth] = useState(false);

    return (
            <Routes>
                {isAuth && privateRoutes.map(({path, element}) =>
                    <Route key={path}
                           path={path}
                           element={element}
                        // render = {() => element}
                    />
                )}
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
                <Route path='/*' element=<Login/> />
            </Routes>
    )
};

