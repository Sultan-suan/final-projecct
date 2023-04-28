import React from 'react';
import s from "../Cards/Cards.module.css";
import {CardPacks} from "../../../redux/table-reducer";

type PropsType = {
    cardPacks: any;
    columns: any;
    userId: string;
    setDeleteItem: (value: CardPacks | null) => void;
    setEditItem: (value: CardPacks | null) => void;
}

export const TableColumns = ({cardPacks, columns, userId, setDeleteItem, setEditItem}: PropsType) => {

    if (!cardPacks.length) return <tr style={{display: "flex", justifyContent: "center", alignItems: "center"}}><td>Ничего не найдено!</td></tr>
    return (
        <>
            {cardPacks.map((cardPack: any, index: number) => (
                    <tr key={index} className={s.card}>
                        {columns.map((c: any, index: number) => {
                            if (c.key === "actions" && cardPack.user_id === userId) {

                                return <td key={index}>
                                    <button onClick={() => setDeleteItem(cardPack)}
                                            style={{background: '#F1453D', color: '#FFFFFF'}}>
                                        Delete
                                    </button>

                                    <button onClick={() => setEditItem(cardPack)}
                                            style={{background: '#D7D8EF', color: '#21268F'}}>
                                        Edit
                                    </button>

                                    <button onClick={() => {
                                    }} style={{background: '#D7D8EF', color: '#21268F'}}>
                                        Learn
                                    </button>
                                </td>
                            }
                            return <td key={index}>{cardPack[c.key]}</td>
                        })}
                    </tr>
                )
            )}
        </>
    )
};

