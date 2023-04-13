import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {authMeTC} from "../../redux/auth-reducer";
import s from './PackLists.module.css'
import {Header} from "./Header/Header";
import {Cards} from "./Cards/Cards";
import {getTableTC} from "../../redux/table-reducer";
import {useNavigate} from "react-router-dom";

export const PackLists = () => {

    const {email, isAdmin, isAuth} = useSelector<AppRootStateType, any>(state => state.authReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch<any>()

    useEffect(() => {
        if (!isAuth)
        dispatch(authMeTC(navigate))
    }, [])

    useEffect(() => {
        if (isAuth) {
            dispatch(getTableTC())
        }
    }, [isAuth])
    return (
        <div className={s.packList}>
            <Header/>
            <Cards />
        </div>
    )
}

