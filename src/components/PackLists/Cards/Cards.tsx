import React from 'react';
import s from './Cards.module.css'
import {MyButton} from "../../../UI/MyButton/MyButton";

export const Cards = () => {
    return (
        <div className={s.wrapper}>
            {/*этот див вынести в packlist*/}

            <div className={s.showPacksCards}>

            </div>
            <div className={s.packs}>
                <h1>Packs list</h1>
                <div>
                    <input className={s.input} placeholder='  Search'/>
                    <button className={s.button}>Add new pack</button>
                </div>
                <div>
                    <tr>Name,</tr><tr>Cards,</tr><tr>Last updated</tr>
                </div>
            </div>


        </div>
    );
};

// Name, Cards, Last updated, Created by, Actions
