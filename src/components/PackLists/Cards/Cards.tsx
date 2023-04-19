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
    const [addPackModalActive, setAddPackModalActive] = useState(false)
    const [deleteModalActive, setDeleteModalActive] = useState(false)
    const [editModalActive, setEditModalActive] = useState(false)
    const [value, setValue] = useState('')

    const packs = useSelector<AppRootStateType, any>(state => state.tableReducer)
    const {userId} = useSelector<AppRootStateType, StateType>(state => state.authReducer)

    const dispatch = useDispatch<any>()

    const addNewPack = (name: any) => {
        dispatch(addTableTC(name))
        setAddPackModalActive(false)
    }

    const removeTable = (id: string) => {
        dispatch(removeTableTC(id))
        setDeleteModalActive(false)
    }

    const changeTable = (id: string, newName: any) => {
        dispatch(changeTableTC(id, newName))
        setEditModalActive(false)
    }

    const onChangeName = (e: any) => {
        setValue(e.target.value)
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
                    <input className={s.input} placeholder='Search'/>
                    {/*<button onClick={() => addNewPack(prompt())} className={s.button}>Add new pack</button>*/}
                    <button onClick={() => setAddPackModalActive(true)} className={s.button}>Add new pack</button>
                    <Modal active={addPackModalActive} setActive={setAddPackModalActive}>
                        <h3>Add new pack</h3>
                        <input onChange={onChangeName} type='text' placeholder='Name pack'/>
                        <div>
                            <MyButton onClick={() => addNewPack(value)}>Add</MyButton>
                            <MyButton onClick={() => setAddPackModalActive(false)}>Cancel</MyButton>
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
                                        <button onClick={() => setDeleteModalActive(true)} style={{background: '#F1453D', color: '#FFFFFF'}}>
                                            Delete
                                        </button>

                                        <Modal active={deleteModalActive} setActive={setDeleteModalActive}>
                                            <h3>Do you really want to remove {cardPack.name}?</h3>
                                            <div>
                                                <MyButton onClick={() => removeTable(cardPack._id)}>Delete</MyButton>
                                                <MyButton onClick={() => setDeleteModalActive(false)}>Cancel</MyButton>
                                            </div>
                                        </Modal>


                                        <button onClick={() => setEditModalActive(true)} style={{background: '#D7D8EF', color: '#21268F'}}>
                                            Edit
                                        </button>

                                        <Modal active={editModalActive} setActive={setEditModalActive}>
                                            <h3>Do you want to edit the name {cardPack.name}?</h3>
                                            <input onChange={onChangeName} type='text' placeholder='Name pack'/>
                                            <div>
                                                <MyButton onClick={() => changeTable(cardPack._id, value)}>Edit</MyButton>
                                                <MyButton onClick={() => setEditModalActive(false)}>Cancel</MyButton>
                                            </div>
                                        </Modal>

                                        <button onClick={() => {}} style={{background: '#D7D8EF', color: '#21268F'}}>
                                            Learn
                                        </button>
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


