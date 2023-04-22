import React from 'react';
import './Modal.css'

export const Modal = ({active, children}: any) => {
    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

