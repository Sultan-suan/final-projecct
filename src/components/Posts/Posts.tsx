import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

type PostsPropsType = {
    setIsAuth?: (value: boolean) => void
}

export const Posts = (props: PostsPropsType) => {
    const {email, isAdmin} = useSelector<AppRootStateType, any>((state) => state.auth)
    const auth = localStorage.getItem("isAuth")

    const compareDates = (date: any) => {
        const d1 = new Date().toISOString();
        const d2 = new Date(date).toISOString();
        if (d1 > d2) {
            return 1;
        } else {
            return 0;
        }
    }

    if (compareDates(+localStorage.getItem("tokenDeathTime")!)) {
        localStorage.setItem("isAuth", "false")
        // props.setIsAuth(false)
    }

    return (
        <div>
            <div>{`email: ${email}`}</div>
            <div>{`isAdmin: ${isAdmin}`}</div>
            {
                auth === "true"
                    ? <div>Авторизован</div>
                    : <div>Не авторизован</div>
            }
        </div>
    )
}

