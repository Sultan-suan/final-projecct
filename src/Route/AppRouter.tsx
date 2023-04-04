import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";
import {Login} from "../components/Login/Login";
import {AuthProvider} from "../AuthProvider";

export const AppRouter = () => {

    // const isAuth = false;
    const [isAuth, setIsAuth] = useState(false);

    // Вопрос. Как можно передать в компоненту состояние в данном случае?

    return (
        <AuthProvider>
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
        </AuthProvider>
    )
};

