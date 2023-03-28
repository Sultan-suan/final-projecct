import React, {useState} from 'react';
import './App.css';
import {Login} from "./components/Login/Login";

function App() {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <div className="App">

            <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
            />
        </div>
    );
}

export default App;
