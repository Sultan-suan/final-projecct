import React from 'react';
import s from './MyButton.module.css'

const MyButton = ({children}: any) => {
    return (
        <button className={s.button}>
            {children}
        </button>
    );
};

export default MyButton;