import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {routes} from "./Route/Routes";

export function App() {

    return (
        <div className="App">
            <Routes>
                {routes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
            </Routes>
        </div>
    );
}

