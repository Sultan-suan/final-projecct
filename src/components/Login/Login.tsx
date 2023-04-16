import React from 'react';
import s from './Login.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {Checkbox, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {useFormik} from "formik";
import {MyButton} from "../../UI/MyButton/MyButton";

const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) errors.email = 'Required';
    if (!values.password) errors.password = 'Required';
    return errors;
};

export const Login = () => {
    const dispatch = useDispatch<any>()

    const navigate = useNavigate();

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

            {/*<div>*/}
            {/*    Remember Me*/}
            {/*    <Checkbox onChange={formik.handleChange}/>*/}
            {/*</div>*/}

            {/*{error && <div style={{color: "red"}}>Вы ввели некорректные данные</div>}*/}

            {/*<NavLink className={s.gap} to={"/posts"}>Forgot password</NavLink>*/}

            <MyButton type="submit">
                Sign in
            </MyButton>

            <NavLink to={"/registration"}>Don't have an account?</NavLink>

        </form>
    );
};
