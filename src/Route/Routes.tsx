import React from "react";
import {Registration} from "../components/Registration/Registration";
import {Login} from "../components/Login/Login";
import {Posts} from "../components/Posts/Posts";
import {LOGIN_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE} from "../Utils/Utils";

export const privateRoutes = [
    {
        path: POSTS_ROUTE,
        element: <Posts/>
    },
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        element: <Registration/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Login/>
    },
]

