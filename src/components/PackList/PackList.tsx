import React from 'react';

type PackListPropsType = {
    isAuth: boolean
}

export const PackList = (props: PackListPropsType) => {
    return <div>
        {
            props.isAuth
                ? <div>Авторизован</div>
                : <div>Не авторизован</div>
        }
    </div>
}

