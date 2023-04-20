import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Route/Routes";

export function App() {

    return (
        <div className="App">
            <Routes>
                {privateRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
            </Routes>
        </div>
    );
}

