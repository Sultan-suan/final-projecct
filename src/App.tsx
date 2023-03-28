import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from "./components/Registration/Registration";
import {Login} from "./components/Login/Login";

function App() {
  return (
    <div className="App">
        <Login/>
      <Registration/>

    </div>
  );
}

export default App;
