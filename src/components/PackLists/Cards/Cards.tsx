import React, {useState} from 'react';
import s from './Cards.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {addTableTC, changeTableTC, removeTableTC} from "../../../redux/table-reducer";
import Find from "../../../Finder/find";
import {StateType} from "../../../redux/auth-reducer";
import {Modal} from "../../Modal/Modal";
import {MyButton} from "../../../UI/MyButton/MyButton";

export const Cards = () => {
    const [modalActive, setModalActive] = useState(false)
    const packs = useSelector<AppRootStateType, any>(state => state.tableReducer)
    const {userId} = useSelector<AppRootStateType, StateType>(state => state.authReducer)

    const dispatch = useDispatch<any>()

    const addNewPack = (name: any) => {
        dispatch(addTableTC(name))
        setModalActive(false)
    }

    const removeTable = (id: string) => {
        dispatch(removeTableTC(id))
    }

    const changeTable = (id: string, newName: any) => {
        dispatch(changeTableTC(id, newName))
    }

    console.log("PACKS: ", packs)
    return (
        <div className={s.wrapper}>
            <div className={s.showPacksCards}>
                <Find/>
            </div>
            <div className={s.packs}>
                <h1>Packs list</h1>
                <div>
                    <input className={s.input} placeholder='  Search'/>
                    {/*<button onClick={() => addNewPack(prompt())} className={s.button}>Add new pack</button>*/}
                    <button onClick={() => setModalActive(true)} className={s.button}>Add new pack</button>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <h3>
                            Add new pack
                        </h3>
                        <div>
                            <MyButton onClick={() => setModalActive(false)}>Cancel</MyButton>
                            <MyButton onClick={() => addNewPack(prompt())}>Save</MyButton>
                        </div>
                    </Modal>
                </div>

                <table>
                    <thead>
                    <tr className={s.cards}>
                        <th>Name</th>
                        <th>Cards</th>
                        {/*<th>Last updated</th>*/}
                        <th>Created by</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {packs.cardPacks.map((cardPack: any, index: number) =>
                        <tr key={index} className={s.card}>
                            <td>{cardPack.name}</td>
                            <td>{cardPack.cardsCount}</td>
                            {/*<td>{cardPack.updated}</td>*/}
                            <td>{cardPack.user_name}</td>
                            <td>
                                {cardPack.user_id === userId
                                    ?
                                    <div>
                                        <button onClick={() => removeTable(cardPack._id)} style={{background: '#F1453D', color: '#FFFFFF'}}>Delete</button>
                                        <button onClick={() => changeTable(cardPack._id, prompt())} style={{background: '#D7D8EF', color: '#21268F'}}>Edit</button>
                                        <button onClick={() => {}} style={{background: '#D7D8EF', color: '#21268F'}}>Learn</button>
                                    </div>
                                    : <div></div>
                                }
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>


        </div>
    );
};


