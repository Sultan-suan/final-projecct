import React, {useState} from 'react';
import s from './Login.module.css';
import {NavLink} from "react-router-dom";
import axios from 'axios';

type LoginPropsType = {
    isAuth: boolean
    setIsAuth: (e: any) => void;
}

export const Login = (props: LoginPropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
        email && setError('');
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        password && setError('');
    };

    const login = (e: any) => {
        e.preventDefault();
        props.setIsAuth(true)
    }

    const frens = () => {
        axios.post("https://cards-nya-back-production.up.railway.app/2.0/auth/login",
            {
                email,
                password
            }
        ).catch((e) => {
                setError(e.message)
            }
        )
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

            {error && <div style={{color: "red"}}>Вы ввели некорректные данные</div>}

            <NavLink to={"/posts"}>Forgot password</NavLink>

            <button onClick={() => frens()} type="submit">Sign in</button>

            <NavLink to={"/registration"}>Don't have an account?</NavLink>

        </form>
    );
};
