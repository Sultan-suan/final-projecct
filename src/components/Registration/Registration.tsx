import React, {useState} from 'react';
import s from './Registration.module.css';
import axios from 'axios';
import {TextField} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";

export const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    const fren = () => {
        axios.post("https://cards-nya-back-production.up.railway.app/2.0/auth/register",
            {
                email,
                password
            })
            .then((res) => {
                navigate('/posts')
            }). catch((e) => {
                setError(e.message)
            })

    }

    return (
            <form onSubmit={handleSubmit} className={s.form}>
                <h1>IT-KARATE</h1>

                <h1>Registration</h1>

                <div>
                    <TextField
                        type="email"
                        id="email"
                        label="E-mail"
                        variant="standard"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />

                </div>
                <button onClick={fren} type="submit" className={s.button}>
                    Register now
                </button>

                <NavLink to={"/login"}>Do you have an account?</NavLink>
            </form>
    );
};

