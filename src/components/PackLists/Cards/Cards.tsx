import React, {useEffect} from 'react';
import s from './Cards.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {addTableTC, getTableTC, removeTableTC} from "../../../redux/table-reducer";

export const Cards = () => {

    const Packs = useSelector<AppRootStateType, any>(state => state.tableReducer)

    const dispatch = useDispatch<any>()

    const addNewPack = (name: any) => {
        dispatch(addTableTC(name))
    }

    const removeTable = (id: string) => {
        dispatch(removeTableTC(id))
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
                    <button onClick={() => addNewPack(prompt())} className={s.button}>Add new pack</button>
                </div>

                <div className={s.cards}>
                    <div>Name</div>
                    <div>Cards</div>
                    {/*<div>Last updated</div>*/}
                    <div>Created by</div>
                    <div>Actions</div>
                </div>

                {Packs
                    ?
                    <div>
                        {Packs.cardPacks.map((cardPack: any, index: number) =>
                            <div
                                onClick={() => removeTable(cardPack.id)}
                                className={s.card}
                                key={index}
                            >
                                <div>{cardPack.name}</div>
                                <div>{cardPack.cardsCount}</div>
                                {/*<div>{cardPack.updated}</div>*/}
                                <div>{cardPack.user_name}</div>
                                <div>
                                    <button onClick={() => {}}>delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                    : ""
                }
            </div>


        </div>
    );
};


