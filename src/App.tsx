import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {Login} from "./components/Login/Login";
import {Registration} from "./components/Registration/Registration";
import {Posts} from "./components/Posts/Posts";

export function App() {

    const [isAuth, setIsAuth] = useState(false)
    const [tokenDate, setTokenDate] = useState<Date>(new Date())



    return (
        <div className="App">
            <Routes>
                <Route path="/login"
                       element={
                           <Login isAuth={isAuth}
                                  setIsAuth={setIsAuth}
                                  setTokenDate={setTokenDate}
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
                           <Posts setIsAuth={setIsAuth}/>
                       }
                />
                <Route path="/*"
                       element={<Navigate to="/login"/>}
                />
            </Routes>
        </div>
    );
}

