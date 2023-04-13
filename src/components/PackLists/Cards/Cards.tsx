import React, {useEffect} from 'react';
import s from './Cards.module.css'
import {MyButton} from "../../../UI/MyButton/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {getTableTC} from "../../../redux/table-reducer";

export const Cards = () => {

    const {} = useSelector<AppRootStateType, any>(state => state.tableReducer)

    const dispatch = useDispatch<any>()

    // useEffect(() => {
    //     dispatch(getTableTC())
    // }, [])

    const getPacks = () => {
        dispatch(getTableTC())
    }

    return (
        <div className={s.wrapper}>
            <div className={s.showPacksCards}>
                Show packs cards
            </div>

            <div className={s.packs}>
                <h1>Packs list</h1>
                <div>
                    <input className={s.input} placeholder='  Search'/>
                    <button className={s.button}>Add new pack</button>
                </div>
                <div>
                    Name: {}
                    <button onClick={getPacks}> getPacks</button>
                    {/*<div>{`email: ${email}`}</div>*/}
                    {/*<div>{`isAdmin: ${isAdmin}`}</div>*/}
                    {/*<div>{`isAuth: ${isAuth}`}</div>*/}
                </div>
            </div>

        </div>
    );
};


