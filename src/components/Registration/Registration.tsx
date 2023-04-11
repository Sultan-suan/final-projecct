import React from 'react';
import s from './Registration.module.css';
import {TextField} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {registrationTC} from "../../redux/auth-reducer";
import {MyButton} from "../../UI/MyButton/MyButton";

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

export const Registration = () => {
    const dispatch = useDispatch<any>()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        }, validate,
        // onSubmit: (values: any) => {
        //     dispatch(loginTC(values.email, values.password, values.rememberMe, navigate))
        // },
        onSubmit: (values: any) => {
            dispatch(registrationTC(values.email, values.password, navigate))
        }
    });


    return (
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <h1>IT-KARATE</h1>

                <h1>Registration</h1>

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

                <MyButton type="submit" className={s.button}>
                    Register now
                </MyButton>

                <NavLink to={"/login"}>Do you have an account?</NavLink>
            </form>
    );
};

