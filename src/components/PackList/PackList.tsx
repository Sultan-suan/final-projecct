import React from 'react';


type PackListPropsType = {
    isAuth: boolean
}

const PackList = (props: PackListPropsType) => {
    return <div>
        {
            props.isAuth
                ? <div>true</div>
                : <div>false</div>
        }
    </div>
}

export default PackList;