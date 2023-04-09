import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {authMeTC} from "../redux/auth-reducer";
import {Navigate} from "react-router-dom";

export const Posts = () => {

    const {email, isAdmin} = useSelector<AppRootStateType, any>((state) => state.auth)

    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(authMeTC())
    }, [])

    return (
        <div>

                    <p>No users to display</p>



            {/*{*/}
            {/*    isAuth*/}
            {/*        ? (*/}
            {/*            <div>*/}
            {/*                <div>{`email: ${email}`}</div>*/}
            {/*                <div>{`isAdmin: ${isAdmin}`}</div>*/}
            {/*                <div>{`token: ${token}`}</div>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*        : <p>No users to display</p>*/}
            {/*    // <Navigate to="/login"/>*/}
            {/*}*/}
        </div>
    )
}

