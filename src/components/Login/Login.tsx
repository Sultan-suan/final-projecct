import React, {useState} from 'react';
import s from './Login.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';
import {TextField} from "@mui/material";


type LoginPropsType = {
    isAuth: boolean
    setIsAuth: (e: any) => void;
    setTokenDate: (value: Date) => void
}


export const Login = (props: LoginPropsType) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();

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
    }

    const frens = () => {
        axios.post("https://cards-nya-back-production.up.railway.app/2.0/auth/login",
            {
                email,
                password
            }
        ).then((res) => {
            navigate('/posts')
            props.setIsAuth(true)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("isAuth", "true")
            props.setTokenDate(new Date(res.data.tokenDeathTime))
            localStorage.setItem("tokenDeathTime", res.data.tokenDeathTime)
            console.log(typeof res.data.tokenDeathTime)
        }).catch((e) => {
                setError(e.message)
                localStorage.setItem("isAuth", "false")
            }
        )
    }

    return (
        <form className={s.form} onSubmit={login}>

            <h1>IT-KARATE</h1>

            <h1>Sign In</h1>

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
