import React from 'react';
import loader from '../../assets/Spin-1.5s-200px.gif'
import s from './Loader.module.css'

export const Loader = () => {
    return (
        <tr className={s.loader}>
            <td>
                <img src={loader} alt="loading..."/>
            </td>
        </tr>
    );
};
