import React, {useState} from 'react';
import s from './Login.module.css';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';
import {TextField} from "@mui/material";

type LoginPropsType = {
    isAuth?: boolean
    setIsAuth?: (e: any) => void;
}

export const Login = (props: LoginPropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    // const location = useLocation()

    // const fromPage = location.state?.from?.pathname || '/';

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
        // props.setIsAuth(true)
    }

    const frens = () => {
        axios.post("https://cards-nya-back-production.up.railway.app/2.0/auth/login",
            {
                email,
                password
            })
            .then((res) => {
                navigate('/posts')
            })
            .catch((e) => {
                setError(e.message)
            })
    }


    return (
        <form className={s.form} onSubmit={login}>

            <h1>IT-KARATE</h1>

            <h1>Authorization</h1>

            <div>
                <TextField
                    id="standard-basic"
                    label="E-mail"
                    variant="standard"
                    value={email}
                    type="email"
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

            {error && <div style={{color: "red"}}>Вы ввели некорректные данные</div>}

            {/*<NavLink className={s.gap} to={"/posts"}>Forgot password</NavLink>*/}

            <button onClick={() => frens()} type="submit">Sign in</button>

            <NavLink to={"/registration"}>Don't have an account?</NavLink>

        </form>
    );
};
