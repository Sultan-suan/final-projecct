import React from "react";
import {Registration} from "../components/Registration/Registration";
import {Login} from "../components/Login/Login";
import {PackLists} from "../components/PackLists/PackLists";
import {CARD_ROUTE, CARDS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../Utils/Utils";
import {Card} from "../components/PackLists/Cards/Card/Card";

export const routes = [
    {
        path: REGISTRATION_ROUTE,
        element: <Registration/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Login/>
    },
    {
        path: CARDS_ROUTE,
        element: <PackLists/>
    },
    {
        path: CARD_ROUTE,
        element: <Card/>
    },
]

