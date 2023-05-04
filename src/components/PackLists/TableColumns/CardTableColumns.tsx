import React from 'react';
import s from "../Cards/Card/Card.module.css";
import {CardsType} from "../../../redux/card-reducer";
import {cardColumnsType} from "../Cards/Card/Card";

type CardTableColumnsType = {
    cards: CardsType[],
    cardColumns: cardColumnsType[],
    userId: string,
    setDeleteCard: (value: CardsType | null) => void,
    setEditCardHandler: (value: CardsType | null) => void,

}

export const CardTableColumns = ({cards, cardColumns, userId, setDeleteCard, setEditCardHandler} : CardTableColumnsType) => {
    return (
        <>
            {cards.map((item, index) => (
                <tr className={s.card} key={index}>
                    {cardColumns.map((card, index) => {
                        if (card.key === "actions" && item?.user_id === userId) {
                            return <td key={index}>
                                <button onClick={() => setDeleteCard(item)} className={s.orangeButton}>
                                    Delete
                                </button>

                                <button onClick={() => setEditCardHandler(item)} className={s.blueButton}>
                                    Edit
                                </button>
                            </td>
                        }

                        return <td key={index}>
                            {item?.[card.key as keyof typeof item]}
                        </td>
                    })}
                </tr>
            ))}

        </>
    );
};

