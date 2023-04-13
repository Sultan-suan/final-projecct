import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {authMeTC} from "../../redux/auth-reducer";
import s from './PackLists.module.css'
import {Header} from "./Header/Header";
import {Cards} from "./Cards/Cards";

export const PackLists = () => {

    // const {email, isAdmin, isAuth} = useSelector<AppRootStateType, any>(state => state.authReducer)

    const dispatch = useDispatch<any>()

    const token = localStorage.getItem("token")

    useEffect(() => {
        dispatch(authMeTC())
    }, [])

    return (
        <div className={s.packList}>
            <Header/>
            {
                token
                    ? (
                        <Cards/>
                    )
                    : <p>No users to display</p>
            }
        </div>
    )
}

