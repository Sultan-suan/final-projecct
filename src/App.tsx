import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {routes} from "./Route/Routes";
import {Card} from "./components/PackLists/Cards/Card/Card";

export function App() {

    return (
        <div className="App">
            <Routes>
                {routes.map(({path, element}, index) =>
                    <Route key={index} path={path} element={element}/>
                )}
            </Routes>
        </div>
    );
}

