import React, {ReactNode} from 'react';
import './Modal.css'

export const Modal = ({active, children}: {active: boolean, children: ReactNode}) => {
    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

