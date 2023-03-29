import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {Login} from "./components/Login/Login";
import {Registration} from "./components/Registration/Registration";
import {PackList} from "./components/PackList/PackList";

export function App() {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <div className="App">
            <Routes>
                <Route path="/login"
                       element={
                           <Login isAuth={isAuth}
                                  setIsAuth={setIsAuth}
                           />
                       }
                />
                <Route path="/registration"
                       element={
                           <Registration/>
                       }
                />
                <Route path="/posts"
                       element={
                           <PackList isAuth={isAuth}/>
                       }
                />
                <Route path="/*"
                       element={<Navigate to="/login"/>}
                />
            </Routes>
        </div>
    );
}

