import React, {useEffect, useState} from 'react';
import s from './Login.module.css';
import {NavLink} from "react-router-dom";

type LoginPropsType = {
    isAuth: boolean
    setIsAuth: (e: any) => void;
}

export const Login = (props: LoginPropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const login = (e: any) => {
        e.preventDefault();
        props.setIsAuth(true)
        console.log(props.isAuth)
    }



    return (
        <form className={s.form} onSubmit={login}>
            <h1>Authorization</h1>

            <h1>Sign In</h1>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>

            <NavLink to={"/posts"}>Forgot password</NavLink>

            <button type="submit">Sign in</button>

            <NavLink to={"/registration"}>Don't have an account?</NavLink>

        </form>
    );
};
