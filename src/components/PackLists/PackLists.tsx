import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {authMeTC} from "../../redux/auth-reducer";

export const PackLists = () => {

    const {email, isAdmin, isAuth} = useSelector<AppRootStateType, any>(state => state.authReducer)

    const dispatch = useDispatch<any>()
    const token = localStorage.getItem("token")

    useEffect(() => {
        dispatch(authMeTC())
    }, [])

    return (
        <div>
            {
                token
                    ? (
                        <div>
                            <div>{`email: ${email}`}</div>
                            <div>{`isAdmin: ${isAdmin}`}</div>
                            <div>{`token: ${token}`}</div>
                            <div>{`isAuth: ${isAuth}`}</div>
                        </div>
                    )
                    : <p>No users to display</p>
                // <Navigate to="/login"/>
            }
        </div>
    )
}

