import React from 'react';


type PackListPropsType = {
    isAuth: boolean
}

const PackList = (props: PackListPropsType) => {
    return <div>
        {
            props.isAuth
                ? <div>Авторизован</div>
                : <div>Не авторизован</div>
        }
    </div>
}

export default PackList;