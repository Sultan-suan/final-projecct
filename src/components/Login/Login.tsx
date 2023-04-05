import React, {useState} from 'react';
import s from './Login.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';
import {Checkbox, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {loginTC} from "../redux/Auth-reducer";
import {useFormik} from "formik";

const validate = (values: any) => {
    const errors: any = {};

    if (!values.email) {
        errors.email = 'Required';
    }

    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
};

export const Login = () => {
    const dispatch = useDispatch<any>()
    // const [error, setError] = useState('')

    const navigate = useNavigate();

    // const handleEmailChange = (event: any) => {
    //     setEmail(event.target.value);
    //     email && setError('');
    // };
    //
    // const handlePasswordChange = (event: any) => {
    //     setPassword(event.target.value);
    //     password && setError('');
    // };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        }, validate,
        onSubmit: (values: any) => {
            dispatch(loginTC(values.email, values.password, values.rememberMe, navigate))
        },
    });

    // const frens = () => {
    //     axios.post("https://cards-nya-back-production.up.railway.app/2.0/auth/login",
    //         {
    //             email,
    //             password
    //         }
    //     ).then((res) => {
    //         navigate('/posts')
    //         props.setIsAuth(true)
    //         localStorage.setItem("token", res.data.token)
    //         localStorage.setItem("isAuth", "true")
    //         props.setTokenDate(new Date(res.data.tokenDeathTime))
    //         localStorage.setItem("tokenDeathTime", res.data.tokenDeathTime)
    //         console.log(typeof res.data.tokenDeathTime)
    //     }).catch((e) => {
    //             setError(e.message)
    //             localStorage.setItem("isAuth", "false")
    //         }
    //     )
    // }

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <h1>IT-KARATE</h1>

            <h1>Login</h1>

            <TextField
                value={formik.values.email}
                onChange={formik.handleChange}
                margin="normal"
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
                value={formik.values.password}
                onChange={formik.handleChange}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />

            {/*<Checkbox onChange={formik.handleChange}/>*/}

            {/*{error && <div style={{color: "red"}}>Вы ввели некорректные данные</div>}*/}

            {/*<NavLink className={s.gap} to={"/posts"}>Forgot password</NavLink>*/}

            <button type="submit">
                Sign in
            </button>

            <NavLink to={"/registration"}>Don't have an account?</NavLink>

        </form>
    );
};
