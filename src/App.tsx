import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Login} from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import PackList from "./components/PackList/PackList";

function App() {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <BrowserRouter>
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
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
